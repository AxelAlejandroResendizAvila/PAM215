import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet, Alert,ActivityIndicator,Platform, Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editarNombre, setEditarNombre] = useState('');
  const [editarUsuarioId, setEditarUsuarioId] = useState(null);
  const [fechaEdicion, setFechaEdicion] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [editarGuardando, setEditarGuardando] = useState(false);


  //SELECT - Cargar usuarios desde la BD
  const cargarUsuarios = useCallback( async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`); 
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  //Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    //Avisar cambios automáticos
    controller.addListener(cargarUsuarios);
    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  //INSERT - Agregar nuevo usuario
  const handleAgregar = async () => {
    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert(`Usuario Creado`, `${usuarioCreado.nombre}" guardado con ID ${usuarioCreado.id}`);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  }

  // Eliminar usuario (muestra confirmación y llama al controller)
  const handleEliminarUsuario = () => {
    Alert.alert(
      'Confirmar',
      '¿Eliminar este usuario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await controller.eliminarUsuario(editarUsuarioId);
              setModal(false);
              setEdit(false);
              setEditarUsuarioId(null);
              setEditarNombre('');
            } catch (e) {
              Alert.alert('Error', e.message);
            }
          }
        }
      ]
    );
  }

  // Guardar cambios del usuario editado
  const handleGuardarCambios = async () => {
    try {
      setEditarGuardando(true);
      await controller.actualizarUsuario(editarUsuarioId, editarNombre);
      setModal(false);
      setEdit(false);
      setEditarUsuarioId(null);
      setEditarNombre('');
      setEdit(false);
    } catch (e) {
      Alert.alert('Error', e.message);
    } finally {
      setEditarGuardando(false);
    }
  }

  const renderUsuario = ({ item, index }) => (
    <TouchableOpacity style={styles.userItem}
      onPress={() => {
        setEditarUsuarioId(item.id);
        setEditarNombre(item.nombre);
        setFechaEdicion(new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }));
        setModal(true);
      }}
    >
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}
        </Text>
      </View>
    </TouchableOpacity>

  );
  return (
    
    <View style={styles.container}>

      {/* Zona del encabezado */}

      <Text style={styles.title}> INSERT & SELECT</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona del INSERT */}

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}> Insertar Usuario</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity 
          style={[styles.button, guardando && styles.buttonDisabled]} 
          onPress={ handleAgregar }
          disabled={guardando} >

          <Text style={styles.buttonText}>
            {guardando ? ' Guardando...' : 'Agregar Usuario'}
          </Text>

        </TouchableOpacity>

      </View>



      {/* Zona del SELECT */}

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>

          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={ cargarUsuarios } >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
           ) : (
          <FlatList
            data={ usuarios }
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}


      </View>

      <Modal 
        style={styles.editarNombreModal}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
        animationType="fade"
        transparent={true}
      >
        
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {!edit ? (
              <View style={styles.modalTitleContainer}>
                
                 <Text style={styles.modalTitle}>{editarNombre}</Text>
                
                <TouchableOpacity style={styles.modalButtonEdit} 
                  onPress={()=>{setEdit(true)}}
                >
                  <Text style={styles.modalButtonText}>Editar</Text>
                </TouchableOpacity>
              </View>
            ) : (
                <View style={styles.modalTitleContainer}>
                  <TextInput
                      style={styles.modalInput}
                      placeholder="Escribe el nuevo nombre"
                      value={editarNombre}
                      onChangeText={setEditarNombre}
                    />
                  <TouchableOpacity 
                    style={styles.modalButtonCancelEdit} 
                    onPress={handleEliminarUsuario}
                  >
                    <Text style={styles.modalButtonText}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
            )}
            <Text style={styles.modalId}>ID: {editarUsuarioId}</Text>
            <Text style={styles.modalDate}>Fecha de creación: {fechaEdicion}</Text>

            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => {
                  setModal(false);
                  setEdit(false);
                  setEditarUsuarioId(null);
                  setEditarNombre('');
                }}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, editarGuardando && styles.buttonDisabled]}
                  onPress={handleGuardarCambios}
                  disabled={editarGuardando}
                >
                  <Text style={styles.modalButtonText}>{editarGuardando ? 'Guardando...' : 'Guardar'}</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>


      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
  mvcInfo: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  mvcTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  mvcText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
  editarNombreModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  modalTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonEdit: {
    backgroundColor: '#ff8400ff',
    padding: 8,
    borderRadius: 30,
    alignItems: 'center', 
    
  },
  modalButtonCancelEdit: {
    backgroundColor: '#ff0000ff',
    padding: 8,
    borderRadius: 30,
    alignItems: 'center', 
  },
  modalTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  modalId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  modalDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  modalInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

});
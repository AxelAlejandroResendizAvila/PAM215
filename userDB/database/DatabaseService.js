import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }

    async initialize() {
        if (Platform.OS === 'web') {
            console.log("Usando LocalStorage para web");
        } else {
            console.log("Usando SQLite para móvil");
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }
    async getAll() {
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC;');
        }
    }
    async add(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();

            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fechaCreacion: new Date().toISOString(),
            };

            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));

        } else {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios (nombre) VALUES (?);',
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fechaCreacion: new Date().toISOString(),
            };
        }
    }

    // Actualiza el nombre de un usuario por id
    async update(id, nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const idx = usuarios.findIndex(u => u.id === id);
            if (idx === -1) throw new Error('Usuario no encontrado');
            usuarios[idx].nombre = nombre;
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return usuarios[idx];
        } else {
            await this.db.runAsync(
                'UPDATE usuarios SET nombre = ? WHERE id = ?;',
                nombre,
                id
            );
            return { id, nombre, fechaCreacion: new Date().toISOString() };
        }
    }

    // Elimina un usuario por id
    async delete(id) {
        if (id === undefined || id === null) {
            throw new Error('ID requerido para eliminar usuario');
        }
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const idx = usuarios.findIndex(u => u.id === id);
            if (idx === -1) throw new Error('Usuario no encontrado');
            usuarios.splice(idx, 1);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return true;
        } else {
            if (!this.db) throw new Error('Base de datos no inicializada');
            // Use parameter array to bind values safely
            await this.db.runAsync('DELETE FROM usuarios WHERE id = ?;', [id]);
            return true;
        }
    }
}

export default new DatabaseService();
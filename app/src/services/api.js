import { apiUrl } from '../constants'
import axios from 'axios'

var request = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type':'application/json' }
})

export default class ItemService {

    // Obtiene una lista de todos los items
    static getAll() {
        return request.get('/item/');
    }

    // Obtiene item por id
    static getById(id) {
        return request.get(`/item/${id}/`);
    }

    // Crea un nuevo item
    static create(data) {
        return request.post('/item/', data);
    }

    // Edita la informacion de un item
    static update(id, data){
        return request.put(`/item/${id}/`, data);
    }

    // Elimina un item por id
    static delete(id) {
        return request.delete(`/item/${id}/`);
    }
}
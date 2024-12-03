import axios from 'axios';
import { defineStore } from 'pinia';

export const useArtStore = defineStore('art', {
  state: () => ({
    isAuthenticated: false,
    arts: [],
    collections: []
  }),
  actions: {
    async getArt(){
      try {
        const arts = await axios.get(`${process.env.API_URL}/obra`, {
            method: 'GET',
            mode: 'no-cors'
        })

        if(arts.data.length > 0) {
          this.arts = arts.data;
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
    async getCollections(){
      try {
        const collections = await axios.get(`${process.env.API_URL}/coleccion`, {
            method: 'GET',
            mode: 'no-cors'
        })
        if(collections.data.length > 0) {
          this.collections = collections.data;
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
    async addCollectionToUser(idUsuario,idCollection){
      try {
        const addCollectionToUser = {
          idUsuario: idUsuario,
          idCollection: idCollection
        }
        const response = await axios.patch(`${process.env.API_URL}/usuario/coleccion/`, addCollectionToUser, {
            method: 'PATCH',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addColeccion(nuevaColeccion){
      try {
        const nuevaCol = await axios.post(`${process.env.API_URL}/coleccion`, nuevaColeccion, {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
        })
        return nuevaCol
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addObraToCollectionFromUser(idUsuario,idCollection,idObra){
      try {
        console.log({
          "idUsuario": idUsuario,
          "idCollection": idCollection,
          "idObra": idObra
        })
        const result = await axios.patch(`${process.env.API_URL}/usuario/coleccion/obra/`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idUsuario": idUsuario,
              "idCollection": idCollection,
              "idObra": idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async modificarColeccion(idCollection, coleccionModificada) {
        try {
          const response = await axios.put(`${process.env.API_URL}/coleccion/${idCollection}`, coleccionModificada, {
            method: 'PUT',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
          })
          return 200
        } catch (error) {
          console.log("Error: " + error);
          return 500
        }
    },
    async crearObra(title, description, author, technique, image, culture, url, division){
      try {
        const obra = {
          title,
          description,
          author,
          technique,
          image,
          culture,
          url,
          division
        }
        const response = await axios.post(`${process.env.API_URL}/obra`, obra, {
          method: 'POST',
          headers: new Headers({ 'Content-type': 'application/json'}),
          mode: 'no-cors',
        })
        return 200
      } catch (error) {
        console.log("Error: " + error);
        return 500
      }
    },
    async modificarObra(idObra, obraModificada) {
      try {
        const response = await axios.put(`${process.env.API_URL}/obra/${idObra}`, obraModificada, {
          method: 'PUT',
          headers: new Headers({ 'Content-type': 'application/json'}),
          mode: 'no-cors',
        })
        return 200
      } catch (error) {
        console.log("Error: " + error);
        return 500
      }
    },
    async deleteCollectionFromUser(idUsuario,idCollection){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/coleccion/delete/${idUsuario}`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idCollection": idCollection
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async deleteObraFromCollection(idUsuario,idCollection,idObra){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/coleccion/${idUsuario}`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idCollection": idCollection,
              "idObra":idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
     
    },
    async deleteObraFromLikes(idUsuario,idObra){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/likes/${idUsuario}`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idObra":idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
     
    },
    async addObraToLikes(idUsuario, idObra) {
      try {

        const data = {
          idUsuario,
          idObra
        }

        const response = await axios.patch(`${process.env.API_URL}/usuario/likes`, data, {
            method: 'PATCH',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
        })
        return 200
      } catch (error) {
        console.log("Error: " + error);
        return 500
      }
    },
    async deleteCollection(idCollection){
      try {
        const collection = await axios.delete(`${process.env.API_URL}/coleccion/${idCollection}`, {
            method: 'POST',
            mode: 'no-cors',
            data: {
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async deleteObra(idObra){
      try {
        const obra = await axios.delete(`${process.env.API_URL}/obra/${idObra}`, {
            method: 'POST',
            mode: 'no-cors',
            data: {
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    }
  }
})

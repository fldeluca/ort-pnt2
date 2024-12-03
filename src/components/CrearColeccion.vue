<template>
    <div class="row justify-center align-center ">
        <div class="form-switch-container col-6 q-mt-md q-ma-md q-pa-md rounded-borders" :style="{ border: '1px solid #000' }">
          <h5>Crear colección</h5>
          <form @submit.prevent="addCollectionToUser" class="register-form q-gutter-md">
              <q-input outlined v-model="title" type="text" placeholder="Title" class="register-input" required />
              <div class="q-gutter-sm justify-center">
                  <q-btn label="Registrar" type="submit" color="primary"/>
              </div>
          </form>
        </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/authStore'
  import { useArtStore } from '../stores/artStore'
  
  
  export default {
      name: 'CrearColeccion',
      data() {
          return {
              title: '',
          }
      },
      methods: { 
          async addCollectionToUser() {
            try {
              const authStore = useAuthStore()
              const artStore = useArtStore()
              const nuevaColeccion = {
                title: this.title
              }
              const response = await artStore.addColeccion(nuevaColeccion)
              console.log(response.data);
              if (response && response.data && response.data._id) {
                const idColeccion = response.data._id
                console.log("Id de la colección: ", idColeccion);

                await artStore.addCollectionToUser(authStore.user._id, idColeccion)
                if (authStore.isAuthenticated) {
                  this.$router.push({name: 'Home'})
              }

              } else {
                console.log("error al obtener el id");
              }

              
            } catch (error) {
                console.log("Error: ", error);
            }
          }
      }
  }
  </script>
  <style>
      
  </style>
<template>
    <div class="row justify-center align-center ">
        <div class="form-switch-container col-6 q-mt-md q-ma-md q-pa-md rounded-borders" :style="{ border: '1px solid #000' }">
          <h3>Modificar colección</h3>
          <form @submit.prevent="modificarColeccion" class="register-form q-gutter-md">
              <input v-model="title" type="text" :placeholder="coleccion.title" class="register-input" required>
              <div class="q-gutter-sm justify-center">
                  <q-btn label="Modificar" type="submit" color="primary"/>
              </div>
          </form>
        </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/authStore'
  import { useArtStore } from '../stores/artStore'
  
  
  export default {
      name: 'ModificarColeccion',
      props: {
        coleccion: Object
      },
      data() {
          return {
              title: '',
          }
      },
      methods: { 
          async modificarColeccion() {
            try {
              const authStore = useAuthStore()
              const artStore = useArtStore()

              const coleccionModificada = {
                title: this.title
              }

              await artStore.modificarColeccion(this.coleccion._id, coleccionModificada)
              
              if (authStore.isAuthenticated) {
                  this.$router.push({name: 'Home'})
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
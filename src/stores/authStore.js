import { defineStore } from 'pinia';
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  actions: {
    async login(username,password){
      try {
        const response = await axios.get(`${process.env.API_URL}/usuario/${username}-${password}`, {
            method: 'GET',
            mode: 'no-cors'
        })
        if(response.data[0]) {
          this.isAuthenticated = true;
          this.user = response.data[0];
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('user', JSON.stringify(this.user))
        } else {
          return null
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
    logout(){
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('user')
    },
    async register(username, name, lastname, mail, password){
      if(username && name && lastname && mail && password){
        try {
          const user = {
              username,
              name,
              lastname,
              mail,
              password,
          }

          console.log('usuario : ', user);

          const response = await axios.post(process.env.API_URL+'/usuario', user, {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors'
          })
          console.log('RESPONSE: ', response);
          //const data = await response.data; 

          this.isAuthenticated = true
          this.user = response.data
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('user', JSON.stringify(user))
        } catch(err){
          console.error('Error -'+err)
        }
      } else {
        alert('Completar todos los datos')
      }
    },
    checkAuth(){
      this.isAuthenticated = localStorage.getItem('isAuthenticated' === true)
      if (this.isAuthenticated){
        this.user = JSON.parse(localStorage.getItem('user'))
      }
    }
  }
})

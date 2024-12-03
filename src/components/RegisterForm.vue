<template>
    <div class="form-switch-container justify-center align-center">
        <h4>Registro</h4>
        <form @submit.prevent="register" class="register-form q-gutter-md">
            <q-input outlined v-model="username" type="text" placeholder="Username" class="register-input" />
            <q-input outlined v-model="name" type="text" placeholder="Name" class="register-input" />
            <q-input outlined v-model="lastname" type="text" placeholder="Lastname" class="register-input" />
            <q-input outlined v-model="mail" type="text" placeholder="Email" class="register-input" />
            <q-input outlined v-model="password" type="text" placeholder="Password" class="register-input" />
        
            <div class="q-gutter-sm justify-center">
                <q-btn class="full-width" label="Registrar" type="submit" color="primary"/>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'

export default {
    name:'RegisterForm',
    data(){
        return{
            username: '',
            name: '',
            lastname: '',
            mail: '',
            password: ''
        }
    },
    methods:{
        async register() {
            const authStore = useAuthStore();
            await authStore.register(this.username, this.name, this.lastname, this.mail, this.password);
            if (authStore.isAuthenticated){
                this.$router.push({ name: 'Home'})
            }
        }
    }
    
}
</script>

<style>

</style>
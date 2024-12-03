<template>
    <div class="row justify-center align-center ">
        <div class="form-switch-container col-6 q-mt-md q-ma-md q-pa-md rounded-borders" :style="{ border: '1px solid #000' }">
            <h4>Crear Obra</h4>
            <form @submit.prevent="crearObra" class="register-form q-gutter-md">
                <q-input outlined v-model="title" type="text" placeholder="Title" class="register-input" required />
                <q-input outlined v-model="description" type="text" placeholder="Description" class="register-input" required />
                <q-input outlined v-model="author" type="text" placeholder="Author" class="register-input" required />
                <q-input outlined v-model="technique" type="text" placeholder="Technique" class="register-input" required />
                <q-input outlined v-model="image" type="text" placeholder="Image" class="register-input" required />
                <q-input outlined v-model="culture" type="text" placeholder="Culture" class="register-input" required />
                <q-input outlined v-model="url" type="text" placeholder="Url" class="register-input" required />
                <q-input outlined v-model="division" type="text" placeholder="Division" class="register-input" required />
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
    name: 'CrearObra',
    data() {
        return {
            title: '',
            description: '',
            author: '',
            technique: '',
            image: '',
            culture: '',
            url: '',
            division: ''
        }
    },
    methods: { 
        async crearObra() {
            const authStore = useAuthStore()
            const artStore = useArtStore()
            console.log(this.title);
            await artStore.crearObra(this.title, this.description, this.author, this.technique, this.image, this.culture, this.url, this.division)
            if (authStore.isAuthenticated) {
                this.$router.push({name: 'Home'})
            }
        }
    }
}
</script>
<style>
    
</style>
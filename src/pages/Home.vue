<template>
    <div class="row justify-center align-center">
        <div v-for="art in arts" :key="art._id">
            <div class="col-4 q-ma-sm">
                <CardObra :art='art'/>
            </div>
        </div>
        
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
                v-model="fabLeft"
                vertical-actions-align="right"
                color="primary"
                glossy
                icon="keyboard_arrow_up"
                direction="up"
            >
                <q-fab-action label-position="right" color="secondary" @click="crearObra" label="Crear Obra" />
                <q-fab-action label-position="right" color="purple" @click="crearColeccion" label="Crear Colección" />
            </q-fab>
        </q-page-sticky>
    </div>
</template>

<script>
import CardObra from 'src/components/CardObra.vue';
import { useArtStore } from '../stores/artStore'
import { useAuthStore } from 'src/stores/authStore';

export default {
    name:'Home',
    components: {
      CardObra
    },
    props:{},
    data(){
        return {
            arts: [],
            fabLeft: true,
        }
    },
    methods: {
        async agregarColleccion(idCollection,idObra){
            const artStore = useArtStore()
            const authStore = useAuthStore()
            const user = authStore.user
            artStore.addObraToCollectionFromUser(user.idUsuario,idCollection,idObra)
        },
        async getArt(){
            const artStore = useArtStore()
            await artStore.getArt()
            this.arts = artStore.arts
        },
        crearObra() {
            this.$router.push({name: 'CrearObra'})
        },
        crearColeccion() {
            this.$router.push({name: 'CrearColeccion'})
        }

    },
    mounted(){
        this.getArt()
    }
}
</script>

<style>

</style>

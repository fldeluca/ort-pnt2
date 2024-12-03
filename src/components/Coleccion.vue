<template>
  <div class="row justify-center align-center">
    <div class="col-12 q-pa-xs">
      <div v-for="collection in collections" :key="collection.id" :style="{ border: '1px solid #000' }" class="q-ma-md q-pa-md rounded-borders">
        <div class="row justify-end">
          <p class="q-pa-xs">Colección: {{ collection.title }}</p>
          <q-btn class="glossy" @click="eliminarColleccion(collection._id)" round color="red-4" icon="delete" />
        </div>
        <div class="row">
          <div class="col-3 q-pa-xs" v-for="obra in collection.obras" :key="obra._id">
            <q-card class="my-card">
              <q-img :src="obra.image">
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useArtStore } from 'src/stores/artStore';
import { useAuthStore } from 'src/stores/authStore';
import { useQuasar } from "quasar"

export default {
  name: "Coleccion",
  components: {},
  props: {
    collections: {
      type: Array,
      required: true,
    }
  },
  data() {
    const $q = useQuasar()
  },
  methods: {
    eliminarObra(idCollection,idObra) {
      this.$q.dialog({
          title: "Eliminar obra",
          message: "Desea eliminar la obra seleccionada?",
          cancel: true,
          persistent: true,
      })
          .onOk(() => {
            const artStore = useArtStore()
            const authStore = useAuthStore()
            let idUsuario = authStore.user._id
            artStore.deleteObraFromCollection(idUsuario,idCollection,idObra)
            artStore.deleteObra(idObra)
          })
          .onCancel(() => {
          return;
          })
          .onDismiss(() => {
          return;
          });
    },
    eliminarColleccion(idCollection) {
      this.$q.dialog({
          title: "Eliminar colección",
          message: "Desea eliminar la colección seleccionada?",
          cancel: true,
          persistent: true,
      })
          .onOk(() => {
            const artStore = useArtStore()
            const authStore = useAuthStore()
            let idUsuario = authStore.user._id
            artStore.deleteCollectionFromUser(idUsuario,idCollection)
            artStore.deleteCollection(idCollection)
          })
          .onCancel(() => {
          return;
          })
          .onDismiss(() => {
          return;
          });
    },
  }
}
</script>

<style></style>

                <!--<div class="absolute-bottom text-subtitle1 text-center">
                  <q-btn class="glossy q-mr-xs" round color="amber-4" icon="edit" />
                  <q-btn class="glossy q-mr-xs" round color="teal-4" icon="ads_click" />
                  <q-btn class="glossy" @click="eliminarObra(collection._id,obra._id)" round color="red-4" icon="delete" />
                </div>
                <q-drawer
                  v-model="drawer"
                  show-if-above

                  :mini="miniState"
                  @mouseover="miniState = false"
                  @mouseout="miniState = true"

                  :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
                >
                  
                </q-drawer> -->

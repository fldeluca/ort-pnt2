<template>
  <q-dialog v-model="detalle">
    <ObraDetalle :art="art"/>
  </q-dialog>

  <q-card class="my-card" flat bordered>
    <q-card-section>
      <q-img style="height: 250px; max-width: 250px" class="col" :src="art.image"/>
      <q-card-actions class="justify-around q-px-sm">
        <q-btn flat round color="red" icon="favorite" @click="addObraToLikes(art._id)"/>
        <q-btn flat round color="accent" icon="bookmark" @click="agregarColleccion(art._id)" />
        <q-btn flat round color="primary" icon="ads_click" @click="detalleObra()"/>
      </q-card-actions>
    </q-card-section>
    </q-card>
</template>
<script>
import ObraDetalle from "./ObraDetalle.vue";
import { useArtStore } from "src/stores/artStore";
import { useAuthStore } from "src/stores/authStore";

export default {
  name: "CardObra",
  components: {
    ObraDetalle
  }, 
  props: {
    art: Object
  },
  data(){
    let detalle = false
  },
  methods: {
    async addObraToLikes(idObra) {
      const authStore = useAuthStore();
      const artStore = useArtStore();
      await artStore.addObraToLikes(authStore.user._id, idObra);
    },
    async agregarColleccion(idObra){
      const artStore = useArtStore()
      const authStore = useAuthStore()
      console.log(authStore.user._id,'6675ae34912c61f8f18ac5eb',idObra)
      artStore.addObraToCollectionFromUser(authStore.user._id,'6675ae34912c61f8f18ac5eb',idObra)
    },
    detalleObra(){
      this.detalle = true
    }
  },
};
</script>
<style></style>

<!--   <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="download"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          Cafe Basilico
        </div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
          <q-button icon="download">

          </q-button>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        $・Italian, Cafe
      </div>
      <div class="text-caption text-grey">
        Small plates, salads & sandwiches in an intimate setting.
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn v-close-popup flat color="primary" label="Reserve" />
      <q-btn v-close-popup flat color="primary" round icon="event" />
    </q-card-actions>
  </q-card>
 -->

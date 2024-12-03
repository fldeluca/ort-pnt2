<template>
  <div class="row q-ma-md q-pa-md rounded-borders" :style="{ border: '1px solid #000' }">
    <p class="col-12 q-pa-xs">Likes</p>
    <div
      class="col-3 q-pa-xs"
      v-for="obra in likes"
      :key="obra.id">
      <q-card class="my-card">
        <q-img :src="obra.image"></q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Likes",
  props: {
    likes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>

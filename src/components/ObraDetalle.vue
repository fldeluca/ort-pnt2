<template>
  <q-card class="my-card q-pa-sm" flat bordered>
    <q-img style="height: 250px; max-width: 250px" class="col" :src="art.image" />
    <q-card-section>
      <div class="row items-center">
        <div class="col text-h6 ellipsis">{{ art.title }}</div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey">
        Author: {{ art.author }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey">
        Culture: {{ art.culture }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey">
        Division: {{ art.division }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-button>
        <a :download="`${art.author}.jpg`" :href="art.image" title="ImageName" />
      </q-button>
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: "ObraDetalle",
  props: {
    art: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style></style>

<template>
  <q-layout>
    
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Pintort Art
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <Navbar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useAuthStore } from '../src/stores/authStore'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    isAuthenticated(){
      const authStore = useAuthStore()
      authStore.checkAuth()
      if(!localStorage.getItem("isAuthenticated")){
          this.$router.push({name:'Login'})
      }
    }
  },
  mounted(){
    this.isAuthenticated()
  }
})
</script>

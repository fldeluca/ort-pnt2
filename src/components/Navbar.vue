<template>
  <nav>
    <q-list bordered separator>
      <q-item v-if="isAuthenticated" clickable v-ripple>
        <q-item-section>
          <router-link to="/home" style="color: inherit; text-decoration: none"
            >Home</router-link
          >
        </q-item-section>
      </q-item>
      <q-item v-if="isAuthenticated" clickable v-ripple>
        <q-item-section>
          <router-link
            to="/perfil"
            style="color: inherit; text-decoration: none"
            >Perfil</router-link
          >
        </q-item-section>
      </q-item>
      <q-item v-if="!isAuthenticated" clickable v-ripple>
        <q-item-section>
          <router-link to="/login" style="color: inherit; text-decoration: none"
            >Login</router-link
          >
        </q-item-section>
      </q-item>
      <q-item v-if="isAuthenticated" clickable v-ripple>
        <q-item-section>
          <router-link
            to="/login"
            @click="logout"
            style="color: inherit; text-decoration: none"
            >Logout</router-link
          >
        </q-item-section>
      </q-item>
    </q-list>
  </nav>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

export default {
  name: "Navbar",
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  computed: {
    isAuthenticated() {
      return this.authStore.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      this.authStore.logout();
      if (!localStorage.getItem("isAuthenticated")) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  watch: {
  },
  created() {
    this.authStore.checkAuth();
  },
  /* 
    computed: {
      isAuthenticatedComputed() {
        const authStore = useAuthStore()
        return authStore.isAuthenticated
      }
    },
    methods: {
        async logout(){
            const authStore = useAuthStore()
            authStore.logout()
            if(authStore.isAuthenticated){
                this.$router.push({name:'Login'})
            }
        }
    },
    mounted() {
      const authStore = useAuthStore()
      authStore.checkAuth()
    } */
};
</script>

<style></style>

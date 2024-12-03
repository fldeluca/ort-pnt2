import Login from "../pages/Login.vue"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiereAuth: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/Home.vue'),
    meta: {
      requiereAuth: true
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('pages/Perfil.vue'),
    meta: {
      requiereAuth: true
    }
  },
  {
    path: '/crearObra',
    name: 'CrearObra',
    component: () => import('components/CrearObra.vue'),
    meta: {
      requiereAuth: true
    }
  },
  {
    path: '/crearColeccion',
    name: 'CrearColeccion',
    component: () => import('components/CrearColeccion.vue'),
    meta: {
      requiereAuth: true
    }
  },
  {
    path: '/modificarColeccion',
    name: 'ModificarColeccion',
    component: () => import('components/ModificarColeccion.vue'),
    meta: {
      requiereAuth: true
    }
  },
  {
    path: '/modificarObra',
    name: 'ModificarObra',
    component: () => import('components/ModificarObra.vue'),
    meta: {
      requiereAuth: true
    }
  },
]

export default routes

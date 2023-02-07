import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import LocationsView from '../views/LocationsView.vue'
import DisconnectView from '../views/DisconnectView.vue'
import AddLocationsView from '../views/AddLocationsView.vue'
import EditLocationView from '../views/EditLocationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/locations',
    name: 'locations',
    component: LocationsView
  },
  {
    path: '/disconnect',
    name: 'disconnect',
    component: DisconnectView
  },
  {
    path: '/addLocations',
    name: 'addLocations',
    component: AddLocationsView
  },
  {
    path: '/editLocations/:id',
    name: 'editLocations',
    component: EditLocationView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

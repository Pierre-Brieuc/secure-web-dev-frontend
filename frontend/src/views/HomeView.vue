<template>
  <div class="home">
    <Home msg="Welcome to the list of locations, please register or login before access to the list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>

<template>
    <div>
        <h1>Disconnect</h1>
        <button @click="disconnect">Disconnect</button>
    </div>
</template>

<script>
export default {
  name: 'DisconnectView',
  computed: {
    disconnect () {
      localStorage.removeItem('token')
      localStorage.removeItem('count')
      location.reload()
      return 0
    }
  }
}
</script>

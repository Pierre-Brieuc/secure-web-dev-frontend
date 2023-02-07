<template>
  <div class="signUp">
    <form @submit.prevent="submitForm">
      <h2 class="">Connexion</h2>
      <div class="block-input">
          <div class="center-div-label-input">
              <label class="" for="name">
                  Username
              </label>
              <input
                  v-model="username"
                  type="username"
                  id="username"
                  placeholder="username"
              />
          </div>
          <div class="center-div-label-input">
              <label class="" for="password">
                  Password
              </label>
              <input
                  v-model="password"
                  type="password"
                  id="password"
                  placeholder="Password"
              />
          </div>
      </div>
      <div class="btn-link">
        <button type="submit">Sign in</button>
          <p class="">
              Already have an account?
              <router-link to="/register">Register</router-link>
          </p>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
const API_URL = 'http://localhost:3000/users/login/'

export default {
  name: 'LoginView',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      axios.post(API_URL, {
        username: this.username,
        password: this.password
      })
        .then(response => {
          console.log(JSON.stringify(response.config))
          localStorage.setItem('token', response.data.jwt)
          localStorage.setItem('user', response.config.data)
          console.log(localStorage.getItem('token'))
          localStorage.setItem('count', 0)
          this.$router.push('/locations')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>

<style scoped>
  .signUp {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 95vh;
  }

  form {
    background-color: #fff;
    width: 50%;
    box-shadow: 2.5px 2.5px rgba(47, 47, 47, 0.2);
    padding: 1.5%;
  }

  h2{
      text-align: center;
  }

  .block-input {
      margin-top: 6%;
      margin-bottom: 2%;
  }

  .center-div-label-input {
      display: block;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
 }
 input {
      width: 70%;
      height: 1.5rem;
      margin-bottom: 4%;
 }
 .btn-link{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
 }
 button{
      border:0.1px solid #000;
      border-radius: 15px 15px 15px 15px;
      width: fit-content;
      background-color:rgb(205, 207, 210);
      height: 2.5rem;
 }
 button:hover{
      box-shadow: 2px 2px rgba(47, 47, 47, 0.2);
      cursor: pointer;
 }
</style>

<template>
  <div class="locations">
    <div>
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h3> {{ movie.address }} </h3>
          <button @click="showModal = false"> Close Modal </button>
        </div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Lieux tournage</th>
          <th>Films</th>
          <th>Fonctionnalités</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="movie in currentMovies" :key="movie._id">
              <input type="hidden" v-model="movie._id"/>
              <td>{{ movie.address }}</td>
              <td>{{ movie.filmName }}</td>
              <td><button class="myBtn" @click="showModal = true">See More</button></td>
              <td><button class="myBtn">Edit</button></td>
              <td><button class="myBtn">Delete</button></td>
          </tr>
        </tbody>
    </table>
    <button @click="this.$router.push('/addLocations')">Add location</button>
    <button @click="previousPage">Previous</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      movies: [],
      currentPage: 1,
      perPage: 10,
      showModal: false
    }
  },
  computed: {
    currentMovies () {
      const startIndex = (this.currentPage - 1) * this.perPage
      return this.movies.slice(startIndex, startIndex + this.perPage)
    }
  },
  mounted () {
    if (this.isTokenEmpty()) {
      this.$router.push('/login')
    }
    if (localStorage.getItem('count') < 1) {
      location.reload()
    }
    localStorage.setItem('count', 1)
    axios.get('http://localhost:3000/locations/', {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        this.movies = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    previousPage () {
      // Go to the previous page of movies
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage () {
      // Go to the next page of movies
      if (this.currentPage < Math.ceil(this.movies.length / this.perPage)) {
        this.currentPage++
      }
    },
    isTokenEmpty () {
      if (localStorage.getItem('token') === null) {
        return true
      } else {
        return false
      }
    },
    deleteLoc () {
      axios.delete('http://localhost:3000/locations/', {
        _id: this.movie._id
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          console.log(JSON.stringify(response.config))
          this.$router.push('/locations')
        })
        .catch(error => {
          console.log(error)
          console.log(error.message)
          console.log(this.token)
          console.log(localStorage.getItem('user'))
        })
    }
  }
}
</script>

<style scoped>
.locations {
  display: flex;
  flex-direction: column;
}
table {
  margin-top:20%;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #0b0b0b;
  text-align: center;
}
table tr, td{
  text-align: center;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
button{
  cursor: pointer;
}
</style>

<template>
  <div class="locations">
    <div>
        <div v-if="showModal" class="modal-overlay">
           <div class="modal-content">
            <div>
              <h2>{{ tempMovie.filmName }}</h2>
              <h3>{{ tempMovie.filmProducerName }}</h3>
              <h3>{{ tempMovie.filmDirectorName }}</h3>
              <h3>{{ tempMovie.filmType }}</h3>
              <h3>{{ tempMovie.district }}</h3>
              <h3>{{ tempMovie.address }}</h3>
              <h3>{{ tempMovie.startDate }}</h3>
              <h3>{{ tempMovie.endDate }}</h3>
              <h3>{{ tempMovie.sourceLocationId }}</h3>
              <h3>{{ tempMovie.year }}</h3>
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
            <td>{{ movie.address }}</td>
            <td>{{ movie.filmName }}</td>
            <td>
              <form @submit.prevent="">
                <input type="hidden" v-model="movie._i" />
                <td><button class="myBtn" @click="activateModal(movie)">See More</button></td>
                <!--<td><button class="myBtn" @click="editfunction(movie)">Edit</button></td>-->
                <td><button class="myBtn" @click="deleteLoc(movie)">Delete</button></td>
              </form>
            </td>
          </tr>
        </tbody>
    </table>
    <button @click="this.$router.push('/addLocations')">Add location</button>
    <button @click="previousPage">Previous</button>
    <button @click="nextPage">Next</button>
  </div>
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
      showModal: false,
      current: null,
      tempMovie: null
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
    deleteLoc (movie) {
      const API_URL = 'http://localhost:3000/locations/' + movie._id
      axios.delete(API_URL, {
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
          console.log(movie._id)
          console.log(this.token)
          console.log(localStorage.getItem('user'))
          console.log(API_URL)
        })
    },
    activateModal (movie) {
      this.showModal = true
      this.tempMovie = movie
      return {
        sourceLocationIDPlaceholder: 'hhhhhh'
      }
    },
    editfunction (movie) {
      console.log(movie._id)
      this.$router.push(`/editLocations/${movie._id}`)
    },
    changeInput (ref, refsend) {
      if (this.$refs[ref].style.display === 'none') {
        this.$refs[ref].style.display = 'block'
        this.$refs[refsend].style.display = 'block'
      } else {
        this.$refs[ref].style.display = 'none'
        this.$refs[refsend].style.display = 'none'
      }
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
  margin-top:10%;
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
thead, th{
  padding: 10px;
}

td{
  padding:5px;
}
.mybtn{
  display: inline-block;
}
input, .send {
  display: none;
}
</style>

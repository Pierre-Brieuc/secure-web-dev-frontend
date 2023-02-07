<template>
    <div class="edit">
      <form @submit.prevent="submitForm">
        <h2 class="">Edit location</h2>
        <div class="block-input">
            <div class="center-div-label-input">
                <label class="" for="sourceLocationID">
                    Source location ID
                </label>
                <input
                    v-model="sourceLocationID"
                    type="sourceLocationID"
                    id="sourceLocationID"
                    placeholder="sourceLocationID"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="type_tournage">
                    type tournage
                </label>
                <input
                    v-model="type_tournage"
                    type="type_tournage"
                    id="type_tournage"
                    placeholder="type_tournage"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="nom_producteur">
                    Nom producteur
                </label>
                <input
                    v-model="nom_producteur"
                    type="nom_producteur"
                    id="nom_producteur"
                    placeholder="nom_producteur"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="nom_tournage">
                    Nom tournage
                </label>
                <input
                    v-model="nom_tournage"
                    type="nom_tournage"
                    id="nom_tournage"
                    placeholder="nom_tournage"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="nom_realisateur">
                    Nom réalisateur
                </label>
                <input
                    v-model="nom_realisateur"
                    type="nom_realisateur"
                    id="nom_realisateur"
                    placeholder="nom_realisateur"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="date_debut">
                    Date début
                </label>
                <input
                    v-model="date_debut"
                    type="date_debut"
                    id="date_debut"
                    placeholder="date_debut"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="date_fin">
                    Date fin
                </label>
                <input
                    v-model="date_fin"
                    type="date_fin"
                    id="date_fin"
                    placeholder="date_fin"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="annee">
                    Année de tournage
                </label>
                <input
                    v-model="annee"
                    type="annee"
                    id="annee"
                    placeholder="annee"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="adresse_lieu">
                    Adresse lieu
                </label>
                <input
                    v-model="adresse_lieu"
                    type="adresse_lieu"
                    id="adresse_lieu"
                    placeholder="adresse_lieu"
                />
            </div>
            <div class="center-div-label-input">
                <label class="" for="arrondissement">
                    Arrondissement
                </label>
                <input
                    v-model="arrondissement"
                    type="arrondissement"
                    id="arrondissement"
                    placeholder="arrondissement"
                />
            </div>
        </div>
        <div class="btn-link">
          <button type="submit">edit</button>
        </div>
      </form>
    </div>
  </template>
<script>
import axios from 'axios'
const suiteAPI = JSON.stringify(localStorage.getItem('editMovie'))
const API_URL = 'http://localhost:3000/locations/' + suiteAPI

export default {
  data () {
    return {
      film_id: this.$route.params.movie_id,
      type_tournage: '',
      nom_producteur: '',
      nom_tournage: '',
      date_debut: '',
      date_fin: '',
      adresse_lieu: '',
      arrondissement: '',
      annee: '',
      nom_realisateur: '',
      sourceLocationID: '',
      token: localStorage.getItem('token')
    }
  },
  methods: {
    submitForm () {
      axios.patch(API_URL,
        {
          geolocation: {
            coordinates: [2.348314535961912, 48.83566000015182],
            type: 'Point'
          },
          _id: this.film_id,
          filmType: this.type_tournage,
          filmProducerName: this.nom_producteur,
          endDate: this.date_fin,
          filmName: this.nom_tournage,
          district: this.arrondissement,
          sourceLocationId: this.sourceLocationID,
          filmDirectorName: this.nom_realisateur,
          address: this.adresse_lieu,
          startDate: this.date_debut,
          year: this.annee,
          __v: 0
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
          for (const key in this.film_id) {
            console.log(key + ': ' + this.film_id[key])
          }
          console.log(error)
          console.log(API_URL)
          console.log(this.token)
          console.log(localStorage.getItem('user'))
        })
    }
  }
}

</script>

  <style scoped>
    .edit {
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

<template>
  <button v-if="isHiden" v-on:click="change(isHiden)">
    Pour info
  </button>
  <button v-if="!isHiden" v-on:click="change(isHiden)">Fermer</button>
  <Impedance v-if="!isHiden" />

  <div v-if="isHiden" class="container">
    <div class="tab">
      <!-- <div>
        <h3>Combien d'enceintes pour votre ampli ?</h3>
      </div> -->
      <!-- <ul>
        <li v-on:click="searchInput('serie')" class="serie">
          <div class="radio-container">
            <div @click="cancelSearch">
              <button class="all">All</button>
            </div>

            <div
              v-for="typeSerie in typeSeries"
              :key="typeSerie.id"
              class="radio"
            >
              <label :for="typeSerie.name"> {{ typeSerie.name }} </label>
              <input
                type="radio"
                v-model="selectedSerie"
                :id="typeSerie.name"
                :value="typeSerie.name"
                class="radio-button"
              />
            </div>
          </div>
        </li>
      </ul> -->
      <p>Choisissez une série puis un modèle:</p>
      <div class="button-container">
        <div v-for="typeSerie in typeSeries" :key="typeSerie.id">
          <button v-on:click="searchInput(typeSerie.name)" class="serie">
            {{ typeSerie.name }}
          </button>
        </div>
        <button @click="cancelSearch" class="serie">Toutes</button>
      </div>

      <!-- bigin list -->
      <table id="tabliste">
        <tr v-if="search.length !== 0">
          <td>Nom</td>
          <td>LA4</td>
          <td>LA4x</td>
          <td>LA8</td>
          <td>LA12x</td>
          <td>LA2xi</td>
        </tr>

        <tr v-for="enceinte in search" :key="enceinte.id">
          <td @click="detailEnceinte(enceinte)">
            {{ enceinte.typ }}
          </td>
          <td class="nb-amplis">{{ enceinte.LA4 }}</td>
          <td class="nb-amplis">{{ enceinte.LA4X }}</td>
          <td class="nb-amplis">{{ enceinte.LA8 }}</td>
          <td class="nb-amplis">{{ enceinte.LA12X }}</td>
          <td class="nb-amplis">{{ enceinte.LA2Xise }}</td>
        </tr>
      </table>
    </div>
    <!-- begin card detail -->
    <div class="details" v-if="enceinteDetail.id">
      <div class="title-img">
        <div>
          <h1 class="detail-nom">
            <a :href="getUrl(enceinteDetail.link)" target="_blank">
              {{ enceinteDetail.typ }}</a
            >
          </h1>
          <div class="infossupp">
            <p>Système: {{ enceinteDetail.actif }}</p>
            <p>BP: {{ enceinteDetail.bp }}</p>
            <p>Poids: {{ enceinteDetail.poids }}</p>
          </div>
        </div>
        <div>
          <!-- <img src="../assets/img-hp/lacousticsX4i.jpg" alt="" /> -->
          <!-- <img :src="enceinteDetail.picture" /> -->
          <img v-bind:src="getImgUrl(enceinteDetail.picture)" alt="" />
          <h4>{{ enceinteDetail.picture }}</h4>
          <h4></h4>
        </div>
      </div>
      <div class="amplis_container">
        <div class="row">
          <h1>
            <a
              href="https://www.l-acoustics.com/wp-content/uploads/2018/10/en_la4_sp_en_4-0.pdf"
              target="_blank"
            >
              LA4
            </a>
          </h1>

          <h1>{{ enceinteDetail.LA4_s + " / " + enceinteDetail.LA4 }}</h1>
        </div>
        <div class="row">
          <h1>
            <a
              href="https://www.l-acoustics.com/wp-content/uploads/2018/06/la4x_sps_fr_4-0.pdf"
              target="_blank"
            >
              LA4x
            </a>
          </h1>

          <h1>{{ enceinteDetail.LA4X_s + " / " + enceinteDetail.LA4X }}</h1>
        </div>
        <div class="row">
          <h1>
            <a
              href="https://www.l-acoustics.com/wp-content/uploads/2018/10/la4-la8_sps_fr_4-0.pdf"
              target="_blank"
            >
              LA8
            </a>
          </h1>

          <h1>{{ enceinteDetail.LA8_s + " /  " + enceinteDetail.LA8 }}</h1>
        </div>
        <div class="row">
          <h1>
            <a
              href="https://www.l-acoustics.com/wp-content/uploads/2018/06/la12x_sps_fr_2-0.pdf"
              target="_blank"
            >
              LA12X
            </a>
          </h1>

          <h1>{{ enceinteDetail.LA12X_s + " / " + enceinteDetail.LA12X }}</h1>
        </div>
        <div class="row">
          <h2>
            <a
              href="https://www.l-acoustics.com/wp-content/uploads/2020/02/la2xi_sps_en_1-1.pdf"
              target="_blank"
            >
              LA2xi se
            </a>
          </h2>

          <h1>
            {{ enceinteDetail.LA2Xise_s + " / " + enceinteDetail.LA2Xise }}
          </h1>
        </div>
        <div class="row">
          <h2>
            <a
              href="https://www.l-acoustics.com/wp-content/uploads/2020/02/la2xi_sps_en_1-1.pdf"
              target="_blank"
              >LA2xi bt
            </a>
          </h2>

          <h1>
            {{ enceinteDetail.LA2Xibtl_s + " / " + enceinteDetail.LA2Xibtl }}
          </h1>
        </div>
      </div>

      <p>{{ enceinteDetail.remarques }}</p>
      <p class="sortietotal">*par sortie / total</p>
    </div>

    <h1 v-if="search.length == 0">Désolé aucun résultat</h1>
  </div>
</template>

<script>
import json from "../../public/enceintes.json";
import Impedance from "@/components/Impedance.vue";

export default {
  name: "Amplis",
  components: { Impedance },
  data() {
    return {
      imagehp: "@/assets/img-hp/lacousticsX4i.jpg",
      enceintes: json.enceintes,
      enceinteDetail: "",
      // inputType: "",
      selectedSerie: "K",
      searchkey: "",
      isHiden: true,
      serieList: [],
      typeSeries: [
        { name: "A", id: "1" },
        { name: "X", id: "2" },
        { name: "SUB", id: "3" },
        { name: "K", id: "4" },
        { name: "V", id: "5" },
        { name: "M", id: "6" }
      ]
    };
  },
  computed: {
    search() {
      // eslint-disable-next-line prettier/prettier
      return this.enceintes.filter(enceinte => {
        return (
          enceinte.typ.toUpperCase().includes(this.searchkey.toUpperCase()) &&
          enceinte.serie.includes(this.selectedSerie)
        );
      });
    }
  },
  methods: {
    searchInput(param) {
      this.selectedSerie = param;
    },
    detailEnceinte(detail) {
      this.enceinteDetail = detail;
    },
    cancelSearch() {
      this.searchKey = "";
      this.selectedSerie = "";
    },
    getUrl(pageweb) {
      return pageweb;
    },
    getImgUrl(pic) {
      return "../assets/img-hp/dessins/" + pic;
    },
    change(data) {
      this.isHiden = !data;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #3d454d;
}
a:hover {
  text-decoration: underline;
  color: var(--colorLA);
}
/* .all {
  cursor: pointer;
  margin-right: 15px;
  padding: 4px;
  font-size: 1.3rem;
  line-height: 1;
  background: var(--colorLA);
  color: white;
} */
.amplis_container {
  margin-top: 15px;
}

.amplis_container {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button-container button {
  background: white;
  border: 1px solid grey;
  padding: 4px 6px;
}
.button-container button:hover {
  background: rgb(36, 194, 15);
}
.button-container button:active {
  background: rgb(36, 194, 15);
}
button {
  background: var(--color1);
  padding: 4px 6px;
  margin: 10px auto;
  font-size: 1rem;
}
.container {
  /* width: 375px; */
}

.details {
  border-radius: 20px;
  width: 360px;
  border-collapse: separate;
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  margin: 20px 0px;
  padding: 10px 20px;
  border: 1px solid;
}
.detail-nom {
  border-radius: 20px;
  width: 200px;
  border-collapse: separate;
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  margin: 20px 0px;
  padding: 10px 20px;
  border: 1px solid;
}
img {
  width: 120px;
  height: auto;
  object-fit: contain;
}

input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  background: #66dd9a;
  transform: scale(1.1);
}
label {
  cursor: pointer;
  border: 1px solid black;
  padding: 3px 6px;
  margin: 0.5rem;
}
.infossupp {
  text-align: left;
  line-height: 0.2rem;
  margin-top: 10px;
}
.row {
  display: flex;
  direction: row;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
}

.row h4 {
  padding-top: 10px;
}

.tab {
  width: 365px;
  margin: 1rem auto;
}
.tab p {
  margin: 10px;
}
.tab h3 {
  margin: 10px;
}

ul {
  display: flex;
  padding: 0px;
  list-style-type: none;
}
.radio-container {
  width: 350px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.serie {
  background: var(--color1);
  border-radius: 0.2rem;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem;
}
.sortietotal {
  font-size: 12px;
  text-align: left;
}

table {
  /* margin: auto; */
  width: 350px !important;
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  border-spacing: 1px !important;
  border-radius: 0.5rem;
  margin: 20px 0px 30px 0px;
  border: solid 1px;
  border-spacing: 0px;
  text-align: center !important;
}
th {
  height: 20px;
  padding: 2px;
}
td {
  padding: 3px !important;
}
td:first-child {
  text-align: left;
  /* width: 115px !important; */
  padding: 3px 2px 0px 10px;
  font-weight: 700;
  font-size: 1.2em;
  cursor: pointer;
  /* text-overflow: hidden; */
  text-align: nowrap;
  width: 10rem;
}
td:first-child:hover {
  background-color: #66dd9a;
}
tr:first-child {
  background-color: var(--colorLA);
  color: white;
}
tr:nth-child(even) {
  background: rgb(232 232 234);
}
td {
  border-radius: 0.5rem;
}
tr:nth-child(odd) {
  /* background: #fff; */
}
/* .nb-amplis {
      text-align: center;
    } */

.title-img {
  display: flex;
  direction: row;
  justify-content: space-between;
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 768px) {
  .details {
    margin: 20px;
    width: 350px;
  }
  .container {
    display: flex;
    margin: auto;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>

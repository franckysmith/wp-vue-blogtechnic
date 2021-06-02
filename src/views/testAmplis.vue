<template>
  <div class="details">
    <input type="text" v-model="searchkey" />
    <div v-for="enceinte in search" :key="enceinte.id">
      {{ enceinte.typ }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import json from "../../public/enceintes.json";

export default {
  name: "Amplis",

  setup() {
    let enceintes = json.enceintes;
    let searchkey = ref("k2");

    // ---- recherche  searchKey
    const search = computed(() => {
      return enceintes.filter(e => {
        return e.typ.toLowerCase().includes(searchkey.value.toLowerCase());
      });
    });

    return {
      enceintes,
      searchkey,
      search
    };
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
  color: #66dd9a;
}
.container {
  width: 350px;
  margin-left: 0px;
}

.amplis_container {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.amplis_container .amplis_container h4 {
  line-height: ;
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
  width: 350px;
  margin: auto;
}
.tab p {
  margin: 10px;
}
.tab h3 {
  margin: 10px;
}

.details {
  border-radius: 20px;
  width: 345px;
  border-collapse: separate;
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  margin: 20px 0px;
  padding: 10px 20px;
  border: 1px solid;
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
  background-color: #66dd9a;
}
.cancel {
  cursor: pointer;
  margin-right: 15px;
}
.radio-button {
  margin: 5px 13px 5px 5px;
  cursor: pointer;
}
.serie {
  background-color: #66dd9a;
}
table {
  /* margin: auto; */
  width: 350px !important;
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  border-spacing: 1px !important;
  /* border-collapse: collapse; */
  /* table-layout: fixed; */

  /* margin: 20px 0px 30px 0px; */
  border: solid 1px;
  /* border-collapse: separate; */
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
}
td:first-child:hover {
  background-color: #66dd9a;
}

tr:nth-child(even) {
  background: #ccc;
}
tr:nth-child(odd) {
  background: #fff;
}
/* .nb-amplis {
      text-align: center;
    } */

.title-img {
  display: flex;
  direction: row;
  justify-content: space-between;
}
.detail-nom {
  text-align: center;
  /* margin-right: 60px; */
  padding: 5px 10px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
}

img {
  width: 120px;
  height: auto;
  object-fit: contain;
}
.infossupp {
  text-align: left;
  /* line-height: 0.6em; */
  margin-top: 10px;
}
.sortietotal {
  font-size: 12px;
  text-align: left;
}
body {
  line-height: 0.8em;
}
/* Desktops and laptops ----------- */
@media only screen and (min-width: 768px) {
  .details {
    margin: 20px;
    width: 350px;
  }
  .container {
    display: flex;
    width: 800px;
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

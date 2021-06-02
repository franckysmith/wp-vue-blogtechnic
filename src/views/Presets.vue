<template>
  <div class="container">
    <div class="header">
      <label>Librairie de presets 6.6</label>
      <button @click="show('isinfo')">Info</button>
    </div>

    <div class="button-container">
      <button @click="show('la2xi')">LA2Xi</button
      ><button @click="show('la4')">LA4</button
      ><button @click="show('la4x')">LA4X</button
      ><button @click="show('la12x')">LA12X</button
      ><button @click="show('la8')">LA8</button>
    </div>
    <Infos v-if="buttonAmpli == 'isinfo'" />
  </div>
  <h1>
    <a
      href="https://www.l-acoustics.com/documentation/GLOBAL/EN/Preset%20Guide/preset_guide_en.pdf"
      target="_blank"
    >
      preset version Pdf
    </a>
  </h1>
  <div class="presets">
    <La4 v-if="buttonAmpli == 'la4'" />
    <La4x v-if="buttonAmpli == 'la4x'" />
    <La8 v-if="buttonAmpli == 'la8'" />
    <La12x v-if="buttonAmpli == 'la12x'" />
    <La2xi v-if="buttonAmpli == 'la2xi'" />
  </div>
</template>

<script>
import Infos from "@/components/presets 6-6/Infos.vue";
import La4x from "@/components/presets 6-6/La4x.vue";
import La12x from "@/components/presets 6-6/La12x.vue";
import La8 from "@/components/presets 6-6/La8.vue";
import La4 from "@/components/presets 6-6/La4.vue";
import La2xi from "@/components/presets 6-6/La2xi.vue";

export default {
  name: "presets",
  components: { Infos, La4x, La8, La4, La12x, La2xi },
  data() {
    return {
      buttonAmpli: "la4x"
    };
  },
  methods: {
    show(param) {
      this.buttonAmpli = param;
      console.log(param);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px auto;

  /* display: flex;
  flex-wrap: wrap; */
  /* justify-content: center;
  align-items: center; */
}

.header {
  margin: 0px 0px 15px 0px;
}

.presets {
  padding: 20px 10px;
  text-align: left;
  max-width: 1200px;
  margin: auto;
}
.presets img {
  max-width: 350px;
}
.button-container {
  justify-content: center;
}
button {
  flex-direction: row;
  margin: 0px 10px;
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
}
button:active {
  background-color: #66dd9a;
}
@media only screen and (min-width: 893px) {
  .presets {
    display: flex;
    justify-content: space-around;
    margin: auto;
  }
}
</style>

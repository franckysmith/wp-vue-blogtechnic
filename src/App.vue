<template>
  <div id="nav">
    <router-link to="/">Amplis</router-link> |
    <router-link to="/presets">Presets</router-link> |
    <router-link to="/prealignement">Pré-alignement</router-link>
  </div>
  <router-view />
</template>

<style>
:root {
  --color1: #4dcc59;
  --color2: #f3e309;
  --color3: #eb910a;
  --colorLA: #bd9f59;
}
* {
  /* padding: 0; */
  /* margin: 0; */
  box-sizing: border-box;
  list-style-type: none;
}

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #221d20;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #66dd9a;
}
</style>

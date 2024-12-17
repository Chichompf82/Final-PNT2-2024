<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Final</h1>
      <br>
      <Navbar/>
      <RouterView/>
    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
h1 {
    color: blue;
  }

  .jumbotron {
    padding-top: 40px;
    padding-bottom: 40px;
  }
</style>

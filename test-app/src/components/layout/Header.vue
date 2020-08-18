<template>
  <header class="header">
    <h1>Why</h1>
    <div id="nav">
      <router-link to="/"><test/>Home</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <div>What is this</div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>
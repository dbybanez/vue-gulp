<template>
  <div class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-auto align-self-center">
          <h5 class="logo mb-0"><router-link to="/">VueBG</router-link></h5>
        </div>
        <div class="col">
          <div class="main-navigation float-right">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Header"
  }
</script>
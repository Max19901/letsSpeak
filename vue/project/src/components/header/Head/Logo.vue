<template>
  <div class="logo col-2">
    <router-link tag="a" :to="{name: 'Home'}">
      <img src="../../../assets/images/libery_1.png" alt="">
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped lang="scss">
  .logo {
    a {
      display: block;
      img {
        width: 100%;
      }
    }
  }
</style>

<template>
  <div id="app">
      <app-header class="app_header"></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue';
  import Main from './components/contents/Main/MainPage.vue';
  import Footer from './components/footer/Footer.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      appHeader: Header,
      appMain: Main,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>

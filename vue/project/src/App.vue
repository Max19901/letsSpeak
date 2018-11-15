<template>
  <div id="app">
    <app-header class="app_header"></app-header>
    <transition name="fade"
                appear
                mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue';
  import Main from './components/contents/Main/MainPage.vue';
  import Footer from './components/footer/Footer.vue';

  export default {
    data() {
      return {}
    },
    components: {
      appHeader: Header,
      appMain: Main,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity .75s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }
</style>

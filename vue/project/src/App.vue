<template>
  <div id="app">
    <transition>
      <app-header class="app_header"></app-header>
    </transition>
    <app-main></app-main>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue';
  import Main from './components/contents/Main/MainPage.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      appHeader: Header,
      appMain: Main
    }
  }
</script>

<style lang="scss">

</style>

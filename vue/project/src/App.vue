<template>
  <div id="app">
    <transition name="fade"
                appear
                mode="out-in">
      <app-content-page></app-content-page>
    </transition>
  </div>
</template>

<script>
  import ContentPage from 'components/ContentPage.vue';

  export default {
    data() {
      return {}
    },
    components: {
      appContentPage: ContentPage
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

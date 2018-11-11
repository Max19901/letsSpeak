<template>
  <div class="about" id="about">
    <div class="container">
      <div class="title-block">
        <h2>Преимущества</h2>
      </div>
      <app-about-items></app-about-items>
    </div>
    <app-banner></app-banner>
  </div>
</template>

<script>
  import AboutItems from './AboutItems.vue';
  import AboutBanner from './AboutBanner.vue';

  export default {
    name: "MainAbout",
    components: {
      appAboutItems: AboutItems,
      appBanner: AboutBanner
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../../global';

  .about {
    padding-top: 70px;
    position: relative;
    background-color: $greyLight;
    z-index: 0;
    .container {
      padding-bottom: 70px;
    }
  }
</style>

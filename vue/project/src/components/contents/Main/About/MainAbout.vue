<template>
  <div class="about">
    <div class="container">
      <div class="title-block">
        <h2>Преимущества</h2>
      </div>
      <app-about-items></app-about-items>
    </div>
  </div>
</template>

<script>
  import AboutItems from './AboutItems.vue';
  export default {
    name: "MainAbout",
    components: {
      appAboutItems: AboutItems
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
    padding-bottom: 70px;;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      right: 0;
      background-color: $greyLight;
      z-index: -1;
    }
  }
</style>

<template>
  <div class="about" id="about">
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
    background-color: $greyLight;
    z-index: 0;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      background-color: rgba($red, .5);
      -webkit-clip-path: polygon(50% 69%, 0% 100%, 100% 100%);
      clip-path: polygon(50% 69%, 0% 100%, 100% 100%);
      z-index: -1;
    }
  }
</style>

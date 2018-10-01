<template>
  <div>
    <app-main-slider></app-main-slider>
    <app-main-about></app-main-about>
    <app-main-program></app-main-program>
  </div>
</template>

<script>
  import MainSlider from './Slider/MainPageSlider.vue';
  import MainAbout from './About/MainAbout.vue';
  import MainProgram from './Program/MainProgram.vue';

  export default {
    name: "MainPage",
    components: {
      appMainSlider: MainSlider,
      appMainAbout: MainAbout,
      appMainProgram: MainProgram,
    }
  }
</script>

<style lang="scss">

</style>

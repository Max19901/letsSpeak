<template>
  <div>
    <app-main-slider></app-main-slider>
    <app-main-about></app-main-about>
    <app-main-program id="program"></app-main-program>
    <app-main-teachers></app-main-teachers>
    <app-main-test></app-main-test>
    <app-main-feedback></app-main-feedback>
  </div>
</template>

<script>
  import MainSlider from './Slider/MainPageSlider.vue';
  import MainAbout from './About/MainAbout.vue';
  import MainProgram from './Program/MainProgram.vue';
  import MainTest from './Test/MainTest.vue';
  import MainTeachers from './Teachers/MainTeachers.vue';
  import MainFeedback from './Feedback/MainFeedback.vue';

  export default {
    name: "MainPage",
    components: {
      appMainSlider: MainSlider,
      appMainAbout: MainAbout,
      appMainProgram: MainProgram,
      appMainTest: MainTest,
      appMainTeachers: MainTeachers,
      appMainFeedback: MainFeedback
    }
  }
</script>

<style lang="scss">

</style>

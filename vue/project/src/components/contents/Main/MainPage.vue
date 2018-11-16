<template>
  <div>
    <app-header></app-header>
    <app-main-slider></app-main-slider>
    <app-main-about></app-main-about>
    <app-main-program id="program"></app-main-program>
    <app-main-teachers></app-main-teachers>
    <app-main-test></app-main-test>
    <app-main-feedback></app-main-feedback>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from 'components/header/Header.vue';
  import MainSlider from './Slider/MainPageSlider.vue';
  import MainAbout from './About/MainAbout.vue';
  import MainProgram from './Program/MainProgram.vue';
  import MainTest from './Test/MainTest.vue';
  import MainTeachers from './Teachers/MainTeachers.vue';
  import MainFeedback from './Feedback/MainFeedback.vue';
  import Footer from 'components/footer/Footer.vue';

  export default {
    name: "MainPage",
    components: {
      appHeader: Header,
      appMainSlider: MainSlider,
      appMainAbout: MainAbout,
      appMainProgram: MainProgram,
      appMainTest: MainTest,
      appMainTeachers: MainTeachers,
      appMainFeedback: MainFeedback,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>

<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <app-logo></app-logo>
        <app-navigation></app-navigation>
        <app-phone></app-phone>
      </div>
    </div>
  </div>
</template>

<script>

  import Logo from './Head/Logo.vue';
  import Navigation from './Head/Navigation.vue';
  import Phone from './Head/Phone.vue';

  export default {
    name: "Header",
    components: {
      appLogo: Logo,
      appNavigation: Navigation,
      appPhone: Phone
    }
  }
</script>

<style scoped lang="scss">
  .header {
    padding: 10px 0;
    background: rgba(17,36,78,.9);
    position: fixed;
    box-shadow: 0px 9px 28px 0px rgba(0,0,0,0.26);
  }
</style>

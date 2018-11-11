<template>
  <div class="header">
    <div class="header-wrap">
      <div class="container">
        <div class="row">
          <app-logo></app-logo>
          <app-navigation></app-navigation>
          <app-enter></app-enter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Logo from './Head/Logo.vue';
  import Navigation from './Head/Navigation.vue';
  import Enter from './Head/Enter.vue';

  export default {
    name: "Header",
    components: {
      appLogo: Logo,
      appNavigation: Navigation,
      appEnter: Enter
    }
  }
</script>

<style scoped lang="scss">
  .header-wrap {
    width: 100%;
    height: 100px;
    padding: 10px 0;
    background: #fafafa;
    position: fixed;
    box-shadow: 0px 9px 28px 0px rgba(0, 0, 0, 0.26);
  }
</style>

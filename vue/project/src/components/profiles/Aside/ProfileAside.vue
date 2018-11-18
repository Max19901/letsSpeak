<template>
  <div>
    <div class="aside-wrap">
      <app-aside-head></app-aside-head>
      <app-aside-items></app-aside-items>
    </div>
  </div>
</template>

<script>
  import AsideHead from './ProfileAsideHead.vue';
  import AsideItems from './ProfileAsideItems.vue';

  export default {
    name: "profile-aside",
    components: {
      appAsideHead: AsideHead,
      appAsideItems: AsideItems
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../style/global";

  .aside-wrap {
    height: 100vh;
    background-color: $black;
  }

</style>

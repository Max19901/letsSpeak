<template>
  <div>
    <div class="container-profile">
      <div class="aside">
        <app-aside></app-aside>
      </div>
      <div class="content">
          <app-header></app-header>
          <app-content></app-content>
      </div>
    </div>
  </div>
</template>

<script>
  import Aside from 'components/profiles/Aside/ProfileAside.vue';
  import Header from 'components/profiles/Header/ProfileHead.vue';
  import Content from 'components/profiles/Content/ProfileContent.vue';

  export default {
    name: "profile-page",
    components: {
      appAside: Aside,
      appHeader: Header,
      appContent: Content
    }
  }
</script>

<style scoped lang="scss">

  .container-profile {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .aside {
      height: 100%;
      width: 300px;
    }
    .content {
      height: 100%;
      width: calc(100% - 300px);
    }
  }
</style>

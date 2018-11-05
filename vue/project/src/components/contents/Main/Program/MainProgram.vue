<template>
  <div class="program" id="program">
    <div class="container-fluid">
      <div class="title-block white">
        <h2>Программа</h2>
      </div>
      <app-program-items></app-program-items>
    </div>
  </div>
</template>

<script>
  import Items from './ProgramItems';

  export default {
    name: "MainProgram",
    components: {
      appProgramItems: Items
    }
  }
</script>

<style scoped lang="scss">
  @import "./../../../../global";

  .program {
    position: relative;
    background-image: url('../../../../assets/images/6.jpg');
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    .container-fluid {
      overflow: hidden;
      z-index: 3;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
        z-index: -1;
        top: 0;
        left: 0;
      }
    }
  }
</style>

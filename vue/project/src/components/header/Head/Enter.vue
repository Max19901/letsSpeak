<template>
    <div class="enter col col-2">
      <router-link :to="{name: 'Register'}">
        <a>Войти</a>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Phone"
    }
</script>

<style scoped lang="scss">
  @import '../../../global';

  .enter {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      position: relative;
      letter-spacing: 1px;
      color: $black;
      display: block;
      overflow: hidden;
      transition: 0.7s;
      font-family: 'YandexR';
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: $blue;
        z-index: 2;
        transform: translate3d(-100%,0,0) translate3d(-1px,0,0);
        transition: transform 0.7s;
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
      }
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: $red;
        top: 0;
        transform: translate3d(-100%,0,0) translate3d(-1px,0,0);
        left: 0;
        z-index: -1;
        transition: transform 0.7s;
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
      }
      &:hover {
        color: #fff;
        &:before {
          transform: translate3d(100%,0,0) translate3d(1px,0,0);
        }
        &:after {
          transform: translate3d(0,0,0);
        }
      }
    }
  }
</style>

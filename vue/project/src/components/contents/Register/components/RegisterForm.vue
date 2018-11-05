<template>
  <div>
    <div class="row justify-content-center">
      <div class="col col-8 navigate-form">
        <button class=" navigate-form__btn">Войти</button>
        <button class=" navigate-form__btn">Зарегистрироваться</button>
      </div>
    </div>
    <transition>
      <app-enter></app-enter>
    </transition>
  </div>


</template>

<script>
  import Enter from './Enter.vue';

  export default {
    name: "RegisterForm",
    components: {
      appEnter: Enter
    }
  }
</script>

<style scoped lang="scss">
  .navigate-form {
    display: flex;
    &__btn {
      width: 50%;
    }
  }
</style>

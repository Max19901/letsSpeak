<template>
  <div class="container registration">
    <div class="title-block">
      <h2>Регистрация и Вход</h2>
    </div>
   <app-form></app-form>
  </div>
</template>

<script>
  import RegisterForm from './components/RegisterForm.vue';
  export default {
    name: "Register",
    components: {
      appForm: RegisterForm
    }
  }
</script>

<style scoped lang="scss">
  .registration {
    padding-top: 100px;
  }
</style>

<template>
  <div class="registration">
    <div class="container">
      <div class="title-block">
        <h2>Регистрация и Вход</h2>
      </div>
      <app-form></app-form>
    </div>
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
    padding-top: 150px;
    height: 100vh;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -2;
      background-image: url('../../../assets/images/1.jpg');
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(255,255,255,.7);
      z-index: -1;
    }
  }
</style>

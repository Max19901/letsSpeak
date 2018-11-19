<template>
  <div class="row form-enter justify-content-center">
    <div class="col col-12 form-wrap">
      <h2>Вход</h2>
      <div class="form">
        <div class="input-group">
          <label for="Login">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </label>
          <input id="Login"
                 placeholder="Email"
                 type="text">
        </div>
        <div class="input-group">
          <label for="Password">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </label>
          <input id="Password"
                 placeholder="Пароль"
                 type="text">
        </div>
        <button @click='onBtnLoginClick' class="button">Войти</button>
      </div>
      <div class="info-reset">
        <h3></h3>
      </div>
    </div>
  </div>
</template>

<script>
  import { Application }  from "logic/Application";
  const Api = new Application();

  export default {
    name: "Enter",
    data() {
      return {
        user: {
          login: '123',
          password: '123'
        }
      }
    },
    methods: {
      onBtnLoginClick () {
       /*Api.login().then(res => {
         if (res.data.mail) {
           this.$router.push('/profile');
         }
       })*/
        Api.login(this.user).then(result => {
          console.log(result);
        });
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "./../../../../style/global";

  .form-enter {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    width: 50%;
    z-index: 5;
    .form-wrap {
      h2{
        font-family: 'YandexR';
      }
    }
    .form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .input-group {
        label {
          position: absolute;
          top: 7px;
          left: 10px;
          width: 30px;
          height: 31px;
          color: $black;
        }
        input {
          outline: none;
          width: 100%;
          border: 1px solid $grey;
          margin-bottom: 20px;
          font-family: 'YandexR';
          position: relative;
          &:not([type="submit"]) {
            padding: 5px 0 5px 35px;
          }
        }
      }
    }
  }

</style>

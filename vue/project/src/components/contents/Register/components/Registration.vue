<template>
  <div class="row form-registration justify-content-center">
    <div class="col col-12 form-wrap">
      <h2>Регистрация</h2>
      <div class="form">
        <div class="input-group">
          <label for="LoginReg">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </label>
          <input id="LoginReg"
                 placeholder="Email"
                 type="text">
        </div>

        <div class="input-group">
          <label for="PasswordReg">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </label>
          <input id="PasswordReg"
                 placeholder="Пароль"
                 type="text">
        </div>
        <button class="button">Регистрация</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Registration"
  }
</script>

<style scoped lang="scss">
  @import "./../../../../global";

  .form-registration {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    width: 50%;
    z-index: 5;
    .form-wrap {
      h2 {
        font-family: 'YandexR';
      }
    }
    .form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .input-group {
        position: relative;
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

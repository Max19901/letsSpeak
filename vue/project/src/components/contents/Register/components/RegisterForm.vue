<template>
  <div>
    <div class="row navigate justify-content-center">
      <div class="col col-8 navigate-form" :class="{'enter': enter ,'registration' : registration}">
        <div class="navigate-form__enter">
          <h3>Есть аккаунт?</h3>
          <p>Вы уже зарегистрированны в системе и у вас есть логин с паролем? Нажмите "Войти" </p>
          <button class="navigate-form__btn button btn-enter" @click="changeComponentForm('appEnter')">Войти</button>
        </div>
        <div class="navigate-form__registration">
          <h3>У вас нет аккаунта?</h3>
          <p>Если вы уже побщались с нашим менеджером или решили выбрать программу и у вас нет аккаунта? Нажмите
            "Регистрация"</p>
          <button class="navigate-form__btn button btn-reg" @click="changeComponentForm('appRegistration')">
            Регистрация
          </button>
        </div>
        <transition name="fade"
                    appear
                    mode="out-in"
        >
          <component :is="selectComponentForm"></component>
        </transition>
      </div>
    </div>
  </div>


</template>

<script>
  import Enter from './Enter.vue';
  import Registration from './Registration.vue';


  export default {
    name: "RegisterForm",
    data() {
      return {
        selectComponentForm: "appEnter",
        enter: true,
        registration: false
      }
    },
    components: {
      appEnter: Enter,
      appRegistration: Registration
    },
    methods: {
      changeComponentForm(name) {
        if (name === 'appEnter') {
          this.selectComponentForm = name;
          this.enter = true;
          this.registration = false;
        } else {
          this.selectComponentForm = name;
          this.enter = false;
          this.registration = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./../../../../global";

  .navigate {
    padding-top: 70px;
    padding-bottom: 100px;
  }

  .navigate-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    background-color: #3F444A;
    min-height: 250px;
    &__enter, &__registration {
      width: 45%;
      padding: 30px;
      color: $greyLight;
      h3 {
        font-family: 'YandexR';
      }
      p {
        font-family: 'YandexR';
        font-size: .7rem;
        color: $grey;
      }
      .button {
        background-color: $blue;
      }
    }
    &__btn {
      background: $red;
      outline: none;
      padding: 10px 25px;
      border: none;
      transition: .4s;
    }
    &:after {
      content: '';
      position: absolute;
      background-color: #fff;
      width: 50%;
      height: 100%;
      top: 50%;
      left: 25px;
      transform: translateX(0) translateY(-50%);
      transition: .5s cubic-bezier(0, .26, .38, 1.18);
      min-height: 360px;
      z-index: 2;
    }
    &.registration {
      &:after {
        left: -25px;
        transform: translateX(100%) translateY(-50%);
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }

</style>

<template>
  <div class="test">
    <div class="container">
      <div class="title-block ">
        <h2>Узнай свой уровень</h2>
      </div>
      <p class="description-block">
        Быстрый бесплатный онлайн-тест по английскому языку подскажет тебе, какой у тебя уровень английского и какая программа Lets Speak подойдет для тебя
      </p>
      <div class="test-button">
        <button class="button">Пройти тест</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MainTest"
    }
</script>

<style scoped lang="scss">
  @import "../../../../style/global";

  .test {
    padding-top: 70px;
    padding-bottom: 70px;
    background-image: url('../../../../assets/images/bgTest.jpg');
    background-position: right top;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    .title-block h2 {
      color: $white;
    }
    .description-block {
      font-family: 'YandexR';
      font-size: .8rem;
      text-align: center;
      width: 50%;
      margin: 0 auto;
      color: $white;
    }
    &-button {
      padding-top: 50px;
      text-align: center;
      button {
        background-color: $red;
      }
    }
  }
</style>

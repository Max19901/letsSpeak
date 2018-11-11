<template>
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col col-7 offset-5">
            <div class="banner-content">
              <p class="banner-content__subTitle">
                ПРАКТИКА ОБУЧЕНИЯ И ПОЛЕЗНЫЕ СОВЕТЫ
              </p>
              <h2>МЫ ПОДГОТОВЛЯЕМ СТУДЕНТОВ ДЛЯ ЭКЗАМЕНОВ И ИСПЫТАНИЙ</h2>
              <p class="banner-content__description">
                Чтобы получить хорошую оценку на экзамене Speaking, вам нужно будет производить простые предложения по знакомым темам, а также уметь излагать причины, мнения и объяснять свои планы. Вы будете получать высшие оценки, если вы покажете, что можете говорить в течение длительных периодов времени, а также если вы используете более сложные структуры (например, условные, сравнительные языки, пассивы и т. Д.). Мы поощряем наших учеников понимать и использовать этот диапазон языков в наших классов A2 и B1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AboutBanner"
    }
</script>

<style scoped lang="scss">

  @import '../../../../global';

  .banner {
    background-image: url('../../../../assets/images/banner.jpg');
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 600px;
    display: flex;
    align-items: center;
    .container {
      height: 100%;
    }
    &-content {
      &__subTitle {
        color: $red;
        font-family: 'YandexR';
      }
      &__description {
        color: #333;
        font-family: 'YandexR';
      }
    }
  }
</style>

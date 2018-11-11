<template>
  <div class="content">
    <div class="video-wrap">
      <!--<video-bg-->
        <!--class="videoBg"-->
        <!--:sources="['../../../../src/assets/VideoBg.mp4']" img="../../../../src/assets/images/bigben.png">-->
      <!--</video-bg>-->
      <div class="video-wrap__test">
        <div class="container">
          <div class="test-description">
            <div class="row">
              <div class="col col-7">
                <h1>Обучайтесь Английскому В Удовольствие</h1>
                <p>Определите свой уровень владения английским языком, проведя бесплатный онлайн-тест на английском языке.</p>
                <button class="button">Пройти тест</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<agile :speed="700"-->
    <!--:timing="'ease-in-out'" :fade="true"-->
    <!--:autoplay="true">-->
    <!--<div class="slide slide&#45;&#45;1">-->
    <!--<div class="slide_wrap container">-->
    <!--<div class="row">-->
    <!--<div class="col col-6">-->
    <!--<h3>slide 1</h3>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="slide slide&#45;&#45;2">-->
    <!--<div class="slide_wrap container">-->
    <!--<div class="row">-->
    <!--<div class="col col-6">-->
    <!--<h3>slide 2</h3>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</agile>-->
  </div>
</template>

<script>
  import VideoBg from 'vue-videobg'

  export default {
    name: "MainPageSlider",
    components: {VideoBg},
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../global";

  .content {
    width: 100%;
    padding-top: 100px;
    .video-wrap {
      position: relative;
      padding-top: 120px;
      padding-bottom: 120px;
      width: 100%;
      height: 100%;
      background-image: url("./../../../../assets/images/bigben.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .videoBG {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      &__test {
        width: 100%;
        .test-description {
          color: $white;
          h1 {
            font-size: 3rem;
            text-transform: uppercase;
          }
          p {
            font-family: 'YandexR';
          }
          button {
            background-color: $red;
          }
        }
      }
    }
  }

</style>

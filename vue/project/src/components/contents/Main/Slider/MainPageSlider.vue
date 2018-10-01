<template>
  <div class="content">
    <video-bg
      class="videoBg"
      :sources="['../../../../src/assets/VideoBg.mp4']" img="../../../../src/assets/images/bigben.png">
    </video-bg>
    <agile :speed="700"
           :timing="'ease-in-out'" :fade="true"
           :autoplay="true">
      <div class="slide slide--1">
          <div class="slide_wrap container">
            <div class="row">
              <div class="col col-6">
                <h3>slide 1</h3>
              </div>
            </div>
          </div>
      </div>
      <div class="slide slide--2">
        <div class="slide_wrap container">
          <div class="row">
            <div class="col col-6">
              <h3>slide 2</h3>
            </div>
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
  import VideoBg from 'vue-videobg'

  export default {
    name: "MainPageSlider",
    components: { VideoBg },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    width: 100%;
    height: 100vh;
    .videoBG {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
    }
    .agile {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0,0,0,.7);
    }
  }
  .slide {
    background: {
      position: center;
      size: cover;
    }
    &:before {
      background-color: rgba(#000, .2);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &--1 {
      //background-image: url(../../../../assets/images/slider-1.jpg);
      height: 100vh;
    }
    &--2 {
      //background-image: url(../../../../assets/images/slider-3.jpg);
      height: 100vh;
    }
    &_wrap {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      h3 {
        color: #fff;
      }
    }
  }
</style>

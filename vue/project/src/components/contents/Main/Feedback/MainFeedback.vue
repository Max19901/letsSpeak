<template>
  <div class="feedback" id="feedback">
    <div class="container">
      <div class="title-block ">
        <h2>Отзывы</h2>
      </div>
      <agile :speed="700"
             :arrows="true"
             :timing="'ease-in-out'" :fade="false"
             :autoplay="true">
        <div class="slide slide--1">
          <div class="slide_wrap container">
            <div class="row">
              <div class="col col-12 slide_wrap-item">
                <div class="slide_wrap-item--img">
                  <img src="../../../../assets/images/andrey.jpg" alt="">
                </div>
                <h3>Андрей</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nam numquam officia, pariatur quo
                  vero! Aperiam aut autem eos fuga illo optio voluptates? A animi aperiam dolorum ipsa repudiandae
                  unde?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="slide slide--2">
          <div class="slide_wrap container">
            <div class="row">
              <div class="col col-12 slide_wrap-item">
                <div class="slide_wrap-item--img">
                  <img src="../../../../assets/images/katya.jpg" alt="">
                </div>
                <h3>Таня</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dolorum enim error eum
                  expedita facilis id laboriosam minima nemo neque non nostrum quae quibusdam ratione totam unde,
                  veniam, voluptatem!</p>
              </div>
            </div>
          </div>
        </div>
      </agile>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainFeedback"
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/global";

  .feedback {
    background-color: #f9f9f9;
    padding-top: 70px;
    padding-bottom: 70px;
    .slide {
      background: {
        position: center;
        size: cover;
      }
      &:before {
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
      &_wrap {
        &-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          &--img{
            width: 120px;
            height: 120px;
            overflow: hidden;
            text-align: center;
            border-radius: 50%;
            img {
              display: inline-block;
              height: 100%;
              position: relative;
              left: -40%;
            }
          }
          h3 {
            color: $blue;
          }
          p {
            padding: 0 60px;
            font-family: "YandexR";
            text-align: center;
          }
        }
      }
    }
  }

</style>

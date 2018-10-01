<template>
  <div class="row">
    <div class="about-items col col-3">
      <div class="about-item">
        <h4>Удобный график</h4>
        <div class="about-item__icon">
          <img src="./../../../../assets/images/icon/014-network.png" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur deserunt dolorem, enim
          eum ex explicabo fuga ipsam, laborum magni nihil obcaecati quae quibusdam quidem reprehenderit vero voluptas
          voluptatibus.</p>
      </div>
    </div>
    <div class="about-items col col-3">
      <div class="about-item">
        <h4>Уникальный подход</h4>
        <div class="about-item__icon">
          <img src="./../../../../assets/images/icon/002-world-map.png" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores doloribus, et exercitationem id
          laborum magnam molestias pariatur perferendis placeat porro quam rem saepe sequi similique sint tempora. Cum,
          porro.</p>
      </div>
    </div>
    <div class="about-items col col-3">
      <div class="about-item">
        <h4>Гарантия результата</h4>
        <div class="about-item__icon">
          <img src="./../../../../assets/images/icon/011-computer.png" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt dolorum earum eius, error et ex id
          necessitatibus, nihil odit pariatur provident quaerat quia rem sit totam unde, voluptates voluptatibus!</p>
      </div>
    </div>
    <div class="about-items col col-3">
      <div class="about-item">
        <h4>Разговорная практика</h4>
        <div class="about-item__icon">
          <img src="./../../../../assets/images/icon/010-creative.png" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt dolorum earum eius, error et ex id
          necessitatibus, nihil odit pariatur provident quaerat quia rem sit totam unde, voluptates voluptatibus!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutItems"
  }
</script>

<style scoped lang="scss">
  @import '../../../../global';

  .about-items {
    display: flex;
  }
  .about-item {
    text-align: center;
    padding: 15px;
    position: relative;
    h4 {
      position: relative;
      display: inline-block;
      font-size: 1.2rem;
      &:after {
        content: '';
        position: absolute;
        width: 50%;
        height: 4px;
        background: $blue;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
      }
    }
    &__icon {
      padding: 10px 0;
      text-align: center;
      margin-top: 30px;
      img {
        width: 55px;
      }
    }
    p {
      padding-top: 15px;
      font-family: 'YandexR';
      font-size: 0.9rem;
      line-height: 20px;
      letter-spacing: 0.5px;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 0;
      border-left: 1px solid $grey;
      border-right: 1px solid $grey;
      transition: height .5s;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      left: 50%;
      width: 0;
      height: 100%;
      border-top: 1px solid $grey;
      border-bottom: 1px solid $grey;
      transition: width .5s;
    }
    &:hover {
      &:after {
        height: 100%;
      }
      &:before {
        width: 100%;
      }
    }
  }
</style>

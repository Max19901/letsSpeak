<template>
  <div class="row">
    <div class="program-description col col-7">
      <h2>Title Program</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis iure laborum magni minima nemo nisi sed
        soluta tempora velit? Ab aliquam doloribus eaque pariatur quos, reiciendis sapiente! Accusantium,
        distinctio?</p>
    </div>
    <div class="program-items col col-5">
      <div class="program-items__item" v-for="program in programs">
        <img class="item-bg" v-bind:src="program.bgImage" alt="">
        <div class="item-icon">
          <!--<img v-bind:src="program.icon" alt="">-->
        </div>
        <div class="item-wrap">
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProgramItems",
    data() {
      return {
        programs: [
          {
            title: 'Для детей',
            description: 'Срок обучения от 3 до 12 месяцев',
            icon: '../../../src/assets/images/icon/004-puzzle-pieces.png',
            bgImage: '../../../src/assets/images/3.jpg',
            body: ''
          },{
            title: 'Английский с нуля',
            description: 'Срок обучения от 6 до 12 месяцев',
            icon: '../../../src/assets/images/icon/004-puzzle-pieces.png',
            bgImage: '../../../src/assets/images/4.jpg',
            body: ''
          },{
            title: 'Интесив',
            description: 'Срок обучения от 2 до 6 месяцев',
            icon: '../../../src/assets/images/icon/004-puzzle-pieces.png',
            bgImage: '../../../src/assets/images/7.jpg',
            body: ''
          },{
            title: 'Помощь в заданиях',
            description: 'Разбор заданий',
            icon: '../../../src/assets/images/icon/004-puzzle-pieces.png',
            bgImage: '../../../src/assets/images/1.jpg',
            body: ''
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/global";

  .program-description {
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5%;
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    border-right: 1px solid rgba(255, 255, 255, 0.24);
  }
  .program-items {
    padding: 0;
    position: static;
    &__item {
      overflow: hidden;
      padding: 15px;
      border-top: 1px solid rgba(255, 255, 255, 0.24);
      border-right: 1px solid rgba(255, 255, 255, 0.24);
      color: $white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      min-height: 200px;
      transition: background .5s;
      .item-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: -1;
        left: 0;
        opacity: 0;
        transform: scale(1);
        transition: opacity .5s, transform .6s;
      }
      .item-icon {
        width: 20%;
        text-align: center;
        img {
          width: 100%;
          transform: translateX(-200%);
          transition: transform .5s;
        }
      }
      .item-wrap {
        width: 70%;
        h3 {
          text-align: right;
          transform: translateY(100px);
          transition: transform .5s;
        }
        p {
          transform: translateY(150px);
          opacity: 0;
          transition: .5s;
          font-family: 'YandexR';
          text-align: right;
        }
      }
      &:hover {
        background: rgba(17, 36, 78, 0.8);
        .item-wrap {
          h3 {
            transform: translateY(0);
          }
          p {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .item-icon {
          img {
            transform: translateX(0);
          }
        }
        .item-bg {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }
</style>

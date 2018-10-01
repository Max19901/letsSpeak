<template>
  <div class="row">
    <div class="program-description col col-7">
      <h2>Title Program</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis iure laborum magni minima nemo nisi sed
        soluta tempora velit? Ab aliquam doloribus eaque pariatur quos, reiciendis sapiente! Accusantium,
        distinctio?</p>
    </div>
    <div class="program-items col col-5">
      <div class="program-items__item">
        <img class="item-bg" src="../../../../assets/images/3.jpg" alt="">
        <div class="item-icon">
          <img src="../../../../assets/images/icon/004-puzzle-pieces.png" alt="">
        </div>
        <div class="item-wrap">
          <h3>Для детей</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem blanditiis dolor eos excepturi
            facilis fugiat impedit ipsa, molestiae nam, nobis, odit placeat quae reiciendis rerum? Consequuntur delectus
            iste ut!</p>
        </div>
      </div>
      <div class="program-items__item">
        <img class="item-bg" src="../../../../assets/images/6.jpg" alt="">
        <div class="item-icon">
          <img src="../../../../assets/images/icon/004-puzzle-pieces.png" alt="">
        </div>
        <div class="item-wrap">
          <h3>Английский с нуля</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem blanditiis dolor eos excepturi
            facilis fugiat impedit ipsa, molestiae nam, nobis, odit placeat quae reiciendis rerum? Consequuntur delectus
            iste ut!</p>
        </div>
      </div>
      <div class="program-items__item">
        <img class="item-bg" src="../../../../assets/images/4.jpg" alt="">
        <div class="item-icon">
          <img src="../../../../assets/images/icon/004-puzzle-pieces.png" alt="">
        </div>
        <div class="item-wrap">
          <h3>Интесив</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem blanditiis dolor eos excepturi
            facilis fugiat impedit ipsa, molestiae nam, nobis, odit placeat quae reiciendis rerum? Consequuntur delectus
            iste ut!</p>
        </div>
      </div>
      <div class="program-items__item">
        <img class="item-bg" src="../../../../assets/images/1.jpg" alt="">
        <div class="item-icon">
          <img src="../../../../assets/images/icon/004-puzzle-pieces.png" alt="">
        </div>
        <div class="item-wrap">
          <h3>Помощь в заданиях</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem blanditiis dolor eos excepturi
            facilis fugiat impedit ipsa, molestiae nam, nobis, odit placeat quae reiciendis rerum? Consequuntur delectus
            iste ut!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProgramItems"
  }
</script>

<style scoped lang="scss">
  @import "../../../../global";

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
          transform: translateY(120px);
          transition: transform .5s;
        }
        p {
          transform: translateY(200%);
          opacity: 0;
          transition: .5s;
        }
      }
      &:hover {
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

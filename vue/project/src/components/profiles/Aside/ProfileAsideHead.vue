<template>
  <div>
    <div class="aside-head">
      <div class="aside-head__avatar">
        <img :src="data.defaultImage" alt="">
      </div>
      <div class="aside-head__list-group" :class="{'active': blockSetting}">
        <div class="list-group__head nameAside" @click="blockSetting = !blockSetting">
          <p>Максим Швец</p>
        </div>
        <div class="list-group__items">
          <div>
            <div class="list-group__head accountAside">
              <p>Account</p>
            </div>
          </div>
          <div>
            <div class="list-group__head settingsAside">
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAsideHead",
    data() {
      return {
        data: {
          defaultImage: './src/assets/images/user.png'
        },
        blockSetting: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../style/global";

  .aside-head {
    min-height: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(#21ce99, .8);
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("../../../assets/images/London-PNG-File.png");
      background-position: top center;
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
    }
    &__avatar {
      position: relative;
      z-index: 4;
      padding-top: 15px;
      padding-left: 15px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    &__list-group {
      margin-top: 30px;
      position: relative;
      z-index: 4;
      .list-group__head {
        color: #fff;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 15px 0 80px;
        position: relative;
        transition: .4s;
        cursor: pointer;
        &:hover {
          background: hsla(0, 0%, 100%, .3);
        }
        &.nameAside {
          &:before {
            content: '\f2be';
            font-family: "FontAwesome";
          }
          &:after {
            content: '\f078';
            font-family: "FontAwesome";
          }
        }
        &.accountAside {
          &:before {
            content: '\f2c3';
            font-family: "FontAwesome";
          }
        }
        &.settingsAside {
          &:before {
            content: '\f013';
            font-family: "FontAwesome";
          }
        }
        &:before {
          position: absolute;
          left: 20px;
        }
        &:after {
          position: absolute;
          right: 20px;
          transition: .5s cubic-bezier(.4,0,.2,1);
        }
        p {
          color: #fff;
          margin: 0;
        }
      }
      .list-group__items {
        background-color: $black;
        height: 0;
        overflow: hidden;
        transition: .5s cubic-bezier(.4,0,.2,1);
      }
      &.active {
        .list-group__items {
          height: 100px;
        }
        .nameAside {
          background: hsla(0, 0%, 100%, .3);
          &:after {
            transform: rotate(180deg);
          }
          &:before {
            color: #21ce99;
          }
        }
      }
    }
  }
</style>

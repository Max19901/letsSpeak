<template>
    <div class="row teacher">
      <div class="col col-6">
        <div class="teacher-photo">
          <img src="../../../../assets/images/teacher.png" alt="">
        </div>
      </div>
      <div class="col col-6">
        <div class="teacher-describe">
          <h3>Ольга Александровна</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consectetur dolor, dolore doloremque et in modi natus necessitatibus nostrum placeat provident quaerat recusandae reiciendis repudiandae suscipit velit voluptate voluptates.</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Teachers"
    }
</script>

<style scoped lang="scss">
  @import "../../../../global";

  .teacher {
    &-photo {
      position: relative;
      img {
        width: 100%;
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 90%;
        background-color: $blue;
        z-index: -1;
      }
    }
    &-describe {
      width: 100%;
      height: 100%;
      padding-left: 10px;
      h3 {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          width: 50%;
          height: 50%;
          top: 20px;
          left: 0;
          background-color: rgba($red, .8);
          z-index: -1;
        }
      }
    }
  }
</style>

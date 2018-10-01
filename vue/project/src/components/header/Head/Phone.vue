<template>
    <div class="phone col col-2">
      <a href="tel:0992313238">(099) 231 32 38</a>
    </div>
</template>

<script>
    export default {
        name: "Phone"
    }
</script>

<style scoped lang="scss">
  .phone {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #fff;
    }
  }
</style>

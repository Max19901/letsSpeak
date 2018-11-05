<template>
  <div class="teachers" id="teachers">
    <div class="container">
      <div class="title-block ">
        <h2>Преподаватели</h2>
      </div>
      <app-teacher></app-teacher>
    </div>
  </div>
</template>

<script>
  import Teacher from './Teachers'

  export default {
    name: "MainTeachers",
    components: {
      appTeacher: Teacher
    }
  }
</script>

<style scoped lang="scss">
  .teachers {
    padding-top: 70px;
    padding-bottom: 70px;
  }
</style>

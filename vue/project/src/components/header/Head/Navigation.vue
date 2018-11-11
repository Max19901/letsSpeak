<template>
  <div class="navigation col col-8">
    <ul>
      <router-link tag="li" class="navigation-link"
                   :key="index"
                   v-for="(item, index) in navMenu"
                   :to="item.link">
        <a>
            <span>
              {{ item.title }}
            </span>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data() {
      return {
        navMenu: [
          {
            title: 'Преимущества',
            link: {
              name: 'Home',
              hash: '#about'
            }
          },
          {
            title: 'Программа',
            link: {
              name: 'Home',
              hash: '#program'
            }
          },
          {
            title: 'Преподователи',
            link: {
              name: 'Home',
              hash: '#teachers'
            }
          },
          {
            title: 'Отзывы',
            link: {
              name: 'Home',
              hash: '#feedback'
            }
          },
          {
            title: 'Контакты',
            link: {
              name: 'Home',
              hash: '#footer'
            }
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../global';

  .navigation {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    &-link {
      list-style-type: none;
      display: inline-block;
      a {
        text-decoration: none;
        font-size: 1rem;
        span {
          position: relative;
          letter-spacing: 1px;
          color: $black;
          display: block;
          overflow: hidden;
          transition: 0.7s;
          font-family: 'YandexR';
          &:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $blue;
            z-index: 2;
            transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);
            transition: transform 0.7s;
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
          }
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: $red;
            top: 0;
            transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);
            left: 0;
            z-index: -1;
            transition: transform 0.7s;
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
          }
          &:hover {
            color: #fff;
            &:before {
              transform: translate3d(100%, 0, 0) translate3d(1px, 0, 0);
            }
            &:after {
              transform: translate3d(0, 0, 0);
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="row about-items">
    <div class=" col col-3">
      <ul class="about-item">
        <li
          @click="selectedItem(item)"
          v-for="(item, $index) in aboutData"
          :class="{active:item.id == selected}">
            <span>0{{ $index+1 }}/</span>
            <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="about-item-description col col-7">
      <h2 class="about-item__title">{{ selectItemDescription.title }}</h2>
      <div class="about-item__text">{{ selectItemDescription.text }}</div>
      <p class="about-item__desc">{{ selectItemDescription.textDesc }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutItems",
    data() {
      return {
        aboutData: [
          {
            id: this.selected,
            name: 'Удобный график',
            description: {
              title: 'Удобный график',
              text: 'Главное в обучении то, что ВЫ сами определяете время когда вам удобно провести урок. Достаточно выбрать число и свободное время, на этом все',
              textDesc: 'Вам ненужно тратить время на то, чтобы добраться на урок и на дорогу домой'
            }
          },
          {
            id: 2,
            name: 'Уникальный подход',
            description: {
              title: 'Уникальный подход',
              text: 'Мы ориентируемся на цели ученика. Одному мы помогаем интенсивно выучить язык. Другого готовим к поступлению в вузы или к сдачам экзаменов. Третий просто обучается в удовольствие языку в нашей школе.',
              textDesc: 'Это и есть уникальный подход: готовность вместе достигать именно ваших целей.'
            }
          },
          {
            id: 3,
            name: 'Гарантия результата',
            description: {
              title: 'Гарантия результата',
              text: 'Образование и большой опыт преподавания — необходимые условия для педагога, работающего в Staccato. Для нас это действительно важно.',
              textDesc: 'Мы в курсе всех актуальных и эффективных методик обучения, потому что преподаватели «Стаккато» регулярно участвуют в профильных мастер-классах и перенимают опыт педагогов с мировых именем.'
            }
          },
          {
            id: 4,
            name: 'Разговорная практика',
            description: {
              title: 'Разговорная практика',
              text: 'Более 80% людей, приходящих к в Staccato, никогда прежде не занимались музыкой. «От нуля и до профи» — так можно охарактеризовать наш подход, ведь мы вместе с вами пройдем весь путь обучения с самого начала до любителя. А потом и до профессионала.',
              textDesc: 'Обучение музыке — это сложная и тонкая работа. Под руководством опытного наставника вы действительно можете добиться хороших результатов. Самое важное, чтобы вы находили время для регулярных занятий в школе и дома.'
            }
          }
        ],
        selectItemDescription: 'Hello',
        selected: undefined,
      }
    },
    methods: {
      selectedItem(item) {
        this.selected = item.id;
        this.selectItemDescription = item.description;
      }
    },
    created(){
      this.selectItemDescription = this.aboutData[0].description;
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../../style/global';

  .about-items {

  }

  .about-item {
    padding: 0;
    width: 100%;
    li {
      list-style-type: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      border-right: 1px solid $grey;
      padding: 10px 0;
      span {
        font-size: .8rem;
        margin-right: 20px;
        color: #c2c2c2;
        font-weight: 500;
        font-family: 'YandexR';
      }
      p {
        font-size: 1rem;
        font-family: 'YandexR';
        margin: 0;
        font-weight: 500;
      }
      &.active {
        border-right: 1px solid $red;
        span, p {
          font-weight: 700;
        }
      }
    }
  }

  .about-item-description {
    .about-item__title {
      margin-bottom: 30px;
    }
    .about-item__text {
      background: rgba($red, .6);
      display: inline;
      line-height: 1.8;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .about-item__desc {
      line-height: 1.4;
      font-family: 'YandexR';
      font-size: 1.2rem;
      margin-top: 30px;
    }
  }
</style>

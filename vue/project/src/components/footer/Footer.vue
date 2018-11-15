<template>
    <div class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="col col-6 footer-contact">
            <h5>Lets Speak English Online School</h5>
            <ul>
              <li>
                <p>Телефон: </p>
                <a href="tel:0992313238">0992313238</a>
              </li>
              <li>
                <p>Email: </p>
                <a href="mailto:noisyboy19901@gmail.com">letsspreak@net.ua</a>
              </li>
              <li>
                <span><a href="">Facebook</a></span>
                <span><a href="">Viber</a></span>
                <span><a href="">Telegram</a></span>
              </li>
            </ul>
          </div>
          <div class="col col-6 footer-form">

          </div>
        </div>
        <div class="row">
          <div class="copyright col col-12">
            <p>Все права защищены. Lets Speak © 2018</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  @import "../../style/global";

  .footer {
    padding-top: 70px;
    background-color: $black;
    &-contact {
      font-family: 'YandexR';
      padding-bottom: 70px;
      h5 {
        color: $greyLight;
        line-height: 1;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        li {
          display: flex;
          flex-direction: row;
          font-family: 'YandexR';
          align-items: center;
          p {
            margin-bottom: 0;
            margin-right: 10px;
            color: $red;
          }
          a {
            color: $greyLight;
            font-size: .9rem;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .copyright {
    text-align: center;
    p {
      font-size: .8rem;
      color: $grey;
      font-family: "YandexR";
      margin-bottom: 0;
    }
  }
</style>

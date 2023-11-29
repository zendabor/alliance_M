<script>;

export default {
  data() {
    return {
      className: 'footer-menu',
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="flex map">
        <div class="footer_map">
          <iframe
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1355874689"
              width="560"
              height="400"
              frameborder="0"
          ></iframe>
        </div>
        <div class="footer_contact">
          <h1 class="footer_title">Контакты</h1>
          <ul>
            <li>
              <img src="@img/icons/geo.svg" alt="Geo">
              <p>Краснодар, ул. Ростовское шоссе, 7 <br><a href="tel:+89180259393">8 (918) 025-93-93</a></p>
            </li>
            <li>
              <img src="@img/icons/geo.svg"  alt="Geo">
              <p>Краснодар, ул. Ростовское шоссе, 7 <br><a href="tel:+89180259393">8 (918) 025-93-93</a></p>
            </li>
            <li>
              <img src="@img/icons/mail.svg" alt="Mail">
              <p><a href="mailto:alliance.motors@bk.ru" class="m-0">alliance.motors@bk.ru</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-navbar">
        <div class="footer_menubar">
          <router-link to="/" class="footer_logo">
            <img src="@img/logo.svg" alt="Logo">
          </router-link>
          <Navbar :className="className"/>
        </div>

        <div class="footer-contact">
          <div class="footer-phone_1 footer-phone">
            <p class="footer-phone_text">Ростовское шоссе, 7</p>
            <a href="tel:+79180259393" class="footer-phone_number">
              <img src="@img/icons/phone.svg">
              <span>+7 (861) 205-49-86</span>
            </a>
          </div>
          <div class="footer-phone_2 footer-phone">
            <p class="footer-phone_text">Ростовское шоссе, 17</p>
            <a href="tel:+79180259393" class="footer-phone_number">
              <img src="@img/icons/phone.svg">
              <span>+7 (861) 205-49-86</span>
            </a>
          </div>
        </div>
      </div>
      <div class="politicy">
        <div class="politicy_title">
          <div>ООО "Alliance Motors" © 2023</div>
          <div>Политика конфиденциальности</div>
        </div>
        <p class="politicy_text">Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положением ч. 2 ст. 437 Гражданского кодекса Российской Федерации. Для получения подробной информации о стоимости автомобилей, пожалуйста, обращайтесь к менеджеру по продажам. Предоставляя свои персональные данные и используя настоящий веб-сайт, Вы соглашаетесь с обработкой Ваших персональных данных и принимаете условия их обработки. <a href="{{ route('privacy') }}">Политика конфиденциальности.</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
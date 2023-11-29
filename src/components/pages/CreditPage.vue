<script>
import CarInfo from "../CarInfo.vue";
import FilterCars from "../FilterCars.vue";
import axios from "axios";
import { API_URL } from "../../main";

export default {
  data() {
    return {
      cars: [],
      params: {},
      page: {
        current: 0,
        last: 0,
      },
      key: 0,
      app: {
        phone: '9182599393'
      }
    }
  },
  components: {
    CarInfo,
    FilterCars,
  },
  methods: {
    async getCarList(data) {
      if (data?.brandList?.length) {
        this.params.brand = this.setBrand(data);
      }

      if (data?.modelList?.length) {
        this.params.model = this.setModel(data);
      }

      if (this.hasOption(data, 'year')) {
        this.params.year = this.setYear(data);
      }

      if (this.hasOption(data, 'mileage')) {
        this.params.mileage = this.setMileage(data);
      }

      if (this.hasOption(data, 'wheel_drive')) {
        this.params.wheel_drive = this.setWheelDrive(data);
      }

      if (this.hasOption(data, 'kpp')) {
        this.params.kpp = this.setKpp(data);
      }

      if (this.hasOption(data, 'fuel')) {
        this.params.fuel = this.setFuel(data);
      }

      this.params.page = 1;
      try {
        const response = await axios.get(`${API_URL}/api/car/list`, {params: this.params});
        const { data: { data: list, current_page, last_page } } = response;

        this.cars = list;
        this.page.current = current_page;
        this.page.last = last_page;
      } catch (e) {
        console.log(e)
      }
    },
    hasOption(data, property) {
      if (data !== undefined && data[property] !== undefined) {
        Object.keys(data[property])
            .filter(key => !data[property][key])
            .forEach(key => delete data[property][key]);
        return !!Object.values(data[property]).length;
      } else {
        return false;
      }
    },
    setBrand : (data) => data.brandList.join(","),
    setModel: (data) => data.modelList.join(","),
    setYear: (data) => {
      let params = '';

      if (data.year?.from) {
        params = `${data.year.from},`;
      }

      if (data.year?.to) {
        params = params.length ? (params + data.year.to) : `,${data.year.to}`;
      }

      return params;
    },
    setMileage: (data) => {
      let params = '';

      if (data.mileage?.from) {
        params += data.mileage.to;
      }

      if (data.mileage?.to) {
        params = params.length ? (params + data.mileage.to) : `,${data.mileage.to}`;
      }

      return params;
    },
    setWheelDrive: (data) => {
      let params = [];

      params.push(data.wheel_drive?.fwd ? 'fwd' : '');
      params.push(data.wheel_drive?.rwd ? 'rwd' : '');
      params.push(data.wheel_drive?.awd ? 'awd' : '');

      return params.join(',');
    },
    setKpp: (data) => {
      let params = [];

      params.push(data.kpp?.dct ? 'dct' : '');
      params.push(data.kpp?.akpp ? 'akpp' : '');
      params.push(data.kpp?.mkpp ? 'mkpp' : '');
      params.push(data.kpp?.cvt ? 'cvt' : '');

      return params.join(',');
    },
    setFuel: (data) => {
      let params = [];

      params.push(data.fuel?.benzin ? 'benzin' : '');
      params.push(data.fuel?.electro ? 'electro' : '');
      params.push(data.fuel?.diesel ? 'diesel' : '');
      params.push(data.fuel?.hybrid ? 'hybrid' : '');
      params.push(data.fuel?.hbo ? 'hbo' : '');

      return params.join(',');
    },
    async getMoreCar() {
      try {
        this.params.page = (this.page.current < this.page.last) ? this.page.current + 1 : this.page.current;
        const response = await axios.get(`${API_URL}/api/car/list`, {params: this.params});
        const { data: { data: list, current_page, last_page }, } = response;

        this.cars = [...this.cars, ...list];
        this.page.current = current_page;
        this.page.last = last_page;
        this.key++;
      } catch (e) {
        console.log(e)
      }
    },
    async clear() {
      try {
        this.params = {};
        this.params.page = this.page.current = 1;
        const response = await axios.get(`${API_URL}/api/car/list`, {params: this.params});
        const { data: { data: list, current_page, last_page }, } = response;

        this.cars = list;
        this.page.current = current_page;
        this.page.last = last_page;
        this.key++;
      } catch (e) {
        console.log(e)
      }
    },
    isMorePages() {
      return this.page.current !== this.page.last;
    },
    async getPageCar (page) {
      try {
        this.params.page = page;
        const response = await axios.get(`${API_URL}/api/car/list`, {params: this.params});
        const { data: { data: list, current_page, last_page }, } = response;

        this.cars = list;
        this.page.current = current_page;
        this.page.last = last_page;
        this.key++;
      } catch (e) {
        console.log(e)
      }
    },
    async getAppNumber() {
      try {
        const response = await axios.get(`${API_URL}/api/number/app`);
        const { data: { number } } = response;
        this.app.phone = number;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getCarList();
    this.getAppNumber();
  }
}
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="form credit">
        <div class="form_container credit_container">
          <div class="credit_title">кредит<br /><span>ОТ 7%</span></div>
          <form class="form_action">
            <input required type="text" name="name" class="inputCredit-1" id="name" placeholder="Имя">
            <input required type="tel" name="tel" class="inputCredit-2" id="tel" placeholder="+7 (123) 456-78-90">
            <input type="submit" name="submitForm" id="submitForm" class="submitRequiredFormCredit" value="Отправить заявку">
          </form>
        </div>
      </div>
      <div class="credit-grid">
        <ul class="row-1 ">
          <li>
            <img src="@img/icons/doc.svg" alt="Document">
            <p>Оформление<br>по 2 документам</p>
          </li>
          <li>
            <img src="@img/icons/dist.svg" alt="Dist">
            <p>Дистанционная<br>подача</p>
          </li>
          <li>
            <img src="@img/icons/kacko.svg" alt="KASKO">
            <p>Без оформления<br>КАСКО</p>
          </li>
          <li>
            <img src="@img/icons/dnr-lnr.svg" alt="DNR & LNR">
            <p>По паспорту<br>ДНР и ЛНР</p>
          </li>
        </ul>
        <ul class="row-2 ">
          <li>
            <img src="@img/icons/valuta.svg" alt="Rubl">
            <p>Без первоначального взноса</p>
          </li>
          <li>
            <img src="@img/icons/without-comissia.svg" alt="Без комиссий">
            <p>Досрочное погашение<br>без комиссий и штрафов</p>
          </li>
          <li>
            <img src="@img/icons/russia.svg" alt="Russia">
            <p>Все регионы РФ<br>(в т.ч. Кавказ и Крым)</p>
          </li>
        </ul>
      </div>
      <div class="cars">
        <div class="select-filter">
          <div class="flex items-center">
            <div id="select-filter"></div>
          </div>
          <div class="flex items-center">
            <router-link to="/" class="popup_btn filter-show">
              <img src="@img/icons/filter-filter.svg" alt="Filter">
            </router-link>
          </div>
        </div>
        <div class="cars_container">
          <div class="cars_buy car homeCars">
            <ul class="car_list" :key="key">
              <CarInfo v-for="car in cars" :key="car.id" :car="car" :app="app"/>
            </ul>
          </div>

          <FilterCars @get-cars="getCarList" @clear="clear" :params="params"/>

        </div>
        <div class="watch">
          <div
              v-if="isMorePages()"
              class="watch-link"
              id="show-more"
          >
            <button
                type="button"
                class="btn-watch"
                @click="getMoreCar"
            >Посмотреть еще</button>
          </div>
        </div>
      </div>

      <div class="popup" id="popup">
        <div class="popup__body">
          <a href="#header" class="popup__close close-popup">
            <img src="@img/close.svg">
          </a>
          <div class="popup__content"></div>
        </div>
      </div>
    </div>
  </main>
  <div class="popup" id="win">
    <div class="popup__body">
      <div class="popup__content deletePadding">
        <div class="submit">
          <div class="submit_container">
            <div class="flex justify-between items-center">
              <h1 class="submit_title">Заявка успешно отправлена</h1>
              <a href="#header" class="close-popup close-modal">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10L10 30" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 10L30 30" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <p class="wait">Наш специалист вскоре с вами свяжется</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="popup" id="submit-application">
    <div class="popup__body">
      <div class="popup__content deletePadding">
        <div class="submit">
          <div class="submit_container">
            <div class="flex justify-between items-center">
              <h1 class="submit_title">Оставить заявку</h1>
              <a href="#header" class="close-popup close-modal">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10L10 30" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 10L30 30" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <form class="submit_form" id="submit">
              <input required type="text" id="name" minlength="2" placeholder="Имя" class="input-1"/>
              <input required type="tel" id="tel" placeholder="+7 (___) ___-__-__" class="input-2"/>
              <a href="#win" class="btn-link popup-link w-100">
                <button type="submit"  class="btn zayavka-btn w-100 submitRequiredForm">Отправить</button>
              </a>
            </form>
            <p>Нажимая на кнопку “Отправить”, вы даете согласие на обработку перс. данных</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a href="#submit-application" class="btn-link full575 show992 popup-link" data-da="menu_body,5,992">
    <button type="submit" class="btn zayavka-btn full575">Оставить заявку</button>
  </a>
</template>

<style scoped>

</style>
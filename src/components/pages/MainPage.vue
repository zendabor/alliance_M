<script>
import SplideSlider from "../SplideSlider.vue";
import Benefits from "../Benefits.vue";
import CarInfo from "../CarInfo.vue";
import FilterCars from "../FilterCars.vue";
import CreditForm from "../CreditForm.vue";
import PopupWin from "../PopupWin.vue";
import PopupSubmit from "../PopupSubmit.vue";
import axios from 'axios';
import {API_URL} from "../../main";

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
      },
      modal:false
    }
  },
  components: {
    PopupSubmit,
    PopupWin,
    CreditForm,
    SplideSlider,
    Benefits,
    CarInfo,
    FilterCars
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
    async getAppNumber() {
      try {
        const response = await axios.get(`${API_URL}/api/number/app`);
        const { data: { number } } = response;
        this.app.phone = number;
      } catch (e) {
        console.log(e);
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

    showModal() {
      // TODO показать модалку
      this.modal = true;
      // TODO оправить письмо
      // TODO письмо отправлено
      // TODO закрыть модалку
      setTimeout(() => {
        this.modal = false;
      }, 3000)
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
      <SplideSlider />
      <Benefits/>

      <div class="cars">
        <div class="select-filter">
          <div class="flex items-center">
            <div id="select-filter"></div>
          </div>
          <div class="flex items-center">
            <router-link to="/" class="popup_btn filter-show">
              <img src="@img/icons/contact.svg" alt="Filter">
            </router-link>
          </div>
        </div>
        <div class="cars_container" :key="key">
          <div class="cars_buy car homeCars">
            <ul class="car_list" :key="key">
              <CarInfo v-for="car in cars" :key="car.id" :car="car" :app="app" @show-modal="showModal"/>
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

      <CreditForm />

      <PopupWin  v-show="modal"/>

      <PopupSubmit/>

      <a href="#submit-application" class="btn-link full575 show992 popup-link" data-da="menu_body,5,992">
        <button type="submit" class="btn zayavka-btn full575">Оставить заявку</button>
      </a>

    </div>
  </main>
</template>

<style scoped lang="scss">
.cars {
  margin: 56px 0px 0px 0px;
}

.cars_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.car_list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

.car_info {
  border-radius: 20px;
}

.car-info {
  background: #fff;
  -webkit-transition: 0.3s ease background;
  transition: 0.3s ease background;
  padding: 14px;
}

.car-info:hover {
  background: inherit;
}

.car-info:hover .car-info_tel {
  background: inherit;
}

.car-info:hover .car-info_characteristic li svg path {
  fill: #B40D16;
}

.car-info_container {
  max-width: 282px;
  margin: 0 auto;
  min-height: 100%;
  padding: 14px;
}

.car-info_img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

.car-info_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.car-info_name {
  margin: 1rem 0px 6px 0px;
  color: #0E0E0F;
  font-size: 1rem;
  font-weight: 700;
  line-height: 120%;
}

.car-info_year {
  color: #B3B3B3;
}

.car-info_price {
  color: #B40D16;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
}

.car-info_min-price {
  color: #B3B3B3;
  font-size: 12px;
  font-weight: 500;
}

.car-info_characteristic {
  margin: 2rem 0px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -webkit-column-gap: 32px;
  -moz-column-gap: 32px;
  column-gap: 32px;
  row-gap: 12px;
  white-space: nowrap;
}

.car-info_characteristic li {
  font-size: 12px;
  color: #0E0E0F;
  font-weight: 500;
  line-height: 120%;
}

.car-info_characteristic li svg {
  position: relative;
  top: 3px;
  margin: 0px 8px 0px 0px;
}

.car-info_characteristic li svg path {
  -webkit-transition: 0.3s ease fill;
  transition: 0.3s ease fill;
}

.car-info_footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.car-info_tel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 40px;
  height: 40px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #F2F2F2;
  margin: 0px 8px 0px 0px;
  padding: 1rem;
  -webkit-transition: 0.3s ease background;
  transition: 0.3s ease background;
}

.btn-car-link {
  width: 100%;
}

.btn-car {
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  padding: 15px 24px 16px;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #B40D16;
  font-weight: 500;
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
}

.btn-car:hover {
  background: #DD1525;
}

.btn-car:active,
.btn-car:focus {
  background: #B40D16;
}

.btn-car:disabled {
  background: #F4F6F8;
  color: #8E8E8E;
}
</style>
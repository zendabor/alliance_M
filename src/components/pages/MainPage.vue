<script>
import contact from '@img/icons/contact.svg';
import filter from '@img/icons/filter-filter.svg';
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
      images: {
        filter: filter,
        contact: contact,
      },
      cars: [],
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
      const params = {};
      if (data?.brandList.length) {
        params.brand = this.setBrand(data);
      }

      if (data?.modelList.length) {
        params.model = this.setModel(data);
      }

      if (this.hasOption(data, 'year')) {
        params.year = this.setYear(data);
      }

      if (this.hasOption(data, 'mileage')) {
        params.mileage = this.setMileage(data);
      }

      if (this.hasOption(data, 'wheel_drive')) {
        params.wheel_drive = this.setWheelDrive(data);
      }

      if (this.hasOption(data, 'kpp')) {
        params.kpp = this.setKpp(data);
      }

      if (this.hasOption(data, 'fuel')) {
        params.fuel = this.setFuel(data);
      }

      try {
        const response = await axios.get(`${API_URL}/api/car/list`, {params});
        const { data: { data: list } } = response;
        this.cars = list;
      } catch (e) {

      }
    },
    hasOption(data, property) {
      if (data !== undefined) {
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

      console.log('YEAR', data.year)
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
  },
  mounted() {
    this.getCarList();
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
              <img :src="images.filter" alt="Filter">
            </router-link>
          </div>
        </div>
        <div class="cars_container">
          <div class="cars_buy car homeCars">
            <ul class="car_list">
              <CarInfo v-for="car in cars" :key="car.id" :car="car"/>
            </ul>
          </div>

          <FilterCars @get-cars="getCarList"/>

        </div>
        <div class="watch">
          <router-link to="/" class="watch-link" target="_blank" id="show-more">
            <button type="button" class="btn-watch">Посмотреть еще</button>
          </router-link>
        </div>
      </div>

      <CreditForm />

      <PopupWin />

      <PopupSubmit />

      <a href="#submit-application" class="btn-link full575 show992 popup-link" data-da="menu_body,5,992">
        <button type="submit" class="btn zayavka-btn full575">Оставить заявку</button>
      </a>

    </div>
  </main>
</template>

<style scoped>

</style>
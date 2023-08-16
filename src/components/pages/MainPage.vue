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
    SplideSlider, Benefits, CarInfo, FilterCars
  },
  methods: {
    async getCarList() {
      try {
        const response = await axios.get('http://91.222.238.19:900/api/car/list');
        const { data: { data: list } } = response;
        this.cars = list;
      } catch (e) {

      }
    }
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

          <FilterCars/>

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
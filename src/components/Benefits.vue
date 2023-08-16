<script>
import benefit1 from '@img/benefit_1.svg';
import benefit2 from '@img/benefit_2.svg';
import benefit3 from '@img/benefit_3.svg';
import benefit4 from '@img/benefit_4.svg';

export default {
  data() {
    return {
      images: {
        benefit1: benefit1,
        benefit2: benefit2,
        benefit3: benefit3,
        benefit4: benefit4,
      }
    }
  }
}
</script>

<template>
  <div class="benefits">
    <div class="benefits_container">
      <ul class="benefits_body">
        <li class="benefits_item">
          <span class="benefits_title">Автокредит</span>
          <img :src="images.benefit1" class="benefits_figure-1">
        </li>
        <li class="benefits_item">
          <span class="benefits_title">пРОДАЖА</span>
          <img :src="images.benefit2" class="benefits_figure-2">
        </li>
        <li class="benefits_item">
          <span class="benefits_title">КОМИССИЯ</span>
          <img :src="images.benefit3" class="benefits_figure-3">
        </li>
        <li class="benefits_item">
          <span class="benefits_title">трейд-ин</span>
          <img :src="images.benefit4" class="benefits_figure-4">
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>
import { defineProps, ref, reactive } from 'vue';
import phone from '@img/icons/phone.svg';

const images = reactive({
    phone: phone
});

defineProps({
  className: String
})
</script>

<template>
  <nav :class="className">
    <a href="tel:+78612054986" class="phone_menu"><img :src="images.phone"></a>
    <div class="menu_body">
      <ul class="menu_list">
        <li class="menu_item"><router-link to="/" class="menu_link"></router-link></li>
        <li class="menu_item"><router-link  to="/catalog" class="menu_link">Каталог</router-link></li>
        <li class="menu_item"><router-link to="/credit" class="menu_link">Кредит</router-link></li>
        <li class="menu_item"><router-link to="/about" class="menu_link">О компании</router-link></li>
        <li class="menu_item"><router-link to="/contacts" class="menu_link">Контакты</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>
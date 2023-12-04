
<script>
import axios from 'axios'

export default {
  name: "PopupSubmit",
  // methods:{

  // }
  data(){
    return {
      name:"",
      phone:""
    }
  },
  methods: {
    async sendformData(e){
      e.preventDefault()
      console.log(import.meta.env.VITE_API_URL)
      try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}api/mail/feedback`,{
        name:this.name,
        phone:this.phone
        })
        if(res.status===200){
        $emit(showModal())
      }else {
        $emit(showModal())
      }
      }catch(e){
        console.log(e)
        $emit(showModal())
      }
    }
  }
}

</script>

<template>
  <div class="popup" id="submit-application">
    <div class="popup__body">
      <div class="popup__content deletePadding">
        <div class="submit">
          <div class="submit_container">
            <div class="flex justify-between items-center">
              <h1 class="submit_title">Оставить заявку</h1>
              <button @click="$emit('modal')" class="close-popup close-modal">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10L10 30" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 10L30 30" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <form class="submit_form" id="submit" @submit="sendformData">
              <input required type="text" id="name" minlength="2" placeholder="Имя" v-model="name" class="input-1"/>
              <input required type="tel" id="tel" v-model="phone" placeholder="+7 (___) ___-__-__" class="input-2"/>
              <div href="#win" class="btn-link popup-link w-100">
                <button type="submit" class="btn zayavka-btn w-100 submitRequiredForm">Отправить</button>
              </div>
            </form>
            <p>Нажимая на кнопку “Отправить”, вы даете согласие на обработку перс. данных</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
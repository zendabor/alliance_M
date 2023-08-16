<script>
export default {
  name: "PopupWin"
}
</script>

<template>
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
</template>

<style scoped>

</style>
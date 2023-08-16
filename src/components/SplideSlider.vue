<script>
import jeep from '@img/jeep.png';
import slide2 from '@img/slide-2.png';
import slide3 from '@img/slide-3.png';

export default {
  data() {
    return {
      images: {
        jeep: jeep,
        slide2: slide2,
        slide3: slide3,
      }
    }
  }
}
</script>

<template>
  <Splide class="splide" id="homeSplide" aria-label="Splide" :options="{ rewind: true }">
    <div class="splide__arrows">
      <button type="button" aria-controls="splide01-track" class="splide__arrow homeNextSlide splide__arrow--prev splide_my-btn-prev"></button>
      <button class="splide__arrow splide__arrow--next homePrevSlide splide_my-btn-next "></button>
    </div>
    <div class="splide__track">
      <div class="splide__list">
        <SplideSlide class="splide__slide">
          <div class="slide_block">
            <div class="slide">
              <div class="car-img_block">
                <picture>
                  <source :srcset="images.jeep" type="image/webp">
                  <img :src="images.jeep" alt="Jeep" class="car-img">
                </picture>
              </div>
              <div class="slide_container">
                <div class="slide_texts">
                  <div class="slide_title">кредит<br /><span>ОТ 7%</span></div>
                  <div class="slide_text">при<br class="hide575"/>оставлениИ заявки</div>
                </div>
                <div class="slide_btn">
                  <a href="#submit-application" class="btn-slide-link popup-link">
                    <button type="button" class="btn-slide">Оставить заявку</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="splide__slide">
          <div class="slide_block">
            <!--                <div class="slide-2" style="background: url({{ url('/img/slide-2.png') }}) no-repeat center;">-->
            <!--                <div class="slide-2" :style="{backgroundImage: `url(${images.slide2}) 'no-repeat' 'center;'`}">-->
            <div class="slide-2" :style="{backgroundImage: `url(${images.slide2})`}">
              <div class="slide-2_container">
                <div class="slide-2_texts full575">
                  <h1>акция</h1>
                  <h2>Трейд ин с выгодой</h2>
                  <div class="slide-2_text-block full575">
                    <p>до 100 тыс. руб.</p>
                  </div>
                </div>
                <div class="slide_btn">
                  <a href="#submit-application" class="btn-slide-link popup-link">
                    <button type="button" class="btn-slide">Оставить заявку</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="splide__slide">
          <div class="slide_block">
            <!--                <div class="slide-3" style="background: url({{ url('/img/slide-3.png') }}) no-repeat center;">-->
            <!--                <div class="slide-3" :style="{backgroundImage: `url(${images.slide3}) 'no-repeat' 'center;'`}">-->
            <div class="slide-3" :style="{backgroundImage: `url(${images.slide3})`}">
              <div class="slide-3_container">
                <div class="slide-3_texts">
                  <h1>акция</h1>
                  <h2>гарантия на год со скидкой</h2>
                </div>
                <div class="slide_btn">
                  <h3 class="slide-3_50">в 50%</h3>
                  <a href="#submit-application" class="btn-slide-link popup-link">
                    <button type="button" class="btn-slide">Оставить заявку</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </div>
    </div>
  </Splide>
</template>

<style scoped>

</style>
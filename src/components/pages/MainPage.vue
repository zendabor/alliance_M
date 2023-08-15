<script>
import jeep from '@img/jeep.png';
import slide2 from '@img/slide-2.png';
import slide3 from '@img/slide-3.png';
import benefit1 from '@img/benefit_1.svg';
import benefit2 from '@img/benefit_2.svg';
import benefit3 from '@img/benefit_3.svg';
import benefit4 from '@img/benefit_4.svg';
import filter from '@img/icons/filter-filter.svg';
import contact from '@img/icons/contact.svg';

export default {
  data() {
    return {
      images: {
        jeep: jeep,
        slide2: slide2,
        slide3: slide3,
        benefit1: benefit1,
        benefit2: benefit2,
        benefit3: benefit3,
        benefit4: benefit4,
        filter: filter,
        contact: contact,
      },
    }
  },
  mounted() {
    // const splideIndex = new Splide("#homeSplide", {
    //   type: "loop",
    //   autoplay: true,
    //   interval: 3000,
    //   perPage: 1,
    //   gap: "24px",
    // });
    // console.log({splideIndex});
    // splideIndex.mount();
  }
}
</script>

<template>
  <main class="main">
    <div class="wrapper">
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
            <ul class="car_list"><li class="car_info car-info">
              <div class="car-info_container">
                <router-link :to="{ name: 'detail', params: { id: 1 }}" target="_blank">
                  <img loading="lazy" :src="''" alt="Car" class="car-info_img">
                </router-link>
                <div class="car-info_content">
                  <h4 class="car-info_name">Brand Model <span class="car-info_year">2000</span>
                  </h4>
                  <div class="car-info_price">
                    20000000 <span class="car-info_min-price">20000</span>
                  </div>
                  <ul class="car-info_characteristic">
                    <li>
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2844 10.6452H15C14.8834 11.8765 14.4812 13.0605 13.8276 14.0962C12.4574 12.7045 10.6931 11.8035 8.79314 11.5247L11.0776 8.02464L11.0775 8.02475C11.2315 7.7927 11.2543 7.49317 11.1372 7.23901C11.0202 6.98487 10.7811 6.8147 10.5101 6.7926C10.2391 6.7705 9.97727 6.89977 9.82323 7.13182L7.06902 11.4355C5.95914 11.4904 4.86888 11.7583 3.8534 12.2257C2.86682 12.6807 1.96628 13.3141 1.19398 14.0962C0.532649 13.0627 0.123083 11.8786 0 10.6451H0.715555C0.985069 10.6451 1.23402 10.4963 1.36877 10.2546C1.50352 10.0129 1.50352 9.71502 1.36877 9.47332C1.23401 9.23162 0.985052 9.08276 0.715555 9.08276H0C0.144715 7.55579 0.723785 6.10785 1.66384 4.92202L2.17244 5.44431V5.44442C2.3138 5.59161 2.50647 5.67367 2.70691 5.67211C2.90813 5.67267 3.10121 5.59004 3.24322 5.44252C3.38534 5.29488 3.46457 5.09466 3.46338 4.88625C3.46229 4.67785 3.38079 4.47864 3.23705 4.33279L2.75863 3.81935C3.3194 3.34246 3.94363 2.95156 4.61199 2.65874C5.30028 2.36401 6.02623 2.17457 6.76711 2.09619V2.83719C6.76711 3.11633 6.91085 3.37429 7.14431 3.51385C7.37767 3.65342 7.66516 3.65342 7.89863 3.51385C8.132 3.37428 8.27572 3.11631 8.27572 2.83719V2.09619C9.74959 2.24742 11.1475 2.84695 12.293 3.81935L11.7671 4.34175C11.6231 4.48793 11.5415 4.68783 11.5407 4.89667C11.5399 5.10563 11.6199 5.3062 11.7629 5.45348C11.9059 5.6009 12.0999 5.68273 12.3016 5.68094C12.5003 5.67993 12.6906 5.59821 12.8318 5.45325L13.336 4.93097C14.2761 6.11668 14.8551 7.56473 14.9999 9.0917H14.2843C14.0148 9.0917 13.7658 9.24069 13.6311 9.48238C13.4964 9.72407 13.4963 10.0219 13.6311 10.2636C13.7659 10.5053 14.0148 10.6542 14.2843 10.6542L14.2844 10.6452Z" fill="#E7E7E7"/>
                      </svg>
                      123777
                    </li>
                    <li>
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.4348 1.31017C8.41323 1.26983 8.38171 1.23292 8.34218 1.20128C8.25731 1.13234 8.13757 1.09415 8.01305 1.0963C7.88078 1.09386 7.7529 1.13175 7.6581 1.20128C7.61676 1.23185 7.58512 1.26915 7.56548 1.31017C6.74758 2.07236 0.693296 7.92507 2.25675 11.9618C2.50334 12.5697 2.92171 13.1297 3.48311 13.6031C4.0445 14.0766 4.73529 14.452 5.50776 14.7034C6.25619 14.9599 7.06778 15.0936 7.88942 15.0962H8.01807H8.01794C8.97718 15.0766 9.92011 14.9043 10.7854 14.5906C11.4914 14.3302 12.1185 13.9622 12.6276 13.5098C13.1365 13.0574 13.5164 12.5304 13.7432 11.9618C15.3068 7.92532 9.25257 2.07641 8.43447 1.31017H8.4348ZM9.92646 10.9623C9.8124 11.331 9.53467 11.659 9.13954 11.8917C8.81868 12.0916 8.41578 12.2008 8.00012 12.2008C7.58445 12.2008 7.18155 12.0916 6.8607 11.8917C6.46583 11.6582 6.18667 11.3307 6.06862 10.9623C5.56962 9.4418 7.21568 7.18633 7.99754 6.22585C8.78459 7.18628 10.4306 9.43805 9.92646 10.9623Z" fill="#E7E7E7"/>
                      </svg>
                      Gas
                    </li>
                    <li>
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_435_698)">
                          <path d="M11.6553 1.07437C11.7429 0.745464 11.6066 0.397803 11.3188 0.21617C11.0308 0.0345293 10.6584 0.0612227 10.3993 0.282056L1.27336 8.05974C1.02531 8.2712 0.935326 8.6148 1.04797 8.92054C1.1606 9.22627 1.452 9.42954 1.77779 9.42954H5.60676L3.54454 14.5852C3.41395 14.9115 3.5185 15.2849 3.79962 15.496C4.08074 15.707 4.46848 15.7033 4.74544 15.4869L14.701 7.70922C14.9626 7.50479 15.0657 7.15702 14.9575 6.84309C14.8496 6.52928 14.5541 6.31848 14.2222 6.31848H10.2569L11.6553 1.07437Z" fill="#E7E7E7"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_435_698">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.0961914)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      Gas
                    </li>
                    <li>
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9999 2.8331C14.9999 1.88862 14.2382 1.11164 13.2784 1.11164C12.3339 1.11164 11.557 1.87334 11.557 2.8331C11.557 3.5948 12.0597 4.23462 12.7452 4.46319V7.82989L8.54091 7.82978V4.44785C9.22641 4.21938 9.72916 3.57946 9.72916 2.81776C9.72916 1.87328 8.96746 1.0963 8.0077 1.0963C7.06322 1.0963 6.28623 1.85799 6.28623 2.81776C6.28623 3.57946 6.78895 4.21928 7.47448 4.44785V7.81455L3.25468 7.81444V4.44774C3.94018 4.21928 4.44293 3.57935 4.44293 2.81765C4.44293 1.87318 3.68123 1.09619 2.72146 1.09619C1.77699 1.09619 1 1.85789 1 2.81765C1 3.57935 1.50272 4.21918 2.18825 4.44774V12.2323C1.50275 12.4608 1.01532 13.1006 1.01532 13.8623C1.01532 14.8067 1.77701 15.5837 2.73678 15.5837C3.68126 15.5837 4.45824 14.822 4.45824 13.8623C4.45824 13.1006 3.95552 12.4607 3.26999 12.2322L3.26989 8.88071H7.48969V12.2474C6.80419 12.4759 6.30144 13.1158 6.30144 13.8775C6.30144 14.822 7.06314 15.599 8.02291 15.599C8.96738 15.599 9.74437 14.8373 9.74437 13.8775C9.74437 13.1158 9.24165 12.476 8.55612 12.2474L8.55601 8.88071H13.309C13.5985 8.88071 13.8422 8.63694 13.8422 8.34747V4.44758C14.5126 4.21901 15 3.5945 15 2.83281L14.9999 2.8331Z" fill="#E7E7E7"/>
                      </svg>
                      AKPP
                    </li>
                  </ul>
                  <footer class="car-info_footer">
                    <a href="tel:+786120054986" class="car-info_tel">
                      <img :src="images.contact" alt="Contact">
                    </a>
                    <a href="/" class="btn-car-link">
                      <button type="button" class="btn-car">Оставить заявку</button>
                    </a>
                  </footer>
                </div>
              </div>
            </li>
            </ul>
          </div>
          <div class="filter_body">
            <div class="cars_filter filter">
              <div class="filter_container">
                <div>
                  <div class="flex justify-between items-center">
                    <h1 class="filter_title">Фильтр</h1>
                    <button type="button" class="btn-clear">
                      <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.89211 5.66088L3.90686 5.9232L4.19943 11.1245C4.25922 12.1873 4.28911 12.7187 4.51506 13.1221C4.71395 13.4772 5.01646 13.7632 5.38217 13.9418C5.79762 14.1447 6.32988 14.1447 7.39438 14.1447H8.60623C9.67074 14.1447 10.203 14.1447 10.6184 13.9418C10.9842 13.7632 11.2867 13.4772 11.4856 13.1221C11.7115 12.7187 11.7414 12.1873 11.8012 11.1245L12.0938 5.9232L12.1085 5.66088H12.7952C12.9989 5.66088 13.1641 5.49574 13.1641 5.29202C13.1641 5.0883 12.9989 4.92316 12.7952 4.92316H10.1013C10.0768 4.8329 10.0463 4.74535 10.0102 4.66092C9.71999 3.98224 9.07032 3.5059 8.31121 3.45266C8.24132 3.44775 8.16098 3.44775 8.00031 3.44775C7.83963 3.44775 7.75929 3.44775 7.6894 3.45266C6.9303 3.5059 6.28063 3.98224 5.99045 4.66092C5.95436 4.74535 5.92382 4.8329 5.89933 4.92316H3.2048C3.00108 4.92316 2.83594 5.0883 2.83594 5.29202C2.83594 5.49574 3.00108 5.66088 3.2048 5.66088H3.89211ZM8.78844 4.66092C8.6351 4.54061 8.44615 4.46458 8.24124 4.45021C8.21496 4.44836 8.17726 4.44775 8.00031 4.44775C7.82335 4.44775 7.78565 4.44836 7.75938 4.4502C7.55447 4.46458 7.36551 4.54061 7.21217 4.66092L8.78844 4.66092ZM5.19786 11.0683L4.90844 5.9232H11.0922L10.8028 11.0683C10.772 11.6157 10.7514 11.9677 10.7149 12.2352C10.68 12.4906 10.6398 12.5857 10.6131 12.6334C10.5136 12.811 10.3624 12.954 10.1795 13.0433C10.1303 13.0673 10.0332 13.102 9.77623 13.1225C9.50713 13.144 9.1545 13.1447 8.60623 13.1447H7.39438C6.84611 13.1447 6.49348 13.144 6.22438 13.1225C5.96739 13.102 5.87027 13.0673 5.82108 13.0433C5.63822 12.954 5.48697 12.811 5.38752 12.6334C5.36077 12.5857 5.32063 12.4906 5.28573 12.2352C5.24919 11.9677 5.22865 11.6157 5.19786 11.0683ZM6.656 6.76751C6.656 6.49137 6.43214 6.26751 6.156 6.26751C5.87986 6.26751 5.656 6.49137 5.656 6.76751L5.656 12.3004C5.656 12.5766 5.87986 12.8004 6.156 12.8004C6.43214 12.8004 6.656 12.5766 6.656 12.3004L6.656 6.76751ZM8.50031 6.76751C8.50031 6.49137 8.27645 6.26751 8.00031 6.26751C7.72416 6.26751 7.50031 6.49137 7.50031 6.76751V12.3004C7.50031 12.5766 7.72416 12.8004 8.00031 12.8004C8.27645 12.8004 8.50031 12.5766 8.50031 12.3004V6.76751ZM9.84461 6.26751C10.1208 6.26751 10.3446 6.49137 10.3446 6.76751V12.3004C10.3446 12.5766 10.1208 12.8004 9.84461 12.8004C9.56847 12.8004 9.34461 12.5766 9.34461 12.3004V6.76751C9.34461 6.49137 9.56847 6.26751 9.84461 6.26751Z"
                            fill="#8E8E8E"
                        />
                      </svg>
                      Очистить
                    </button>
                  </div>
                  <div class="flex items-center">
                    <button type="button" class="checkbox _active"></button>
                    <span class="filter_text">Новые модели</span>
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Марка</h1>
                  <div class="filterSelect">
                    <div class="filterSelect_container">
                      <div class="filterSelect_select">
                        <div class="filterSelect_value"></div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.24603 5.21967C1.57407 4.92678 2.10593 4.92678 2.43397 5.21967L8 10.1893L13.566 5.21967C13.8941 4.92678 14.4259 4.92678 14.754 5.21967C15.082 5.51256 15.082 5.98744 14.754 6.28033L8.59397 11.7803C8.26593 12.0732 7.73407 12.0732 7.40603 11.7803L1.24603 6.28033C0.91799 5.98744 0.91799 5.51256 1.24603 5.21967Z"
                              fill="#8E8E8E"
                          />
                        </svg>
                      </div>
                      <div class="filterSelect_dropdown">
                        <ul class="filterSelect_list" id="filterSelect_list"></ul>
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <h1 class="filter_title">Модель</h1>
                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" checked name="allmodels" id="allmodels" />
                    <label class="filter_text" for="allmodels">Все модели</label><br />
                  </div>
                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="fluence" id="fluence" />
                    <label class="filter_text" for="fluence">Fluence</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="duster" id="duster" />
                    <label class="filter_text" for="duster">Duster</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="kaptur1" id="kaptur1" />
                    <label class="filter_text" for="kaptur1">Kaptur</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="micra" id="micra" />
                    <label class="filter_text" for="micra">Micra</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="kangoo" id="kangoo" />
                    <label class="filter_text" for="kangoo">Kangoo</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="kaptur2" id="kaptur2" />
                    <label class="filter_text" for="kaptur2">Kaptur</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="kaptur3" id="kaptur3" />
                    <label class="filter_text" for="kaptur3">Kaptur</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="talisman" id="talisman" />
                    <label class="filter_text" for="talisman">Talisman</label>
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Год</h1>
                  <div class="flex">
                    <input class="filter_from" type="number" placeholder="От" />
                    <input class="filter_to" type="number" placeholder="До" />
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Цена</h1>
                  <div class="flex">
                    <input class="filter_from" type="number" placeholder="От" />
                    <input class="filter_to" type="number" placeholder="До" />
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Пробег</h1>
                  <div class="flex">
                    <input class="filter_from" type="number" placeholder="От" />
                    <input class="filter_to" type="number" placeholder="До" />
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Привод</h1>
                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="front" id="front" />
                    <label class="filter_text" for="front">Передний</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="back" id="back" />
                    <label class="filter_text" for="back">Задний</label><br />
                  </div>

                  <div class="flex items-center h22 mb-1">
                    <input type="checkbox" name="full" id="full" />
                    <label class="filter_text" for="full">Полный</label><br />
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Коробка передач</h1>
                  <div class="box-grid">
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="robot" id="robot" />
                      <label class="filter_text" for="robot">Робот</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="avtomat" id="avtomat" />
                      <label class="filter_text" for="avtomat">Автомат</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="mechanic" id="mechanic" />
                      <label class="filter_text" for="mechanic">Механика</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="variable" id="variable" />
                      <label class="filter_text" for="variable">Вариатор</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 class="filter_title">Топливо</h1>
                  <div class="box-grid">
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="benzin" id="benzin" />
                      <label class="filter_text" for="benzin">Бензин</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="elector" id="elector" />
                      <label class="filter_text" for="elector">Электро</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="diesel" id="diesel" />
                      <label class="filter_text" for="diesel">Дизель</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="hybrid" id="hybrid" />
                      <label class="filter_text" for="hybrid">Гибрид</label>
                    </div>
                    <div class="flex items-center h22 mb-1">
                      <input type="checkbox" name="hbo" id="hbo" />
                      <label class="filter_text" for="hbo">ГБО</label>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <button type="button" class="btn-apply filter-close">Применить</button>
                  <button type="button" class="btn-clear-2">Очистить</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="watch">
          <router-link to="/" class="watch-link" target="_blank" id="show-more">
            <button type="button" class="btn-watch">Посмотреть еще</button>
          </router-link>
        </div>
      </div>

      <div class="form">
        <div class="form_container">
          <div class="form_title">
            <h1>хочешь</h1>
            <p>оформить автокредит легко и просто?</p>
          </div>
          <form class="form_action">
            <input required type="text" name="name" id="name" class="inputHome-1" placeholder="Имя">
            <input required type="tel" name="tel" id="tel" class="inputHome-2" placeholder="+7 (123) 456-78-90">
            <input type="submit" class="submitRequiredFormHome" name="submitForm" id="submitForm" value="Отправить заявку">
          </form>
        </div>
      </div>

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
                    <button type="submit" class="btn zayavka-btn w-100 submitRequiredForm">Отправить</button>
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

    </div>
  </main>
</template>

<style scoped>

</style>
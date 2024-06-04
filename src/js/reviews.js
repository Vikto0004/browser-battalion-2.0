import Swiper from 'swiper/bundle';
import 'swiper/css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import lozad from 'lozad';

const observer = lozad('.lozad', {
  loaded: el => {
    el.classList.add('fade-in');
  },
});

observer.observe();

// Function: show notification
const showNotification = msg => {
  iziToast.settings({
    timeout: 5000,
    titleColor: '#fff',
    position: 'topRight',
    messageColor: '#fff',
    icon: '',
    close: false,
  });

  iziToast.error({
    message: msg,
    class: 'error-notification',
    timeout: 5000,
    titleColor: '#fff',
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    progressBarColor: '#B51B1B',
    close: true,
  });
};

/* Step 1: Fetch review data from server, 
and only if we get status ok, go to the next step
*/
const fetchReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Fetching reviews failed: ${error.message}`);
  }
};

/*
Step 2: Creating Slider instance and render 
slides based on response data from server.
***/
// Create Swiper instance
const swiper = new Swiper('#reviews-slider', {
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 991px
    991: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Save slider wrapper for render slides
const sliderWrapper = document.querySelector('.swiper-wrapper.is-reviews');

/*
Step 3: Using data fetched from server 
create a mockup of HTML, and render it as a li element
***/
const renderReviews = async () => {
  try {
    const reviews = await fetchReviews();
    const markup = reviews
      .map(({ author, avatar_url, review }) => {
        return `
            <li class="reviews-review-card swiper-slide">
                <p class="review-card-text">${review}</p>
                <div class="review-card-author">
                    <img
                        class="review-card-author-avatar lozad"
                        data-src="${avatar_url}"
                        alt="review author photo"
                        width="40"
                        height="40"
                    />
                    <p class="review-card-author-name">${author}</p>
                </div>
                </li>
        `;
      })
      .join('');
    // Add HTML to slider  wrapper
    sliderWrapper.insertAdjacentHTML('afterbegin', markup);
    observer.observe();
  } catch (error) {
    sliderWrapper.insertAdjacentHTML(
      'afterbegin',
      `<p class="reviews-error-text">Not found</p>`
    );
    showNotification(error.message);
  }
};
renderReviews();

<template>
  <Header></Header>
  <div id="story">
    <div class="title">
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h1>Our Story</h1>
    </div>
    <div class="content">
      <p>
        Once upon a tweet, in the vast and bustling realm of Twitter, our paths
        crossed in the most unexpected and delightful way. It all started with a
        simple retweet. <br /><br />
        One rainy evening, Oyinkansola was scrolling through Twitter when she
        stumbled upon a tweet about a rare book. Being a literature enthusiast,
        Oyinkansola couldn't resist retweeting it with a thoughtful comment.
        Little did she know, this tweet would soon change her life. Across the
        country, Opeyemi, an avid reader and aspiring writer, came across
        Oyinkansola's retweet. Intrigued by her comment and the book in
        question, Opeyemi replied with a witty remark and a book recommendation
        of his own. What started as a simple interaction grew into a meaningful
        friendship. <br /><br />
        We soon began direct messaging, sharing personal stories, dreams, and
        even the struggles we faced in our daily lives. Oyinkansola admired
        Opeyemi's passion for writing, while Opeyemi was captivated by
        Oyinkansola's profound love for literature
      </p>
    </div>
  </div>

  <div id="images-wrapper">
    <div id="swiper-wrapper">
      <swiper
        ref="swiperEl"
        :modules="modules"
        :slides-per-view="perView"
        :centered-slides="true"
        :coverflow-effect="{ slideShadows: false }"
        :autoplay="{ delay: 500 }"
        :speed="1800"
        :space-between="10"
        :loop="true"
      >
        <swiper-slide class="slide"
          ><img src="@/assets/images/img3.jpg"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/images/img4.jpg"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/images/img2.jpg"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/images/img3.jpg"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/images/img1.jpg"
        /></swiper-slide>

        <SwiperButton></SwiperButton>
      </swiper>
    </div>
  </div>

  <div id="details">
    <div class="title">
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h2>When & Where</h2>
      <p>We love to see you soon</p>
    </div>
    <div class="container">
      <div class="card active" ref="card1" @click="makeActive(0)">
        <Icon name="fluent-emoji-high-contrast:wedding" size="40px"></Icon>
        <h3>The Ceremony</h3>
        <p>
          Thursday, July 11 2024 <br />
          9:30AM -11:00AM <br />
          Venue Address Here
        </p>
      </div>
      <!-- <hr /> -->
      <div class="card" ref="card2" @click="makeActive(1)">
        <Icon name="game-icons:red-carpet" size="40px"></Icon>
        <h3>The Reception</h3>
        <p>
          Thursday, July 11 2024 <br />
          12:00PM - 4:00PM <br />
          Venue Address Here
        </p>
      </div>
    </div>
    <Button @click="toCalender">Add to calender</Button>
  </div>

  <div id="map-wrapper">
    <div class="map">
      <div
        id="my-map-display"
        style="height: 100%; width: 100%; max-width: 100%"
      >
        <iframe
          style="height: 100%; width: 100%; border: 0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=23+Akanni+Street,+Bariga,+Lagos,+Nigeria.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>

    <div class="map" v-show="false">
      <div
        id="my-map-display"
        style="height: 100%; width: 100%; max-width: 100%"
      >
        <iframe
          style="height: 100%; width: 100%; border: 0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=23+Akanni+Street,+Bariga,+Lagos,+Nigeria.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  </div>

  <div id="guest-wrapper">
    <div class="card">
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h4>Guest Area</h4>
      <p>Share your moments, pictures and love with us.</p>
      <Button>Enter Guest Area</Button>
    </div>
  </div>
  <Thanks></Thanks>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
const modules = ref([EffectCoverflow, Autoplay]);
const card1 = ref<HTMLElement>();
const card2 = ref<HTMLElement>();

const screenWidth = ref(
  window.innerWidth > 0 ? window.innerWidth : screen.width
);

const perView = computed(() => {
  if (screenWidth.value > 1200) {
    return 3;
  } else if (screenWidth.value > 700) {
    return 2;
  } else {
    return 1;
  }
});

const makeActive = (pos: number) => {
  card1.value!.classList.remove("active");
  card2.value!.classList.remove("active");
  if (pos === 0) {
    card1.value!.classList.add("active");
  } else {
    card2.value!.classList.add("active");
  }
};

const toCalender = () => {
  return navigateTo(
    "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240711T083000Z%2F20240711T100000Z&details=Kindly%20take%20note%20of%20the%20following%3A%0A1.%20Invitation%20is%20strictly%20by%20invitation.%0A2.%20Church%20ceremony%20begins%20by%209%3A30am%20-%2011%3A00am%0A3.%20Reception%20begins%20by%2012%3A00pm%20-%204%3A00pm%0A%0AThank%20you%20for%20celebrating%20with%20us%2C%20we%20hope%20to%20see%20you%20soon.&location=23%2C%20Akanni%20street%2C%20Bariga%2C%20Lagos%20state%2C%20Nigeria&text=Opeyemi%20Weds%20Oyinkansola",
    {
      external: true,
      open: {
        target: "_blank",
      },
    }
  );
};
</script>

<style scoped lang="less">
#story {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  font-family: "Source Serif 4", sans-serif;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    h1 {
      font-size: 2.4rem;
    }

    img {
      width: 100px;
      vertical-align: middle;
    }
  }

  .content {
    max-width: 700px;
    padding: 20px;
    text-align: left;
    color: #0c0d0d;
    font-size: 1.5rem;
  }
}

#images-wrapper {
  width: 100%;
  padding: 20px 0;
  border-radius: 20px;
  //display: flex;
  align-items: center;
  justify-content: center;
  //height: 500px;

  #swiper-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 400px;
      max-width: 500px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}

#details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  font-family: "Source Serif 4", sans-serif;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    h2 {
      margin-bottom: 0;
    }

    p {
      color: #8d8d8d;
    }
  }

  button {
    margin-top: 30px;
  }
}

.container {
  width: 90%;
  margin-top: 20px;

  @media @desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
    transition: background 200ms ease-in-out;
    border: 2.5px solid #e678e6;
    cursor: pointer;
    @media @desktop {
      width: 400px;
      height: 300px;
    }

    &:first-of-type {
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      @media @desktop {
        border-radius: 0;
        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;
      }
    }

    &:last-of-type {
      border-top: none;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      @media @desktop {
        border-top: 2.5px solid #e678e6;
        border-radius: 0;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }

    &.active {
      background: #e678e6;
      color: white !important;

      .icon {
        color: white;
      }
    }

    .icon {
      color: #de66de;
    }

    h3 {
      margin-top: 10px;
      font-size: 2.2rem;
      @media @desktop {
        font-size: 2.4rem;
      }
    }

    p {
      font-family: Poppins, sans-serif;
      font-size: 1.45rem;
      font-weight: 500;
      margin-top: 10px;
      @media @desktop {
        font-size: 1.6rem;
      }
    }
  }

  hr {
    margin: 0;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #fcaffc;
    padding: 0;
    background-color: #fcaffc;
  }
}

#map-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
  .map {
    width: 100%;
    list-style: none;
    transition: none;
    overflow: hidden;
    max-width: 800px;
    height: 300px;
  }
}

#guest-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;

  .card {
    width: 100%;
    padding: 50px 30px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Source Serif 4", sans-serif;
    text-align: center;

    h4 {
      margin-bottom: 0;
    }

    p {
      color: #8d8d8d;
    }
  }
}
</style>

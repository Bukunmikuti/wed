<template>
  <Header></Header>
  <div id="story">
    <div class="title">
      <h1>Our Love Story</h1>
      <img src="@/assets/images/line.png" />
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
    <swiper
      ref="swiperEl"
      :slides-per-view="1"
      :speed="500"
      :modules="modules"
      :space-between="100"
      :autoplay="true"
      :loop="true"
      :pagination="true"
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
        ><img src="@/assets/images/img4.jpg"
      /></swiper-slide>
      <swiper-slide class="slide"
        ><img src="@/assets/images/img3.jpg"
      /></swiper-slide>
      <swiper-slide class="slide"
        ><img src="@/assets/images/img1.jpg"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const modules = ref([Navigation, Pagination, Scrollbar]);
</script>

<style scoped lang="less">
#story {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .title {
    margin-top: 40px;
    font-family: "Source Serif 4", serif;

    h1 {
      font-weight: 500;
    }

    img {
      width: 100px;
      margin-top: -25px;
      vertical-align: middle;
    }
  }

  .content {
    max-width: 700px;
    padding: 20px;
    text-align: center;
    color: #0c0d0d;
  }
}

#images-wrapper {
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  //height: 500px;

  .slide {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}
</style>

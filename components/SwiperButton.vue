<template>
  <div id="controls">
    <div class="btn">
      <Icon
        name="solar:alt-arrow-left-bold"
        size="25px"
        color="#888"
        @click="swiper.slidePrev()"
      />
    </div>
    <div class="btn">
      <Icon
        name="solar:alt-arrow-right-bold"
        size="25px"
        color="#888"
        @click="swiper.slideNext()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSwiper } from "swiper/vue";
const swiper = useSwiper();
</script>

<style scoped lang="less">
#controls {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;

  .btn {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid #ccc;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background ease 500ms;
    transition-property: border, background;

    .icon {
      transition: color ease 500ms;
    }

    &:hover {
      background: #ffe8ff;
      border-color: #d3a1d3;
      .icon {
        color: #a05ba0 !important;
      }
    }
  }
}
</style>

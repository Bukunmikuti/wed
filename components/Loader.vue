<template>
  <div id="loader" ref="loader" class="active">
    <div class="gradient"></div>
    <img class="logo" src="@/assets/images/logo.svg" />
    <ProgressBar mode="indeterminate" id="pg"></ProgressBar>
  </div>
</template>

<script setup>
import ProgressBar from "primevue/progressbar";
const loader = ref('null')

const imageUrl = "../assets/images/img1.jpg"
const imageLoaded = ref(false);

/* const preloadImage = (url, callback) => {
  const img = new Image();
  img.onload = () => {
    callback(true);
  };
  img.onerror = () => {
    callback(false);
  };
  img.src = url;
};

onMounted(() => {
  preloadImage(imageUrl, (success) => {
    if (success) {
      imageLoaded.value = true;
      console.log('Image loaded successfully.');
      // Run your additional code here
    } else {
      console.log('Failed to load image.');
    }
  });
}); */

onMounted(() => {
  setTimeout(() => {
    loader.value.classList.remove('active')
  }, 4000);
});
</script>

<style>
.p-progressbar .p-progressbar-value {
  background: #e678e6 !important;
}
</style>

<style scoped lang="less">
#loader {
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 200;
  }

  img {
    width: 70px;
    height: 70px;

    @media @desktop {
      width: 100px;
      height: 100px;
    }
  }

  .gradient {
    position: absolute;
    top: 0;
    z-index: -2;
    height: 100vh;
    width: 100vw;
    background-color: white;
    background: radial-gradient(
      100% 50% at 50% 0%,
      rgba(0, 163, 255, 0.13) 0%,
      rgba(0, 163, 255, 0) 50%,
      rgba(0, 163, 255, 0) 100%
    );
    background: radial-gradient(
      ellipse 80% 80% at 50% -20%,
      rgba(120, 119, 198, 0.3),
      rgba(255, 255, 255, 0)
    );
  }

  #pg {
    width: 150px;
    height: 6px;
    margin-top: 20px;
  }
}
</style>

<template>
  <div id="header">
    <div class="overlay"></div>
    <Menu v-show="isMenu"></Menu>
    <div id="wrapper">
      <div id="top-header">
        <img class="logo" src="@/assets/images/logo.svg" />
        <h3>FROM TWITTER TO ALTER</h3>
        <Icon
          @click="showMenu"
          id="menu"
          name="mingcute:love-fill"
          size="35px"
          color="#F2C4F2"
        ></Icon>
      </div>
      <div id="marquee-wrapper">
        <Vue3Marquee :clone="true" :duration="20">
          <img src="@/assets/images/name.svg" />
        </Vue3Marquee>
      </div>
      <div></div>
      <div id="date">
        <span>11</span>
        <hr />
        <span>07</span>
        <hr />
        <span>24</span>
      </div>
      <div id="header-text">
        <p>
          In your arms, I have found my forever home. Your love is my sanctuary,
          where I find peace and happiness. Thank you for being my rock, my
          confidant, and my greatest adventure. I have promised and shall yet
          promise to love you, even unto my end.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";

const showMenu = () => {
  isMenu.value = true;
};
</script>

<style scoped lang="less">
#header {
  width: 100%;
  height: 100vh;
  background: url(../assets/images/img1.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}

#wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: white;
}

#top-header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 700;
    color: #d5d5d5;
    font-size: 2.2rem;
    display: none;
    font-family: "Source Serif 4", sans-serif;

    @media @desktop {
      display: block;
    }
  }

  .logo {
    width: 35px;
    height: 35px;
  }

  #menu {
    cursor: pointer;
  }
}

#marquee-wrapper {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  margin-bottom: 20px;

  img {
    width: 400px;
    //transform: scale(0.7);
    opacity: 0.8;
    margin: 0 15px;
  }
}

#date {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  padding: 9px 18px;
  border: 2px solid #f2c4f247;
  border-radius: 50px;
  font-family: "Source Serif 4", sans-serif;

  @media @desktop {
    flex-direction: column;
    top: 38%;
    right: 0;
    left: auto;
    margin: 0 30px;
    gap: 0;
    transform: none;
    padding: 15px 18px;
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: #f2c4f2;
    padding: 0 6px;
    font-weight: 700;
  }

  hr {
    width: 5%;
    border-color: #f2c4f2;
  }
}

#header-text {
  max-width: 80%;
  text-align: left;
  padding: 10px;
  position: absolute;
  left: 0;
  bottom: 10%;
  margin: 0 20px;
  font-weight: 400;
  line-height: 1.8;
  font-size: 1.4rem;
  color: #d5d5d5;
  font-family: "Source Serif 4", sans-serif;

  @media @desktop {
    font-size: 1.8rem;
    left: 0;
    top: 30%;
    width: 370px;
    margin: 0 40px;
  }
}
</style>

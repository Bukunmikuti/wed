<template>
  <div id="menu-container">
    <div id="header">
      <img class="logo" src="@/assets/images/logo.svg" />
      <Icon
        id="menu"
        name="mingcute:love-fill"
        size="35px"
        color="#F2C4F2"
        @click="hideMenu"
      ></Icon>
    </div>
    <div id="list">
      <p @click="scroll(1)">Our Story</p>
      <p @click="scroll(2)">Pictures</p>
      <p @click="scroll(3)">When & Where</p>
      <p @click="scroll(4)">Map Directions</p>
      <p @click="scroll(5)">Gifts</p>
      <p @click="scroll(6)">Photo Guest Book</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const scroll = (to: number) => {
  resetShow();
  if (to === 1) {
    show.value.ourStory = true;
  }
  if (to === 2) {
    show.value.gallery = true;
  }
  if (to === 3) {
    show.value.venue = true;
  }
  if (to === 4) {
    show.value.map = true;
  }
  if (to === 5) {
    show.value.gift = true;
  }
  if (to === 6) {
    show.value.guest = true;
  }
  isMenu.value = false;
};

const hideMenu = () => {
  isMenu.value = false;
};
</script>

<style scoped lang="less">
#menu-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #de66de;
  z-index: 100;
}

#header {
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

#list {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0;
  color: white;

  p {
    font-size: 2rem;
    font-weight: 500;

    &:hover {
      color: #dcdcdc;
    }
  }
}
</style>

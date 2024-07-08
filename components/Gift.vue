<template>
  <div id="gift" ref="giftEl">
    <div class="title" ref="story">
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h1>Gift Registry</h1>
      <p>
        We kindly request no physical gifts. If you would like to contribute,
        monetary gifts are appreciated. Thank you for your understanding and
        generosity.
      </p>
    </div>
    <div id="details">
      <p class="bank">First Bank</p>
      <p class="acct">3128488981<br /><span>Olabisi Esan</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const giftEl = ref<HTMLElement>();

watch(
  show,
  (newValue, old) => {
    if (show.value.gift === true) {
      giftEl.value?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { deep: true }
);
</script>

<style scoped lang="less">
#gift {
  width: 100%;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    h2 {
      margin-bottom: 0;
    }

    p {
      color: #8d8d8d;
      margin-top: 10px;
      padding: 0 20px;
    }
  }
}

#details {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .bank {
    font-weight: 700;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 7%;
      bottom: 16px;
      width: 90px;
      height: 10px;
      transform: skew(-12deg) translate(-10%, 150%);
      background: rgba(238, 111, 87, 0.5);
      z-index: -1;
    }
  }

  .acct {
    padding: 15px 10px;
    margin-top: 5px;
    text-align: center;
    width: 250px;
    border-radius: 5px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    letter-spacing: 1.5px;
    font-weight: 500;
    span {
      font-size: 1.3rem;
      letter-spacing: normal;
      font-weight: 400;
      padding-left: 5px;
    }
  }
}
</style>

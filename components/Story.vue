<template>
  <div id="story">
    <div class="title">
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h1>Our Story</h1>
    </div>
    <div class="content">
      <p>
        One morning on Twitter (now X), Oyin stumbled upon a thread discussing
        food options. Intrigued by this shift from the usual threads on
        relationships, she decided to follow two friends involved in the
        conversation. One of them followed her back, while the other didn't.
        <br /><br />
        A few weeks later, Oyin was conversing with the friend who had followed
        her back. She jokingly remarked, "Your friend didn't follow me back; he
        must be so proud with his 21 followers." Unknown to Oyinkansola, Opeyemi
        was out of the country at the time. Additionally, months before she
        followed him on X, God had mentioned her name to him during prayer.
        <br /><br />
        When Opeyemi returned to the country, his friend mentioned the issue to
        him jokingly. Out of the benevolence of his heart, Opeyemi reached out
        to apologize and followed her back.<br /><br />
        He couldn't stop at just an apology as he had met God's divine will for
        him, he did not even know my name at this time but when he eventually
        did, I was who the Lord says I am and here we are today intrigued by the
        love we share and ready to explore
      </p>
    </div>
    <div id="nav">
      <button class="active" ref="btn1" @click="makeActive(0)">1</button>
      <button ref="btn2" @click="makeActive(1)">2</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const btn1 = ref<HTMLElement>();
const btn2 = ref<HTMLElement>();

const makeActive = (pos: number) => {
  btn1.value!.classList.remove("active");
  btn2.value!.classList.remove("active");
  if (pos === 0) {
    btn1.value!.classList.add("active");
  } else {
    btn2.value!.classList.add("active");
  }
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
    padding-bottom: 0;
    text-align: left;
    color: #0c0d0d;
    font-size: 1.5rem;
  }
}

#nav {
  margin-top: 15px;
  display: flex;
  gap: 0 7px;

  button {
    width: 27px;
    height: 27px;
    border-radius: 100%;
    border: 2px solid #b1b1b1;
    background: none;
    font-size: 1.4rem;

    &.active {
      background: #e678e6;
      border-color: #e678e6;
      color: white;
    }
  }
}
</style>

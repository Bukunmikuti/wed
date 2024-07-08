<template>
  <div id="story">
    <div class="title" ref="story">
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h1>Our Story</h1>
    </div>
    <div class="content">
      <p v-show="isActive === 0">
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
        love we share and ready to explore.
      </p>
      <p v-show="isActive === 1">
        In the words of Jesus in John 13:34-35: "A new command I give you: Love
        one another. As I have loved you, so you must love one another. By this,
        everyone will know that you are my disciples, if you love one
        another."<br />
        Today, we see this love exemplified in our life; our journey together is
        a testament to the love that Jesus has shown us: a love that is patient
        and kind, a love that is not easily angered and keeps no record of
        wrongs. As the Apostle Paul beautifully described in 1 Corinthians
        13:4-7, love always protects, always trusts, always hopes, and always
        perseveres.<br /><br />

        Our love for each other is a reflection of Christ's love for the church.
        Ephesians 5:25-26 reminds us, "Husbands, love your wives, just as Christ
        loved the church and gave himself up for her to make her holy, cleansing
        her by the washing with water through the word." In this same spirit, we
        pray that our love for each other be selfless and sacrificial, always
        seeking the good of the other in Jesus name (Amen) <br /><br />

        As we embark on this new journey together, may we continually draw
        strength from the Lord. That His love be the foundation upon which we
        build our life together. In times of joy and in times of challenge, may
        we always turn to Jesus, who is the source of all love and the one who
        sustains us in Jesus name (Amen)<br /><br />

        Join us as we celebrate our awesome union with our hearts full of
        gratitude, knowing that the love you all will witness is a reflection of
        the divine love of Jesus Christ. May His blessings be upon you both now
        and always.
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
const story = ref<HTMLElement>();
const isActive = ref(0);

const makeActive = (pos: number) => {
  btn1.value!.classList.remove("active");
  btn2.value!.classList.remove("active");
  isActive.value = pos;
  if (pos === 0) {
    btn1.value!.classList.add("active");
  } else {
    btn2.value!.classList.add("active");
  }
  story.value?.scrollIntoView({ behavior: "smooth" });
};

watch(
  show,
  (newValue, old) => {
    if (show.value.ourStory === true) {
        story.value?.scrollIntoView({ behavior: "smooth" })
    }
  },
  { deep: true }
);
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
    border: 1px solid #bfbfbf;
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

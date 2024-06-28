<template>
  <div id="thanks">
    <p>Thank you for celebrating with us!</p>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
#thanks {
  font-family: "Source Serif 4", sans-serif;
  font-style: italic;
  font-size: 3rem;
  font-weight: 700;
  padding: 30px;
  text-align: center;

  p {
    background: linear-gradient(
      to right,
      #de66de 20%,
      #4099c0 30%,
      #d98fd9 70%,
      #cb4dd6 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 7s ease-in-out infinite alternate;

    @keyframes textShine {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  }
}
</style>

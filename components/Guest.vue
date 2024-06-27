<template>
  <div id="guest-wrapper">
    <div class="card">
      <Toast />
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h4>Guest Area</h4>
      <p>Share your moments, pictures and love with us.</p>
      <Button @click="confirm1">Enter Guest Area</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import "primevue/resources/themes/aura-light-green/theme.css";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
  console.log("ok dokey");
  toast.add({
    severity: "contrast",
    summary: "Guest Area",
    detail: "Access to client area will be granted soon",
    life: 3000,
  });
};
</script>

<style scoped lang="less">
#guest-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  margin-top: 30px;

  .card {
    width: 100%;
    max-width: 700px;
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

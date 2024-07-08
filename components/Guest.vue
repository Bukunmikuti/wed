<template>
  <div id="guest-wrapper" ref="guestEl">
    <div class="card">
      <Toast />
      <Icon name="ph:flower-lotus-duotone" size="30px" color="#de66de" />
      <h4>Guest Book</h4>
      <p>
        Captured moments, pictures or videos you would like to share with us?
        Kindly use the guest book.
      </p>
      <Button @click="showDialog">Use Guest Book</Button>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      :style="{ width: '90%' }"
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(2px)',
        },
      }"
    >
      <template #container="{ closeCallback }">
        <div id="guest-book">
          <div class="wrapper">
            <div class="btn" @click="nav('send')">
              <div class="icon-wrapper">
                <Icon
                  name="solar:gallery-send-bold"
                  size="50px"
                  color="#de66de"
                ></Icon>
              </div>
              <p>Upload your moments</p>
            </div>

            <div class="btn" @click="nav('view')">
              <div class="icon-wrapper">
                <Icon
                  name="solar:gallery-wide-bold"
                  size="50px"
                  color="#de66de"
                ></Icon>
              </div>
              <p>See Guest Photos</p>
            </div>
          </div>
          <button id="cancel-btn" @click="closeCallback">Cancel</button>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import "primevue/resources/themes/aura-light-green/theme.css";
import Dialog from "primevue/dialog";
const visible = ref(false);
const guestEl = ref<HTMLElement>();

watch(
  show,
  (newValue, old) => {
    if (show.value.guest === true) {
      guestEl.value?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { deep: true }
);

const showDialog = () => {
  visible.value = true;
};

const nav = (to: string) => {
  if (to === "send") {
    navigateTo("https://weduploader.com/upload/kC3GzL6ZVPFOiiSb", {
      external: true,
      open: {
        target: "_blank",
      },
    });
  } else {
    navigateTo(
      "https://drive.google.com/drive/folders/1o8LtiMNK3TG8UpFDOQQ0qIKzXGATlQLQ?usp=drive_link",
      {
        external: true,
        open: {
          target: "_blank",
        },
      }
    );
  }
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
      font-family: 'Poppins', sans-serif;
    }
  }
}
</style>

<style lang="less">
#guest-book {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 15px;
  padding: 20px 0;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
  .icon-wrapper {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: #f2f2f2;
    &:hover {
      background: #de66de;
      .icon {
        color: white !important;
      }
    }
  }

  p {
    font-size: 1.4rem;
    padding: 0 20px;
    font-weight: bold;
    text-align: center;
  }
}

#cancel-btn {
  font-size: 1.5rem;
  padding: 10px 50px;
  border-radius: 15px;
  border: 2px solid #d4d4d4;
  background: none;

  &:hover {
    border-color: #d4d4d4;
    background: #d4d4d4;
  }
}
</style>

<template>
  <button><slot /></button>
</template>

<script setup></script>

<style scoped lang="less">
button {
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
  background: #e678e6;
  font-weight: 500;
  color: white;
  font-family: Poppins, sans-serif;
  transition: background 200ms linear;

  &:hover {
    background: #de66de;
  }
}
</style>

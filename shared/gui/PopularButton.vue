<template>
<button class="btn">{{ text, router }}</button>
</template>

<script setup lang="ts">

defineProps({
    text: String,
    router: String,
})
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  padding: 1em;
  font-size: 20px;
  font-family: "Comic";
  width: 8em;
  margin: 5px;
  aspect-ratio: 1/0.25;
  color: white;
  background: #212121;
  background-size: cover;
  background-blend-mode: overlay;
  border-radius: 0.5em;
  outline: 0.1em solid #353535;
  border: 0;
  box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
}

.btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #212121, #252525);
  background: radial-gradient(
    circle at bottom,
    rgba(50, 100, 180, 0.5) 10%,
    #212121 70%
  );
  outline: 0;
}
</style>
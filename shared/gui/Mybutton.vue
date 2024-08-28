<template>
    <div class="button_position">
      <div class="container">
        <div class="toggle">
        <input type="checkbox" ref="themeSwitcher" id="button" @change="changeTheme">
        <span class="button"></span>
        <span class="label">☼</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">  
import { onMounted, ref } from 'vue';  

const themeSwitcher = ref<HTMLInputElement | null>(null);

function changeTheme(e: Event) {  
  const target = e.target as HTMLInputElement;  
  const root = document.documentElement;

  if (target.checked) {  
      localStorage.setItem('theme', 'light-theme');  
      localStorage.setItem('switcherIsChecked', 'true');  
      root.className = 'light-theme';  
  } else {  
      localStorage.setItem('theme', 'dark-theme');  
      localStorage.setItem('switcherIsChecked', 'false');  
      root.className = 'dark-theme';
  }  
};  
  
onMounted(() => {
  const root = document.documentElement;
  const currentTheme = localStorage.getItem('theme') || 'light-theme';  
  const isChecked = localStorage.getItem('switcherIsChecked');

    root.className = currentTheme;  
    if (themeSwitcher.value) {  
        themeSwitcher.value.checked = isChecked === 'true';  
    }  
});  
</script>  

<style lang="scss">
.button_position {
    position: fixed;
    top: 20px;
    z-index: 100;
    bottom: 20px;
    right: 20px;
}

.toggle {
  display: inline-block;
  position: relative;
  height: 50px;
  width: 50px;
}

.toggle:before {
  box-shadow: 0;
  border-radius: 84.5px;
  background: #fff;
  position: absolute;
  margin-left: -36px;
  margin-top: -36px;
  opacity: 0.2;
  height: 100px;
  width: 100px;
  left: 50%;
  top: 50%;
}

.toogle input:checked~.label {
  color: rgba(255,0,0,0.8);
}

.toggle .button {
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  border-radius: 68.8px;
  position: absolute;
  background: #eaeaea;
  margin-left: -27px;
  margin-top: -22px;
  display: block;
  height: 55px;
  width: 55px;
  left: 50%;
  top: 50%;
}

.toggle .label {
  transition: color 300ms ease-out;
  line-height: 55px;
  text-align: center;
  position: absolute;
  font-weight: 700;
  font-size: 40px;
  display: block;
  opacity: 0.9;
  height: 100%;
  width: 100%;
  color: rgba(0, 0, 0, 0.9);
}

.toggle input {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  height: 100%;
  width: 100%;
  left: -3px;
  top: 24px;
}

.toggle input:active ~ .button {
  filter: blur(0.5px);
  box-shadow: 0 12px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 30px 1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 25px 0 rgba(0, 0, 0, 0.4), inset 0 0 10px 1px rgba(255, 255, 255, 0.6);
}

.toggle input:active ~ .label {
  font-size: 26px;
  color: rgba(0, 0, 0, 0.45);
}

.toggle input:checked ~ .button {
  filter: blur(0.5px);
  box-shadow: 0 10px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
}

.toggle input:checked ~ .label {
  color: rgba(0, 0, 0, 0.8);
}

</style>

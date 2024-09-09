<template>  
    <div class="radio-inputs">  
      <label  
        class="radio"  
        v-for="option in options"  
        :key="option.value"  
        :style="{ borderColor: selected === option.value ? option.border : 'gray' }"  
      >  
        <input  
          type="radio"  
          name="radio"  
          :value="option.value"  
          v-model="selected"  
        />  
        <span  
          class="name"  
          :style="{ borderColor: selected === option.value ? option.border : 'transparent' }"  
        >  
          {{ option.label }}  
        </span>  
      </label>  
    </div>  
  </template>  
  
  <script setup lang="ts">  
  import { ref } from 'vue';  
  
  const options = [  
    { value: 'domestic', label: 'Бытовая', border: 'blue' },  
    { value: 'social', label: 'Социальная', border: 'green' },  
    { value: 'educational', label: 'Учебная', border: 'coral' },  
    { value: 'work', label: 'Рабочая', border: 'red' },  
    { value: 'entertainment', label: 'Развлекательная', border: 'purple' },  
  ];  
  
  const selected = ref('domestic');  
  </script>  
  
  <style lang="scss">  
  .radio-inputs {  
    position: relative;  
    display: flex;  
    flex-wrap: wrap;  
    border-radius: 0.5rem;  
    background-color: #EEE;  
    box-sizing: border-box;  
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);  
    padding: 0.25rem;  
    font-size: 18px;  
    width: 525px;  
    margin-top: 25px;  
    margin-right: 120px;  
  }  
  
  .radio-inputs .radio {  
    flex: 1 1 auto;  
    text-align: center;  
  }  
  
  .radio-inputs .radio input {  
    display: none;  
  }  
  
  .radio-inputs .radio .name {  
    display: flex;  
    cursor: pointer;  
    align-items: center;  
    justify-content: center;  
    border-radius: 0.5rem;  
    padding: 0.5rem 0;  
    color: rgba(51, 65, 85, 1);  
    transition: all 0.15s ease-in-out;  
  }  
  
  .radio-inputs .radio input:checked + .name {  
    font-weight: 600;  
  }  
  
  .radio {  
    border: 4px solid gray;  
    border-radius: 5px;  
    cursor: pointer;  
  }  
  </style>
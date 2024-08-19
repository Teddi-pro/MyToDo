<template>
    <MenuButtons />
    <div class="main_container">
        <FormToFill  placeholder="Write a name of task" placeholdertext="Write your task" />
    </div>
</template>

<script setup lang="ts">
import FormToFill from '../../widgets/form-to-fill/FormToFill.vue'
import MenuButtons from '../../widgets/header/Header.vue'
</script>

<style lang="scss">
:root.light-theme {
    --theme-color: #f5f5f5;
    --text-color: #313131;
}
:root.dark-theme {
    --theme-color: #313131d3;
    --text-color: #f5f5f5;
}
body {
    background: var(--theme-color);
    color: var(--text-color);
}
.main_container {
    display: flex;
    justify-content: center;
}
</style>

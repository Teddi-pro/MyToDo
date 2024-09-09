<template>
    <Header />
    <div class="hamster">
    <Hamster />
    </div>
    <div class="main_container">
        <BorderSwitch />
        <FormToFill  placeholder="Write a name of task" placeholdertext="Write your task" />
    </div>
</template>

<script setup lang="ts">
import FormToFill from '../../widgets/form-to-fill/FormToFill.vue'
import Header from '../../widgets/header/Header.vue'
import BorderSwitch from '../../shared/gui/BorderSwitch.vue'
import Hamster from '../../shared/gui/Hamster.vue'
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
    margin-top: 90px;
}
.main_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.hamster {
    display: flex;
    align-items: center;

}
</style>

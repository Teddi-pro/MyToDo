<template>
    <div class="taski">
        <div class="buttons">
        <router-link to="/taskDone">
            <PopularButton text="Task done" />
        </router-link>
        <router-link to="/task">
            <PopularButton text="Tasks"/>
        </router-link>
        <router-link to="/home">
            <PopularButton text="Make a task"/>
        </router-link>
        </div>
        <Mybutton />
    </div>
    
</template>

<script setup lang="ts">
import PopularButton from '../../shared//gui/PopularButton.vue';
import Mybutton from '../../shared/gui/Mybutton.vue';

</script>

<style lang="scss">
.taski {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    z-index: 1;
    background-color: #313131;
    left: 0;
    top: 0;
}
.buttons {
    display: flex;
    justify-content: space-between;
    width: 600px;
}
</style>
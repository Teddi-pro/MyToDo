<template>
    <div class="header__container">
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
    <div class="header__container-inner">
    <div class="positionFind">
        <input
        placeholder="Write the name of task"
        class="findTask" />
    </div>
    <div>
        <Mybutton />
    </div>
    </div>
    </div>
</div>
    
</template>

<script setup lang="ts">
import PopularButton from '../../shared//gui/PopularButton.vue';
import Mybutton from '../../shared/gui/Mybutton.vue';

</script>

<style lang="scss">
.header {
    &__container {
        display: flex;
    
        &-inner {
            display: flex;
            margin-right: 10px;
        }
    }
}
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
    width: 600px;
}
.positionFind {
    display: flex;
    align-items: center;
}
.findTask {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 600px;
    padding: 10px;
    margin: 5px;
    border-radius: 90px;
    font-size: 25px;
}
</style>
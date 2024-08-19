<template>
    <div class="taski">
        <router-link to="/taskDone">
            <PopularButton text="Task done" />
        </router-link>
        <router-link to="/task">
            <PopularButton text="Tasks"/>
        </router-link>
        <router-link to="/home">
            <PopularButton text="Make a task"/>
        </router-link>
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
    justify-content: space-between;
    width: 30%;
}
</style>
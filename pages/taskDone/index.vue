<template>
    <Header />
    <h1 class="correctTask">
    <ul class="positionOfTask">
            <li v-for="todo in doneTodos" :key="todo.id" class="positionInsideTask">
                <div class="containerTodo">
                    <div>
                        <span class='todoTD'>{{ todo.text }}</span>
                        <br>
                        <span class="todoTD">{{ todo.description }}</span>
                    </div>
                    <div>
                    <PopularButton @click="removeTodo(todo)" text="Delete" />
                    </div>
                </div>
            </li>
        </ul>
    </h1>
    </template>
    
<script setup lang="ts">
import Header from '../../widgets/header/Header.vue'
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';  
import PopularButton from '../../shared/gui/PopularButton.vue'

const toast = useToast(); 

interface toDoType {
    id: number;
    text: string;
    description: string;
}

let id = 0;

const todos = ref<toDoType[]>([]);
const doneTodos = ref<toDoType[]>([]);

function loadDoneTodos() {  
  const storedDoneTodos = localStorage.getItem('doneTodos');  
  if (storedDoneTodos) {  
    doneTodos.value = JSON.parse(storedDoneTodos);  
    id = doneTodos.value.length > 0 ? Math.max(...doneTodos.value.reverse().map(todo => todo.id)) + 1 : 0; 
  }
}

onMounted (() => {
    loadDoneTodos(); 
})

function removeTodo(todo: toDoType) {
  doneTodos.value = doneTodos.value.filter((t) => t.id !== todo.id);
  toast.error('Задача удалена');
  localStorage.setItem('doneTodos', JSON.stringify(doneTodos.value));
}
</script>

<style lang="scss"></style>
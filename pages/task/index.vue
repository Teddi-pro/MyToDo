<template>
    <Header />
    <h1 class="correctTask">
    <ul class="positionOfTask">
            <li v-for="todo in todos" :key="todo.id" class="positionInsideTask">
                <div class="containerTodo">
                    <div>
                        <span class='todoTD'>{{ todo.text }}</span>
                        <br>
                        <span class="todoTD">{{ todo.description }}</span>
                    </div>
                    <div>
                    <PopularButton text="Done" @click="doneTask(todo)" />
                    <PopularButton @click="removeTodo(todo)" text="Delete"/>
                    </div>
                </div>
            </li>
        </ul>
    </h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../../widgets/header/Header.vue'
import PopularButton from '../../shared/gui/PopularButton.vue'
import { useToast } from 'vue-toastification';  

const toast = useToast(); 

interface toDoType {
    id: number;
    text: string;
    description: string;
}

let id = 0;

const todos = ref<toDoType[]>([]);
const doneTodos = ref<toDoType[]>([]);

function loadTodos() {  
    const storedTodos = localStorage.getItem('todos');  
    if (storedTodos) {  
        todos.value = JSON.parse(storedTodos);  
        id = todos.value.length > 0 ? Math.max(...todos.value.reverse().map(todo => todo.id)) + 1 : 0; 
    }  
}  

onMounted (() => {
    loadTodos(); 
})

function doneTask(todo: toDoType) {  
    let doneArr: toDoType[] = JSON.parse(localStorage.getItem('doneTodos') || '[]');

    if (!Array.isArray(doneArr)) {  
        doneArr = [];
    }

    doneArr.push(todo);  

    todos.value = todos.value.filter((t) => t.id !== todo.id);  
    toast.success('Задача выполнена');  
    localStorage.setItem('todos', JSON.stringify(todos.value));  
    localStorage.setItem('doneTodos', JSON.stringify(doneArr));  
}

function removeTodo(todo: toDoType) {
    todos.value = todos.value.filter((t) => t.id !== todo.id);
    toast.error('Такска удалена');
    localStorage.setItem('todos', JSON.stringify(todos.value));
}
</script>

<style lang="scss">
.correctTask {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
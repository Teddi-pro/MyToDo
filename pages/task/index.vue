<template>
    <MenuButtons />
    <h1 class="correctTask">
    <ul class="ul">
            <li v-for="todo in todos" :key="todo.id" class="li">
                <div class="containerTodo">
                    <div>
                        <span class='span'>{{ todo.text }}</span>
                        <br>
                        <span class="span">{{ todo.description }}</span>
                    </div>
                    <div>
                    <button @click="removeTodo(todo)" class="closeBtn">X</button>
                    </div>
                </div>
            </li>
        </ul>
    </h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MenuButtons from '../../widgets/header/Header.vue'
import { useToast } from 'vue-toastification';  

const toast = useToast(); 

interface toDoType {
    id: number;
    text: string;
    description: string;
}

let id = 0;

const todos = ref<toDoType[]>([]);

function loadTodos() {  
  const storedTodos = localStorage.getItem('todos');  
  if (storedTodos) {  
    todos.value = JSON.parse(storedTodos);  
    id = todos.value.length > 0 ? Math.max(...todos.value.map(todo => todo.id)) + 1 : 0; 
  }  
}  

onMounted (() => {
    loadTodos(); 
})

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
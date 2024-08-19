<template>
    <p class="form">
        <form @submit.prevent="addTodo" class="form">
        <input
        class="input"
        :placeholder="props.placeholder"
        v-model="newTodo"
        />
        <textarea class="text-area" :placeholder="props.placeholdertext" v-model="newDescriptionTodo" ></textarea>
        <PopularButton text="Add a task" @click="showToast" />
        </form>
        <!-- <ul class="ul">
            <li v-for="todo in todos" :key="todo.id" class="li">
                <div class="containerTodo">
                    <span class='span'>{{ todo.text }}</span>
                    <br>
                    <span class="span">{{ todo.description }}</span>
                </div>
                <button @click="removeTodo(todo)" class="closeBtn">X</button>
            </li>
        </ul> -->
    </p>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import PopularButton from '~/shared/gui/PopularButton.vue';
import { useToast } from 'vue-toastification';  

const toast = useToast();  

const showToast = () => {  
    toast.success("Такска добавлена!", {
     timeout: 2000
    });  
};

interface toDoType {
    id: number;
    text: string;
    description: string;
}

type Props = {
	text?: string;
    placeholder: string;
    placeholdertext: string;
};
const props = defineProps<Props>();  

let id = 0;

const newTodo = ref<string>('');
const newDescriptionTodo = ref<string>('');
const todos = ref<toDoType[]>([]);

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, description: newDescriptionTodo.value })
  newTodo.value = ''
  newDescriptionTodo.value = ''
  localStorage.setItem('todos', JSON.stringify(todos.value)); 
}

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
.input {
    width: 500px;
    height: 80px;
    border-radius: 25px;
    border: 5px solid #212121;
    padding: 12px;
    font-size: 25px;
    font-family: 'Comic';
}
.form {
    display: flex;
    flex-direction: column;
    width: 650px;    
}
::placeholder {
    opacity: 0.7;
    font-size: 25px;
}
.ul {
    display: flex;
    flex-direction: column;
    width: 600px;
    padding: 0;
}
.li {
    display: flex;
    line-height: 30px;
    border-radius: 25px;
    margin-bottom: 10px;
}
.text-area {
    width: 500px;
    height: 100px;
    margin: 5px 0 15px 0;
    border: 5px solid #212121;
    border-radius: 25px;
    padding: 12px;
    font-size: 25px;
    font-family: 'Comic';
}
.closeBtn {
    width: 25px;
    height: 25px;
    border-radius: 40px;
    margin-left: 10px;
}
.closeBtn:hover {
    background-color: #d1f8f1; /* Цвет фона */
    box-shadow: 0 0 0 2px #00af8f, 0 0 0 4px #00af8f;
  outline: 0;
}
.containerTodo {
    display: flex;
    padding: 12px;
    border: 5px solid #212121;
    border-radius: 25px;
    word-break: break-word;
}
.span {
    display: flex;
    width: 500px;
    word-spacing: 5px;
    font-size: 25px;
	line-height: 30px;
}
</style>
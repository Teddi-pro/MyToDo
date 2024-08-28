<template>
    <p class="formOfTask">
        <form @submit.prevent="addTodo">
        <input
        class="nameOfTask"
        :placeholder="props.placeholder"
        v-model="newTodo"
        />
        <textarea class="taskArea" :placeholder="props.placeholdertext" v-model="newDescriptionTodo" ></textarea>
        <PopularButton text="Add a task" @click="showToast" />
        </form>
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
</script>

<style lang="scss">

.formOfTask {
    display: flex;
    flex-direction: column;
    width: 650px;    
}
.nameOfTask {
    width: 500px;
    height: 80px;
    border-radius: 25px;
    border: 5px solid #212121;
    padding: 12px;
    font-size: 25px;
    font-family: 'Comic';
    outline: none;
}
.taskArea {
    width: 500px;
    height: 100px;
    margin: 5px 0 15px 0;
    border: 5px solid #212121;
    border-radius: 25px;
    padding: 12px;
    font-size: 25px;
    font-family: 'Comic';
    outline: none;
}
::placeholder {
    opacity: 0.7;
    font-size: 25px;
}
.positionOfTask {
    width: 600px;
    padding: 0;
}
.positionInsideTask {
    display: flex;
    line-height: 30px;
    border-radius: 25px;
    margin-bottom: 10px;
}
.containerTodo {
    display: flex;
    padding: 12px;
    border: 5px solid #212121;
    border-radius: 25px;
    word-break: break-word;
}
.todoTD {
    display: flex;
    width: 500px;
    word-spacing: 5px;
    font-size: 25px;
	line-height: 30px;
    margin-right: 5px;
}
</style>
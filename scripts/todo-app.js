// Initial Handshake
console.log('SCRIPT: todo-app.js Loaded!');


// VueApp
const todoApp = new Vue({
    el: '#todo-app',

    data: {
        todoList: createObjArray(TODO_DATA),
    },

    methods: {
        removeTask(idxTaskToRemove) {
            console.log('DEBUG - removeTask function clicked');
            this.todoList.splice(idxTaskToRemove, 1);
            console.log('DEBUG - updated ToDo List:', this.todoList);
        }
    }
});

console.log('DEBUG - todoApp: ', todoApp);
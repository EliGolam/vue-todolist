// Initial Handshake
console.log('SCRIPT: todo-app.js Loaded!');


// VueApp
const todoApp = new Vue({
    el: '#todo-app',

    data: {
        todoList: createObjArray(TODO_DATA),

        newTask: '',
    },

    methods: {
        addTask() {
            console.log('DEBUG - addTask clicked\nTask name', this.newTask);
            
            let task = this.newTask.trim();

            if(!this.isTaskInList()) {
                this.todoList.push(new Task(task));
            } 
        },

        removeTask(idxTaskToRemove) {
            // console.log('DEBUG - removeTask function clicked');
            this.todoList.splice(idxTaskToRemove, 1);
            // console.log('DEBUG - updated ToDo List:', this.todoList);
        },

        isTaskInList() {
            for(item of this.todoList) {
                if (item.name !== this.newTask.trim()) continue; // Guard Statement
                console.log('DEBUG - Task already exists:', item.name);
                return true;  
            }
            return false;
        }, 
    }
});

console.log('DEBUG - todoApp: ', todoApp);
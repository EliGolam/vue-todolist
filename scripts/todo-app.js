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
            let task = this.newTask.trim();
            this.newTask = ''

            if(!this.isTaskInList(task)) {
                this.todoList.push(new Task(task));
            }
        },

        removeTask(idxTaskToRemove) {
            // console.log('DEBUG - removeTask function clicked');
            this.todoList.splice(idxTaskToRemove, 1);
            // console.log('DEBUG - updated ToDo List:', this.todoList);
        },

        isTaskInList(task) {
            if (task.length === 0 || task === undefined) return true; 
            for(item of this.todoList) {
                if (item.name !== task) continue; // Guard Statement
                console.log('DEBUG - Task already exists:', item.name);
                return true;  
            }
            return false;
        }, 
    }
});

console.log('DEBUG - todoApp: ', todoApp);
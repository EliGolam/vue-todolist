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
            this.newTask = '';

            if(!this.isTaskInList(task)) {
                this.todoList.push(new Task(task));
            }
        },

        removeTask(idxTaskToRemove) {
            // this.todoList.splice(idxTaskToRemove, 1); // This removes the task completely from the list
            this.todoList[idxTaskToRemove].removed = true;
            // console.log(`Task ${idxTaskToRemove}: ${this.todoList[idxTaskToRemove].completed}`);
        },

        isTaskInList(task) {
            if (task.length === 0 || task === undefined) return true; 
            for(item of this.todoList) {
                if (item.name !== task) continue; // Guard Statement
                if (item.removed) continue; // Guard Statement
                console.log('DEBUG - Task already exists:', item.name);
                return true;  
            }
            return false;
        }, 
    }
});

console.log('DEBUG - todoApp: ', todoApp);
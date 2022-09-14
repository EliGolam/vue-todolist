// Initial Handshake
console.log('SCRIPT: todo-app.js Loaded!');


// VueApp
const todoApp = new Vue({
    el: '#todo-app',

    data: {
        todoList: createObjArray(TODO_DATA),
    }
});

console.log('DEBUG - todoApp: ', todoApp);
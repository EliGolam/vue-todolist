// Initial Handshake
console.log('SCRIPT: utilities.js Loaded!');

// CLASSES
class Task {
    constructor (activity, completed) {
        this.activity = activity;
        this.completed = completed;
    }
}



// FUNCTIONS
function createObjArray (arrayData) {
    const objArr = [];
    arrayData.forEach(element => {
        objArr.push(new Task(...element));
    });
    return objArr;
}

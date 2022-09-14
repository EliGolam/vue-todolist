// Initial Handshake
console.log('SCRIPT: utilities.js Loaded!');

// CLASSES
class Task {
    constructor (name, completed) {
        this.name = name;
        this.completed = completed === undefined ? false : completed;
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

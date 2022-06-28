
var app = new Vue ({
    el: '#root',
    data: {
        userInput: '',
        newInput: null,
        todos: [
        {
            text: 'Fare la spesa',
            done: false
        },
        {
            text: 'Chiamare nonna',
            done: false
        },
        {
            text: 'Pulire casa',
            done: false
        },
        {
            text: 'Giocare a calcetto',
            done: true
        },
    ],
    },
    methods: {
        removeOnClick(elementIndex) {
            this.todos.splice(elementIndex, 1);
        },
        addOnClick() {
            const trimmedString = this.userInput.trim();
            this.newInput = {text: trimmedString, done: false} 
            if(trimmedString.length > 0) {
                this.todos.push(this.newInput);
            }
            this.userInput = ''
        },
        // BONUS 2
        switchDone(elementIndex) {
            this.todos[elementIndex].done = !this.todos[elementIndex].done;
        }
    }
})
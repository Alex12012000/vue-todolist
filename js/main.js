
var app = new Vue ({
    el: '#root',
    data: {
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
        }
    }
})
Vue.component('task-list', {
    props: ['task'],
    template: '<li>{{ task.task }}</li>'
})

new Vue({
    el: '#app',
    data : {
        message: 'Hello Vue!',
        title: 'Vue rendered title',
        shown: false,
        newTask: '',
        tasks : [
            {task : 'Learn HTML'},
            {task : 'Learn CSS'},
            {task : 'Learn Javascript'},
            {task : 'Learn PHP'},
        ]
    },
    methods: {
        addTask() {
            this.tasks.push({task: this.newTask});

            this.newTask = '';
        },
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    }
 })
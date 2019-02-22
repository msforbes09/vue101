<template>
    <div class="container">
        <section class="section">
            <div class="field">
                <label class="label" for="">Example of two way binding.</label>
            
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" v-model="message"  placeholder="Text input">

                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span><!-- icon -->
                    
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span><!-- icon -->
                </div><!-- control -->
            </div><!-- field -->

            <p class="subtitle">Input content: {{ message }}</p>
        </section><!-- section -->

        <section class="section">
            <ul class="content">
                <li v-for="task in tasks" v-text="task"></li>
            </ul>

            <div class="field">
                <label class="label">Add new task:</label>
            
                <div class="control">
                    <div class="columns">
                        <div class="column">
                            <input class="input" type="text" v-model="newTask" placeholder="new task here">
                        </div><!-- column -->
                    
                        <div class="column">
                            <button class="button is-primary is-outlined" @click="addTask">Save</button>

                            <button class="button" :class="{ 'is-dark': clicked }" @click="toggleClass" :title="title" :disabled="clicked">Hover and click me</button>
                        </div><!-- column -->
                    </div><!-- columns -->
                </div><!-- control -->
            </div><!-- field -->
        </section><!-- section -->
    </div>
</template>

<script>
export default{
    name: 'App',
    data() {
        return {
            message: 'Try to change this value',
            tasks: ['Learn HTML5', 'Learn Css3', 'Learn Javascript',],
            newTask: '',
            title: 'Im a generated title using vue',
            clicked: false,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        toggleClass() {
            this.clicked = ! this.clicked
        }
    }
}
</script>

<style>
    
</style>
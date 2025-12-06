
const app = Vue.createApp({
    data() {
        return {
            taskA: 'Ir a la playa',
            taskB: 'Ir a la montaña',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        changeTask() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.taskA;
            } else {
                return this.taskB;
            }
        }
    }
});

app.mount('#tasks');
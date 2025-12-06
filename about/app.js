const app = Vue.createApp({
    data() {
        return {
            name: "Mariano",
            lastName: "Martinez",
            age: 23,
            movieLink: 'https://es.wikipedia.org/wiki/El_Se%C3%B1or_de_los_Anillos:_el_retorno_del_Rey'
        }
    },
    methods: {
        agePlusFive() {
            return this.age + 5
        },
        randomNumber() {
            return Math.floor(Math.random() * 10) + 1
        }
    }

})

app.mount('#about')



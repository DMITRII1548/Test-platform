<template>
    <router-link :to="{ name: 'personal' }">Главная</router-link>
    <div class="mt-3">
        <h2>Ваш тест</h2>
        <div>
            <input placeholder="Название теста" class="form-control w-75" v-model="test.title">
        </div>
        <div class="d-grid gap-5 mt-4">
            <h2>Вопросы:</h2>
            <div class="d-grid gap-3" v-for="question in test.questions">
                <h4>{{ question.number }}.</h4>
                <input placeholder="Текст вопроса" v-model="question.title" class="form-control">
                <div class="mt-3 d-grid gap-3">
                    <div class="d-flex align-items-center gap-3" v-for="choice in question.choices">
                        <input @click="$store.dispatch('updateChoiceIsTrue', choice)" type="checkbox" :checked="choice.is_true">
                        <input @keyup="$store.dispatch('updateChoiceTitle', choice)" type="text" v-model="choice.title">
                        <button @click="$store.dispatch('destroyChoice', {choiceId: choice.id, questionId: question.id})" class="btn btn-danger">Удалить</button>
                    </div>
                    <div><button @click="$store.dispatch('storeChoice', question.id)" class="btn btn-success">+ Добавить</button></div>
                </div>
            </div>
            <div>
                <button>+ Добавить вопрос</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Edit',

    mounted() {
        this.$store.dispatch('getTest', this.$route.params.id)
    },

    methods: {

    },

    computed: {
        test() {
            return this.$store.getters.test
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <b-card class="m-2">
        <b-card-title>
            Step {{question.step}}.
        </b-card-title>
        <b-card-text>
            <span>{{question.question}}</span>
            <b-form-group 
                :id="'question-'+question.step"
            >
                <b-form-radio-group 
                    v-model="question.value" 
                    :options="options" 
                    value-field="value" 
                    text-field="name" 
                    @input="answered()"
                />
            </b-form-group>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: "QuestionCard",

    props: {
        question: {
            type: Object,
            required: true
        },
        options: {
            type: Array,
            required: true

        }
    },

    data () {
        return {
           
        };
    },
    methods: {
        answered() {
            this.$emit('questionAnswered', this.question.step)
        }
    }
};
</script>

<style>

</style>
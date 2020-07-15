<template>
    <b-card no-body class="mb-1">

        <b-card-header 
            header-tag="header" 
            role="tab" 
            class="header px-2 py-1 d-flex" 
            v-b-toggle="'accordion-' + question.step"
            :title="this.question.question"
        >
            <span class="header-question">
                {{'Step ' + this.question.step + ': ' + this.question.question}}
            </span>
            <span class="header-answer" v-if="answerText">
                You chose: {{answerText}}
            </span>
        </b-card-header>

        <b-collapse 
            role="tabpanel"
            :id="'accordion-' + question.step"
            accordion="question-accordion" 
            visible  
        >
            <b-card-body>
                <span>{{question.question}}</span>
                <b-form-group :id="'question-'+question.step">
                    <b-form-radio-group 
                        v-model="question.value" 
                        :options="question.options" 
                        value-field="value" 
                        text-field="name" 
                        @input="answered()" 
                    />
                </b-form-group>
            </b-card-body>
        </b-collapse>

    </b-card>
</template>

<script>
export default {
    name: "QuestionAccordion",

    props: {
        question: {
            type: Object,
            required: true
        },
        currentStep: {
            type: Number,
            required: true
        },
        answerText: {
            type: String,
            default: null
        }
    },

    methods: {
        answered() {
            this.$emit('questionAnswered', this.question.step);
        }
    }
};
</script>

<style lang="scss">
.header {
    cursor: pointer;
    
    .header-question {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }

    .header-answer {
        flex-grow: 1;
        white-space: nowrap;
    }
}

</style>
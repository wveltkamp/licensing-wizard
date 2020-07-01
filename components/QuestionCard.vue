<template> 

    <b-tab :active="question.step===currentStep">
        <template v-slot:title>
            <b-button-group 
                class="question-title" 
                size="sm" 
                :title="question.question"
            >
                <b-button class="tab-step">Step {{question.step}}</b-button>
                <b-button class="tab-question" >{{question.question}}</b-button>
                <b-button v-if="answerText" class="tab-answer">{{answerText}}</b-button>
            </b-button-group>
        </template>
        

        <span>{{question.question}}</span>
        
        <slot/>
        
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
    </b-tab>


        

</template>

<script>
export default {
    name: "QuestionCard",

    props: {
        question: {
            type: Object,
            required: true
        },
        currentStep: {
            type: Number,
            required: true
        },
        options: {
            type: Array,
            required: true

        },
        answerText: {
            type: String,
            default: null
        }
        
    },

    data () {
        return {
           
        };
    },

    methods: {
        answered() {
            this.$emit('questionAnswered', this.question.step);
        }
    }
};
</script>

<style lang="scss">

</style>
<template>
    <b-container fluid class="main">
        
        <b-row>
            <b-col>
                <h4>Licensing Wizard</h4>
            </b-col>
        </b-row>
        <b-row>
            <b-form id="form-license" ref="form-license">
                <b-row>
                    <b-col>
                        <b-button class="m-2" variant="outline-primary" @click="resetForm">Restart Wizard</b-button>
                    </b-col>
                </b-row>
                <b-row>
                    
                    <template v-for="(question, index) in orderedQuestions" >
                        <b-col 
                            :key="index"
                            cols="12"
                            v-if="question.show"
                        >
                            <question-card 
                                :question="question" 
                                :options="optionsBool"
                                @questionAnswered="handleQuestionAnswered"
                            />
                        </b-col>
                    </template>
                    
                    <b-col cols="12" v-if="questions.canLicense.value==false">
                        <b-card class="m-2">
                            <b-alert show variant="warning">No License possible</b-alert>
                        </b-card>
                    </b-col>

                    <b-col cols="12" v-if="showSelect">
                        <b-card class="m-2">
                            <span>Please select your license</span>
                            <b-form-select
                                v-model="selectedLicense"
                                :options="licenseOptions"
                                size="sm"
                            />
                            <span>{{wurOnly.question}}</span>
                            <b-form-checkbox 
                                v-model="wurOnly.value"
                                id="checkbox-wur-only"
                            >
                                Sharing should be wur-only
                            </b-form-checkbox>
                        </b-card>
                    </b-col>

                </b-row>
            </b-form>
        </b-row>
        
    </b-container>
</template>

<script>
import Vue from "vue"
import _ from 'lodash';
import QuestionCard from "../components/QuestionCard";

export default {
    name: "license-wizard",
    components: { QuestionCard },
    data() {
        return {
            currentStep: 1,
            questions: {
                canLicense: {
                    value : null, 
                    question: "Can you license the work?", 
                    step: 1,
                    show: true},
                knowLicense: {
                    value : null, 
                    question: "Do you know which license you need?", 
                    step: 2,
                    show: false},
                shareWork: {
                    value : null, 
                    question: "Can others share the work?", 
                    step: 3,
                    show: false},
                attribution: {
                    value : null, 
                    question: "Do you want attribution?", 
                    step: 4,
                    show: false},
                commercialUse: {
                    value : null, 
                    question: "Is commercial use allowed?", 
                    step: 5,
                    show: false},
                modificationAllowed: {
                    value : null, 
                    question: "Is modification allowed?", 
                    step: 6,
                    show: false},
                identicalTerms: {
                    value : null, 
                    question: "Use identical terms?", 
                    step: 7,
                    show: false}
            },
            wurOnly: {
                value : null, 
                question: "Is sharing WUR-only?"},
            optionsBool: [
                {value: true, name: "Yes"},
                {value: false, name: "No"},
            ],
            showSelect: false,
            licenseOptions: [
                "All Rights Reserved", 
                "CC BY",
                "CC BY-SA",
                "CC BY-NC",
                "CC BY-ND",
                "CC BY-NC-SA",
                "CC BY-NC-ND",
                "CC0 1.0", 
                "wur-c", 
                {text: "CC-SA", value :"CC-SA", disabled: true}],
            selectedLicense: ""
        };
    },

    computed: {
        orderedQuestions() { return _.orderBy(this.questions, 'step')},

    },

    methods: {
        resetForm() {
            this.$refs['form-license'].reset();
            for (const question in this.questions) {
                Vue.set(this.questions[question], 'value', null)
            }
        },

        handleQuestionAnswered(step) {
            let showSelect = false

            this.hideSteps(step)
            switch (step) {
                case 1:
                    // If a license is possible, continue to next question, else, show error message
                    if (this.questions.canLicense.value === true) {
                        this.questions.knowLicense.show = true
                    }
                    break;
                case 2:
                    // If the user knows which license they want, skip directly to question for wur-only sharing
                    if (this.questions.knowLicense.value === true) {
                        showSelect = true
                    } else if (this.questions.knowLicense.value === false) {
                        this.questions.shareWork.show = true
                    }
                    break;
                case 3:
                    //If no sharing is possible, go to all rights reserved.
                    if (this.questions.shareWork.value === true) {
                        this.questions.attribution.show = true
                    } else if (this.questions.shareWork.value === false)  {
                        this.selectedLicense = "All Rights Reserved"
                        showSelect = true
                    }
                    break;
                case 4: 
                    // Attribution
                    if (this.questions.attribution.value === true) {
                        this.questions.commercialUse.show = true
                    } else if (this.questions.attribution.value === false)  {
                        this.selectedLicense = "CC0 1.0"
                        showSelect = true
                    }
                    break;
                case 5:
                    //Is Commercial use allowed?
                    this.questions.modificationAllowed.show = true
                    showSelect = false
                    break;
                case 6:
                    // Is modifiction allowed?
                    if (this.questions.modificationAllowed.value === true) {
                        this.questions.identicalTerms.show = true
                    }
                    else if (this.questions.modificationAllowed.value === false)  {
                        if (this.questions.commercialUse.value === true) {
                            this.selectedLicense = "CC BY-ND"
                            showSelect = true
                        } else if (this.questions.commercialUse.value === false)  {
                            this.selectedLicense = "CC BY-NC-ND"
                            showSelect = true
                        }
                    }
                    break;
                case 7:
                    //Use identical terms?
                    if (this.questions.commercialUse.value === true) {
                        if (this.questions.identicalTerms.value === true ) {
                            this.selectedLicense = "CC BY-SA"
                            showSelect = true
                        } else if (this.questions.identicalTerms.value === false) {
                            this.selectedLicense = "CC BY"
                            showSelect = true
                        }
                    } else if (this.questions.commercialUse.value === false) {
                        if (this.questions.identicalTerms.value === true ) {
                            this.selectedLicense = "CC BY-NC-SA"
                            showSelect = true
                        } else if (this.questions.identicalTerms.value === false ) {
                            this.selectedLicense = "CC BY-NC"
                            showSelect = true
                        }
                    }
                    break;
                default:
                    break;
            }

            //Toggle global showselect
            this.showSelect = showSelect    
        },

        hideSteps(step) {
            //Hide any questions past the current question
            for (const question in this.questions) {
                if (this.questions[question].step > step) {
                    Vue.set(this.questions[question], 'show', false)
                    Vue.set(this.questions[question], 'value', null)
                }
            }
        }
    }

};
</script>

<style lang="scss" scoped>
#form-license{
    width: 100%;
}
</style>

import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

import LicensingWizard from "../components/LicensingWizard";


let wrapper;
let questions;

beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    wrapper = mount(LicensingWizard, {
        localVue
    });

    questions = wrapper.vm.questions;
});

afterEach(() => {
    wrapper.destroy();
});

describe("index", () => {

    it("exists", () => {
        expect(wrapper.find(".license-container").vm).toBeTruthy();
    });

    it("initiates all questions as null", () => { 
        expect(Object.keys(questions).length).toBe(7);
        for (var question in questions) {
            expect(questions[question].value).toBe(null);
        }

    });

    it("clears all questions on erstart", async () => { 
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-7').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#reset-questions').trigger('click');
        await Vue.nextTick();
        for (var question in questions) {
            expect(questions[question].value).toBe(null);
        }

    });

    it("shows step 2 if step 1 is marked true, then hide if value is changed", async () => {
        
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.find('#question-2').exists()).toBe(true);

        wrapper.find('#question-1').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();   
        expect(wrapper.find('#question-2').exists()).toBe(false);
    });

    it("selects all rights reserved", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["All Rights Reserved"]);
    });

    it("selects CC0", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC0 1.0"]);        
    });

    it("selects CC BY-ND", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC BY-ND"]);   
    });

    it("selects CC BY", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-7').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC BY"]);  
 
    });

    it("selects CC BY-SA", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-7').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC BY-SA"]);
    });

    it("selects CC BY-NC-ND", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC BY-NC-ND"]);   
                          
        
    });



    it("selects CC BY-NC", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-7').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC BY-NC"]); 
    });

    it("selects CC BY-NC-SA", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-4').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-5').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-6').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-7').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.emitted()['update:license'][0]).toEqual(["CC BY-NC-SA"]);
    });

      
});
import { mount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import LicenseWizard from "../pages/index";
import Vue from "vue";

let wrapper;
let questions;

beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    wrapper = mount(LicenseWizard, {
        localVue
    });

    questions = wrapper.vm.questions;
});

afterEach(() => {
    wrapper.destroy();
});

describe("index", () => {

    it("mounts index page", () => {
        expect(wrapper.find(".main").vm).toBeTruthy();
    });

    it("initiates all questions as null", () => { 
        expect(Object.keys(questions).length).toBe(7);
        for (var question in questions) {
            expect(questions[question].value).toBe(null);
        }

    });

    it("shows step 2 if step 1 is marked true, then hide if value is changed", async () => {
        
        let inputTrue = wrapper.find('#question-1').find('input[value="true"]');
        inputTrue.setChecked(true);
        await Vue.nextTick();
        expect(questions["knowLicense"].show).toBe(true);

        let inputFalse = wrapper.find('#question-1').find('input[value="false"]');
        inputFalse.setChecked(true);
        await Vue.nextTick();   
        expect(questions["knowLicense"].show).toBe(false);
    });

    it("selects all rights reserved", async () => {
        wrapper.find('#question-1').find('input[value="true"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-2').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        wrapper.find('#question-3').find('input[value="false"]').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.vm.selectedLicense).toBe("All Rights Reserved");
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
        expect(wrapper.vm.selectedLicense).toBe("CC0 1.0");            
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
        expect(wrapper.vm.selectedLicense).toBe("CC BY-ND");         
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
        expect(wrapper.vm.selectedLicense).toBe("CC BY");       
 
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
        expect(wrapper.vm.selectedLicense).toBe("CC BY-SA"); 
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
        expect(wrapper.vm.selectedLicense).toBe("CC BY-NC-ND");       
                          
        
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
        expect(wrapper.vm.selectedLicense).toBe("CC BY-NC"); 
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
        expect(wrapper.vm.selectedLicense).toBe("CC BY-NC-SA"); 
    });

    it("selects Wur only", async () => {
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
        wrapper.find('#checkbox-wur-only').find('input').setChecked(true);
        await Vue.nextTick();
        expect(wrapper.vm.wurOnly.value).toBe(true); 
    });
      
});
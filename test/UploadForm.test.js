import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import Vuelidate from 'vuelidate';

import UploadForm from "../components/UploadForm";



let wrapper;
;
let questions;

beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(BootstrapVueIcons);
    localVue.use(Vuelidate);
    wrapper = mount(UploadForm, {
        localVue
    });

});

afterEach(() => {
    wrapper.destroy();
});

describe("index", () => {

    it("exists", () => {
        expect(wrapper.find(".form-upload").vm).toBeTruthy();
    });

    it("renders license selector", () => {
        expect(wrapper.findComponent({ name: "LicensingWizard"}).exists()).toBetrue;
    });

 
      
});
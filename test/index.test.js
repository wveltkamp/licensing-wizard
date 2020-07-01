import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

import uploadForm from "../pages/index";



let wrapper;
;
let questions;

beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    wrapper = mount(uploadForm, {
        localVue
    });

});

afterEach(() => {
    wrapper.destroy();
});

describe("index", () => {

    it("mounts index page", () => {
        expect(wrapper.find(".main").vm).toBeTruthy();
    });

    it("renders license selector", () => {
        expect(wrapper.findComponent({ name: "LicensingWizard"}).exists()).toBetrue;
    });

 
      
});
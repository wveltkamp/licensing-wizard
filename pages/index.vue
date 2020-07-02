<template>
    <client-only>
    <b-container fluid class="main">
            <b-row>
                <b-col col xl="6">
                    <b-card
                        title="Upload your document"
                        class="m-2"
                    >
                        <b-card-text>
                            
                            <b-form class="form-upload" novalidate>

                                <b-form-row > <!-- creator name -->
                                    <b-col>
                                        <b-form-group
                                            label="Creator"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="creator-voorletters"
                                            class="m-2"
                                        >
                                            <b-row>
                                                <b-col col sm="2">
                                                    <b-form-input
                                                        id="creator-voorletters"
                                                        placeholder="Initials"
                                                        size="sm"
                                                    />
                                                </b-col>
                                                <b-col>
                                                    <b-form-input
                                                        id="creator-voorvoegsel"
                                                        placeholder="Prefix(es) "
                                                        size="sm"
                                                    />
                                                </b-col>
                                                <b-col>
                                                    <b-form-input
                                                        id="creator-achternaam"
                                                        placeholder="Surname"
                                                        size="sm"
                                                    />
                                                </b-col>
                                            </b-row>
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end creator name -->

                                <b-form-row> <!-- contact information -->
                                    <b-col>
                                        <b-form-group 
                                            label="Contact Information"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="contact-information"
                                            class="m-2"
                                            
                                        >
                                            <b-form-input 
                                                id="contact-information" 
                                                placeholder="e-mail address"
                                                size="sm"
                                                v-model.trim.lazy="$v.form.contactInformation.$model"
                                                
                                                debounce="500"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end contact information -->

                                <b-row> <!-- Spacer with hr -->
                                    <b-col>
                                        <hr>
                                    </b-col>
                                </b-row>
                                
                                <b-form-row>
                                    <b-col>
                                        <b-form-group
                                            label="Upload file or submit Url?"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="add-file"
                                            class="m-2"
                                        >
                                            <b-form-radio-group
                                                id="wur-only"
                                                v-model="addFile"
                                                :options="addFileOptions"
                                                name="add-file-radio"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row>

                                <b-form-row> <!-- file select -->                                

                                    <b-col >
                                        <transition name="slide-right" mode="out-in">
                                            <b-form-group 
                                                v-if="addFile" key="file"
                                                label="Select a file"
                                                label-size="sm"
                                                label-cols-sm="3"
                                                label-for="file-upload"
                                                class="m-2"
                                            >
                                                <b-form-file 
                                                    id="file-upload"
                                                    size="sm"
                                                />
                                            </b-form-group>

                                            <b-form-group 
                                                v-if="!addFile" key="url"
                                                label="Material Url"
                                                label-size="sm"
                                                label-cols-sm="3"
                                                label-for="file-url"
                                                class="m-2"
                                            >
                                                <b-form-input 
                                                    id="file-url"
                                                    size="sm"
                                                />
                                            </b-form-group>
                                        </transition>
                                    </b-col>
                                    
                                </b-form-row> <!-- end file select -->

                                <b-form-row> <!-- cover-image select -->
                                    <b-col>
                                        <b-form-group
                                            label="Select a cover image"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="cover-image-upload"
                                            class="m-2"
                                        >
                                            <b-form-file 
                                                id="cover-image-upload"
                                                size="sm"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end cover-image select -->

                                <b-form-row> <!-- material name -->
                                    <b-col>
                                        <b-form-group
                                            label="Material name"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="file-name"
                                            class="m-2"
                                        >
                                            <b-form-input 
                                                id="file-name" 
                                                size="sm"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end material name -->

                                <b-form-row> <!-- material description -->
                                    <b-col>
                                        <b-form-group
                                            label="Material description"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="file-description"
                                            class="m-2"
                                        >
                                            <b-form-textarea
                                                id="file-description"
                                                size="sm"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end material description -->

                                <b-form-row> <!-- course code -->
                                    <b-col>
                                        <b-form-group
                                            label="Course code(s)"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="course-code"
                                            class="m-2"
                                        >
                                            <b-form-tags 
                                                id="course-code" 
                                                size="sm"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end course code -->

                                <b-form-row> <!-- copyright owner -->
                                    <b-col>
                                        <b-form-group
                                            label="Course level"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="course-level"
                                            class="m-2"
                                        >
                                            <b-form-select 
                                                id="course-level" 
                                                :options="courseLevelOptions"
                                                size="sm"
                                                v-model="$v.form.courseLevel.$model"
                                                
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end copyright owner -->

                                <b-row> <!-- Spacer with hr -->
                                    <b-col>
                                        <hr>
                                    </b-col>
                                </b-row>

                                <b-form-row> <!-- copyright owner -->
                                    <b-col>
                                        <b-form-group
                                            label="Copyright owner"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="copyright-owner"
                                            class="m-2"
                                        >
                                            <b-form-select 
                                                id="copyright-owner" 
                                                :options="copyrightOwnerOptions"
                                                size="sm"
                                                v-model="$v.form.copyrightOwner.$model"
                                                
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end copyright owner -->

                                <b-form-row> <!-- license selector -->
                                    <b-col>
                                        <b-form-group
                                            label="Select a license"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="license"
                                            class="m-2"
                                        >
                                        <b-row>
                                            <b-col cols="8">
                                                <b-form-select 
                                                id="license" 
                                                :options="licenseOptions"
                                                size="sm"
                                                v-model="$v.form.license.$model"
                                                
                                                />
                                            </b-col>
                                            <b-col>
                                                <b-button 
                                                    v-b-modal.license-selector
                                                    variant="outline-primary"
                                                    size="sm"
                                                >
                                                    Help me Choose
                                                </b-button>
                                            </b-col>
                                            </b-row>
                                        </b-form-group>

                                        <b-modal id="license-selector" title="License Selector" size="xl">
                                            <licensing-wizard 
                                            :license="form.license"
                                            @update:license="updateLicense($event)"
                                        />
                                        </b-modal>
                            
                                    </b-col>
                                </b-form-row> <!-- end license selector -->

                                <b-form-row> <!-- copyright owner -->
                                    <b-col>
                                        <b-form-group
                                            label="Is sharing WUR only?"
                                            label-size="sm"
                                            label-cols-sm="3"
                                            label-for="wur-only"
                                            class="m-2"
                                        >
                                            <b-form-radio-group
                                                id="wur-only"
                                                v-model="form.wurOnly"
                                                :options="wurOnlyOptions"
                                                name="wur-only-radio"
                                            />

                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end copyright owner -->
                                
                                <b-form-row>
                                    <b-col>
                                        <div class="m-2">
                                            <b-button @click.prevent="submitForm" class="submit" variant="primary">Submit</b-button>
                                        </div>
                                    </b-col>
                                </b-form-row>
                                <b-row>
                                    <b-col>
                                        <div class="m-2">
                                            <p v-if="errors" class="error">The form above has errors</p>
                                            <p v-else-if="empty && uiState === 'submit clicked'" class="error">
                                                The form above is empty, please fill in required fields
                                            </p>
                                            <p v-else-if="uiState === 'form submitted'" class="success">Form submitted</p>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-form>

                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
    </b-container>
   </client-only>
</template>

<script>
import Vue from 'vue';
import { required, email } from 'vuelidate/lib/validators';
import LicensingWizard from '../components/LicensingWizard';

export default {
    name: 'uploadForm',
    components: { LicensingWizard },
    data() {
        return {
            addFileOptions: [
               { text: 'Add a file', value: true }, 
               { text: 'Submit a Url', value: false },
            ],

            copyrightOwnerOptions: [
                { value: null, text: 'Please select the copyright owner' },
                { value: 'author', text: 'Author' },
                { value: 'publisher', text: 'Publisher' },
            ],
            courseLevelOptions: [
                { value: null, text: 'Please select the course level' },
                { value: 'WO', text: 'WO' },
                { value: 'HBO', text: 'HBO' },
            ],
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
                {text: "CC-SA", value :"CC-SA", disabled: true}
            ],
            wurOnlyOptions: [
               { text: 'Yes', value: true }, 
               { text: 'No', value: false },
            ],

            form: {
                contactInformation: null, 
                courseLevel: null,  
                wurOnly: null,
                copyrightOwner: null,
                license: ''
            },

            /* Add file or url?*/ 
            addFile: true,

            /* Validation variables*/ 
            uiState: "submit not clicked",
            errors: false,
            empty: true,
        };
    },

    validations: {
        form: {
            contactInformation: {
                email
            },
            
            license: {
                required
            },
            
            copyrightOwner: {
                required
            },
            courseLevel: {
                required
            }
        }

    },

    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty || this.uiState === "submit clicked" ? !$error : null;
        },

        submitForm() {
            this.formTouched = !this.$v.form.$anyDirty;
            this.errors = this.$v.form.$anyError;
            this.uiState = "submit clicked";
            if (this.errors === false && this.formTouched === false) {
                //this is where you send the responses
                this.uiState = "form submitted";
            }
        },

        updateLicense(input) {
            Vue.set(this.form, "license", input)
        },

        updateWurOnly(input) {
            Vue.set(this.form, "wurOnly", input)
        }
    }


};
</script>

<style lang='scss'>
.form-upload {
    width: 100%
}
</style>

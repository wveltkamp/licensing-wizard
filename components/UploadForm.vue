<template>
      <!-- Upload form -->
      <b-form class="form-upload" novalidate :key="key">

        <!-- contributor name -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="contributor" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Contributor</span>
                </label>
            </b-col>
            <b-col>
                <b-form-row
                    v-for="(contributor, index) in contributorFiltered"
                    :key="'contributor-'+contributor.index"
                    class="mb-3"
                >
                    <b-col cols md="2">
                        <b-form-input
                            id="contributor-initials"
                            v-model="contributor.content.initials"
                            placeholder="Initials"
                            size="sm"
                            class="mb-1"
                            
                        />
                    </b-col>
                    <b-col cols md="4">
                        <b-form-input
                            id="contributor-prefix"
                            v-model="contributor.content.prefix"
                            placeholder="Prefix(es) e.g. 'van de' "
                            size="sm"
                            class="mb-1"
                        />
                    </b-col>
                    <b-col cols md="4">
                        <b-form-input
                            id="contributor-surname"
                            v-model="contributor.content.surname"
                            placeholder="Surname"
                            size="sm"
                            class="mb-1"
                        />
                    </b-col>
                    <b-col cols md="2">
                        <b-button 
                            @click="handleRemove('contributor', contributor.index)" 
                            size="sm" 
                            class="mr-1" 
                            variant="danger"
                        >
                            <b-icon icon="trash" aria-label="Remove"/>
                        </b-button>
                        <b-button 
                            v-if="index == contributorFiltered.length-1" 
                            @click="handleAdd('contributor', contributor.index)"
                            size="sm"  
                            variant="primary"
                        >
                            <b-icon icon="plus" aria-label="Add"/>
                        </b-button>
                    </b-col>

                </b-form-row>
            </b-col>
            
        </b-form-row> <!-- end contributor name -->

        <!-- contact information -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="contact-information" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Contact Information</span>
                    <span v-if="requiredIfAllRightsReserved" class="text-danger">*</span>
                </label>
            </b-col>
            <b-col>
                <b-form-input 
                    id="contact-information"
                    v-model="$v.form.contactInformation.$model"
                    debounce="500" 
                    placeholder="e-mail address"
                    size="sm"
                />
            </b-col>
        </b-form-row> <!-- end contact information -->

        <!-- Spacer with hr -->
        <b-row> 
            <b-col>
                <hr>
            </b-col>
        </b-row>
        
        <!-- Upload file/Submit Url radio -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="add-file" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Upload file or submit Url?</span>
                </label>
            </b-col>
            <b-col>
                <b-form-radio-group
                    id="add-file"
                    v-model="addFile"
                    :options="addFileOptions"
                    name="add-file-radio"
                />
                
            </b-col>
        </b-form-row>

        <!-- file select -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">

                <transition name="slide-right" mode="out-in">
                    <label 
                        v-if="addFile"
                        key="file"
                        for="file-upload" 
                        class="col-form-label col-form-label-sm"
                    >
                        <span>Add a file</span>
                    </label>
                    <label 
                        v-if="!addFile"
                        key="url"
                        for="file-url" 
                        class="col-form-label col-form-label-sm"
                    >
                        <span>Add a url</span>
                    </label>
                </transition>

            </b-col>
            <b-col> 

                <transition name="slide-right" mode="out-in">
                    <b-form-file 
                        v-if="addFile"
                        id="file-upload"
                        size="sm"
                    />
                    <b-form-input 
                        v-if="!addFile"
                        id="file-url"
                        size="sm"
                        />
                </transition>

            </b-col>

        </b-form-row> <!-- end file select -->

        <!-- cover-image select -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="cover-image-upload" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Select a cover image</span>
                </label>
            </b-col>
            <b-col>
                <b-form-file 
                    id="cover-image-upload"
                    size="sm"
                />
            </b-col>
        </b-form-row> <!-- end cover-image select -->

        <!-- material name -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="file-name" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Material name</span>
                </label>
            </b-col>
            <b-col>
                <b-form-input 
                    id="file-name" 
                    size="sm"
                />
            </b-col>
        </b-form-row> <!-- end material name -->

        <!-- material description -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="file-description" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Material description</span>
                </label>
            </b-col>
            <b-col>
                <b-form-textarea
                    id="file-description"
                    size="sm"
                    v-model="form.description"
                />

            </b-col>
        </b-form-row> <!-- end material description -->

        <!-- course code -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="file-description" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Course code(s)</span>
                </label>
            </b-col>
            <b-col>
                <b-form-tags 
                    id="course-code" 
                    size="sm"
                    v-model="form.courseCode"
                />
            </b-col>
        </b-form-row> <!-- end course code -->

        <!-- Keywords -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="keywords" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Keywords</span>
                </label>
            </b-col>
            <b-col>
                <b-form-tags 
                    id="keywords" 
                    size="sm"
                    v-model="form.Keywords"
                />
            </b-col>
        </b-form-row> <!-- end Keywords -->

        <!-- didactic tools -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="didactic-tools" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Didactic tools</span>
                </label>
            </b-col>
            <b-col>
                <b-form-tags 
                    id="didactic-tools" 
                    size="sm"
                    v-model="form.tools"
                />
            </b-col>
        </b-form-row> <!-- end didactic tools -->

        <b-row> <!-- Spacer with hr -->
            <b-col>
                <hr>
            </b-col>
        </b-row>

        <!-- copyright owner -->
        <!-- <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="copyright-owner" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Copyright Owner</span>
                    <span class="text-danger">*</span>
                </label>
            </b-col>
            <b-col>
                <b-form-select 
                        id="copyright-owner" 
                        :options="copyrightOwnerOptions"
                        size="sm"
                        v-model="$v.form.copyrightOwner.$model"
                        :state="validateState('copyrightOwner')"  
                />
                <b-form-invalid-feedback :state="validateState('copyrightOwner')" class="ml-1">
                    This field is required
                </b-form-invalid-feedback>
            </b-col>
        </b-form-row> -->
        <!-- end copyright owner -->

        <!-- license selector -->
        <!-- <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="license" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Select a license</span>
                    <span class="text-danger">*</span>
                </label>
            </b-col>
            <b-col >
                <b-form-select 
                    id="license"
                    v-model="$v.form.license.$model"
                    :state="validateState('license')" 
                    :options="licenseOptions"
                    size="sm"
                    class="mb-1"
                />
                <b-form-invalid-feedback :state="validateState('license')" class="ml-1">
                    This field is required
                </b-form-invalid-feedback>
            </b-col>
            <b-col cols md="3">
                <b-button 
                    v-b-modal.license-selector
                    variant="outline-primary"
                    size="sm"
                >
                    Help me Choose
                </b-button>
                <b-modal id="license-selector" title="License Selector" size="xl">
                    <licensing-wizard 
                    :license="form.license"
                    @update:license="updateLicense($event)"
                />
                </b-modal>
            </b-col>
        </b-form-row>  -->
        <!-- end license selector -->

        <b-form-row>
            <b-col>
                <b-card class="m-3" no-body bg-variant="light">
                    <b-card-text >
                        <div class="m-2">
                            {{text.license_text_1}}
                        </div>

                        <div class="m-2"> 
                            <b-img 
                                :src="images.cc_by_nc_sa"
                                alt="CC BY-NC-SA"
                            />

                            <b-button 
                                v-b-modal.license-explanation
                                variant="primary"
                                size="sm"
                                class="ml-3"
                            >
                                What does this mean?
                            </b-button>

                            <b-modal 
                                id="license-explanation"
                                title="CC BY-NC-SA 4.0"
                                size="xl" 
                                ok-only
                                button-size="sm"
                            >
                                <div>
                                    <div >
                                        <b-img :src="images.cc_by_nc_sa" alt="CC BY-NC-SA"/>
                                    </div>
                                    <div class="m-2">
                                        <span>BY</span>
                                        <b-img :src="images.by" alt="BY" width="30"/>
                                        <span>Credit must be given to the creator</span>
                                    </div>
                                    <div class="m-2">
                                        <span>NC</span>
                                        <b-img :src="images.nc" alt="NC" width="30"/>
                                        <span>Only non-commercial uses of the work are permitted</span>
                                    </div>
                                    <div class="m-2">
                                        <span>SA</span>
                                        <b-img :src="images.sa" alt="SA" width="30"/>
                                        <span>Adaptations must be shared under the same terms</span>
                                    </div>
                                    <hr>
                                    <div class="m-2">
                                        <span>{{text.cc_by_nc_sa_description}}</span>
                                    </div>
                                    
                                </div>
                                
                            </b-modal>
                        </div>
                        <div class="m-2">
                            {{text.license_text_2}}
                        </div>
                        <div class="m-2">
                            {{text.license_text_3}}
                        </div>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-form-row>        

        <!-- wur only -->
        <b-form-row class="m-2"> 
            <b-col cols sm="3">
                <label 
                    for="wur-only" 
                    class="col-form-label col-form-label-sm"
                >
                    <span>Is sharing WUR only?</span>
                    <span class="text-danger">*</span>
                </label>
            </b-col>
            <b-col>
                <!--wrapped in b-form-group for pulse animation. m-0 class to prevent form-group margin  -->
                    <b-form-group  class="m-0"> 
                        
                    <b-form-radio-group
                        id="wur-only"
                        v-model="$v.form.wurOnly.$model"
                        :options="wurOnlyOptions"
                        name="wur-only-radio"
                    />
                </b-form-group>
            </b-col>
        </b-form-row> <!-- end wur only -->

        <b-form-row>
            <b-col>
                <b-card class="m-3" no-body bg-variant="light">
                    <b-card-text >
                        <div class="m-2">
                            {{text.license_text_4}}
                        </div>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-form-row>
        
        <b-form-row> <!-- form buttons-->
            <b-col>
                <div class="m-2 d-flex">
                    <b-button @click.prevent="submitForm" class="m-1" variant="success">Submit</b-button>
                    <b-button class="m-1" variant="primary">Submit and add more</b-button>
                    <b-button class="m-1 ml-auto" variant="danger">Cancel</b-button>
                </div>
            </b-col>
        </b-form-row> <!-- end form buttons-->

        <b-row> <!-- validation messages-->
            <b-col>
                <div class="m-2">
                    <p v-if="errors" class="error">The form above has errors</p>
                    <p v-else-if="empty && uiState === 'submit clicked'" class="error">
                        The form above is empty, please fill in required fields
                    </p>
                    <p v-else-if="uiState === 'form submitted'" class="success">Form submitted</p>
                </div>
            </b-col>
        </b-row> <!-- end validation messages-->
    
    </b-form>
    <!-- end Upload form --> 

</template>

<script>
import Vue from 'vue';
import { required, email, requiredIf} from 'vuelidate/lib/validators';
import LicensingWizard from './LicensingWizard';
import config from "../assets/data/config";

export default {
    name: 'UploadForm',
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

            licenseOptions: config.licenseOptions,
            text: config.text,
            images: config.images,

            wurOnlyOptions: [
               { text: 'Yes', value: true }, 
               { text: 'No', value: false },
            ],

            form: {
                contributor: [
                    {
                        initials: "",
                        prefix: "",
                        surname: ""
                    }
                ],
                contactInformation: null,
                Name: null,
                Description: null,
                courseCodes: [],
                keyWords: [],
                didacticTools: [],
                courseLevel: null,  
                copyrightOwner: null,
                license: '',
                wurOnly: true,
            },

            /* Add file or url?*/ 
            addFile: true,

            /* Validation variables*/ 
            uiState: "submit not clicked",
            errors: false,
            empty: true,
            pulse: false,
            key: 0
        };
    },

    computed: {
        requiredIfAllRightsReserved() {return this.form.license==="All Rights Reserved"},

        pulseErrors() { return this.pulse},


        /** Aliases for objects */ 
        // contributor()      { return this.title.seriewerk.holding;},

        /** Indexed objects from above variables, used for maintaining order of object content after filtering */
        contributorIndexed()       { return this.form.contributor.map( (content, index) => {return {index: index, content: content};}); },

        /** Filtered variables */
        contributorFiltered()      { return this.contributorIndexed.filter(f => f.content.surname !== '_DEL_');},
 
    },

    validations: {

        form: {
            contactInformation: {
                email,
                required: requiredIf(function(form){
                    return this.requiredIfAllRightsReserved
                })
            },
            
            license: {
                required
            },
            
            copyrightOwner: {
                required
            },
            wurOnly: {
                required
            }
 
        }
    },

    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty && !this.pulseErrors ? !$error : null;
        },

        submitForm() {
 
            this.$v.$touch();

            this.pulse=true
            this.key = this.key+1
            this.pulse=false
            this.key = this.key+1
   
        },

        updateLicense(input) {
            Vue.set(this.form, "license", input)
        },

        updateWurOnly(input) {
            Vue.set(this.form, "wurOnly", input)
        },

        handleAdd(element, index) {
            switch (element) {
                case 'contributor':
                    this.form.contributor.push({
                        initials: "",
                        prefix: "",
                        surname: ""
                    })
                    break;
            }
        },

        handleRemove(element, index) {
            switch (element) {
                case 'contributor':
                    if (this.contributorFiltered.length === 1) {
                            Vue.set(this.form.contributor, index, {
                                initials: "",
                        prefix: "",
                        surname: ""
                            });
                        } else {
                            Vue.set(this.form.contributor, index, {
                                initials: "_DEL_",
                                prefix: "_DEL_",
                                surname: "_DEL_"
                            });

                        }
                        break;
                    break;
            }
        }
    }


};
</script>

<style lang='scss'>
.form-upload {
    width: 100%
}

.fb-20 {
    flex-basis: 20%;
}

</style>
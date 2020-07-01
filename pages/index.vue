<template>
    <client-only>
    <b-container fluid class="main">
            <b-row>
                <b-col cols="12">
                    <b-card
                        title="Upload your document"
                        class="m-2"
                    >
                        <b-card-text>
                            
                            <b-form class="form-upload" novalidate>

                                <b-form-row > <!-- creator name -->
                                    <b-col col xl="6">
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
                                                        placeholder="Title(s)"
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
                                    <b-col col xl="6">
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
                                                :state="validateState('contactInformation')"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end contact information -->

                                <b-row> <!-- Spacer with hr -->
                                    <b-col col xl="6">
                                        <hr>
                                    </b-col>
                                </b-row>
                                

                                <b-form-row> <!-- file select -->
                                    <b-col col xl="6">
                                        <b-form-group
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
                                    </b-col>
                                </b-form-row> <!-- end file select -->

                                <b-form-row> <!-- cover-image select -->
                                    <b-col col xl="6">
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

                                <b-form-row> <!-- record name -->
                                    <b-col col xl="6">
                                        <b-form-group
                                            label="Record name"
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
                                </b-form-row> <!-- end record name -->

                                <b-form-row> <!-- record description -->
                                    <b-col col xl="6">
                                        <b-form-group
                                            label="Record description"
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
                                </b-form-row> <!-- end record description -->

                                <b-form-row> <!-- course code -->
                                    <b-col col xl="6">
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

                                <b-row> <!-- Spacer with hr -->
                                    <b-col col xl="6">
                                        <hr>
                                    </b-col>
                                </b-row>

                                <b-form-row> <!-- license selector -->
                                    <b-col col xl="6">
                                        <licensing-wizard 
                                            :license="form.license"
                                            :wur-only="form.wurOnly"
                                            @update:license="form.license=$event"
                                            @update:wurOnly="form.wurOnly=$event"
                                        />
                                    </b-col>
                                </b-form-row> <!-- end license selector -->

                                <b-form-row> <!-- copyright owner -->
                                    <b-col col xl="6">
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
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-form-row> <!-- end copyright owner -->
                                <b-form-row>
                                    <b-button @click.prevent="submitForm" class="submit">Submit</b-button>
                                </b-form-row>
                            </b-form>

                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
    </b-container>
   </client-only>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import LicensingWizard from '../components/LicensingWizard';

export default {
    name: 'uploadForm',
    components: { LicensingWizard },
    data() {
        return {
            copyrightOwnerOptions: [
                { value: 'author', text: 'Author' },
                { value: 'publisher', text: 'Publisher' },
            ],

            form: {
                contactInformation: null,   
                wurOnly: false,
                copyrightOwner: null,
                license: ''
            },
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
            }
        }

    },

    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },

        submitForm() {
            this.formTouched = !this.$v.form.$anyDirty;
            this.errors = this.$v.form.$anyError;
            this.uiState = "submit clicked";
            if (this.errors === false && this.formTouched === false) {
                //this is where you send the responses
                this.uiState = "form submitted";
            }
        }
    }


};
</script>

<style lang='scss'>
.form-upload {
    width: 100%
}
</style>

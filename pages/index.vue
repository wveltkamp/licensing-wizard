<template>
    <b-container fluid class="main">
            <b-row>
                <b-col>
                    <b-card
                        class="m-2"
                    >
                        <b-card-text>
                            <client-only><upload-form/></client-only>
                            
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
import UploadForm from '../components/UploadForm';

export default {
    components: { UploadForm }, 
}

</script>

<style scoped>

</style>

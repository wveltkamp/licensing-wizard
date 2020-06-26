<template>
    <div>
        <span :title="buttonText" @click="modalShow = !modalShow">
            <b-icon icon="question-circle" ></b-icon>
        </span>

        <b-modal 
            v-model="modalShow" 
            title="BootstrapVue"
        >
            <p class="my-4">Hello from modal!</p>

             <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="modalShow=false"
          >
            Close
          </b-button>
        </div>
      </template>
        </b-modal>
    </div>
</template>

<script>
import { BootstrapVueIcons } from 'bootstrap-vue'
export default {
    name: "InfoButton",

    props: {
                buttonText: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            modalShow: false
        }
        
    }
}
</script>

<style lang="scss" scoped>
div {
    display: inline;
}
</style>
<script setup>
import {defineProps} from 'vue';

defineProps({
    title:String,
    price:{
        type:String,
        default: '0'
    },
    button:{
        type:String,
        default:"Singup  Free"
    },
    btnClass:{
        type:String,
        default:'btn-danger'
    },
    isDisable:{
        type:Boolean,
    }
});
</script>

<template>
    <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">{{ title }}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  {{ price }}<small class="text-body-secondary fw-light">/mo</small>
                </h1>
                <slot> there is nothing</slot>
                <button
                  type="button"
                  :class="`w-100 btn btn-lg ${btnClass}`">
               {{button}}
                </button>
              </div>
            </div>
</template>
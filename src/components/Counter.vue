<template>
    <div class="flex items-center justify-center p-8">
        <div v-if="!mounted" class="flex items-center justify-center">
            <ProgressSpinner style="width: 50px; height: 50px" />
        </div>

        <div v-else class="w-full max-w-md">
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-800">Counter</h2>

            <div class="text-center">
                <div class="mb-6 text-6xl font-bold text-blue-600">
                    {{ count }}
                </div>

                <div class="flex justify-center gap-4">
                    <Button @click="decrement" severity="danger" class="h-12 w-12"> - </Button>

                    <Button @click="reset" severity="secondary" class="!px-10 py-2"> Reset </Button>

                    <Button @click="increment" severity="success" class="h-12 w-12"> + </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';

const count = ref(0);
const mounted = ref(false);

const increment = () => {
    count.value++;
};

const decrement = () => {
    count.value--;
};

const reset = () => {
    count.value = 0;
};

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 1000);
});
</script>

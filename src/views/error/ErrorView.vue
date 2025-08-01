<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

import { Path } from '@/modules/enums/ui.enum';
import {useRouterStore} from '@/stores/router'
import { useRouter } from 'vue-router';
import { isNil } from 'lodash';

const router = useRouter()
const routerStore = useRouterStore()
const url = ref<string>()
const err = ref<Error>()

function inspectURL() {
    const error = routerStore.getErrURL()
    if(!isNil(error)) {
        url.value = error.url
        err.value = error.err

        return
    }
    router.push(Path.LANDING)
}

onBeforeMount(inspectURL)

</script>

<template>
    <div>
        <h1>404</h1>
        <p>Oops! The page <code>{{ url }}</code> you're looking for doesn't exist.</p>
        <router-link :to="Path.HOME">Go to Homepage</router-link>
        <p>See the Error below:</p>
        <pre>
            <code>{{ err }}</code>
        </pre>
    </div>
</template>

<style lang="css" scoped>
</style>
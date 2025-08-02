<script setup lang="ts">
import NavItems from './NavItems.vue';

export interface HeaderViewProps {
    visible?: boolean;
}

const props = withDefaults(defineProps<HeaderViewProps>(), { visible: true })

</script>

<template>
    <header v-if="props.visible" class="fixed flex flex-row items-center w-full h-control-xxl bg-background">
        <nav-items />
    </header>
</template>

<style lang="css" scoped>
@reference '@/assets/styles/base.css';
</style>
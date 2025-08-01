<script setup lang="ts">

export interface FooterViewProps {
    visible?: boolean;
}

const props = withDefaults(defineProps<FooterViewProps>(), { visible: true })

</script>

<template>
    <footer v-if="props.visible">Footer</footer>
</template>

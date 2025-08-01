<script setup lang="ts">
import type { MixBlendMode } from '@/modules/enums/ui.enum';


export interface NavLogoProps {
    responsive?: boolean;
    blend?: boolean | MixBlendMode;
    bgBlend?: NavLogoProps['blend']
    bgBlurRadius?: string; // such as backdrop-blur-[2px]
    /**A CSS <color> value */
    color?: string;
}

const props = withDefaults(defineProps<NavLogoProps>(), { responsive: true, blend: false, bgBlend: false })

</script>

<template>
    <div class="block select-none" :class="[{'bg-transparent': !bgBlend, 'bg-black/40 mix-blend-screen': props.blend === true }, typeof props.blend === 'string' ? props.blend : undefined, bgBlurRadius]">
        <span class="logo-block__logo logo-block__logo--wide"
            :class="[{ 'hidden': props.responsive, 'mix-blend-screen': props.blend === true }, typeof props.blend === 'string' ? props.blend : undefined]" :style="{color: props.color}">RUONA.</span>
        <span v-if="props.responsive" class="logo-block__logo logo-block__logo--mobile"
            :class="[{ 'mix-blend-screen': props.blend === true }, typeof props.blend === 'string' ? props.blend : undefined]" :style="{color: props.color}">R.</span>
    </div>
</template>

<style lang="css" scoped>
@reference '@/assets/styles/base.css';

.logo-block__logo {
    @apply flex-row items-center w-fit h-control-xxl bg-transparent font-logo text-[3em];
}

.logo-block__logo--wide {
    @apply lg:flex;
}

.logo-block__logo--mobile {
    @apply hidden max-lg:flex;
}
</style>
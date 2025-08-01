<script setup lang="ts">
import { inject, reactive } from 'vue';

import {
    Button as PrimeButton,
    ButtonGroup as PrimeButtonGroup,
    Divider as PrimeDivider,
    InputGroup as PrimeInputGroup,
    InputGroupAddon as PrimeInputGroupAddon,
    InputText as PrimeInputText,
    Message as PrimeMessage,
    Password as PrimePassword,
    Splitter as PrimeSplitter,
    SplitterPanel as PrimeSplitterPanel,
    ToggleSwitch as PrimeToggleSwitch
} from 'primevue';

export interface LoginViewData {
    email: string;
    password: string;
    isRemembered: boolean
}

import NavLogo from '../header/NavLogo.vue';

import type { UIDimension } from '@/modules/dtos/ui.dto';
import { MixBlendMode, Path } from '@/modules/enums/ui.enum';
import { dimensionInjectionKey } from '@/modules/libs/keys';
import { isNil } from 'lodash';
import { RouterLink } from 'vue-router';

const dimension = inject<UIDimension>(dimensionInjectionKey, { height: window.innerHeight, width: window.innerWidth })
const data = reactive<Partial<LoginViewData>>({})
const switchName = 'cacheEmail'

</script>

<template>
    <prime-splitter style="height: 100svh" :gutter-size="0">
        <!-- Left side -->
        <prime-splitter-panel
            class="hidden relative lg:block bg-cover bg-no-repeat bg-[url('/public/public-assets/napat-saeng-8zLG5tGOGxk-unsplash.jpg')] px-5"
            :size="60" :minSize="10">
            <!-- For backdrop -->
            <!-- <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]" :class="MixBlendMode.HARD_LIGHT" /> -->
            <nav-logo color="navajowhite" />
        </prime-splitter-panel>
        <!-- Right side -->
        <prime-splitter-panel
            class="relative flex flex-col h-full! bg-cover bg-no-repeat max-lg:bg-[url('/public/public-assets/napat-saeng-8zLG5tGOGxk-unsplash.jpg')] p-5 max-[250px]:overflow-y-scroll!"
            :size="40">
            <!-- For backdrop on mobile -->
            <div class="z-[1] absolute hidden max-lg:block inset-0 bg-black/40 backdrop-blur-[2px]"
                :class="MixBlendMode.HARD_LIGHT" />
                <!-- Logo for mobile -->
            <nav-logo class="hidden max-lg:block z-[1]" :responsive="dimension.width <= 300" color="navajowhite" />
            <!-- Main form -->
            <form class="z-[1] flex flex-col gap-y-10 justify-center w-full h-full" @submit.prevent>
                <h4>Login</h4>
                <div class="flex flex-col gap-y-3">
                    <!-- Email -->
                     <label for="email" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl" icon="line-md:email" />
                             </prime-input-group-addon>
                             <prime-input-text name="email" id="email" v-model="data.email" placeholder="Enter your email ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="isNil(data.email) || data.email.length < 6" severity="error" variant="simple"><p class="max-lg:text-background!">Email incorrect</p></prime-message>
                         </div>
                     </label>
                    <!-- Password -->
                     <label for="password" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl" icon="bx:lock" />
                             </prime-input-group-addon>
                             <prime-password v-model="data.password" name="password" input-id="password" placeholder="Enter your password ..." :feedback="false" :toggle-mask="true" />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="isNil(data.password) || data.password.length < 6" severity="error" variant="simple"><p class="max-lg:text-background!">Password cannot be empty</p></prime-message>
                         </div>
                     </label>
                     <!-- Remember me! -->
                     <label :for="switchName" class="flex flex-col gap-y-3">
                         <prime-message>
                             <template #container>
                                 <div class="flex flex-row gap-x-5 justify-end items-center px-5 py-2">
                                     <prime-toggle-switch v-model="data.isRemembered" :name="switchName" :input-id="switchName" /><!-- Remember me -->
                                     <p class="hidden min-[330px]:inline mui-body-md">Remember me</p>
                                     <iconify-icon v-tooltip="'Select to allow subsequent signin without this page'" class="hidden min-[300px]:block text-2xl" icon="material-symbols:info-outline" />
                                 </div>
                             </template>
                         </prime-message>
                     </label>
                </div>
                <!-- Enter or reset password -->
                 <prime-button-group class="max-[485px]:[display:revert]!">
                    <!-- Submit -->
                    <prime-button class="w-full!">
                        <iconify-icon class="text-2xl" icon="streamline-sharp:mail-send-email-message" />
                        <p class="mui-body-md">Login</p>
                        <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                    </prime-button>
                    <!-- Divider -->
                    <prime-divider :layout="dimension.width > 485 ? 'vertical' : 'horizontal'" />
                    <!-- Reset secret -->
                    <prime-button class="w-full!" severity="contrast">
                        <iconify-icon class="text-2xl text-background!" icon="hugeicons:forgot-password" />
                        <p class="mui-body-md text-background!">Forgot password?</p>
                        <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                    </prime-button>
                </prime-button-group>
                <!-- Social login buttons -->
                <prime-divider><b>Or continue with</b></prime-divider>
                <!-- Google -->
                <prime-button class="w-full!" severity="secondary" outlined>
                    <iconify-icon class="text-2xl" icon="flat-color-icons:google" />
                    <p class="mui-body-md">Google</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <!-- Twitter -->
                <prime-button class="w-full!" severity="secondary" outlined>
                    <iconify-icon class="text-2xl" icon="ri:twitter-x-fill" />
                    <p class="mui-body-md">X (Formerly Twitter)</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <!-- LinkedIn -->
                <prime-button class="w-full!" severity="secondary" outlined>
                    <iconify-icon class="text-2xl" icon="devicon:linkedin" />
                    <p class="mui-body-md">LinkedIn</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <div class="flex flex-row gap-x-3 justify-end items-center w-full">
                    <p>Don't have an account?</p>
                    <router-link :to="Path.SIGNUP" class="mui-body-lg! hover:underline font-serif! font-black text-background">Sign-up</router-link>
                </div>
            </form>
        </prime-splitter-panel>
    </prime-splitter>
    <!-- <main data-no-defaults class="w-full h-svh bg-transparent">

        <section class="w-"></section>
        <header class="w-full h-control-xxl bg-transparent">
        </header>
    </main> -->
</template>

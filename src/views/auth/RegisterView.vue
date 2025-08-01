<script setup lang="ts">
import { computed, inject, reactive, ref, watch, type ObjectDirective } from 'vue';

import {
    Button as PrimeButton,
    ButtonGroup as PrimeButtonGroup,
    Chip as PrimeChip,
    Divider as PrimeDivider,
    InputGroup as PrimeInputGroup,
    InputGroupAddon as PrimeInputGroupAddon,
    InputText as PrimeInputText,
    Message as PrimeMessage,
    Password as PrimePassword,
    Select as PrimeSelect,
    Splitter as PrimeSplitter,
    SplitterPanel as PrimeSplitterPanel,
    Tab as PrimeTab,
    TabList as PrimeTabList,
    TabPanels as PrimeTabPanels,
    TabPanel as PrimeTabPanel,
    Tabs as PrimeTabs,
    ToggleSwitch as PrimeToggleSwitch
} from 'primevue';

import NavLogo from '../header/NavLogo.vue';

import type { UIDimension } from '@/modules/dtos/ui.dto';
import { MixBlendMode, Path } from '@/modules/enums/ui.enum';
import { dimensionInjectionKey, nameTitles } from '@/modules/libs/keys';
import { isNil } from 'lodash';
import { RouterLink } from 'vue-router';

/** Construct thus: Dr Michelle Davies Phd, CFR */
export type Fullname = {
    firstName: string;
    middleName: string;
    lastName: string;
    title: string;
    honours: string[];
}

export type RegisterViewData = RegisterViewComputedData & Omit<RegisterViewMetadata, (keyof Fullname) | 'confirmPassword'>;

export interface RegisterViewComputedData {
    /* Construct thus: Dr Michelle Davies Phd, CFR. Constructed from title, firstName, middleName, lastName and honours */
    name: string;
}

export type RegisterViewMetadata = Fullname & {
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: string;
    company: string;
    website: string;
}

export type RegisterViewErrorMessage = Partial<RegisterViewMetadata>;

const dimension = inject<UIDimension>(dimensionInjectionKey, { height: window.innerHeight, width: window.innerWidth })
const data = reactive<Partial<RegisterViewData>>({})
const confirmPassword = ref<string>()
const fullName = reactive<Partial<Fullname>>({honours: []})
const errorMessage = computed<Partial<RegisterViewErrorMessage> | false>(() => {
    const message = {} as RegisterViewErrorMessage
    if(!isNil(data.email)) {
        if(data.email.length < 0) message.email = 'Email is required'
        else if(data.email.length < 4) message.email = 'Invalid email length'
    }
    if(!isNil(data.password)) {
        if(data.password.length < 0) message.password = 'Email is required'
        else if(data.password.length < 4) message.password = 'Invalid password length'
    }
    return Object.keys(message).length > 0 ? message : false
})

watch(fullName, value => {
    let name = ''
    if(value.title) name = value.title
    if(value.firstName) name += `${value.title ? ' ' : ''}${value.firstName}`
    if(value.middleName) name += ` ${value.middleName}`
    if(value.lastName) name += ` ${value.lastName}`
    if(value.honours) name += ` ${value.honours.join(' ')}`
    data.name = name
})

function clearField(e: KeyboardEvent) {
    if(e.key === 'Enter') {
        const textField =  (e.target as HTMLInputElement)
        if(fullName.honours && fullName.honours.length < 3) {
            const set = new Set(fullName.honours)
            set.add(textField.value)
            // fullName.honours!.push(textField.value)
            fullName.honours = [...set.values()]
        }
        textField.value = ''
    }
}

const vClearOnEnter = {
  mounted: (el, {value}) => {
    document.querySelector<HTMLInputElement>(value)?.addEventListener('keypress', clearField)
  },
  unmounted: (el, {value}) => {
    document.querySelector<HTMLInputElement>(value)?.removeEventListener('keypress', clearField)
  }
} satisfies ObjectDirective<HTMLInputElement, string>

</script>

<template>
    <prime-splitter style="height: 100svh" :gutter-size="0">
        <!-- Left side -->
        <prime-splitter-panel
            class="hidden relative lg:block h-full! px-5 bg-center bg-cover bg-no-repeat bg-[url('/public/public-assets/napat-saeng-8zLG5tGOGxk-unsplash.jpg')] overflow-y-clip"
            :size="60" :minSize="10">
            <!-- For backdrop -->
            <!-- <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]" :class="MixBlendMode.HARD_LIGHT" /> -->
            <nav-logo color="navajowhite" />
        </prime-splitter-panel>
        <!-- Right side -->
        <prime-splitter-panel
            class="relative! flex! flex-col! bg-cover bg-no-repeat max-lg:bg-[url('/public/public-assets/napat-saeng-8zLG5tGOGxk-unsplash.jpg')] p-5"
            :size="40">
            <!-- For backdrop on mobile -->
            <div class="z-[1] absolute hidden max-lg:block inset-0 bg-black/40 backdrop-blur-[2px]"
                :class="MixBlendMode.HARD_LIGHT" />
                <!-- Logo for mobile -->
            <nav-logo class="hidden max-lg:block z-[1]" :responsive="dimension.width <= 300" color="navajowhite" />
            <!-- <prime-tabs value="0">
                <prime-tab-list>
                    <prime-tab value="0">Company</prime-tab>
                    <prime-tab value="1">Individual</prime-tab>
                </prime-tab-list>
                <prime-tab-panels>
                    <prime-tab-panel value="0">000000000
                    </prime-tab-panel>
                    <prime-tab-panel value="1">11111111
                    </prime-tab-panel>
                </prime-tab-panels>
            </prime-tabs> -->
            <!-- Main form -->
            <form class="z-[1] flex flex-col gap-y-5 justify-center w-full pt-[500px] overflow-y-scroll no-scrollbar" @submit.prevent>
                <h6 class="mui-title-md!">Register</h6>
                <div class="flex flex-col gap-y-3">
                    <!-- Title -->
                     <label class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="ix:subtitle" />
                                 <iconify-icon class="text-2xl hidden dark:[display:initial]" icon="ix:subtitle-filled" />
                             </prime-input-group-addon>
                             <prime-select v-model="fullName.title" placeholder="Choose a title ..." :options="nameTitles" />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.title)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.title }}</p></prime-message>
                         </div>
                     </label>
                    <!-- First name -->
                     <label for="firstName" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl" icon="icon-park-solid:edit-name" />
                             </prime-input-group-addon>
                             <prime-input-text name="firstName" id="firstName" v-model="fullName.firstName" placeholder="Enter your first name ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.firstName)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.firstName }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Middle name -->
                     <label for="middleName" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl" icon="icon-park-twotone:edit-name" />
                             </prime-input-group-addon>
                             <prime-input-text name="middleName" id="middleName" v-model="fullName.middleName" placeholder="Enter your middle name ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.middleName)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.middleName }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Last name -->
                     <label for="lastName" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl" icon="icon-park:edit-name" />
                             </prime-input-group-addon>
                             <prime-input-text name="lastName" id="lastName" v-model="fullName.lastName" placeholder="Enter your surname ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.lastName)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.lastName }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Honours -->
                     <label for="honour-input" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="ic:baseline-drive-file-rename-outline" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="mdi:rename" />
                             </prime-input-group-addon>
                             <prime-input-text v-clear-on-enter="'#honour-input'" name="honour-input" id="honour-input" placeholder="Enter your honours ..." />
                         </prime-input-group>
                         <ul class="flex flex-row gap-x-3 justify-end">
                            <li v-for="honour of fullName.honours!" :key="honour">
                                <prime-chip :label="honour" removable />
                            </li>
                         </ul>
                     </label>
                    <!-- Email -->
                     <label for="email" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="line-md:email" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="mdi:email" />
                                </prime-input-group-addon>
                                <prime-input-text name="email" id="email" v-model="data.email" placeholder="Enter your email ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.email)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.email }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Phone -->
                     <label for="phone" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="mdi:phone-outline" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="mdi:phone" />
                             </prime-input-group-addon>
                             <prime-input-text name="phone" id="phone" v-model="data.phone" placeholder="Enter your phone number ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.phone)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.phone }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Password -->
                     <label for="password" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="bx:lock" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="mingcute:lock-fill" />
                             </prime-input-group-addon>
                             <prime-password v-model="data.password" name="password" input-id="password" placeholder="Enter your password ..." :feedback="false" :toggle-mask="true" />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.password)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.password }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Confirm Password -->
                     <label for="confirm-password" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="line-md:filter-confirm" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="line-md:filter-confirm-filled" />
                             </prime-input-group-addon>
                             <prime-password v-model="confirmPassword" v-prevent-paste="'#confirm-password'" name="confirm-password" input-id="confirm-password" placeholder="Re-enter your password ..." :feedback="false" @paste="() => false" />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.confirmPassword)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.confirmPassword }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Role -->
                     <label for="role" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="eos-icons:role-binding-outlined" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="eos-icons:role-binding" />
                             </prime-input-group-addon>
                             <prime-input-text name="role" id="role" v-model="data.role" placeholder="What is your role at your current establishment ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.role)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.role }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Company -->
                     <label for="company" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="ph:building-office-bold" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="ph:building-office-fill" />
                             </prime-input-group-addon>
                             <prime-input-text name="company" id="company" v-model="data.company" placeholder="What is your establishment ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.company)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.company }}</p></prime-message>
                         </div>
                     </label>
                    <!-- Website -->
                     <label for="website" class="flex flex-col gap-y-1 w-full">
                         <prime-input-group>
                             <prime-input-group-addon class="hidden! min-[300px]:[display:initial]!">
                                 <iconify-icon class="text-2xl dark:hidden" icon="icon-park-outline:add-web" />
                                 <iconify-icon class="text-2xl hidden dark:block" icon="icon-park-solid:add-web" />
                             </prime-input-group-addon>
                             <prime-input-text name="website" id="website" v-model="data.website" placeholder="Provide your website url ..." />
                         </prime-input-group>
                         <div class="flex flex-row justify-end">
                             <prime-message v-if="errorMessage !== false && !isNil(errorMessage.website)" severity="error" variant="simple"><p class="max-lg:text-background!">{{ errorMessage.website }}</p></prime-message>
                         </div>
                     </label>
                </div>
                <!-- Submit -->
                <prime-button class="w-full! py-7!">
                    <iconify-icon class="text-2xl" icon="streamline-sharp:mail-send-email-message" />
                    <p class="mui-body-md">Register</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <!-- Social login buttons -->
                <prime-divider><b>Or register using</b></prime-divider>
                <!-- Google -->
                <prime-button class="w-full! py-7!" severity="secondary" outlined>
                    <iconify-icon class="text-2xl" icon="flat-color-icons:google" />
                    <p class="mui-body-md">Google</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <!-- Twitter -->
                <prime-button class="w-full! py-7!" severity="secondary" outlined>
                    <iconify-icon class="text-2xl" icon="ri:twitter-x-fill" />
                    <p class="mui-body-md">X (Formerly Twitter)</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <!-- LinkedIn -->
                <prime-button class="w-full! py-7!" severity="secondary" outlined>
                    <iconify-icon class="text-2xl" icon="devicon:linkedin" />
                    <p class="mui-body-md">LinkedIn</p>
                    <!-- <iconify-icon class="text-2xl" icon="line-md:loading-loop" /> -->
                </prime-button>
                <div class="flex flex-row gap-x-3 justify-end items-center w-full">
                    <p>Already registered?</p>
                    <router-link :to="Path.LOGIN" class="mui-body-lg! hover:underline font-serif! font-black text-background">Sign-in</router-link>
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

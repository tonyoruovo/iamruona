<script setup lang="ts">
import { reactive } from 'vue';

import { Page, Path, SchemeId } from '@/modules/enums/ui.enum';
import Menubar from 'primevue/menubar';
import type { MenuItem } from 'primevue/menuitem';
import { useTheme } from '@/composables/theme';

const { setTheme } = useTheme()

const menu = reactive<(MenuItem & {open?: boolean})[]>([
    {
        label: 'Login',
        icon: 'material-symbols:login-rounded',
        url: Path.LOGIN,
    },
    {
        label: 'Mode',
        icon: 'material-symbols-light:light-mode',
        items: [
            {
                label: 'Light',
                command: () => setTheme(SchemeId.LIGHT)
            },
            {
                label: 'Dark',
                command: () => setTheme(SchemeId.DARK)
            },
            {
                label: 'System',
                command: () => setTheme(SchemeId.SYSTEM)
            }
        ]
    },
    {
        label: 'Blog',
        icon: 'carbon:blog',
        url: '/',
    },
    {
        label: 'Contact',
        icon: 'fluent:contact-card-24-regular',
        url: '/',
    },
    {
        label: 'Downloads',
        icon: 'mynaui:download',
        url: '/',
    },
    {
        label: 'Portfolio',
        icon: 'proicons:folder-open',
        url: '/',
    },
    {
        label: 'Press',
        icon: 'mdi:about-circle-outline',
        url: '/',
    },
    {
        label: 'About',
        icon: 'mdi:about-circle-outline',
        items: [
            {
                label: 'Experience'
            },
            {
                label: 'Skills'
            },
            {
                label: 'Testimonials'
            },
            {
                label: Page.TOS,
                url: Path.TOS
            },
            {
                label: Page.PRIVACY_POLICY,
                url: Path.PRIVACY_POLICY
            }
        ]
    },
])

function onClick(i: MenuItem & {open?: boolean}, hasSubmenu: boolean) {
    if(hasSubmenu) i.open = Boolean(i.open) ? false : true
    menu.filter(m => m.label !== i.label).forEach(m => m.open=false)
}

</script>


<template>
    <nav class="w-full">
        <Menubar :model="menu">
            <template #item="{item, hasSubmenu, label}">
                <div v-if="!item.url" class="flex flex-row gap-x-1 items-center justify-end px-2 py-1 cursor-pointer" @click="() => onClick(item, hasSubmenu)">
                    <iconify-icon :icon="hasSubmenu ? !item.open ? 'pepicons-pop:angle-down' : 'clarity:angle-line' : undefined" />
                    <p>{{ label }}</p>
                    <iconify-icon class="hidden min-[1090px]:inline max-md:inline" v-if="item.icon" :icon="item.icon" />
                </div>
                <router-link v-else :to="item.url!" class="flex flex-row gap-x-1 items-center justify-end px-2 py-1" @click="() => onClick(item, hasSubmenu)">
                    <iconify-icon :icon="hasSubmenu ? !item.open ? 'pepicons-pop:angle-down' : 'clarity:angle-line' : undefined" />
                    <p>{{ label }}</p>
                    <iconify-icon class="hidden min-[1090px]:inline max-md:inline" v-if="item.icon" :icon="item.icon" />
                </router-link>
            </template>
            <!-- <template #itemicon="{item}">
                <iconify-icon v-if="item.icon" :icon="item.icon" />
            </template>
            <template #submenuicon="{active}">
                <iconify-icon v-if="active" icon="mingcute:up-fill" />
                <iconify-icon v-else icon="mingcute:down-fill" />
            </template> 
            <template #button="{class: classes, id, toggleCallback}">
                <button :id="id" :class="classes" @click="toggleCallback">
                    <iconify-icon icon="line-md:menu" />
                </button>
            </template>-->
            <template #buttonicon>
                <iconify-icon icon="line-md:menu" />
            </template>
        </Menubar>
    </nav>
</template>

<style lang="css" scoped>
@reference '@/assets/styles/base.css';
</style>

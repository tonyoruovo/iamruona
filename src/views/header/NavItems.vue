<script setup lang="ts">
import { ref } from 'vue'
import NavLogo from './NavLogo.vue'
import { Page, Path } from '@/modules/enums/ui.enum'

const isMenuOpen = ref(false)

const menuItems = [
    {
        label: 'Login',
        url: Path.LOGIN,
    },
    {
        label: 'Blog',
        url: '/',
    },
    {
        label: 'Contact',
        url: '/',
    },
    {
        label: 'Downloads',
        url: '/',
    },
    {
        label: 'Portfolio',
        url: '/',
    },
    {
        label: 'Press',
         url: '/',
    },
    {
        label: 'About',
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
]
</script>

<template>
    <header class="fixed flex flex-row items-center w-full h-card-xxs md:h-layout-xxs bg-background shadow-md">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <nav-logo />
                <nav class="hidden md:flex items-center space-x-4">
                    <template v-for="item in menuItems" :key="item.label">
                        <div v-if="item.items" class="relative group">
                            <button class="hover:text-primary">{{ item.label }}</button>
                            <div class="absolute hidden group-hover:block bg-background shadow-lg rounded-md mt-2 py-2 w-48">
                                <router-link v-for="subItem in item.items" :key="subItem.label" :to="subItem.url || '#'" class="block px-4 py-2 hover:bg-gray-100">{{ subItem.label }}</router-link>
                            </div>
                        </div>
                        <router-link v-else :to="item.url || '#'" class="hover:text-primary">{{ item.label }}</router-link>
                    </template>
                </nav>
                <div class="md:hidden">
                    <button @click="isMenuOpen = !isMenuOpen">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="isMenuOpen" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <template v-for="item in menuItems" :key="item.label">
                    <div v-if="item.items">
                        <h3 class="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{{ item.label }}</h3>
                        <router-link v-for="subItem in item.items" :key="subItem.label" :to="subItem.url || '#'" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">{{ subItem.label }}</router-link>
                    </div>
                    <router-link v-else :to="item.url || '#'" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">{{ item.label }}</router-link>
                </template>
            </div>
        </div>
    </header>
</template>
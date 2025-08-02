<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from "primevue/useconfirm";
import {
    Accordion,
    AccordionTab,
    Avatar,
    AvatarGroup,
    Button,
    Card,
    Carousel,
    CascadeSelect,
    Checkbox,
    Chip,
    Column,
    ConfirmDialog,
    ConfirmPopup,
    DataTable,
    Drawer,
    FileUpload,
    IconField,
    InputGroup,
    InputGroupAddon,
    InputIcon,
    InputOtp,
    InputText,
    Knob,
    MegaMenu,
    Menubar,
    Message,
    MeterGroup,
    OverlayBadge,
    ProgressBar,
    RadioButton,
    Rating,
    ScrollPanel,
    Select,
    Skeleton,
    Slider,
    SpeedDial,
    SplitButton,
    Step,
    StepList,
    StepPanel,
    StepPanels,
    Stepper,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    Timeline,
    Toast,
    ToggleSwitch,
    Toolbar } from 'primevue';
import router from '@/router';

// --- Refs and Reactive Data ---
const cascadeSelectValue = ref(null);
const checkboxValue = ref(false);
const checkboxValues = ref([]);
const radioValue = ref('');
const knobValue = ref(50);
const ratingValue = ref(3);
const sliderValue = ref(50);
const sliderRange = ref([20, 80]);
const switchValue = ref(false);
const inputOtpValue = ref();
const selectValue = ref();
const multiSelectValues = ref();
const inputValue = ref('');
const inputNumberValue = ref(42);
const drawerVisible = ref(false);
const stepper = ref();

const toast = useToast();
const confirm = useConfirm();

// --- Data for Components ---

// CascadeSelect Data
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'SYD' },
                    { cname: 'Newcastle', code: 'NEW' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'BRI' },
                    { cname: 'Gold Coast', code: 'OOL' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'LA' },
                    { cname: 'San Francisco', code: 'SF' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Houston', code: 'HOU' },
                    { cname: 'Dallas', code: 'DAL' }
                ]
            }
        ]
    }
]);

// Select & MultiSelect Data
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

// SplitButton Data
const splitButton = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/tos');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])

// DataTable Data
const products = ref();
onMounted(() => {
    products.value = [
        { id: '1000', code: 'f230fh0g', name: 'Bamboo Watch', category: 'Accessories', quantity: 24, price: 65 },
        { id: '1001', code: 'nvklal4g', name: 'Black Watch', category: 'Accessories', quantity: 61, price: 72 },
        { id: '1002', code: 'zz21cz3c', name: 'Blue Band', category: 'Fitness', quantity: 2, price: 79 },
        { id: '1003', code: '244wgerg', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25, price: 29 },
        { id: '1004', code: 'h456wer5', name: 'Bracelet', category: 'Accessories', quantity: 73, price: 15 },
        { id: '1005', code: 'av2231fw', name: 'Brown Purse', category: 'Accessories', quantity: 0, price: 120 },
    ];
});

// Timeline Data
const timelineEvents = ref([
    { status: 'Ordered', date: '15/10/2025 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2025 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2025 16:15', icon: 'pi pi-truck', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2025 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

// Carousel Data
const carouselProducts = ref([
    { name: 'Phone', image: 'https://placehold.co/300x200/007bff/ffffff?text=Phone' },
    { name: 'Laptop', image: 'https://placehold.co/300x200/28a745/ffffff?text=Laptop' },
    { name: 'Headphones', image: 'https://placehold.co/300x200/dc3545/ffffff?text=Headphones' },
]);

// Menu Data
const menuItems = ref([
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Transactions', icon: 'pi pi-wallet' },
    { label: 'Users', icon: 'pi pi-users' },
    { label: 'Settings', icon: 'pi pi-cog' }
]);

const megaMenuItems = ref([
    {
        label: 'Fashion', icon: 'pi pi-fw pi-tag',
        items: [
            [
                {
                    label: 'Women',
                    items: [{ label: 'Dresses' }, { label: 'Tops' }]
                }
            ],
            [
                {
                    label: 'Men',
                    items: [{ label: 'Shirts' }, { label: 'Pants' }]
                }
            ]
        ]
    },
    {
        label: 'Electronics', icon: 'pi pi-fw pi-desktop',
        items: [
            [
                {
                    label: 'Computers',
                    items: [{ label: 'Laptops' }, { label: 'Monitors' }]
                }
            ],
            [
                {
                    label: 'Mobile',
                    items: [{ label: 'Smartphones' }, { label: 'Tablets' }]
                }
            ]
        ]
    }
]);


// --- Component Interaction Methods ---
const showToast = (severity: string, summary: string) => {
    toast.add({ severity: severity, summary: summary, detail: 'This is a toast message', life: 3000 });
};

const confirmAction = (event: Event) => {
    confirm.require({
        target: event.currentTarget as HTMLElement,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Action executed', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Action cancelled', life: 3000 });
        }
    });
};

const confirmDialogAction = () => {
    confirm.require({
        header: 'Confirmation',
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

</script>

<template>
    <main class="container mx-auto p-4 space-y-12 mt-control-xxl">
        <h1 class="mui-display-lg">PrimeVue v4 Theme Calibration</h1>

        <!-- Section: Form Inputs -->
        <section>
            <h2 class="mui-headline-lg mb-4">Form Inputs & Controls</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <!-- CascadeSelect -->
                <div class="flex flex-col space-y-2">
                    <label>CascadeSelect</label>
                    <CascadeSelect v-model="cascadeSelectValue" :options="countries" optionLabel="cname"
                        optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" style="min-width: 14rem"
                        placeholder="Select a City" />
                </div>

                <!-- Checkbox -->
                <div class="flex flex-col space-y-2">
                    <label>Checkbox</label>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center">
                            <Checkbox v-model="checkboxValue" inputId="cb1" :binary="true" />
                            <label for="cb1" class="ml-2"> Single </label>
                        </div>
                        <div class="flex items-center">
                            <Checkbox v-model="checkboxValues" inputId="cb2" name="category" value="Development" />
                            <label for="cb2" class="ml-2"> Multiple 1 </label>
                        </div>
                        <div class="flex items-center">
                            <Checkbox v-model="checkboxValues" inputId="cb3" name="category" value="Design" />
                            <label for="cb3" class="ml-2"> Multiple 2 </label>
                        </div>
                    </div>
                </div>

                <!-- Radio Buttons -->
                <div class="flex flex-col space-y-2">
                    <label>Radio Buttons</label>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center">
                            <RadioButton v-model="radioValue" inputId="rb1" name="pizza" value="Cheese" />
                            <label for="rb1" class="ml-2">Cheese</label>
                        </div>
                        <div class="flex items-center">
                            <RadioButton v-model="radioValue" inputId="rb2" name="pizza" value="Pepperoni" />
                            <label for="rb2" class="ml-2">Pepperoni</label>
                        </div>
                    </div>
                </div>

                <!-- Knob -->
                <div class="flex flex-col items-center space-y-2">
                    <label>Knob</label>
                    <Knob v-model="knobValue" />
                </div>

                <!-- Rating -->
                <div class="flex flex-col space-y-2">
                    <label>Rating</label>
                    <Rating v-model="ratingValue" />
                </div>

                <!-- ToggleSwitch -->
                <div class="flex flex-col space-y-2">
                    <label>ToggleSwitch</label>
                    <ToggleSwitch v-model="switchValue" />
                </div>

                <!-- Slider -->
                <div class="flex flex-col space-y-2">
                    <label>Slider (Value: {{ sliderValue }})</label>
                    <Slider v-model="sliderValue" />
                </div>

                <!-- Range Slider -->
                <div class="flex flex-col space-y-2">
                    <label>Range Slider (Value: {{ sliderRange }})</label>
                    <Slider v-model="sliderRange" range />
                </div>
            </div>
        </section>

        <!-- Section: IconField & InputGroup -->
        <section>
            <h2 class="mui-headline-lg mb-4">IconField & InputGroup</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- IconField Variations -->
                <div class="space-y-4">
                    <h3 class="mui-title-md">IconField</h3>
                    <IconField iconPosition="left">
                        <InputIcon>
                            <iconify-icon icon="mdi:user-outline" />
                        </InputIcon>
                        <InputText v-model="inputValue" placeholder="Username" />
                    </IconField>
                    <IconField>
                        <InputIcon>
                            <iconify-icon icon="mdi:search" />
                        </InputIcon>
                        <InputText v-model="inputValue" placeholder="Search" />
                    </IconField>
                    <IconField>
                        <InputIcon>
                            <iconify-icon icon="mdi:key-outline" />
                        </InputIcon>
                        <InputOtp v-model="inputOtpValue" :length="3" />
                    </IconField>
                </div>

                <!-- InputGroup Variations -->
                <div class="space-y-4">
                    <h3 class="mui-title-md">InputGroup</h3>
                    <InputGroup>
                        <InputGroupAddon>
                            <iconify-icon icon="mdi:at" />
                        </InputGroupAddon>
                        <InputText placeholder="Email" />
                    </InputGroup>
                    <InputGroup>
                        <InputText placeholder="Price" />
                        <InputGroupAddon>.00</InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon>www</InputGroupAddon>
                        <InputText placeholder="Website" />
                        <Select :options="cities" optionLabel="name" placeholder="Select a City" />
                    </InputGroup>
                </div>
            </div>
        </section>

        <!-- Section: Buttons -->
        <section>
            <h2 class="mui-headline-lg mb-4">Buttons</h2>
            <div class="space-y-4">
                <h3 class="mui-title-md">Standard Buttons</h3>
                <div class="flex flex-wrap gap-4">
                    <Button label="Primary" />
                    <Button label="Secondary" severity="secondary" />
                    <Button label="Success" severity="success" />
                    <Button label="Info" severity="info" />
                    <Button label="Warning" severity="warning" />
                    <Button label="Help" severity="help" />
                    <Button label="Danger" severity="danger" />
                </div>

                <h3 class="mui-title-md">Outlined Buttons</h3>
                <div class="flex flex-wrap gap-4">
                    <Button label="Primary" outlined />
                    <Button label="Secondary" severity="secondary" outlined />
                    <Button label="Success" severity="success" outlined />
                </div>

                <h3 class="mui-title-md">Text & Link Buttons</h3>
                <div class="flex flex-wrap gap-4">
                    <Button label="Text" text />
                    <Button label="Link" link />
                </div>

                <h3 class="mui-title-md">Buttons with Icons</h3>
                <div class="flex flex-wrap gap-4">
                    <Button icon="pi pi-check" />
                    <Button label="Submit" icon="pi pi-check" iconPos="right" />
                    <Button label="Loading" icon="pi pi-spinner" loading />
                </div>

                <h3 class="mui-title-md">Button Sizes</h3>
                <div class="flex flex-wrap items-center gap-4">
                    <Button label="Small" size="small" />
                    <Button label="Normal" />
                    <Button label="Large" size="large" />
                </div>

                <h3 class="mui-title-md">Advanced Buttons</h3>
                <div class="flex flex-wrap gap-4">
                    <SplitButton label="Save" :model="splitButton" />
                    <SpeedDial :model="splitButton" direction="right" />
                </div>
            </div>
        </section>

        <!-- Section: Data Display -->
        <section>
            <h2 class="mui-headline-lg mb-4">Data Display</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- DataTable -->
                <div>
                    <h3 class="mui-title-md mb-2">DataTable</h3>
                    <DataTable :value="products" paginator :rows="5">
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="price" header="Price">
                            <template #body="slotProps">
                                ${{ slotProps.data.price }}
                            </template>
                        </Column>
                    </DataTable>
                </div>
                <!-- Timeline -->
                <div>
                    <h3 class="mui-title-md mb-2">Timeline</h3>
                    <Timeline :value="timelineEvents" align="alternate" class="w-full md:w-2/3">
                        <template #content="slotProps">
                            {{ slotProps.item.status }}
                        </template>
                    </Timeline>
                </div>
            </div>
        </section>

        <!-- Section: Panels -->
        <section>
            <h2 class="mui-headline-lg mb-4">Panels & Containers</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Accordion -->
                <div>
                    <h3 class="mui-title-md mb-2">Accordion</h3>
                    <Accordion :activeIndex="0">
                        <AccordionTab header="Header I">
                            <p>Content for Accordion Tab 1</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Content for Accordion Tab 2</p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <!-- Card -->
                <div>
                    <h3 class="mui-title-md mb-2">Card</h3>
                    <Card>
                        <template #title>Simple Card</template>
                        <template #content>
                            <p>This is a simple card component.</p>
                        </template>
                    </Card>
                </div>
                <!-- Tabs -->
                <div class="md:col-span-2">
                    <h3 class="mui-title-md mb-2">Tabs</h3>
                    <Tabs value="0">
                        <TabList>
                            <Tab value="0">Header I</Tab>
                            <Tab value="1">Header II</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel value="0">Content for Tab 1</TabPanel>
                            <TabPanel value="1">Content for Tab 2</TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
                <!-- ScrollPanel -->
                <div>
                    <h3 class="mui-title-md mb-2">ScrollPanel</h3>
                    <ScrollPanel style="width: 100%; height: 100px">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id
                            est laborum.
                        </p>
                    </ScrollPanel>
                </div>
                <!-- Toolbar -->
                <div class="md:col-span-2">
                    <h3 class="mui-title-md mb-2">Toolbar</h3>
                    <Toolbar>
                        <template #start>
                            <Button icon="pi pi-plus" class="mr-2" />
                            <Button icon="pi pi-print" />
                        </template>
                        <template #end>
                            <Button icon="pi pi-power-off" />
                        </template>
                    </Toolbar>
                </div>
                <!-- Stepper -->
                <div class="md:col-span-2">
                    <h3 class="mui-title-md mb-2">Stepper</h3>
                    <Stepper ref="stepper">
                        <StepList>
                            <Step value="1">Header I</Step>
                            <Step value="2">Header II</Step>
                        </StepList>
                        <StepPanels>
                            <StepPanel :value="1">
                                <div class="flex flex-col h-48">
                                    <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-md bg-surface-0 dark:bg-surface-900 flex-auto flex justify-center items-center font-medium">Content I</div>
                                </div>
                                <div class="flex pt-4 justify-end">
                                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="stepper.next()" />
                                </div>
                            </StepPanel>
                            <StepPanel :value="2">
                                <div class="flex flex-col h-48">
                                    <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-md bg-surface-0 dark:bg-surface-900 flex-auto flex justify-center items-center font-medium">Content II</div>
                                </div>
                                <div class="flex pt-4 justify-between">
                                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="stepper.prev()" />
                                </div>
                            </StepPanel>
                        </StepPanels>
                    </Stepper>
                </div>
            </div>
        </section>

        <!-- Section: Overlays -->
        <section>
            <h2 class="mui-headline-lg mb-4">Overlays & Popups</h2>
            <div class="flex flex-wrap gap-4">
                <Button label="Show Drawer" icon="pi pi-arrow-right" @click="drawerVisible = true" />
                <Button @click="confirmAction" label="Confirm Popup" />
                <Button @click="confirmDialogAction" label="Confirm Dialog" />
                <Button v-tooltip.top="'This is a tooltip'" label="Tooltip Top" />
                <Button v-tooltip.bottom="{ value: 'Custom HTML tooltip', escape: false }" label="Custom Tooltip" />
            </div>
            <Drawer v-model:visible="drawerVisible" header="Drawer">
                <p>Content for the drawer.</p>
            </Drawer>
            <ConfirmPopup></ConfirmPopup>
            <ConfirmDialog></ConfirmDialog>
        </section>

        <!-- Section: Messages & Notifications -->
        <section>
            <h2 class="mui-headline-lg mb-4">Messages & Notifications</h2>
            <div class="space-y-4">
                <Message severity="success">Success Message</Message>
                <Message severity="info">Info Message</Message>
                <Message severity="warn">Warning Message</Message>
                <Message severity="error">Error Message</Message>

                <h3 class="mui-title-md">Toasts</h3>
                <div class="flex flex-wrap gap-4">
                    <Button label="Show Success Toast" @click="showToast('success', 'Success')" />
                    <Button label="Show Info Toast" @click="showToast('info', 'Info')" severity="info" />
                    <Button label="Show Warn Toast" @click="showToast('warn', 'Warning')" severity="warning" />
                    <Button label="Show Error Toast" @click="showToast('error', 'Error')" severity="danger" />
                </div>
                <Toast />
            </div>
        </section>

        <!-- Section: Media & Misc -->
        <section>
            <h2 class="mui-headline-lg mb-4">Media & Miscellaneous</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Carousel -->
                <div>
                    <h3 class="mui-title-md mb-2">Carousel</h3>
                    <Carousel :value="carouselProducts" :numVisible="1" :numScroll="1">
                        <template #item="slotProps">
                            <div class="border border-surface dark:border-surface rounded-md m-2 p-4 text-center">
                                <img :src="slotProps.data.image" class="w-full rounded-md" />
                                <h4 class="mt-2">{{ slotProps.data.name }}</h4>
                            </div>
                        </template>
                    </Carousel>
                </div>
                <!-- Avatar & Chip -->
                <div class="space-y-4">
                    <h3 class="mui-title-md">Avatar & Chip</h3>
                    <div class="flex items-center gap-4">
                        <AvatarGroup>
                            <OverlayBadge value="2" severity="danger">
                                <Avatar image="https://placehold.co/40x40/007bff/ffffff?text=A" size="large"
                                    shape="circle" />
                            </OverlayBadge>
                            <Avatar label="P" size="large" shape="circle" />
                            <Avatar icon="pi pi-user" size="large" shape="circle" />
                        </AvatarGroup>
                    </div>
                    <div class="flex items-center gap-2">
                        <Chip label="Action" />
                        <Chip label="Comedy" icon="pi pi-bolt" />
                        <Chip label="Apple" image="https://placehold.co/32x32/28a745/ffffff?text=A" removable />
                    </div>
                </div>
                <!-- MeterGroup & ProgressBar -->
                <div class="md:col-span-2 space-y-4">
                    <h3 class="mui-title-md">Meters & Progress</h3>
                    <MeterGroup :value="[{ label: 'Apps', value: 25 }, { label: 'Messages', value: 15 }]" />
                    <ProgressBar :value="60" />
                    <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
                </div>
                <!-- Skeleton & Tag -->
                <div class="space-y-4">
                    <h3 class="mui-title-md">Skeleton & Tag</h3>
                    <Skeleton width="10rem" height="4rem" class="mb-2"></Skeleton>
                    <div class="flex gap-2">
                        <Tag value="Primary"></Tag>
                        <Tag severity="success" value="Success"></Tag>
                        <Tag severity="info" icon="pi pi-info-circle" value="Info"></Tag>
                        <Tag severity="warning" value="Warning"></Tag>
                        <Tag severity="danger" value="Danger"></Tag>
                    </div>
                </div>
                <!-- File Upload -->
                <div>
                    <h3 class="mui-title-md mb-2">Upload</h3>
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000"
                        @upload="onUpload" />
                </div>
            </div>
        </section>

        <!-- Section: Menus -->
        <section>
            <h2 class="mui-headline-lg mb-4">Menus</h2>
            <div class="space-y-8">
                <div>
                    <h3 class="mui-title-md mb-2">Menubar</h3>
                    <Menubar :model="menuItems" />
                </div>
                <div>
                    <h3 class="mui-title-md mb-2">MegaMenu</h3>
                    <MegaMenu :model="megaMenuItems" />
                </div>
            </div>
        </section>

    </main>
</template>

<style lang="css" scoped>
@reference '@/assets/styles/base.css';

/* Add any component-specific overrides or adjustments here if necessary */
section {
    @apply p-6 border border-surface dark:border-surface rounded-lg;
}
</style>

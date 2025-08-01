import type {
    RouteRecordSingleViewWithChildren
} from "vue-router"

import { Path, Page } from "@/modules/enums/ui.enum"

/**Define routes with their components and route guards */
const routes = [,
    {
        path: '/home',
        redirect: Path.LANDING
    },
    {
        path: Path.HOME,
        redirect: Path.LANDING
    },
    {
        path: Path.LANDING,
        name: Page.LANDING,
        meta: { nav: true },
        component: () => import("@/views/landing/LandingView.vue")
    },
    {
        path: Path.ERROR,
        name: Page.ERROR,
        meta: { nav: true },
        component: () => import("@/views/error/ErrorView.vue")
    },
    {
        path: Path.TOS,
        name: Page.TOS,
        meta: { nav: true },
        component: () => import("@/views/tos/TermsOfServiceView.vue")
    },
    {
        path: Path.PRIVACY_POLICY,
        name: Page.PRIVACY_POLICY,
        meta: { nav: true },
        component: () => import("@/views/tos/PrivacyPolicy.vue")
    },
    {
        path: Path.LOGIN,
        name: Page.LOGIN,
        meta: { nav: false, footer: false },
        component: () => import("@/views/auth/LoginView.vue")
    },
    {
        path: Path.SIGNUP,
        name: Page.SIGNUP,
        meta: { nav: false, footer: false },
        component: () => import("@/views/auth/RegisterView.vue")
    },
    {
        path: "/:catchAll(.*)",
        redirect: Path.ERROR // Redirect to the error page for unknown routes
    }
] as RouteRecordSingleViewWithChildren[]

export default routes

import { createRouter, createWebHistory } from 'vue-router';

// import { useRouterStore } from '@/stores/router';
import routes from './routes';

// type ErrorHandler = {
//     (error: unknown, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded): unknown;
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// const errorHandler: ErrorHandler = function(err) {
//   console.log(err)
// }

// const beforeGuard: NavigationGuardWithThis<undefined> = function(to, from, next) {  
//   try {
//     next()
//   } catch (err) {
//     const routerStore = useRouterStore()
//     routerStore.setErrURL(to.fullPath, err as Error)
//     routerStore.err = 'woeiufwefygweufih'
//     return next(false)
//   }
// }

// router.onError(errorHandler)

// router.beforeEach(beforeGuard);

export default router

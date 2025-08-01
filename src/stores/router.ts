import { defineStore } from "pinia";

export const useRouterStore = defineStore('router', {
    state: () => ({
        __errURL: undefined as string | undefined,
        __err: undefined as Error | undefined,
        err: ''
    }),
    actions: {
        setErrURL(path: string, err = new URIError(`${path} does not exist`), override = true) {
            this.__errURL = !override ? this.__errURL : path
            this.__err = err
        },
        getErrURL() {
            const url = this.__errURL
            const err = this.__err
            this.__errURL = undefined
            this.__err = undefined
            return {url, err}
        }
    }
})

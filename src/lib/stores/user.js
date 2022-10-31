import { writable } from "svelte/store"

export const user = writable({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})
import { writable } from "svelte/store"
import { browser } from '$app/environment'

const defaultValue = {
    firstName: '',
    lastName: '',
    email: ''
}

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue

console.log(initialValue)

export const user = writable(initialValue)

user.subscribe(value => {
    if (browser) {
        window.localStorage.setItem('user', value)
    }
})


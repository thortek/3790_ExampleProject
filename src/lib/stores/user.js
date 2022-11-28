import { writable } from "svelte/store"
import { browser } from '$app/environment'

const defaultValue = {
    firstName: 'default',
    lastName: 'user',
    email: 'user@foo.com'
}

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue

export const user = writable(initialValue)

user.subscribe(value => {
    if (browser) window.localStorage.setItem('user', value)
})
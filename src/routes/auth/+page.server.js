import { invalid, redirect } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        // TODO log the user in
        const data = await request.formData()
        const email = data.get('email')
        // eslint-disable-next-line no-unused-vars
        const password = data.get('password')
        
        if (!email) { // figure out why this isn't working
            return invalid(400, {email, missing: true})
        }
        
		throw redirect(303, '/dashboard');
		
    }
}
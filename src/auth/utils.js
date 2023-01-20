import { getAuth } from 'firebase/auth';
import { router } from '../router/router';

/**
 * @returns {boolean} true if user is signed in, false otherwise
 */
function isSignedIn() {
    const auth = getAuth();
    return auth.currentUser !== null;
}

/**
 * Redirects to login page if user is not signed in
 */
function authRedirect() {
    const auth = getAuth();
    if (auth.currentUser === null) {
        router.push('/login');
    }
}

/**
 * login and register pages should not be accessible if user is signed in
 */
function authRedirectIfSignedIn() {
    const auth = getAuth();
    if (auth.currentUser !== null) {
        router.push('/dashboard');
    }
}

export { isSignedIn, authRedirect, authRedirectIfSignedIn };
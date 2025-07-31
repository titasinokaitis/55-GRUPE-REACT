export const mainMenuData = [
    { href: '/', text: 'Home' },
    { href: '/todo', text: 'Todo' },
    { href: '/about', text: 'Cookies' },
    { href: '/services', text: 'Services' },
];

export const publicMenuData = [
    ...mainMenuData,
    { href: '/login', text: 'Login' },
    { href: '/register', text: 'Register' },
];

export const adminMenuData = [
    ...mainMenuData,
    { href: '/dashboard', text: 'Dashboard' },
    { href: '/logout', text: 'Logout' },
];
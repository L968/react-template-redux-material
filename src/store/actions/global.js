export function setAuthenticated(authenticated) {
    return { type: 'SET_AUTHENTICATED', authenticated }
}

export function setDrawerIsOpen(drawerIsOpen) {
    return { type: 'SET_DRAWERISOPEN', drawerIsOpen }
}

export function setTheme(theme) {
    return { type: 'SET_THEME', theme }
}
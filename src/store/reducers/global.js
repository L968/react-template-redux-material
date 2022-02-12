const theme = localStorage.getItem('theme');

const INITIAL_STATE = {
    authenticated: false,
    drawerIsOpen: false,
    theme: theme || 'default',
}

export default function global(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return { ...state, authenticated: action.authenticated }
        case 'SET_DRAWERISOPEN':
            return { ...state, drawerIsOpen: action.drawerIsOpen }
        case 'SET_THEME':
            localStorage.setItem('theme', action.theme);
            return { ...state, theme: action.theme }
        default: return state;
    }
}
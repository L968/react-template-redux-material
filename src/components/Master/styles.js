import { makeStyles } from '@mui/styles';

const drawerWidth = 230;

export default makeStyles(theme => ({
    content: {
        minHeight: '100vh',
        flexGrow: 1,
        marginLeft: 0,
        color: theme.palette.color,
        backgroundColor: theme.palette.primary.background,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: +drawerWidth,
    }
}));
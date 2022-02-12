import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.navbar + '!important'
    },
    title: {
        flexGrow: '1',
        color: '#FFF!important',
        display: 'flex!important',
        justifyContent: 'flex-start!important',
    }
}));
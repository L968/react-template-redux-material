import clsx from 'clsx';
import Toast from '../Toast';
import Navbar from '../Navbar';
import Drawer from '../Drawer';
import { connect } from 'react-redux';

import useStyles from './styles';
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { defaultTheme, darkTheme } from '../../themes';

function Master(props) {
    const theme = props.theme === 'dark' ? darkTheme : defaultTheme;

    return (
        <ThemeProvider theme={theme}>
            <MasterContentRedux {...props} />
        </ThemeProvider>
    );
}

function MasterContent({ children, drawerIsOpen }) {
    const classes = useStyles();
    const lg = useMediaQuery(theme => theme.breakpoints.up('lg'));

    return (
        <div className={clsx(classes.content, lg && { [classes.contentShift]: drawerIsOpen })}>
            <Navbar />
            {children}
            <Drawer />
            <Toast />
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.global.theme,
    drawerIsOpen: state.global.drawerIsOpen
});

const MasterContentRedux = connect(mapStateToProps)(MasterContent);
export default connect(mapStateToProps)(Master);
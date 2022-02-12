import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GlobalActions from '../../store/actions/global';

import useStyles from './styles';
import { ChevronLeft as ChevronLeftIcon, Home as HomeIcon, } from '@mui/icons-material';
import { Drawer as MDrawer, Divider, ListItem, ListItemText, List, IconButton, ListItemIcon, useMediaQuery } from '@mui/material';

function Drawer({ drawerIsOpen, setDrawerIsOpen }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const lg = useMediaQuery(theme => theme.breakpoints.up('lg'));

    useEffect(() => {
        if (!lg && drawerIsOpen) {
            setDrawerIsOpen(false);
        }
    }, [lg]);

    return (
        <MDrawer
            anchor='left'
            variant='persistent'
            open={drawerIsOpen}
            onClose={() => setDrawerIsOpen(false)}
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => setDrawerIsOpen(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />

            <List>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Início'} />
                </ListItem>
            </List>
        </MDrawer>
    );
}

const mapStateToProps = state => ({
    drawerIsOpen: state.global.drawerIsOpen
});

const mapDispatchToProps = dispatch => bindActionCreators(GlobalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
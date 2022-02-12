import React from 'react';
import packageJson from '../../../package.json';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GlobalActions from '../../store/actions/global';

import useStyles from './styles';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import {
    Menu as MenuIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon
} from '@mui/icons-material';

function Navbar({ theme, setTheme, setDrawerIsOpen }) {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar variant='dense'>
                <IconButton edge='start' color='inherit' sx={{ mr: 2 }} onClick={() => setDrawerIsOpen(true)}>
                    <MenuIcon />
                </IconButton>

                <Typography variant='h6' sx={{ flexGrow: '1' }}>
                    {packageJson.name.toUpperCase()}
                </Typography>

                {theme === 'dark'
                    ? <IconButton color='inherit' onClick={() => setTheme('default')}><DarkModeIcon /></IconButton>
                    : <IconButton color='inherit' onClick={() => setTheme('dark')}><LightModeIcon /></IconButton>
                }
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    theme: state.global.theme
});

const mapDispatchToProps = dispatch => bindActionCreators(GlobalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
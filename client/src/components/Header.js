import React from 'react'
import { AppBar, Typography, InputBase, Toolbar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useStyles from '../styles/header'

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h6" noWrap>Recipe Keeper</Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <IconButton color="inherit" aria-label="create-recipe">
                    <AddCircleIcon />
                        &nbsp;Add
                    </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
import React from 'react'
import { AppBar, Typography, InputBase, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles/header'
import CreateDialog from './CreateDialog'

const Header = ({ currentId, setCurrentId }) => {
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
                <CreateDialog currentId={currentId} setCurrentId={setCurrentId} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
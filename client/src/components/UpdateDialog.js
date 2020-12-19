import React from 'react'
import { Dialog, DialogTitle, DialogActions, Button, IconButton } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

import Form from './Form'

const UpdateDialog = () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    return (
        <div>
            <IconButton color="inherit" aria-label="create-recipe" onClick={handleClickOpen}>
                <CreateIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update a recipe</DialogTitle>
                <Form />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UpdateDialog
import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogActions, Button, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Form from './Form'

const CreateDialog = ({ currentId, setCurrentId }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    return (
        <div>
            <IconButton color="inherit" aria-label="create-recipe" onClick={handleClickOpen}>
                <AddCircleIcon />
                    &nbsp;Add
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a new recipe</DialogTitle>
                <Form currentId={currentId} setCurrentId={setCurrentId} setOpen={setOpen} />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateDialog
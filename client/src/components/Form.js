import React from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'

import makeStyles from '../styles/form'

const Form = () => {
    const classes = makeStyles()
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
            // onSubmit={handleSubmit}
            >
                <TextField autoFocus margin="dense" id="name" label="Recipe Name" fullWidth />
                <TextField autoFocus margin="dense" id="creator" label="Creator" fullWidth />
                <TextField autoFocus margin="dense" id="materials" label="Materials" fullWidth />
                <TextField autoFocus margin="dense" id="steps" label="Steps" fullWidth />
                <div className={classes.fileInput}>
                    Image &nbsp;
                    <FileBase
                        type="file"
                        multiple={false}
                    // onDone={({ base64 }) => setRatingData(
                    //     { ...ratingData, pic: base64 }
                    // )}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    // size="large"
                    type="submit"
                    // fullWidth
                >
                    Submit
                </Button>
            </form>
        </Paper>
    )
}

export default Form
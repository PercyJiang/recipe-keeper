import React, { useState, useEffect } from 'react'
import { Container, Grid, Grow } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Recipes from './components/Recipes'

import { getRecipes } from './actions/recipes'

const App = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getRecipes()) }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <Header currentId={currentId} setCurrentId={setCurrentId} />
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Recipes setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
import React from 'react'
import { Container, Grid, Grow } from '@material-ui/core'

import Header from './components/Header'
import Recipe from './components/Recipe'

const App = () => {
    return (
        <Container maxWidth="lg">
            <Header />
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Recipe />
                            <Recipe />
                            <Recipe />
                            <Recipe />
                            <Recipe />
                            <Recipe />
                            <Recipe />
                            <Recipe />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
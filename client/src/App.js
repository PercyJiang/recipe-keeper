import React from 'react'
import { Container } from '@material-ui/core'

import Header from './components/Header'
import Recipe from './components/Recipe'

const App = () => {
    return (
        <Container fixed>
            <Header />
            <Recipe />
        </Container>
    )
}

export default App
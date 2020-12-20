import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    grid: {
        marginRight: '10px',
        marginTop: '10px'
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}))
import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    root: {
        maxHeight: 500,
        maxWidth: 300,
        width: 300,
        height: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    deleteIcon: {
        marginTop: 20,
        width: '100%'
    }
}))
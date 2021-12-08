import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: '15rem',
        padding: 10,
        maxHeight: '20rem'

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
    },
    button: {
        backgroundColor: '#2237CB',
        width: '50%'
    },
    icon: {
        backgroundColor: '#656872'
    },
    media: {
        height: '10rem',
        width: '10rem',
        borderRadius: '100%'
    },
});


export default useStyles

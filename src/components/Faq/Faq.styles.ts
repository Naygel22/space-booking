import { SxProps, Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> } = {
    faqBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f1f0ea',
        paddingBottom: '50px',
        paddingTop: '30px'
    },
    title: {
      fontSize: '40px',
      color: 'black',
      marginBottom: '20px'
    },
    question: {
      fontWeight: 'bold',
      height: '60px'
    }
}

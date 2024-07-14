import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    borderRadius: '10px',
    marginTop: '20px',
    display: 'flex',
    backgroundColor: '#2e2d2b',
    width: '70%',
    minHeight: '700px'
  },
  sidebar: {
    borderRight: '1px solid #ccc',
    paddingRight: '20px',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexDeskLogo: {
    width: '200px',
    height: '200px',
    borderRadius: '150px',
    marginBottom: '30px'
  },
  button: {
    marginBottom: '10px',
    width: '80%',
    height: '40px',
    textAlign: 'left',
    color: 'white',
    textTransform: 'none',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: '#3c3c3c',
    },
  },
  buttonSelected: {
    marginBottom: '10px',
    width: '80%',
    height: '40px',
    textAlign: 'left',
    color: 'white',
    textTransform: 'none',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: '#3c3c3c',
    },
    backgroundColor: '#3c3c3c',
  },
  content: {
    padding: '20px',
    flexGrow: 1,
  },
  profileContainer: {
    padding: '20px',
  },
  reservationsContainer: {
    padding: '20px',
  },
  table: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
  },
  tableRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

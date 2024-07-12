import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#2e2d2b',
    width: '100%'
  },
  header: {
    borderBottom: '2px solid #000',
    marginBottom: '10px',

  },
  headerText: {
    fontWeight: 'bold',
  },
  row: {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',

  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusCompleted: {
    color: 'green',
    fontWeight: 'bold'
  },
  cancelButton: {
    height: '35px',
    padding: '15px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#bc4749',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#d36a6d',
    },
  },
  
};

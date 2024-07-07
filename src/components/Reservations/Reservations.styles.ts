import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginTop: '20px',
    backgroundColor: '#2e2d2b',
    width: '55%'
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
};

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
};

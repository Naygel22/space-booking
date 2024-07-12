import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  footerContainer: {
    backgroundColor: "#2e2d2b",
    color: "#fff",
    padding: "20px 0"
  },
  footerHeader: {
    fontWeight: "bold",
    marginBottom: "10px"
  },
  footerLink: {
    display: "block",
    margin: "8px 0"
  },
  footerIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },
  footerCopyRight: {
    textAlign: "center",
    marginTop: "20px"
  }
};

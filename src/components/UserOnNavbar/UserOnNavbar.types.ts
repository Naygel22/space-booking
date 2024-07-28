export type UserOnNavbarType = {
  userData: Array<{
    name: string;
    surname: string;
  }> | undefined
  handleLogout: () => void
};
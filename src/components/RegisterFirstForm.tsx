import { Divider } from "@mui/material"


export const RegisterFirstForm = () => {
  return (
    <div className="registerFirstForm">
      <div>Create your FlexDesk account</div>
      <img src="src/assets/images/registerFirstForm.jpeg" className="registerFirstFormImg" />
      <button>Sign up</button>
      <Divider
        sx={{
          fontSize: '13px',
          "&::before, &::after": {
            borderColor: "white",
          },
        }}>OR</Divider>
      <button>Continue with Google</button>
      <button>Continue with GitHub</button>
    </div>
  )
}

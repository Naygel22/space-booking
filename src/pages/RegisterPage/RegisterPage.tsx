//import { Register } from "../components/Register"
import { useState } from "react";
import { RegisterFirstForm } from "../../components/RegisterFirstForm/RegisterFirstForm"
import { Register } from "../../components/Register/Register";

export const RegisterPage = () => {
  const [step, setStep] = useState(1);

  function goToNextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  function backToPreviousStep() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      {step === 1 &&
        <RegisterFirstForm onStepChange={goToNextStep} />
      }
      {step === 2 &&
        <Register onStepChange={backToPreviousStep} />
      }
    </>
  )
}

import React, { useState } from "react";
import Navigation from "../../../layouts/Navigation";
import Agent from "../Agent";
import StepOne from './Steps/stepOne';
import StepTwo from './Steps/stepTwo';
import StepThree from './Steps/stepThree';
import StepFour from './Steps/stepFour';
import StepFive from './Steps/stepFive';
import StepSix from './Steps/stepSix';
import StepSeven from './Steps/stepSeven';
import AgentPayment from "../PaymentForm/agentpayment";
import LicensedAgentPayment from "../PaymentForm/licensedAgentPayment";
import NewLincesedAgentPayment from "../PaymentForm/newLincesedAgentPayment";
import Footer2 from "../../../layouts/Footer/Footer2";
import ThankYouPage from "../PaymentForm/thankYouPage";
export default function Form() {
  const [step, setStep] = useState(0);
  console.log(step, "stepstep")
  const handleNext = () => {
    setStep(step + 1);
  }
  const handlePrevious = () => {
    setStep(step - 1);
  }
  return (
    <div className="MainAgentpage">
      <Navigation />
      {step === 0 && <Agent onSubmit={handleNext} />}
      {step === 1 && <StepOne onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 2 && <StepTwo onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 3 && <StepThree onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 4 && <StepFour onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 5 && <StepFive onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 6 && <StepSix onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 7 && <StepSeven onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 8 && <AgentPayment onSubmit={handleNext} />}
      {step === 9 && <LicensedAgentPayment onSubmit={handleNext} />}
      {step === 10 && <NewLincesedAgentPayment onSubmit={handleNext} />}
      {step === 11 && <ThankYouPage />}
      <Footer2 />
    </div>
  )
}
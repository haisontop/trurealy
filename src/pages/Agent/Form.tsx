import React, { useState } from "react";
import Navigation from "../../layouts/Navigation";
import Agent from "./Agent";
import Step1 from './Steps/step1';
import Step2 from './Steps/step2';
import Step3 from './Steps/step3';
import Step4 from './Steps/step4';
import Step5 from './Steps/step5';
import Step6 from './Steps/step6';
import Step7 from './Steps/step7';
import Footer2 from "../../layouts/Footer/Footer2"
export default function Form() {
  const [step, setStep] = useState(0);
  console.log(step,"stepstep")
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
      {step === 1 && <Step1 onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 2 && <Step2 onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 3 && <Step3 onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 4 && <Step4 onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 5 && <Step5 onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 6 && <Step6 onSubmit={handleNext} onPrevious={handlePrevious} />}
      {step === 7 && <Step7 onSubmit={handleNext} onPrevious={handlePrevious} />}
      <Footer2 />
    </div>
  )
}

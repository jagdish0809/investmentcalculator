import UserForm from "./Components/UserInput/UserForm";
import Header from "./Components/ShowResult/Header";
import Results from "./Components/ShowResult/Results";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);

  const storeUserData = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    const durationn = parseInt(userInput["duration"], 10);
    const initialInvestment = parseInt(userInput["current-savings"], 10);
    const annualInvestment = parseInt(userInput["yearly-contribution"], 10);
    const expectedInterest = parseInt(userInput["expected-return"], 10) / 100;

    let interestreturn = expectedInterest * initialInvestment; //1085
    let totalReturn = initialInvestment + interestreturn; //12285
    for (let i = 0; i < durationn; i++) {
      if (i === 0) {
        yearlyData.push({
          year: 1,
          initialInvestment: initialInvestment.toFixed(2),
          interest: (initialInvestment * expectedInterest).toFixed(2),
          totalinterest: (initialInvestment * expectedInterest).toFixed(2),
          totalReturn: (
            initialInvestment +
            initialInvestment * expectedInterest
          ).toFixed(2),
        });
      } else {
        const yearstartinvestment = totalReturn + annualInvestment;
        let newtotalinterest =
          interestreturn + yearstartinvestment * expectedInterest;
        yearlyData.push({
          year: i + 1,
          initialInvestment: yearstartinvestment.toFixed(2),
          interest: (yearstartinvestment * expectedInterest).toFixed(2),
          totalinterest: newtotalinterest.toFixed(2),
          totalReturn: (
            yearstartinvestment +
            yearstartinvestment * expectedInterest
          ).toFixed(2),
        });
        interestreturn += yearstartinvestment * expectedInterest;
        totalReturn =
          yearstartinvestment * expectedInterest + yearstartinvestment;
      }
    }
  }

  return (
    <div>
      <Header />
      <UserForm userData={storeUserData} />

      {!userInput && <p style={{textAlign: 'center'}}>No Investment Calculated Yet.</p>}
      {userInput && <Results data={yearlyData} />}
    </div>
  );
}

export default App;

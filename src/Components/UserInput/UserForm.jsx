import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [currentSave, setCurrentSave] = useState("");
  const [yearContribution, setYearContribution] = useState("");
  const [expectReturn, setExpectReturn] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHanlder = (e) => {
    e.preventDefault();

    const duration = parseInt(investmentDuration, 10);
    const initialInvestment = parseInt(currentSave, 10);
    const annualInvestment = parseInt(yearContribution, 10);
    const expectedInterest = parseInt(expectReturn, 10) / 100;

    let interestreturn = expectedInterest * initialInvestment;//1085
    let totalReturn = initialInvestment + interestreturn; //12285
    for (let i = 0; i < duration; i++) {
      if (i === 0) {
        setYearlyData((prevState) => [
          ...prevState,
          {
            year: 1,
            initialInvestment: initialInvestment.toFixed(2),
            interest: (initialInvestment*expectedInterest).toFixed(2),
            totalinterest: (initialInvestment*expectedInterest).toFixed(2),
            totalReturn: (initialInvestment+(initialInvestment*expectedInterest)).toFixed(2),
          },
        ]);
      } else {
        const yearstartinvestment = totalReturn + annualInvestment;
        let newtotalinterest = interestreturn + (yearstartinvestment * expectedInterest);
        setYearlyData((prevData) => [
          ...prevData,
          {
            year: i + 1,
            initialInvestment: yearstartinvestment.toFixed(2),
            interest: (yearstartinvestment * expectedInterest).toFixed(2),
            totalinterest: newtotalinterest.toFixed(2),
            totalReturn: (yearstartinvestment+(yearstartinvestment*expectedInterest)).toFixed(2),
          },
        ]);
        interestreturn  += yearstartinvestment*expectedInterest;
        totalReturn = (yearstartinvestment*expectedInterest)+yearstartinvestment;
      }
    }
    props.userData(yearlyData);
    // console.log(typeof(yearlyData));
    setCurrentSave("");
    setYearContribution("");
    setExpectReturn("");
    setInvestmentDuration("");
  };

  return (
    <form className={styles.form} onSubmit={calculateHanlder}>
      <div className={styles.input_group}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSave}
            onChange={(e) => setCurrentSave(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearContribution}
            onChange={(e) => setYearContribution(e.target.value)}
          />
        </p>
      </div>
      <div className={styles.input_group}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectReturn}
            onChange={(e) => setExpectReturn(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(e.target.value)}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserForm;

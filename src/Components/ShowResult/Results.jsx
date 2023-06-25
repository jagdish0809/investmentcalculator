import React, {useState} from 'react';
import styles from './Results.module.css';

export default function Results(props){
  let result = props.passData;
    return (
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => {
          <tr>
            <td>{data.year}</td>
            <td>{data.totalReturn}</td>
            <td>{data.interest}</td>
            <td>{data.totalInterest}</td>
            <td>{data.initialInvestment}</td>
          </tr>;
          })}
        </tbody>
      </table>
    );
}
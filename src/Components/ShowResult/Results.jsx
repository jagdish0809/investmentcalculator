import styles from "./Results.module.css";

export default function Results(props) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Total Returns</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.initialInvestment}</td>
            <td>{yearData.interest}</td>
            <td>{yearData.totalinterest}</td>
            <td>{yearData.totalReturn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { useState } from "react";
import classes from "./mortgage.module.scss";

export const MortgageCalculator = () => {
  const [loan, setLoan] = useState("");
  const [term, setTerm] = useState(""); // years
  const [interest, setInterest] = useState(""); // annual %
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const formatCurrency = (value) =>
    Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    const loanAmount = parseFloat(loan);
    const loanTermYears = parseFloat(term);
    const annualInterestRate = parseFloat(interest);

    if (!loanAmount || !loanTermYears || !annualInterestRate) {
      alert("Please fill in all fields with valid numbers");
      return;
    }

    const monthlyRate = annualInterestRate / 100 / 12;
    const totalMonths = loanTermYears * 12;

    const monthly =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalMonths));

    const total = monthly * totalMonths;
    const interestPaid = total - loanAmount;

    setMonthlyPayment(formatCurrency(monthly));
    setTotalPayment(formatCurrency(total));
    setTotalInterest(formatCurrency(interestPaid));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.formLayout}>
        <label>
          Loan Amount:
          <input
            type="number"
            placeholder="1 000 000"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
          />
        </label>

        <label>
          Loan Term (years):
          <input
            type="number"
            placeholder="30"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>

        <label>
          Interest Rate (%):
          <input
            type="number"
            placeholder="3"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </label>

        <input
          type="submit"
          value="Calculate"
          className={classes.submitButton}
        />
      </form>

      {monthlyPayment !== null && (
        <div className={classes.results}>
          <p className={classes.result}>
            Monthly Payment Amount: {monthlyPayment}
          </p>
          <p className={classes.result}>Total Payment Amount: {totalPayment}</p>
          <p className={classes.result}>Total Interest Paid: {totalInterest}</p>
        </div>
      )}
    </div>
  );
};

import getIncomeExpenses from "@/app/actions/getIncomeExpenses";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpenses();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">£{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">£{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;

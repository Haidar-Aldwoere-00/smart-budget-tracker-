const IncomeExpenses = ({ income, expense }) => {
    return (
        <div>
            <div>
                <h4>الدخل</h4>
                <p>+${income}</p>
            </div>
            <div>
                <h4>المصاريف</h4>
                <p>-${expense}</p>
            </div>
        </div>
    );
}
export default IncomeExpenses;
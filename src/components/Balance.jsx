const Balance = ({totalBalance}) => { 
    return (
        <div>
            <h4>رصيدك الحالي</h4>
            <h1>{totalBalance}$</h1>
        </div>
    );
}
export default Balance;
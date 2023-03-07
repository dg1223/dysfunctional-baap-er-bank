// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmountText = document.getElementById("deposit-field").value;
  const newDepositAmount = parseFloat(newDepositAmountText);
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotalField = document.getElementById("deposit-total");
  const previousDepositTotalText = previousDepositTotalField.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalText);
  // console.log(previousDepositTotalText, previousDepositTotal);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  document.getElementById("deposit-total").innerText = newDepositTotal;
  document.getElementById("deposit-field").value = "";
  // setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotalField = document.getElementById("balance-total");
  const previousBalanceTotalText = previousBalanceTotalField.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  document.getElementById("balance-total").innerText = newBalanceTotal;
});

document.getElementById("deposit-btn").addEventListener('click' ,function () {
  // deposit input part :
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value ;
   const newDepositAmount = parseFloat(newDepositAmountText);

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText ;
  const previousDepositAmount = parseFloat(previousDepositText);

  const newDepositTotal = previousDepositAmount + newDepositAmount ;
  depositTotal.innerText =newDepositTotal ;

  
  // total Balance :
  const totalBalance = document.getElementById('total-balance');
  const totalBalanceText = totalBalance.innerText ;
  const totalBalanceAmount = parseFloat(totalBalanceText);

  const currentBalance = totalBalanceAmount + newDepositAmount ;

  totalBalance.innerText = currentBalance ;


  // input clear 
  depositInput.value = '';


})

// withdraw event handler :
document.getElementById('withdraw-button').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawInputText = withdrawInput.value ;
  const withdrawInputAmount = parseFloat(withdrawInputText);
  console.log( withdrawInputAmount);

  // set balance :

  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawBalanceText = withdrawTotal.innerText;
  const withdrawBalanceTextAmount = parseFloat(withdrawBalanceText);

 const  newWithdrawBalance = withdrawBalanceTextAmount + withdrawInputAmount ;

 withdrawTotal.innerText = newWithdrawBalance ;

//  total Balance total :
  
const previousTotalBalance  = document.getElementById('total-balance');
const previousTotalBalanceText = previousTotalBalance.innerText ;
const previousTotalBalanceInput = parseFloat(previousTotalBalanceText);

const newTotalBalance = previousTotalBalanceInput - newWithdrawBalance ;
previousTotalBalance.innerText = newTotalBalance ,




//  set input clear :
withdrawInput.value = '';
})
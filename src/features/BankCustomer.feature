@bankCustomer
Feature: To test Bank Manager related functionality

   @makeDeposit
   Scenario: Make A Deposit
      Given User is on XYZ Bank page
      When User logs in as customer "Harry Potter"
      And User navigates to Deposit page
      And User makes a transaction of "1000" Dollars
      Then User verifies that "Deposit Successful"
      And User balance is "1000" Dollars
      And User logs out of the application

   @makeWithdrawal
   Scenario: Make A Withdrawal
      Given User is on XYZ Bank page
      When User logs in as customer "Harry Potter"
      And User navigates to Withdrawal page
      And User makes a transaction of "100" Dollars
      Then User verifies that "Transaction successful"
      And User balance is "900" Dollars
      And User logs out of the application   

   @makeInvalidWithdrawal
   Scenario: Make an invalid Withdrawal
      Given User is on XYZ Bank page
      When User logs in as customer "Harry Potter"
      And User navigates to Withdrawal page
      And User makes a transaction of "9999" Dollars
      Then User verifies that "Transaction Failed. You can not withdraw amount more than the balance."
      And User logs out of the application   

   @transactionHistory
   Scenario: Verify Transaction History
      Given User is on XYZ Bank page
      When User logs in as customer "Harry Potter"
      And User navigates to transactions page
      Then User verifies the "Credit" history of "1000" Dollars
      And User verifies the "Debit" history of "100" Dollars
      And User logs out of the application         
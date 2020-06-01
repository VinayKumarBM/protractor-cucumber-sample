@bankManager
Feature: To test Bank Manager related functionality

   @addCustomer
   Scenario: Add a new Customer
      Given User is on XYZ Bank page
      When User is logged in as Bank Manager
      And User adds new Customer with all the details
      |firstName  |lastName   |postalCode |
      |Vinay      |Kumar      |560099     |
      Then User should see the message "Customer added successfully with customer id"

   @openAccount
   Scenario: Open New Account for the Customer
      Given User is on XYZ Bank page
      When User is logged in as Bank Manager
      And User opens a New Account for the customer
      |customerName  |currency   |
      |Vinay Kumar   |Pound      |
      Then User should see the message "Account created successfully with account Number"

   @searchAndDeleteCustomer
   Scenario: Search and delete the Customer
      Given User is on XYZ Bank page
      When User is logged in as Bank Manager
      And User searchs for Cusomter "Vinay"
      Then User deletes the customer that was searched
      And User should see 0 customer with name "Vinay"
   
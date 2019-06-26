@smoke
Feature: add customer
  I want to use this template for my feature file
  
  Background:
  Given customer in homepage
    And click add customer
  
    
  @reg
  Scenario: add customer detail  
      When fill the detail
    And click submit
    Then check the customer number

  @sanity
  Scenario: add customer details
  
      When fill the details
      | keerthi | kiruthiga | k@gmail.com | veloode | 9856654782 |
    And click submit
    Then check the customer number

  @smoke
  Scenario: add customer detailss  
      When fill the detailss
      | fn | keerthi     |
      | ln | kiruthiga   |
      | em | k@gmail.com |
      | pl | veloode     |
      | ph |  9856654782 |
    And click submit
    Then check the customer number

#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: add customer
  I want to use this template for my feature file

  @tag1
  Scenario: add customer details
    Given customer in homepage
    And click add customer
    When fill the details
    And click submit
    Then check the customer number

  @tag2
  Scenario Outline: add trafficplan
    Given customer in homepage
    And click traffic plan
    When fill the details"<Monthly Rental>","<Free Local Minutes>","<Free International Minutes>","<Free SMS Pack>","<Local Per Minutes Charges>","<Inter. Per Minutes Charges>","<SMS Per Charges>"
    And click submit
    Then check the trafficplan  id

    Examples: 
      | Monthly Rental | Free Local Minutes | Free International Minutes | Free SMS Pack | Local Per Minutes Charges | Inter. Per Minutes Charges | SMS Per Charges |
      |            200 |                500 |                        400 |           900 |                       600 |                        400 |             600 |
      |            500 |                600 |                         44 |            15 |                        12 |                         32 |              65 |
      |             80 |                 40 |                         50 |            60 |                        90 |                        100 |             200 |

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/addcustomer.feature");
formatter.feature({
  "name": "add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "customer in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "addsteps.customer_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add customer detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "fill the detail",
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "addsteps.check_the_customer_number()"
});
formatter.result({
  "status": "passed"
});
});
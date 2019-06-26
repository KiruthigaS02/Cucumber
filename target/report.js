$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/TrafficPlan.feature");
formatter.feature({
  "name": "add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "add customer details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
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
formatter.step({
  "name": "fill the details",
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_details(DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [fill the details] is defined with 1 parameters at \u0027com.step.addsteps.fill_the_details(DataTable) in file:/C:/Users/HP/Downloads/eclipse-committers-oxygen-3a-win32-x86_64/eclipse/KiruthigaSelenium/tt/cucumber/target/test-classes/\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: fill the details\r\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click submit",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check the customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "addsteps.check_the_customer_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "add trafficplan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "customer in homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "click traffic plan",
  "keyword": "And "
});
formatter.step({
  "name": "fill the details\"\u003cMonthly Rental\u003e\",\"\u003cFree Local Minutes\u003e\",\"\u003cFree International Minutes\u003e\",\"\u003cFree SMS Pack\u003e\",\"\u003cLocal Per Minutes Charges\u003e\",\"\u003cInter. Per Minutes Charges\u003e\",\"\u003cSMS Per Charges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "name": "check the trafficplan  id",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "Free Local Minutes",
        "Free International Minutes",
        "Free SMS Pack",
        "Local Per Minutes Charges",
        "Inter. Per Minutes Charges",
        "SMS Per Charges"
      ]
    },
    {
      "cells": [
        "200",
        "500",
        "400",
        "900",
        "600",
        "400",
        "600"
      ]
    },
    {
      "cells": [
        "500",
        "600",
        "44",
        "15",
        "12",
        "32",
        "65"
      ]
    },
    {
      "cells": [
        "80",
        "40",
        "50",
        "60",
        "90",
        "100",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "add trafficplan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
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
  "name": "click traffic plan",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_traffic_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill the details\"200\",\"500\",\"400\",\"900\",\"600\",\"400\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_details(String,String,String,String,String,String,String)"
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
  "name": "check the trafficplan  id",
  "keyword": "Then "
});
formatter.match({
  "location": "addsteps.check_the_trafficplan_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add trafficplan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
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
  "name": "click traffic plan",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_traffic_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill the details\"500\",\"600\",\"44\",\"15\",\"12\",\"32\",\"65\"",
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_details(String,String,String,String,String,String,String)"
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
  "name": "check the trafficplan  id",
  "keyword": "Then "
});
formatter.match({
  "location": "addsteps.check_the_trafficplan_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add trafficplan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
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
  "name": "click traffic plan",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_traffic_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill the details\"80\",\"40\",\"50\",\"60\",\"90\",\"100\",\"200\"",
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_details(String,String,String,String,String,String,String)"
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
  "name": "check the trafficplan  id",
  "keyword": "Then "
});
formatter.match({
  "location": "addsteps.check_the_trafficplan_id()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/addcustomer.feature");
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
  "name": "add customer details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "fill the details",
  "rows": [
    {
      "cells": [
        "keerthi",
        "kiruthiga",
        "k@gmail.com",
        "veloode",
        "9856654782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_details(DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [fill the details] is defined with 1 parameters at \u0027com.step.addsteps.fill_the_details(DataTable) in file:/C:/Users/HP/Downloads/eclipse-committers-oxygen-3a-win32-x86_64/eclipse/KiruthigaSelenium/tt/cucumber/target/test-classes/\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: fill the details\r\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click submit",
  "keyword": "And "
});
formatter.match({
  "location": "addsteps.click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check the customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "addsteps.check_the_customer_number()"
});
formatter.result({
  "status": "skipped"
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
  "name": "add customer detailss",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "fill the detailss",
  "rows": [
    {
      "cells": [
        "fn",
        "keerthi"
      ]
    },
    {
      "cells": [
        "ln",
        "kiruthiga"
      ]
    },
    {
      "cells": [
        "em",
        "k@gmail.com"
      ]
    },
    {
      "cells": [
        "pl",
        "veloode"
      ]
    },
    {
      "cells": [
        "ph",
        "9856654782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "addsteps.fill_the_detailss(DataTable)"
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
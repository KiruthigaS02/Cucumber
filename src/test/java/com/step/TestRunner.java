package com.step;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\feature",glue="com.step",plugin="html:target",dryRun=false, tags= {"@reg"})
public class TestRunner {

}

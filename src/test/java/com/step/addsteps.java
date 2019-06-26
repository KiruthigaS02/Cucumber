package com.step;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class addsteps {
	static WebDriver driver;
	@Given("customer in homepage")
	public void customer_in_homepage() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Downloads\\eclipse-committers-oxygen-3a-win32-x86_64\\eclipse\\KiruthigaSelenium\\tt\\cucumber\\driver\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("click add customer")
	public void click_add_customer() {
		
		driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
	 	}

	@When("fill the detail")
	public void fill_the_detail() {
		driver.findElement(By.xpath("(//label[@for='done'])")).click();
		driver.findElement(By.id("fname")).sendKeys("kiru");
		driver.findElement(By.id("lname")).sendKeys("s");
		driver.findElement(By.id("email")).sendKeys("kiruthi@gamil.com");
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("6549871236");
		}
	
	@When("fill the details")
	public void fill_the_details(DataTable crs) {
		List<String> cr = crs.asList();
		driver.findElement(By.xpath("(//label[@for='done'])")).click();
		driver.findElement(By.id("fname")).sendKeys(cr.get(0));
		driver.findElement(By.id("lname")).sendKeys(cr.get(1));
		driver.findElement(By.id("email")).sendKeys(cr.get(2));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(cr.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(cr.get(4));
	    
	}

	@When("fill the detailss")
	public void fill_the_detailss(DataTable dataTable) {
		Map<String, String> mps = dataTable.asMap(String.class, String.class);
		driver.findElement(By.id("fname")).sendKeys(mps.get("fn"));
		driver.findElement(By.id("lname")).sendKeys(mps.get("ln"));
		driver.findElement(By.id("email")).sendKeys(mps.get("em"));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(mps.get("pl"));
		driver.findElement(By.id("telephoneno")).sendKeys(mps.get("ph"));
		
	
	}

	@When("click submit")
	public void click_submit() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("check the customer number")
	public void check_the_customer_number() {
	   Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

	@Given("click traffic plan")
	public void click_traffic_plan() {
	    driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		
	}

	@When("fill the details{string},{string},{string},{string},{string},{string},{string}")
	public void fill_the_details(String a, String b, String c, String d, String e, String f, String g) {
			driver.findElement(By.id("rental1")).sendKeys(a);
			driver.findElement(By.id("local_minutes")).sendKeys(b);
			driver.findElement(By.id("inter_minutes")).sendKeys(c);
			driver.findElement(By.id("sms_pack")).sendKeys(d);
			driver.findElement(By.id("minutes_charges")).sendKeys(e);
			driver.findElement(By.id("inter_charges")).sendKeys(f);
			driver.findElement(By.id("sms_charges")).sendKeys(g);
		//	driver.findElement(By.xpath("//input[@type='submit']")).click();
			}

	@Then("check the trafficplan  id")
	public void check_the_trafficplan_id() {
	  Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}


}

package testRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/features",
        glue = {"stepDefinitions"},
        plugin = {"pretty", "json:target/reportG.json",
                "html:target/cucumber-html-report",
                "junit:target/cucumber.xml"}
)

public class GitSearchTestRunner {

}

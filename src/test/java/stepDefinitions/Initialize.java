package stepDefinitions;

import cucumber.api.java.Before;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.databind.DeserializationFeature;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.databind.ObjectMapper;
import utilities.RestAssuredExtension;

public class Initialize {

    @Before
    public void TestSetup() {
        ObjectMapper om = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false);
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension();

    }

}

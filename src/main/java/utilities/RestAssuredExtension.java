package utilities;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RestAssuredExtension {

    private static final String BASE_URL = "https://api.github.com/";
    public static RequestSpecification Request;
    public static String listString;

    public RestAssuredExtension() {
        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.setBaseUri(BASE_URL);
        builder.setContentType(ContentType.JSON);
        builder.setUrlEncodingEnabled(false);
        var requestSpec = builder.build();
        Request = RestAssured.given().spec(requestSpec);
        RestAssured.urlEncodingEnabled = false;
    }

    public static Map<String, String> GetQueryParamWithSortAndOrder(List<String> query,String sort, String order) {
        listString = "";
        for (String s : query)
        {
            listString += s + "+";
        }
        if(listString.endsWith("+")) {
            listString= listString.substring(0, listString.length() - 1);
        }
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("q", listString);
        queryParams.put("sort", sort);
        queryParams.put("order", order);
        return queryParams;
    }

    public static Map<String, String> GetQueryParamFromGivenStrings(List<String> query) {
        listString = "";
        for (String s : query)
        {
            listString += s + "+";
        }
        if(listString.endsWith("+")) {
            listString= listString.substring(0, listString.length() - 1);
        }
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("q", listString);
        return queryParams;
    }

    public static ResponseOptions<Response> GetWithQueryParams(String url,Map<String, String> qParams) {
        Request.queryParams(qParams);
            return Request.get(url);
 }

}

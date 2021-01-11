package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import pojo.Items;
import pojo.RepoCountInfo;
import utilities.RestAssuredExtension;
import java.util.*;
import java.util.stream.Collectors;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class GitSearchTestStepDef {

    private static final String path = "search/repositories";
    private static final String createdBeforeEncoded = "created:%3C";
    private static final String createdAfterEncoded = "created:%3E";
    public static ResponseOptions<Response> response;
    public static List<String> multipleQueryParam = new ArrayList<String>();
    //public static List<Items> itemsList;
    public static List<Integer> watchersCounts;
    public static List<Integer> forkCount;
    public static List<Boolean> isPrivate;

    @Then("I should see the total count {int} in response sorted by {string} and order by {string}")
    public void i_should_see_the_total_count_in_response_sorted_by_and_order_by(Integer totalCount, String sort, String order) {
        var repoCountInfo = response.getBody().as(RepoCountInfo.class);
        //System.out.println(response.getBody().prettyPrint());
        List<Items> itemsList = repoCountInfo.getItems();
        watchersCounts = new ArrayList<>();
        itemsList.forEach(item->{
            watchersCounts.add(item.getWatchers_count());
        });
        List sortedList = watchersCounts.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
        assertThat(repoCountInfo.getTotal_count(),equalTo(totalCount));
        assertThat(watchersCounts.equals(sortedList),equalTo(true));
    }

    @Given("I perform GET operation to validate total no of repo of {string} for {string} with {string} and {string}")
    public void i_perform_GET_operation_to_validate_total_no_of_repo_of_for_with_and(String organisation, String programmingLanguage, String sort, String order) {
        multipleQueryParam = Arrays.asList(organisation,programmingLanguage);
        response = RestAssuredExtension.GetWithQueryParams(path,RestAssuredExtension.GetQueryParamWithSortAndOrder(multipleQueryParam,sort,order));
    }

    @Then("I should see the total count {int} in response")
    public void i_should_see_the_total_count_in_response(Integer totalCount) {
        var repoCountInfo = response.getBody().as(RepoCountInfo.class);
        assertThat(repoCountInfo.getTotal_count(),equalTo(totalCount));
    }

    @Given("I perform GET operation to validate total no of repo created before {string} for given programming language {string}")
    public void i_perform_GET_operation_to_validate_total_no_of_repo_created_before_for_given_programming_language(String date, String programmingLanguage) {
        multipleQueryParam = Arrays.asList(createdBeforeEncoded+date,programmingLanguage);
        response = RestAssuredExtension.GetWithQueryParams(path,RestAssuredExtension.GetQueryParamFromGivenStrings(multipleQueryParam));
    }

    @Given("I perform GET operation to validate total no of repo of {string} with {string} and {string}")
    public void i_perform_GET_operation_to_validate_total_no_of_repo_of_with_and(String user, String sort, String order) {
        multipleQueryParam = Arrays.asList(user);
        response = RestAssuredExtension.GetWithQueryParams(path,RestAssuredExtension.GetQueryParamWithSortAndOrder(multipleQueryParam,sort,order));
    }

    @Then("I should see the total count {int} in response sorted by {string} and order by {string} for given users")
    public void i_should_see_the_total_count_in_response_sorted_by_and_order_by_for_given_users(Integer totalCount, String sort, String order) {
        var repoCountInfo = response.getBody().as(RepoCountInfo.class);
        List<Items> itemsList = repoCountInfo.getItems();
        forkCount = new ArrayList<>();
        itemsList.forEach(item->{
            forkCount.add(item.getWatchers_count());
        });
        List sortedList = forkCount.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
        assertThat(repoCountInfo.getTotal_count(),equalTo(totalCount));
        assertThat(forkCount.equals(sortedList),equalTo(true));
    }

    @Then("I should see the repo name {string} in response sorted by {string} and order by {string} for given users")
    public void i_should_see_the_repo_name_in_response_sorted_by_and_order_by_for_given_users(String repoName, String sort, String order) {
        var repoCountInfo = response.getBody().as(RepoCountInfo.class);
        List<Items> itemsList = repoCountInfo.getItems();
        assertThat(repoCountInfo.getItems().get(0).getName(),equalTo(repoName));
    }

    @Given("I perform GET operation to validate public repo of {string}s {string} with {string} and {string}")
    public void i_perform_GET_operation_to_validate_public_repo_of_s_with_and(String organisation, String language, String sort, String order) {
        multipleQueryParam = Arrays.asList(organisation,language);
        response = RestAssuredExtension.GetWithQueryParams(path,RestAssuredExtension.GetQueryParamWithSortAndOrder(multipleQueryParam,sort,order));
    }

    @Then("I should see all the public repo and sorted by {string} and order by {string}")
    public void i_should_see_all_the_public_repo_and_sorted_by_and_order_by(String string, String string2) {
        var repoCountInfo = response.getBody().as(RepoCountInfo.class);
        boolean found = false;
        List<Items> itemsList = repoCountInfo.getItems();
        watchersCounts = new ArrayList<>();
        isPrivate = new ArrayList<>();
        itemsList.forEach(item->{
            isPrivate.add(item.isPrivate());
            watchersCounts.add(item.getWatchers_count());
        });
        for (boolean b : isPrivate) {
            if (b) {
                found = true;
            }
        }
        List sortedList = watchersCounts.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
        assertThat(found, equalTo(false));
        assertThat(watchersCounts.equals(sortedList),equalTo(true));
    }
}
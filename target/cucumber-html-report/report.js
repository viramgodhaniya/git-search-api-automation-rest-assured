$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/GitSearchApiTest.feature");
formatter.feature({
  "name": "To verify functionality and behaviour of GitHub search API based on series of keywords,",
  "description": "  as well as ordering and sorting of the returned results.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "validate total number of repositories for given programming language created before 01st January 2011",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo created before \"2011-01-01\" for given programming language \u0027\u003clanguage\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "I should see the total count \u003ctotalCount\u003e in response",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "language",
        "totalCount"
      ]
    },
    {
      "cells": [
        "language:java",
        "16970"
      ]
    },
    {
      "cells": [
        "language:c",
        "13531"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate total number of repositories for given programming language created before 01st January 2011",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo created before \"2011-01-01\" for given programming language \u0027language:java\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_created_before_for_given_programming_language(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the total count 16970 in response",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_total_count_in_response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate total number of repositories for given programming language created before 01st January 2011",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo created before \"2011-01-01\" for given programming language \u0027language:c\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_created_before_for_given_programming_language(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the total count 13531 in response",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_total_count_in_response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate total number of repositories for given organisation and programming language with sort and order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027\u003corganisation\u003e\u0027 for \u0027\u003clanguage\u003e\u0027 with \u0027\u003csort\u003e\u0027 and \u0027\u003corder\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "I should see the total count \u003ctotalCount\u003e in response sorted by \u0027\u003csort\u003e\u0027 and order by \u0027\u003corder\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "organisation",
        "language",
        "sort",
        "order",
        "totalCount"
      ]
    },
    {
      "cells": [
        "org:workday",
        "language:java",
        "star",
        "desc",
        "6"
      ]
    },
    {
      "cells": [
        "org:github",
        "language:java",
        "star",
        "desc",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate total number of repositories for given organisation and programming language with sort and order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027org:workday\u0027 for \u0027language:java\u0027 with \u0027star\u0027 and \u0027desc\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_of_for_with_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the total count 6 in response sorted by \u0027star\u0027 and order by \u0027desc\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_total_count_in_response_sorted_by_and_order_by(Integer,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate total number of repositories for given organisation and programming language with sort and order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027org:github\u0027 for \u0027language:java\u0027 with \u0027star\u0027 and \u0027desc\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_of_for_with_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the total count 4 in response sorted by \u0027star\u0027 and order by \u0027desc\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_total_count_in_response_sorted_by_and_order_by(Integer,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate total number of repositories for given user with sort by fork and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027\u003cuser\u003e\u0027 with \u0027\u003csort\u003e\u0027 and \u0027\u003corder\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "I should see the total count \u003ctotalCount\u003e in response sorted by \u0027\u003csort\u003e\u0027 and order by \u0027\u003corder\u003e\u0027 for given users",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "sort",
        "order",
        "totalCount"
      ]
    },
    {
      "cells": [
        "user:deepak",
        "fork",
        "aesc",
        "45"
      ]
    },
    {
      "cells": [
        "user:john",
        "star",
        "aesc",
        "24"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate total number of repositories for given user with sort by fork and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027user:deepak\u0027 with \u0027fork\u0027 and \u0027aesc\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_of_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the total count 45 in response sorted by \u0027fork\u0027 and order by \u0027aesc\u0027 for given users",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_total_count_in_response_sorted_by_and_order_by_for_given_users(Integer,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate total number of repositories for given user with sort by fork and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027user:john\u0027 with \u0027star\u0027 and \u0027aesc\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_of_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the total count 24 in response sorted by \u0027star\u0027 and order by \u0027aesc\u0027 for given users",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_total_count_in_response_sorted_by_and_order_by_for_given_users(Integer,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate 1st repositories for given user with sort by fork and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027\u003cuser\u003e\u0027 with \u0027\u003csort\u003e\u0027 and \u0027\u003corder\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "I should see the repo name \u0027\u003creponame\u003e\u0027 in response sorted by \u0027\u003csort\u003e\u0027 and order by \u0027\u003corder\u003e\u0027 for given users",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "sort",
        "order",
        "reponame"
      ]
    },
    {
      "cells": [
        "user:deepak",
        "star",
        "aesc",
        "chef_cookbooks"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate 1st repositories for given user with sort by fork and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate total no of repo of \u0027user:deepak\u0027 with \u0027star\u0027 and \u0027aesc\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_total_no_of_repo_of_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the repo name \u0027chef_cookbooks\u0027 in response sorted by \u0027star\u0027 and order by \u0027aesc\u0027 for given users",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_the_repo_name_in_response_sorted_by_and_order_by_for_given_users(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate that all the fetched repositories for given organisation and language is public according to query param sorted by star and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.step({
  "name": "I perform GET operation to validate public repo of \u0027\u003corganisation\u003e\u0027s \u0027\u003clanguage\u003e\u0027 with \u0027\u003csort\u003e\u0027 and \u0027\u003corder\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "name": "I should see all the public repo and sorted by \u0027\u003csort\u003e\u0027 and order by \u0027\u003corder\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "organisation",
        "language",
        "sort",
        "order"
      ]
    },
    {
      "cells": [
        "org:github",
        "language:java",
        "star",
        "aesc"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate that all the fetched repositories for given organisation and language is public according to query param sorted by star and in ascending order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchByKeyword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation to validate public repo of \u0027org:github\u0027s \u0027language:java\u0027 with \u0027star\u0027 and \u0027aesc\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_perform_GET_operation_to_validate_public_repo_of_s_with_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all the public repo and sorted by \u0027star\u0027 and order by \u0027aesc\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "GitSearchTestStepDef.i_should_see_all_the_public_repo_and_sorted_by_and_order_by(String,String)"
});
formatter.result({
  "status": "passed"
});
});
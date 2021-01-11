Feature: To verify functionality and behaviour of GitHub search API based on series of keywords,
  as well as ordering and sorting of the returned results.

  @searchByKeyword
  Scenario Outline: validate total number of repositories for given programming language created before 01st January 2011
    Given I perform GET operation to validate total no of repo created before "2011-01-01" for given programming language '<language>'
    Then I should see the total count <totalCount> in response
    Examples:
      | language          |  totalCount   |
      | language:java     |   16970       |
      | language:c        |   13530       |

  @searchByKeyword
  Scenario Outline: validate total number of repositories for given organisation and programming language with sort and order
    Given I perform GET operation to validate total no of repo of '<organisation>' for '<language>' with '<sort>' and '<order>'
    Then I should see the total count <totalCount> in response sorted by '<sort>' and order by '<order>'
    Examples:
      |organisation |language     | sort       | order      | totalCount |
      |org:workday  |language:java| star       | desc       |  6         |
      |org:github   |language:java| star       | desc       |  4         |

  @searchByKeyword
  Scenario Outline: validate total number of repositories for given user with sort by fork and in ascending order
    Given I perform GET operation to validate total no of repo of '<user>' with '<sort>' and '<order>'
    Then I should see the total count <totalCount> in response sorted by '<sort>' and order by '<order>' for given users
    Examples:
      |user         | sort       | order      | totalCount |
      |user:deepak  | fork       | aesc       |  45        |
      |user:john    | star       | aesc       |  24        |

  @searchByKeyword
  Scenario Outline: validate 1st repositories for given user with sort by fork and in ascending order
    Given I perform GET operation to validate total no of repo of '<user>' with '<sort>' and '<order>'
    Then I should see the repo name '<reponame>' in response sorted by '<sort>' and order by '<order>' for given users
    Examples:
      |user         | sort       | order      | reponame             |
      |user:deepak  | star       | aesc       |  chef_cookbooks      |

  @searchByKeyword
  Scenario Outline: validate that all the fetched repositories for given organisation and language is public according to query param sorted by star and in ascending order
    Given I perform GET operation to validate public repo of '<organisation>'s '<language>' with '<sort>' and '<order>'
    Then I should see all the public repo and sorted by '<sort>' and order by '<order>'
    Examples:
      |organisation | language     |sort  | order      |
      |org:github   | language:java|star  | aesc       |

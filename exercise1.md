# Exercise 1

## Setting up a Continuous Integration (CI) Pipeline for a Small Team

In small teams (2-6 developers), for an application that is under active development, setting up a Continuous Integration (CI) pipeline is crucial to ensure code quality.

For this exercise, let us assume that the application is written in **Java**. In a Continuous Integration (CI) setup, some of the most common steps include testing, and building. For testing, the most common framework is **JUnit 5**. For building and dependency management, Java projects typically use **Maven** or **Gradle**, both of which also support plugins for testing and linting integration.

Besides Jenkins and GitHub Actions, there are other alternatives for setting up CI pipelines. **GitLab CI/CD** is a strong option, especially when hosting code on GitLab. 

When deciding between a self-hosted or a cloud-based environment, it depends on the team’s needs. Cloud-based CI platforms are easier to set up, scale automatically, and require little maintenance, which is convenient for small to medium-sized teams.

For this exercise, we will use **GitHub Actions** to set up a CI pipeline for a Java application. Below is an example of a GitHub Actions workflow configuration file (`.github/workflows/ci.yml`) that includes steps for linting, testing, and building the application.

```yaml
name: Java CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up JDK 11
          uses: actions/setup-java@v2
          with:
            java-version: '17'
            
        - name: Lint with Checkstyle
          run: mvn checkstyle:check
            
        - name: Test with Maven
          run: mvn test

        - name: Build with Maven
          run: mvn package
```     
          
             

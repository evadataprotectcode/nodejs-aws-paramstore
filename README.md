# AWS CloudWatch Trigger (Event Rule) to change SSM Parameter Store value

A lambda function that can change a SSM Parameter Store value that is scheduled to run at specific times using CloudWatch Event Rule

## Prerequisites
This repo uses AWS SAM for deployment. Please feel free to use tooling that suites your needs.

 - [Install AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

## Build
```
sam build
```

## Deploy
Ensure that sam has access AWS credentials (Part of the installation documentation)

```
sam deploy --guided
```

You can choose to non-interactive deployments, this way
```
sam deploy
```


## Adapting to your needs
Please take a look at *template.yaml* to configure:
 - the schedule the lambda will run on
 - The name of the SSM Parameter store key who value you want to manipulate

The *index.js* has the handler function that gets and replaces the SSM Parameter store value specified by the key
 

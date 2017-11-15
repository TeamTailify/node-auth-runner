# @tailify/auth-runner

This package is intended for situations where you need your microservices to authenticated against an API but want to share the authentication information between microservices rather than having each one log in individually (such as running an AWS Lambda function in node where authenticating against your private API for each request will effectively double the number of API calls you need to make).


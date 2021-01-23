# select dev or prod environment
export TARGET=lazgar-prod

# delete the stack
aws --profile $TARGET \
    cloudformation delete-stack \
    --stack-name lazgar

# wait for completion
aws cloudformation wait stack-delete-complete \
    --stack-name lazgar

# use current AWS credentials

# delete the stack
aws cloudformation delete-stack \
    --region eu-west-1 \
    --stack-name lazgar

# wait for completion
aws cloudformation wait stack-delete-complete \
    --region eu-west-1 \
    --stack-name lazgar

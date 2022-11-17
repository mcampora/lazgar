# use current AWS credentials

# delete the stack
aws cloudformation delete-stack \
    --stack-name lazgar

# wait for completion
aws cloudformation wait stack-delete-complete \
    --stack-name lazgar

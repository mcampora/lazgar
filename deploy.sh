# use current AWS credentials
aws cloudformation deploy \
    --capabilities CAPABILITY_NAMED_IAM \
    --stack-name lazgar \
    --template-file ./cfn-pipeline.yaml \

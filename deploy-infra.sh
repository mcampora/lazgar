# use current AWS credentials
aws cloudformation deploy \
    --capabilities CAPABILITY_NAMED_IAM \
    --stack-name lazgar \
    --region eu-west-1 \
    --template-file ./lazgar-infra.yaml \

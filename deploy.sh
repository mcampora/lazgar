export TARGET=lazgar-prod

aws --profile $TARGET \
    cloudformation deploy \
    --capabilities CAPABILITY_NAMED_IAM \
    --stack-name lazgar \
    --template-file ./cfn-pipeline.yaml \

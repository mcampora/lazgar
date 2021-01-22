# need AWS CLI
# need default settings fo the id and key (aws configure)
#
# at the moment I selected my personal 'prod' account and 'eu-west-3' (Paris)

# set the AWS profile (account) targeted
export AWS_PROFILE='lazgar-prod'

# here is the name of our bucket
export BUCKET_NAME='lazgar'

# create the s3 bucket with proper permissions and settings if it does not exist
aws cloudformation deploy \
    --region eu-west-3 \
    --capabilities CAPABILITY_IAM \
    --stack-name lazgar-website \
    --template-file ./website.yaml \
    --parameter-overrides WebsiteBucketName=$BUCKET_NAME

# upload/synchronize content
aws s3 sync \
    --region eu-west-3 \
    ../public s3://$BUCKET_NAME

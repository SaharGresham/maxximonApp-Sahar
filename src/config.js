export default {
    // s3: {
    //   REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    //   BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    // },
    apiGateway: {
        REGION: "ca-central-1",
        URL: "https://103a9gufuk.execute-api.ca-central-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "ca-central-1",
        USER_POOL_ID: "ca-central-1_Qmvtp4obL",
        //   Pool ARN arn:aws:cognito-idp:ca-central-1:559914913432:userpool/ca-central-1_Qmvtp4obL

        APP_CLIENT_ID: "6gqk8u6va5qlhqlngco763n28k"
        //   IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
    }
};
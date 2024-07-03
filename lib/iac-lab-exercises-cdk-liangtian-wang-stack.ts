import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class IacLabExercisesCdkLiangtianWangStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // add a vpc resource with properties: cidr_block and tags
    const vpc = new cdk.aws_ec2.Vpc(this, 'VPC', {
      cidr: "192.168.1.0/25",
      enableDnsSupport: true,
      enableDnsHostnames: true,
      defaultInstanceTenancy: cdk.aws_ec2.DefaultInstanceTenancy.DEFAULT,
    })

    //add tags for vpc
    cdk.Tags.of(vpc).add('Name', 'iac-lab-cdk-liangtian-wang')
    
  }
}

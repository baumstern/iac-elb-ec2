import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";


const ubuntu = aws.ec2.getAmi({
    mostRecent: true,
    filters: [
        {
            name: "name",
            values: ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"],
        },
        {
            name: "virtualization-type",
            values: ["hvm"],
        },
    ],
    owners: ["099720109477"],
});

const web = new aws.ec2.Instance("zk-ecdsa-iac-sample", {
    ami: ubuntu.then(ubuntu => ubuntu.id),
    instanceType: "t3.2xlarge",   
    tags: {
        Name: "zk-ecdsa-iac-sample",
    },
    vpcSecurityGroupIds: ["sg-0aea3cbb15e30a921"],
    subnetId: "subnet-0817be1b2160793b5",
    associatePublicIpAddress: true,
    keyName: "maci-devops",
    rootBlockDevice: {
        volumeSize: 16,
        volumeType: "gp3"
    }
});

// exported variable will be printed to stdout
export const publicIp = web.publicIp
export const instanceId = web.id
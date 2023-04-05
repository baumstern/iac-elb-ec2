## Getting Started

### Install Pulumi

See https://www.pulumi.com/docs/get-started/aws/begin/#install-pulumi

### Configure Pulumi to access your AWS account

See https://www.pulumi.com/docs/get-started/aws/begin/#configure-pulumi-to-access-your-aws-account

### Deploy the Stack

```
pulumi up
```

### Tear down the Stack

```
pulumi down
```



## Project Strucrue

* Pulumi.yaml defines the project.
* Pulumi.dev.yaml contains configuration values for the stack you just initialized.
* index.ts is the Pulumi program that defines your stack resources.
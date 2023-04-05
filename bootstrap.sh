#!/bin/bash

# Install Node 19 and pnpm
curl https://get.volta.sh | bash

$HOME/.volta/bin/volta install node@19

node install -g pnpm


# Clone e2e-zk-ecdsa
git clone https://github.com/privacy-scaling-explorations/e2e-zk-ecdsa
cd e2e-zk-ecdsa

pnpm i

cd apis/proving
nohup npm run server >> log.txt 2>&1
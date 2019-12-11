#!/usr/bin/env bash

. /home/deploy/.nvm/nvm.sh
nvm use 8
npm install
npm run build
pm2 restart zhongyunhk
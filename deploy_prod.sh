#!/usr/bin/env bash

. /home/deploy/.nvm/nvm.sh
nvm use 8
npm install
npm run build_prod
pm2 restart testbird_official_website
#!/usr/bin/bash

dcdoc io-read \
        --inputs index.js \
      dcdoc-parse \
        --section-matchers ~/Documents/dcdoc-zone/parse/lib/matcher/section/short/*.js \
        --block ~/Documents/dcdoc-zone/model/lib/block.js \
        --block-matchers ~/Documents/dcdoc-zone/parse/lib/matcher/block/short.js  \
      array-to-tree

#!/usr/bin/bash

dcdoc io-read \
        --inputs index.js \
      dcdoc-parse \
        --section-matchers ~/Documents/dcdoc-zone/parse/lib/matcher/section/short/*.js \
        --block-matchers ~/Documents/dcdoc-zone/parse/lib/matcher/block/short.js  \
      array-to-tree \
      render-tree \
        --registry ~/Documents/dcdoc-zone/testbed/tree/byte-size/registry/markdown.js \
        --type-template block BlockTree \
        --var baseLevel 1 \
      insert-into-template \
        --template docs/readme.template \
      body-to-stdout \
      > readme.md

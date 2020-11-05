#!/bin/bash

if [[ ! -a sql_reference ]]
then 
  mkdir sql_reference
fi

find ./sql_reference -not -name '.' -not -name '..' -not -name 'sql_reference' -delete
cp -r ./.freeCodeCamp/sql_reference/. ./sql_reference
mv ./sql_reference/dotgit ./sql_reference/.git

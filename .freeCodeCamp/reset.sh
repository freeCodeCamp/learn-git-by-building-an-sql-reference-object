#!/bin/bash

if [[ ! -a sql_reference ]]
then 
  mkdir sql_reference
fi

find ./sql_reference -not -name '.' -not -name '..' -delete
cp -r ./.freeCodeCamp/sql_reference ./
mv ./sql_reference/dotgit ./sql_reference/.git

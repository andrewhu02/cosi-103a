#!/bin/bash

echo "current_commit_id=$(git rev-parse --short $GITHUB_SHA)" >> $GITHUB_OUTPUT

# get the tags of the current deployment - this is in json format
tags = $(az containerapp show -g cosi-103a-test -n recipes --query tags)

# save tags to output
echo "blue_commit_id=$($tags | jq '.blueCommitId')" >> $GITHUB_OUTPUT
echo "green_commit_id=$($tags | jq '.greenCommitId')" >> $GITHUB_OUTPUT
echo "production_label=$($tags | jq '.productionLabel')" >> $GITHUB_OUTPUT
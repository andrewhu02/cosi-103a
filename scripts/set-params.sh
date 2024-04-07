#!/bin/bash

echo "current_commit_id=$(git rev-parse --short $GITHUB_SHA)" >> $GITHUB_OUTPUT

# get the tags of the current deployment - this is in json format
tags=$(az containerapp show -g cosi-103a-test -n recipes --query tags)

# save tags to output
blue_commit_id=$(echo $tags | jq -r '.blueCommitId')
green_commit_id=$(echo $tags | jq -r '.greenCommitId')
echo "blue_commit_id=$blue_commit_id" >> $GITHUB_OUTPUT
echo "green_commit_id=$green_commit_id" >> $GITHUB_OUTPUT

production_label=$(echo $tags | jq -r '.productionLabel')
echo "production_label=$production_label" >> $GITHUB_OUTPUT

if [ $production_label = 'blue' ]; then
    echo "deactivate=$green_commit_id" >> $GITHUB_OUTPUT
    echo "label=green" >> $GITHUB_OUTPUT
    echo "new_blue_id=$blue_commit_id" >> $GITHUB_OUTPUT
    echo "new_green_id=$current_commit_id" >> $GITHUB_OUTPUT
else
    echo "deactivate=$blue_commit_id" >> $GITHUB_OUTPUT
    echo "label=blue" >> $GITHUB_OUTPUT
    echo "new_blue_id=$current_commit_id" >> $GITHUB_OUTPUT
    echo "new_green_id=$green_commit_id" >> $GITHUB_OUTPUT
fi

resource=$(az resource show --resource-group cosi-103a-test --name recipes  --resource-type "Microsoft.App/containerApps" --query "id" --output tsv)
echo "resource=$resource" >> $GITHUB_OUTPUT
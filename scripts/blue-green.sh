#!/bin/bash

# deploy new revision to container
# eventually this will somehow alternate between green and blue
az containerapp update --name recipes \
  --resource-group cosi-103a-test \
  --image cosi103test.azurecr.io/github-action/container-app:8440849078.1 \
  --revision-suffix $GREEN_COMMIT_ID  \
  --set-env-vars REVISION_COMMIT_ID=$GREEN_COMMIT_ID

# label that new revision with the green label
# this will not work if a revision already has the 'green' label
# since labels must be unique
az containerapp revision label add \
    --name recipes \
    --resource-group cosi-103a-test \
    --label green \
    --revision recipes--$GREEN_COMMIT_ID

# runs tests on that revision

# if tests pass:
  # re-route traffic to green
  # set up labels to swap correctly
# if tests fail
  # fail deploy action
  # shouldn't need to do anything else here
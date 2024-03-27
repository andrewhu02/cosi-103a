#!/bin/bash

# deploy new revision to container
az containerapp update --name recipes \
  --resource-group cosi-103a-test \
  --image cosi103test.azurecr.io/github-action/container-app:8440849078.1 \
  --revision-suffix test-workflow  \
  --set-env-vars REVISION_COMMIT_ID=test-workflow

# label that new revision with the green label
az containerapp revision label add \
    --name recipes \
    --resource-group cosi-103a-test \
    --label green \
    --revision recipes--test-workflow
#!/bin/bash

# # deploy new revision to container app
# az containerapp update --name recipes \
#   --resource-group cosi-103a-test \
#   --image cosi103test.azurecr.io/recipes-image:$CURRENT_COMMIT_ID \
#   --revision-suffix $CURRENT_COMMIT_ID  \
#   --set-env-vars REVISION_COMMIT_ID=$CURRENT_COMMIT_ID

# label that new revision with the green label
# this will not work if a revision already has the 'green' label
# since labels must be unique
az containerapp revision label add --name recipes --resource-group cosi-103a-test --label green  --revision recipes--$CURRENT_COMMIT_ID

# runs tests on that revision

# if tests pass:
# set 100% of traffic to green revision
az containerapp ingress traffic set --name recipes --resource-group cosi-103a-test --label-weight blue=0 green=100
  
# if tests fail
  # fail deploy action
  # shouldn't need to do anything else here
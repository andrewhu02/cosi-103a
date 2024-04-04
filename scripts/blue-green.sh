#!/bin/bash

# build image for this commit
docker buildx build -t recipes-image recipes/

# upload image to registry
docker tag recipes-image cosi103test.azurecr.io/recipes-image:$GREEN_COMMIT_ID
docker image push cosi103test.azurecr.io/recipes-image

# deploy new revision to container
# eventually this will somehow alternate between green and blue
az containerapp update --name recipes \
  --resource-group cosi-103a-test \
  --image cosi103test.azurecr.io/recipes-image:$GREEN_COMMIT_ID \
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
# set 100% of traffic to green revision
az containerapp ingress traffic set --name recipes --resource-group cosi-103a-test --label-weight blue=0 green=100
  
# if tests fail
  # fail deploy action
  # shouldn't need to do anything else here
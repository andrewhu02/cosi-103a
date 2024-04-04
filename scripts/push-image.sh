#!/bin/bash

# build image for this commit
docker buildx build -t recipes-image recipes/

# upload image to registry
az acr login --name cosi103test
docker tag recipes-image cosi103test.azurecr.io/recipes-image:$CURRENT_COMMIT_ID
docker image push cosi103test.azurecr.io/recipes-image:$CURRENT_COMMIT_ID
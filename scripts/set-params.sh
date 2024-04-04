#!/bin/bash

echo "current_commit_id=$(git rev-parse --short $GITHUB_SHA)" >> $GITHUB_OUTPUT
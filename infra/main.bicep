targetScope = 'resourceGroup'
param location string = resourceGroup().location

param appName string

param containerAppEnvironmentName string

param currentCommitId string

resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2023-11-02-preview' existing = {
  name: containerAppEnvironmentName
}

resource deploymentApp 'Microsoft.App/containerApps@2023-11-02-preview' = {
  name: appName
  location: location
  properties: {
    environmentId: containerAppsEnvironment.id
    configuration: {
      maxInactiveRevisions: 10
      activeRevisionsMode: 'Multiple'
      ingress: {
        external: true
        targetPort: 3002
        traffic: [
          {
            revisionName: '${appName}--${currentCommitId}'
            weight: 0
          }
          {
            revisionName: 'recipes--cgbzlxc'
            weight: 100
          }
        ]
      }
    }
    template: {
      revisionSuffix: currentCommitId
      containers: [
        {
          image: 'cosi103test.azurecr.io/github-action/container-app:8440849078.1'
          name: appName
          resources: {
            cpu: json('0.5')
            memory: '1.0Gi'
          }
          env: [
            {
              name: 'REVISION_COMMIT_ID'
              value: currentCommitId
            }
          ]
        }
      ]
    }
  }
}

output fqdn string = deploymentApp.properties.configuration.ingress.fqdn
output latestRevisionName string = deploymentApp.properties.latestRevisionName

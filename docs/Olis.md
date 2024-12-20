# Olis Overview

Olis is a graph management application. Its job is to help administrators of [Knowledge Graphs](https://en.wikipedia.org/wiki/Knowledge_graph) manage them as a series of sub-graphs. Olis uses the [Olis Ontology](https://olis.dev/ont/) as its data model.

Data in a Knowledge Graph can be segmented into sub-graphs in a manner similar to the way in which _schemas_ in some relational database systems can segment data. Multiple graphs can then be used together to form the total Knowledge Graph but managed separately, if required.

Olis provides a model and an API for managing Knowledge Graph sub-graphs. The Olis data model defines:

- Real Graphs
    - Knowledge Graph sub-graphs that contain data
- Virtual Graphs
    - Knowledge Graph sub-graphs that are aliases for other Real and Virtual graphs and contain none of their own data

Using the Olis API, you can make Virtual Graphs for complex datasets that consist of potentially very many Real Graphs and other Virtual Graphs that segment the dataset's data by time or some other dimension. Olis provides a place to view the statistics on record sizes in Graphs, which may also represent different data loads.

## Communication

Olis UI:
- Makes requests to the Olis APIs via HTTPS and returns HTTPS responses.
- These requests return server rendered pages or data payloads.

Olis API service:
- Olis APIs make requests to a triple store via HTTP(S) and returns HTTP(S) responses.
- Olis APIs may query via the read-only SPARQL endpoint or send admin requests the the Fuseki admin API endpoint
- Olis APIs communicates with Redis over TCP/IP (see [https://redis.io/docs/latest/develop/reference/protocol-spec/#network-layer](https://redis.io/docs/latest/develop/reference/protocol-spec/#network-layer))

SSL encryption and PORT number for requests to the triple store are determined by the `SPARQL_ENDPOINT` environment variable which specifies a URL endpoint for the triple store. Similar to how the Prez API service is configured. However, for Olis there are two SPARQL endpoints defined in the configuration, one is the readonly internal endpoint, the other is the internal update endpoint. In addition the Redis internal connection configuration is specified in a similar way.

```
  OLIS__SPARQL_ENDPOINT=https://fuseki/olis
  OLIS__SPARQL_UPDATE_ENDPOINT=https://fuseki/olis
  OLIS__SPARQL_USERNAME=username
  OLIS__SPARQL_PASSWORD=password
  OLIS__REDIS_HOST=my.redis.cache.windows.net
  OLIS__REDIS_PORT=6380
  OLIS__REDIS_PASSWORD=myRedisAccessKey
  OLIS__REDIS_SSL=1
```

SSL encryption and PORT number for communication with the client are dependent on how Prez is deployed. For example, if deploying with Azure App Service, All communication from the client to Prez will be via HTTPS using the default HTTPS port of 443.

## Authentication

Olis has built in user administration management, however, integration with other middle-ware to authenticate and authorise client requests is possible.

### Authentication to the triple store

Olis supports basic authentication with [[Knowledge Base/Products/Supported 3rd Party/Fuseki|Fuseki]] by setting the `SPARQL_USERNAME` and `SPARQL_PASSWORD` environment variables.

If Fuseki is also deployed to Azure App Service then a combination of EasyAuth and System Identities can be used to provide Azure AD integrated authentication. (Further work to outline accepted auth solution).

## Configuration

When deploying Olis to Azure App Service, environment variables can be set by creating [Application Settings](https://learn.microsoft.com/en-us/azure/app-service/reference-app-settings?tabs=kudu%2Cdotnet).

### Components

**Olis UI** - The Olis user interface provides a platform for administrators to manage the virtual to real graph mappings or to run a SPARQL query through a SPARQL UI interface. The Olis UI communicates with the Olis admin APIs to perform the graph admin functions.

**Olis Services (or admin APIs for the Olis UI)** - Olis APIs provide functionality to deliver the Olis web assets along with the functional admin API calls required to administer the graphs.

**Redis cache** - Olis uses Redis to cache application data. Azure cache for Redis is a compatible service that can be used for this purpose.

## Request flow

[![](https://camo.githubusercontent.com/3c39f127cd7c195243cea2d646a115968b1de8e7b926ea7dbbbc05818cbb9309/68747470733a2f2f6c756369642e6170702f7075626c69635365676d656e74732f766965772f64343636353637372d343838392d346538372d393531332d6239326564303964623264372f696d6167652e706e6729)](https://camo.githubusercontent.com/3c39f127cd7c195243cea2d646a115968b1de8e7b926ea7dbbbc05818cbb9309/68747470733a2f2f6c756369642e6170702f7075626c69635365676d656e74732f766965772f64343636353637372d343838392d346538372d393531332d6239326564303964623264372f696d6167652e706e6729)

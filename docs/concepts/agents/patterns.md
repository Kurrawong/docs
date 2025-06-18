# Agent Patterns

> ***Scope***
>
> This content is in intended to convey Best Practice patterns in agent authority content

>
> ***Audience***
>
> Technical agent authority creators.
> 
> All the patterns documented here assume the use of [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) methods for data management and access. 
>
> ***Outcome***
>
> Technical agent authority creators should learn both what KurrawongAI considers to be Best Practice for certain aspects of agent authorities and also how KurrawongAI and other agent creation and publication tools support the pattern.
>
> ---

## Constructing Agent Identifiers

_What kind of Persistent Identifiers should we mint for agents?_

### Context

Agents, be they individual persons or organizations, cannot be reliably identified via their names and should be uniquely identified.

### Solution

Uniquely and persistently identify agents, much the same as we would identify concepts in a vocabulary. 

We can base a Persistent Identifier (PID) for an agent on one of two approaches:

1. with a pre-structured pattern specified in a catalogue system or metadata profile
2. by reusing an existing known identifier for that agent 


#### Pre-structured identifier patterns
Agent PIDs may follow a structure mandated by some cataloguing system or metadata profile. Below are examples from the Indigenous Data Network and the Linked Data PID Register.

##### Indigenous Data Network
The IDN Catalogue Profile specifies an IRI structure for a PID:  

* A stem: `https://data.idnau.org/pid/`
* A subdirectory indicating a sub-class - for an Agent, this will usually be an organisation or a person, indicated by /org/ and /person/ respecitvely:
 - `https://data.idnau.org/pid/org/` `
 - `https://data.idnau.org/pid/person/`
* A suffix. This could be completely opaque (such as UUID scheme) or based on an existing identifier (such as a business identifier), e.g. 
 - `https://data.idnau.org/pid/org/18d04115-4633-4aed-b164-ac3c209b4307` [UUID suffix]
 - `https://data.idnau.org/pid/person/34d5d6aa-a5b7-4e3a-91f8-117ffeb474d1` 
 - 

##### Linked Data PID Register
The Australian Government Linked Data Working Group (AGLDWG) maintains a PID Register for various entities, including Organisations. An Organisation PID is made up of:

* A stem: `https://linked.data.gov.au/` 
* A subdirectory indicating a class, e.g. `https://linked.data.gov.au/org/`
* An identifier, e.g. `https://linked.data.gov.au/org/abs` [Australian Bureau of Statistics]


### Reusing identifiers as a PID

If an agent has an existing known identifier, such as an ORCID for persons or an ROR for Organizations, you can reuse that in its entirety as a PID.

Some widely used agentic systems that mint identifiers include:

- Open Researcher and Contributor ID (https://orcid.org)
- Research Organization Registry (https://ror.org)
- Australian Business Number (https://abnregistration.com.au)

# ORCID example

```turtle
PREFIX aarr: <https://data.idnau.org/pid/vocab/aarr/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX id: <http://id.loc.gov/vocabulary/identifiers/>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://orcid.org/0000-0001-5640-3202>
    a sdo:Person ;
    sdo:honorificTitle "Mr" ;
    dcat:qualifiedRelation [
    dcat:hadRole aarr:memberOf ;
    sdo:agent <https://data.idnau.org/pid/org/dewr> 
    ] ;
    sdo:name "Les Kneebone" ;
    sdo:identifier "68334089512"^^id:ausbn ;
    sdo:identifier "https://orcid.org/0000-0001-5640-3202"^^id:orcid ;
.
```
In the ORCID example, an ORCID has been used as the IRI. Additionally, the ORCID has been optionally been added as sdo:identifier, as has an Australian Business Number. 

* ROR example

```turtle
PREFIX id: <http://id.loc.gov/vocabulary/identifiers/>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://ror.org/03y7q9t39>
    a sdo:Organization ;
    sdo:url "https://www.canterbury.ac.nz"^^xsd:anyURI ;
    sdo:name "University of Canterbury" ;
    sdo:identifier 
       "https://ror.org/03y7q9t39"^^id:ror ,
       "https://isni.org/isni/0000000513611983"^^id:isni ;
.
```

In the ROR example, and ROR ID has been used as the IRI. Additionally, an ID from both https://ror.org and https://isni.oclc.org is also expressed as sdo:identifier.

### PID Suffix for a Pre-structured identifier

If using a Pre-structured identifier patter, there may be options for minting a suffix. You might use:

- a name or acronym from the agent
- an identifier associated with the agent
- an opaque string such as from the UUID scheme

!!! note
    Agent names or acronyms may not be unique in the context of your database!  
    Exercise caution when using an agent name for a PID suffix.

**acronym as suffix approach**
```turtle
<https://data.idnau.org/pid/org/abs-coatsis>
```
**identifier as suffix**
```turtle
<https://data.idnau.org/pid/org/78-094-372-050>
    a sdo:Organization ;
    sdo:identifier "78 094 372 050"^^id:ausbn ;
    sdo:name "Productivity Commission" ;
.
```
**UUID as suffix**
```turtle
<https://data.idnau.org/pid/person/34d5d6aa-a5b7-4e3a-91f8-117ffeb474d1>
    a sdo:Person ;
    sdo:honorificTitle "PhD Scholar" ;
    dcat:qualifiedRelation [
    dcat:hadRole aarr:memberOf ;
    sdo:agent <https://data.idnau.org/pid/org/fses> 
    ] ;
    sdo:url "https://www.researchgate.net/profile/Sandra-Potter"^^xsd:anyURI ;
    sdo:name "Sandra Potter" ;
.
```



## Agent to agent relationships

_how do we describe the relationship between agents?_

**dcat:hadRole approach**

A relationship between agents may be expressed using a `dcat:qualifiedRelationship` pattern.

!!! note

    The DCAT profile includes patterns for qualified relationships dasets and agents and datasets and other resources, but does not explicitiy state a pattern for qualified relationships between agents and agents. The pattern in this section follows the DCAT approach with some customaisation.

To express a relationship between agents, the dcat:qualifiedRelationship property is refined with `dcat:hadRole` and a concept from the [Agent to Agent Relationship Roles](https://data.idnau.org/pid/vocab/aarr) vocabulary. The object of the statement is expressed as an sdo:Agent.

* Example: Organisation to Organisation relations

```turtle
PREFIX aarr: <https://data.idnau.org/pid/vocab/aarr/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://data.idnau.org/pid/org/abs-coatsis>
    a sdo:Organization ;
    dcterms:type <https://data.idnau.org/pid/vocab/org-indigeneity/run-by-indigenous-persons> ;
    sdo:description "The Centre of Aboriginal and Torres Strait Islander Statistics (CoATSIS) has a leadership and coordination role for national statistical activity about Aboriginal and Torres Strait Islander peoples. They engage with communities across a range of statistical activities and outputs such as the Aboriginal and Torres Strait Islander health and social surveys, the five-yearly Census, administrative data, and data integration projects."@en ;
    dcat:qualifiedRelationship [
            dcat:hadRole aarr:partOf ;
            sdo:agent <https://linked.data.gov.au/org/abs>
        ] ;
    sdo:name "Australian Bureau of Statistics Centre of Aboriginal and Torres Strait Islander Statistics" ;
    sdo:url "https://www.abs.gov.au/about/aboriginal-and-torres-strait-islander-peoples/aboriginal-and-torres-strait-islander-engagement"^^xsd:anyURI ;
.
```

* Example: Person to Organisation relations

```turtle
PREFIX aarr: <https://data.idnau.org/pid/vocab/aarr/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://orcid.org/0000-0002-8742-7730>
    a sdo:Person ;
    dcterms:type
        sdo:Person ,
        <https://data.idnau.org/pid/vocab/org-indigeneity/non-indigenous> ;
    dcat:qualifiedRelation [
            dcat:hadRole aarr:affiliateOf ;
            sdo:agent <https://kurrawong.ai>
        ] ;
    sdo:email "nick@kurrawong.ai"^^xsd:anyURI ;
    sdo:name "Nicholas J. Car"@en ;
.

```

* Example: Person to Person relations

```turtle
PREFIX aarr: <https://data.idnau.org/pid/vocab/aarr/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX sdo: <https://schema.org/>

<https://orcid.org/0000-0001-5640-3202>
    a sdo:Person ;
    dcat:qualifiedRelation [
    dcat:hadRole aarr:proxyOf ;
    sdo:agent <https://orcid.org/0000-0002-8742-7730>
    ] ;
    sdo:name "Les Kneebone" ;
.

## Titles as Agents

Some agents are not easily classified as either Person or Organization. For example a dataset or some kind of resource may be related to a title, such as a policy in a university that is managed by an 'associate provost'. Who is the associate provost? We can find out! But that person who occupies the position can (and will) change.

We recommend...

## Identifiers

To help identify and disambiguate an agent, indicate an external identifier using schema:identifier and a code from the Identifiers vocabulary.

PREFIX id: <http://id.loc.gov/vocabulary/identifiers/>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

# Australian Business Number example:

<https://data.idnau.org/pid/org/28-221-722-606>
    a sdo:Organization ;
    sdo:identifier "28221722606"^^id:ausbn ;
    sdo:name "Yothu Yindi" ;
.

# Australian Company Number (ACN) example

<https://ror.org/038sjwq14>
    a sdo:Organization ;
    sdo:identifier "633798857"^^id:auscn ;
    sdo:name "Australian Research Data Commons Limited" ;
.

# ORCID example

<https://data.idnau.org/pid/person/6b196829-bdf7-44d0-9372-e81b787e8030>
    a sdo:Person ;
    sdo:name "Barbara Glowczewski" ;
    sdo:identifier "https://orcid.org/0000-0002-9629-2516"^^id:orcid ;
.

# Research Organization Registry (ROR) example:

<https://linked.data.gov.au/org/und>
    a sdo:Organization ;
    sdo:name "University of Notre Dame" ;
    sdo:identifier "https://ror.org/02stey378"^^id:ror ;
.




### Discussion

### Related

#### Systems

The following is a list of ...
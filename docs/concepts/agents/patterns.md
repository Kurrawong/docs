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

## Identifiers

_What kind of Persistent Identifiers should we mint for agents?_

### Context

Agents, be they individual persons or organizations, cannot be reliably identified via their names and should be uniquely identified.

### Solution

Uniquely and persistently identify agents, much the same as we would identify concepts in a vocabulary. 

We can base a Persistent Identifier (PID) for an agent on one of two approaches:

1. with a pre-structured pattern specified in a catalogue system or metadata profile
2. by reusing an existing known identifier for that agent 

#### Pre-structured identifier patterns

e.g. 
##### Indigenous Data Network
The IDN Catalogue Profile specifies an IRI structure for a PID:  

* A stem: `https://data.idnau.org/pid/`
* A subdirectory indicating a sub-class - for an Agent, this will usually be an Organization or a Person, e.g. : `https://data.idnau.org/pid/organization/`; `https://data.idnau.org/pid/person/`
* An identifier. This could be completely opaque (such as UUID scheme) or based on an existing identifier (such as a business identifier), e.g. `https://data.idnau.org/pid/organization/18d04115-4633-4aed-b164-ac3c209b4307` [UUID]

#### Linked Data PID Register
The Australian Government Linked Data Working Group (AGLDWG) maintains a PID Register for various entities, including Organisations. An Organisation PID is made up of:
* A stem: `https://linked.data.gov.au/` 
* A subdirectory indicating a class, e.g. `https://linked.data.gov.au/org/`
* An identifier, e.g. `https://linked.data.gov.au/org/abs` [Australian Bureau of Statistics]

### Reusing identifiers as a PID

If an agent has an existing known identifier, such as an ORCID for persons or an ROR for Organizations, you can reuse that as a PID.

Some widely used agentic systems that mint identifiers include:

- Open Researcher and Contributor ID (https://orcid.org)
- Research Organization Registry (https://ror.org)
- Australian Business Number (https://abnregistration.com.au)

e.g.

```turtle
PREFIX id: <http://id.loc.gov/vocabulary/identifiers/>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://orcid.org/0000-0001-5640-3202>
    a sdo:Person ;
    sdo:honorificTitle "Mr" ;
    sdo:memberOf <https://data.idnau.org/pid/org/dewr> ;
    sdo:url "https://www.researchgate.net/profile/Les-Kneebone"^^xsd:anyURI ;
    sdo:name "Les Kneebone" ;
    sdo:identifier "https://orcid.org/0000-0001-5640-3202"^^id:orcid ;
.
```
In this example an ORCID has been used as the IRI. Additionally, the ORCID has been optionally been added as sdo:identifier.

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

In this example, and ROR ID has been used as the IRI. Additionally, an ID from both https://ror.org and https://isni.oclc.org is also expressed as sdo:identifier.

### PID Suffix for a Pre-structured identifier

If using a Pre-structured identifier patter, there are options for minting a suffix. You might use:

- a name or acronym from the agent
- an identifier associated with the agent
- an opaque string such as from the UUID scheme



**acronym as suffix approach**
```turtle
<https://data.idnau.org/pid/agent/abs-coatsis>
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
    sdo:memberOf <https://data.idnau.org/pid/org/fses> ;
    sdo:url "https://www.researchgate.net/profile/Sandra-Potter"^^xsd:anyURI ;
    sdo:name "Sandra Potter" ;
.
```



## Agent to agent relationships

_how do we describe the relationship between agents?_

**dcat:hadRole approach**

A relationship between agents may be expressed using a `dcat:relationship` and the type of relationship expressed using `dcat:role` and the [Agent to Agent Relationship Roles](https://data.idnau.org/pid/vocab/aarr) vocabulary.

* Example: Organization to Organization relationship role.

```turtle
PREFIX aarr: <https://data.idnau.org/pid/vocab/aarr/>
PREFIX cs: <https://data.idnau.org/pid/vocab/aarr>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://data.idnau.org/pid/agent/abs-coatsis>
    a sdo:Organization ;
    dcterms:type <https://data.idnau.org/pid/vocab/org-indigeneity/run-by-indigenous-persons> ;
    sdo:description "The Centre of Aboriginal and Torres Strait Islander Statistics (CoATSIS) has a leadership and coordination role for national statistical activity about Aboriginal and Torres Strait Islander peoples. They engage with communities across a range of statistical activities and outputs such as the Aboriginal and Torres Strait Islander health and social surveys, the five-yearly Census, administrative data, and data integration projects."@en ;
    dcat:relationship [
            dcat:hadRole aarr:partOf ;
            prov:agent <https://linked.data.gov.au/org/abs>
        ] ;
    sdo:name "Australian Bureau of Statistics Centre of Aboriginal and Torres Strait Islander Statistics" ;
    sdo:url "https://www.abs.gov.au/about/aboriginal-and-torres-strait-islander-peoples/aboriginal-and-torres-strait-islander-engagement"^^xsd:anyURI ;
.
```

* Example: Person to Organisation relations.

```turtle
PREFIX aarr: <https://data.idnau.org/pid/vocab/aarr/>
PREFIX cs: <https://data.idnau.org/pid/vocab/aarr>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX sdo: <https://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://orcid.org/0000-0002-8742-7730>
    a sdo:Person ;
    dcterms:type
        sdo:Person ,
        <https://data.idnau.org/pid/vocab/org-indigeneity/non-indigenous> ;
    dcat:relation [
            dcat:hadRole aarr:affiliateOf ;
            prov:agent <https://kurrawong.ai>
        ] ;
    sdo:email "nick@kurrawong.ai"^^xsd:anyURI ;
    sdo:name "Nicholas J. Car"@en ;


**sdo:parentOrganization approach**
```turtle
<https://data.idnau.org/pid/org/caepr>
    a sdo:Organization ;
    sdo:alternateName "CAEPR" ;
    sdo:name "ANU Centre for Aboriginal Economic Policy Research" ;
    sdo:parentOrganization <https://linked.data.gov.au/org/cass> ;
    sdo:url "https://caepr.cass.anu.edu.au"^^xsd:anyURI ;
```

### Discussion

### Related

#### Systems

The following is a list of ...
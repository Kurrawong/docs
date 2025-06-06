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

_What kind of IRIs should we mint for agents?_

### Context

Agents, be they individual persons or organizations, cannot be reliably identified via their names and should be uniquely identified.

### Solution

Yes we can base agent identifiers on two approaches:

1. with a pre-formatted pattern minted by a catalogue system, specified in some catalogue profile
2. by reusing an existing known identifier for that agent 

#### Pre-formatted identifier patterns

e.g. 
- Catalogue specific pattens, e.g. https://data.idnau.org/pid/organization/18d04115-4633-4aed-b164-ac3c209b4307
- 
- 
##### IRI structure
 - Domain, subdomain etc
 - class of agent, e.g. "/person/", "/organization/"
 - ID 

!!! note [something about suffix scheme - is a 'name' appropriate? a name does not present the same language problem as a prefLabel does for a concept ID. But name are nonetheless not unique]

**name as suffix approach**
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

#### Reusing identifiers

If an agent has an existing known identifier, you can reuse that in whole or in part for your agent record.

Some widely used agentic systems that mint identifiers include:

- ORCID
- Research Organization Registry (ROR)

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



## Agent to agent relationships

_how do we describe the relationship between agents?_

**dcat:hadRole approach**

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

**sdo:parentOrganization approach**
```turtle
<https://data.idnau.org/pid/org/caepr>
    a sdo:Organization ;
    sdo:alternateName "CAEPR" ;
    sdo:name "ANU Centre for Aboriginal Economic Policy Research" ;
    sdo:parentOrganization <https://linked.data.gov.au/org/cass> ;
    sdo:url "https://caepr.cass.anu.edu.au"^^xsd:anyURI ;
```


!!! note

### Discussion

### Related

#### Systems

The following is a list of ...
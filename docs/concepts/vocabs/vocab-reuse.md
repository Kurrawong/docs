
# Vocabulary Reuse



>
>***Scope***
>
>This content is in intended to provide guidance on the effective reuse of vocabularies. It will explain the benefits of reuse; how to locate suitable existing vocabularies; how do to make attribution and manage provenance in reused vocabularies and vocabulary segments. 

>
>***Audience***
>
>_This module is primarily targeted to managers and users (vocab owners and contributors) of established vocabularies. It is assumed that learners have some experience with using document management or version control systems, and general familiarity with data management in practice._
>
>***Outcome***
>
>_Learners should be able to adopt vocabularies in part or in whole into their local contexts. Learners will understand implications for managing externally sourced vocabularies as part of local operations_
>
>----------------

💡 _Identifies troubleshooting tips, common errors and potential issues._

> 📝 _Notes that summarise content at the end of a module._


## An Introduction to vocabulary reuse

Whatever domain we work in, there's a fair chance that useful vocabularies have already been developed by third parties. And as for any data management operation, it's a good idea to seek opportunities to reuse existing vocabularies. In this module we'll cover:
- Weighing up the effort: reuse vs build from scratch.
- Finding existing vocabularies that meet your scenario
- Evaluating the suitability, and reuse-ability of existing vocabularies
- Matching vs importing external concepts
- Adopting parts vs whole vocabularies
- Attribution and provenance: representing and preserving primary sources.

## Weighing it up

Is it worth reusing existing vocabularies in part or whole? There are a various patterns that can be followed:

- Referencing vocabularies: match home-grown concepts with concepts in external vocabularies . 
- Importing concepts: some or perhaps most of your vocabulary comprises concepts sources from existing vocabularies, faithfully retaining and presenting definitions and other metadata from the source;
- Verbatim: access and reuse a vocabulary as is, with only exceptional customisation.

Decision workflow





### Build from scratch 
Why not develop a vocabulary from scratch, with sources of warrant that you know are relevant to your community and use case?

Even if you build from scratch, you might consider developing a vocabulary that is itself reuse-able in your industry, sector or in other regions. The more use your vocabulary gets, the more interopoerabilty you have with other systems and catalogues. If you want your vocabulary reused, ensure:
- clear rights and licensing are declared, within the vocabulary concept scheme and in surrounding web context
- governance arrangements for the vocabulary are stated somewhere - build trust by declaring the update history and cycle, and committments to persisting concept IRI
- distributions: ensure your vocabulary can be accessed in standard formats and over stand APIs (see *Vocabulary Systems* for more about this)





## Finding vocabularies

There may already be vocabularies that match the theme and scope of your metadata catalogues. They may exist in a nearby knowledge domain, industry or sector, and may originate in other global regions.
be vocabularies available for reuse listed in vocabulary registries, such as:

- [Research Vocabularies Australia](https://vocabs.ardc.edu.au): vocabularies span a wide range of research and industry domains. Vocabulary search can be filtered by format and licensing, and many may be accessed directly from the RVA site via download or API.
- [BARTOC.org](https://bartoc.org): this is an international registry of vocabularies and ontologies in many languages and with over 2,500 records. 
- [Linked Open Vocabularies](https://lov.linkeddata.es/dataset/lov/): a community-curated catalog of RDF vocabularies used in Linked Data communities. LOV provides metadata, usage statistics, and interlinking information for vocabularies.
- [ID.LOC.GOV - Linked Data Service](https://id.loc.gov): the Library of Congress vocabularies widely used, especially for describing bibliographic data.

If you are searching the web for useful vocabularies, consider broadening your keyword search to include _taxonomny_; _classification_; _thesaurus_; _ontology_. 
```mermaid
flowchart TD
    Source([Source])
    Query([Query])
    Glossary[[Glossary]]
    Taxonomy[[Taxonomy]]
    Thesaurus[[Thesaurus]]
    SubjectHeadings[[Subject Headings]]

    Source -->|Any combination of vocabulary type AND industry, discipline or sector| Query
    Query -->|Find all vocabularies used in social services.| Glossary
    Query -->|Find all taxonomies from 2006 to present that mention minerals or mining| Taxonomy
    Query -->|Find all thesauruses or thesauri in philosophy that include English and French labels| Thesaurus
    Query -->|Find all medical vocabularies used in the Asia-Pacific region.| SubjectHeadings
```

### Language

It is perhaps unnecessary to mention that a vocabulary fit for reuse needs to be comprehensible in the language of expected users. A skos:conceptScheme will typically list the language codes used for skos:concept labels, and in many cases there will be more than one - multilingual vocabularies are fairly common. If an existing vocabulary includes language labels that are not needed in a local context, they can be ignored (a local system is configured to only process labels with a given language tag). However, if parts of a vocabularyu are to be adopted (see Adoption), it might be worth considering whether managing a partially-multilingual vocabulary is an unwanted or unnecessary complication in your context.  

Even within a natural language, there may be regional differences. 

```turtle
@prefix policy: <https://linked.data.gov.au/def/policy/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

fast:

policy:7353843a-9107-49af-bcd0-a8eac00bcd54 a skos:Concept ;
	skos:prefLabel "Socioeconomic status"@en ;
	skos:exactMatch <http://id.worldcat.org/fast/1123359> ;
	
```

## Double check: can I reuse this?

Check an existing vocabulary for rights and licensing statements. Information about terms and conditions should be stated within the `skos:conceptScheme`, but might be stated outside the vocabulary data in a non-semantic resource (such as a vocabulary landing page). Some properties to check for include:
- `sdo:license` / `dcterms:license`
- `dcterms:accessRights`
- `sdo:copyrightHolder` / `isorole:rightsHolder`

**Tip:** Even if a vocabulary may be reused, some attribution may be needed in your local context. If derivations to the vocabulary are planned, they may need to be shared as a condition of reuse.

## Mapping concepts with other vocabularies



In the basic structure of a vocabulary, concepts may be related to other concepts via broader, narrower or related properties. Sometimes a concept needs to be related to a concept in a _different_ vocabulary. Concept matching across vocabularies is done in a similar way but with different properties: [Broad match](http://www.w3.org/2004/02/skos/core#broadMatch), [Narrower match](http://www.w3.org/2004/02/skos/core#narrowMatch), [Related match](http://www.w3.org/2004/02/skos/core#relatedMatch).

Broad match example:

_Limestone packstone_ `skos:broadMatch` _Packstone_
... where _Limestone packstone_ is a concept in the [GSWA rock classification scheme](https://linked.data.gov.au/def/gswa-rock-classification-scheme), and _Packstone_ is a concept in the [INSPIRE code list register](http://inspire.ec.europa.eu/codelist).

Exact match example:

Child support `skos:exactMatch` Child support
... where _Child support_ is a concept in both [Public Policy Taxonomy](https://linked.data.gov.au/def/policy/0acd51d0-a4a3-48eb-b6f4-aa086f966057) and [FAST](http://id.worldcat.org/fast/854679).





## Notes

Note fields are available for each concept. A _definition_, such as found in a glossary, is required by VocPub ([AGLDWG, n.d.](#references-and-further-reading)). A definition is not intended to be an exhaustive treatment of a concept, but rather explains the scope and usage of the concept.

A `skos:historyNote` is a useful property for vocabulary managers to track decisions that have been made about a concept (label changes, new broader relationships). It can also be used to make a statement about the origin of a concept.

💡 **Tip:** When writing notes, use plain text only and limit paragraph breaks where possible.


## Concept scheme

A Concept scheme is some metadata about the vocabulary as a whole - the vocabulary title (`skos:prefLabel`), a definition (`skos:definition`), and a unique identifier are minimum requirements. All vocabularies must have a Concept scheme, and the Concept scheme should include:

- an Identifier - create an IRI following the same pattern as the IRIs for concepts. For the suffix, instead of a concept ID, add a Concept scheme ID. This may be the name of the Concept scheme (the vocabulary), e.g.: - ``https://linked.data.gov.au/def/road-types``
  ... _where Road types_ is the name of the concept scheme.

- a [Preferred label](http://www.w3.org/2004/02/skos/core#prefLabel) - the same property that is used for a Concept. Use a Preferred label for the name or title of the vocabulary (this may also be used for the Concept scheme ID)
- a [Definition](http://www.w3.org/2004/02/skos/core#definition) - a definition of the Concept scheme. Use plain text only but paragraphs may be separated by newlines. Also used for Concepts
- a [Created](http://purl.org/dc/terms/created) date. When the Concept scheme was first created. This might be automatically created by a vocabulary editor
- a [History](http://www.w3.org/2004/02/skos/core#historyNote) note - a note on the origin or history of a vocabulary - such as how or from what it was generated.


## Exercise: add imported concepts to a collection

When a vocabulary imports 6
A `skos:collection` references a `skos:concept` using the `skos:member` property.

## Optional elements
You can add more metadata to your Concepts and Concept schemes that will improve the clarity, scope and provenance of your vocabulary. Consider the following additional elements:

### Citation

Use the [Citation](https://schema.org/citation) element to provide an optional hyperlink to or textual description of source information.

### Derived from

Use [derived](http://www.w3.org/ns/prov#wasDerivedFrom) from to reference an IRI for an external vocabulary from which the vocabulary is derived.

### Derivation mode

A Derivation mode value is mandatory if a value is given for the `prov#wasDerivedFrom` property. Derivation mode concepts are selected from the [Vocabulary Derivation Modes](https://linked.data.gov.au/def/vocdermods) vocabulary.

### Notation

All concepts must have an IRI, and the IRI identifier may be a completely opaque string based on nothing other than a randomly generated string (such as from the UUID scheme). However, concepts may optionally store a `skos:notation`, which is like a secondary identifier and is based on some source or reference data that the concept was derived from.

### Defining vocabulary IRI

A concept may be 'imported' from another vocabulary. We can assume that a concept is imported if it shares the same or very similar metadata (such as a `skos:definition`) and labels. Such concepts should indicate the [defining](http://www.w3.org/2000/01/rdf-schema#isDefinedBy) vocabulary from where they were imported. Read more about [importing](#Adoption) concepts and references. 

### Citation

For each concept, a [Citation](https://schema.org/citation), an optional reference to or textual description of some source information, may be given.

Example:

    IRI: https://data.idnau.org/pid/vocab/policy-types/policy
    prefLabel: policy
    definition: A strategic directive and high-level description of desired behaviour developed by an organisation to help govern how it functions...
    citation: https://policy.usq.edu.au/documents/14266PL

... where the Citation refers to a policy definition originating from an external source. In this example the URL of the source is given so that it can be easily looked up and, if needed, verified and validated.


## Reuse existing vocabularies

It's worth checking if there are existing vocabularies (published by a third party) that match your requirements. In this section we will discuss:
- finding and identifying vocabularies for reuse
- workflows to suit vocabulary formats
- derivation modes: the type and extent of reuse
- how to indicate provenance and attribution


### Reuse non-semantic vocabularies

Building a vocabulary from scratch, with the editing and validation [tools](#vocabulary-tools) mentioned here, ensures vocabularies are well-formed and presented. Existing vocabularies published in other contexts may not be so well-formed! Existing vocabularies, including those found via vocabulary registries, will vary in their conformance with data standards such as RDF and SKOS, before even considering quality standards like VocPub and qSKOS ([W3C, n.d](#references-and-further-reading).). Here are a couple of challenges to consider:

- Unstructured: an existing vocabulary is well presented by not machine-readable, such as in PDF or HTML. The vocabulary terms may indicate properties and relationships, but these properties themselves are not machine-readable. The vocabulary may need to be scraped and cleaned, eventually transformed into an RDF format compatible with a SKOS editing tool.
- Unidentified: a vocabulary with labels but no identifiers - new IRIs will need to be constructed in this case. 

**Tip:** When constructing IRIs for an existing vocabulary, base the IRI suffix on any existing identifiers or tokens that may be present in the vocabulary. 

## Derivation modes

Consider the extent and type of derivation, there will be different requirements and implications for using existing vocabularies

### Verbatim

While using an existing vocabulary as-is requires no editing work, there will usually be a need to attribute the creator or publisher within your local business context.

### Customisations

Minor changes may be made to vocabularies to meet local requirements. Vocabulary concepts may be added; labels may be updated (changes to spelling or swapping an `skos:altLabel` for `skos:prefLabel`). Changes will need to be acknowledged at both the concept and concept scheme level.

### Adoption
Importing a cluster of concepts from an existing vocabulary into a local vocabulary project. The [provenance](#provenance-of-existing-vocabularies) of adopted concepts must be stated.

Example:

We will import a concept from the [LOD SRTI DATEX II](https://cef.uv.es/lodroadtran18/def/transporte/dtx_srti/) ontology into the <a href="https://linked.data.gov.au/def/road-travel-direction" target="_blank" rel="noopener noreferrer">Road Travel Direction</a> vocabulary.

_LOD SRTI DATEX II_ models 'Named individuals', which are enumerated instances of various properties. For example, the property ``srti:DirectionEnum`` has member the named individual ``srti:clockwise``. We will import model this named individual as a skos:concept and import it into the Road travel direction vocabulary.

To import the concept we will need to update the prefix declarations and `skos:conceptScheme` and add a new `skos:concept` and `skos:collection`

- Open the VocPub Turtle file used in the [editing steps](#edit-a-vocabulary-with-vocedit) in a text editor.

- Add `srti` to the prefixes:

```sparql
PREFIX : <https://linked.data.gov.au/def/road-travel-direction/>
PREFIX agldwgstatus: <https://linked.data.gov.au/def/reg-statuses/>
PREFIX cs: <https://linked.data.gov.au/def/road-travel-direction>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX droles: <https://linked.data.gov.au/def/data-roles/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX reg: <http://purl.org/linked-data/registry#>
PREFIX sdo: <https://schema.org/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
# Added new prefix "srti":
PREFIX srti: <https://cef.uv.es/lodroadtran18/def/transporte/dtx_srti/>
PREFIX themes: <https://linked.data.gov.au/def/fsdf/themes/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
```

- Add the following ``skos:concept`` and properties:

```turtle
srti:clockwise
    a skos:Concept ;
    dcterms:created "XXXX-XX-XX"^^xsd:dateTime ;
    dcterms:creator <http://editor.example.com/foo> ;
    dcterms:modified "XXXX-XX-XX"^^xsd:dateTime ;
    dcterms:definition "A rotational direction that moves in the same pattern as the hands of a clock" ;
    skos:topConcept cs: ;
    skos:prefLabel "Clockwise"@en ;
```
- Add the concept to the ``skos:conceptScheme``

```turtle
  cs:
    a skos:ConceptScheme ;
    sdo:keywords themes:transport ;
    dcterms:created "2023-05-30"^^xsd:date ;
    dcterms:creator <https://linked.data.gov.au/org/qsi> ;
    dcterms:identifier "road-travel-direction"^^xsd:token ;
# Date modified will be incremented:
    dcterms:modified "XXXX-XX-XX"^^xsd:date ;
    dcterms:publisher <https://linked.data.gov.au/org/icsm> ;
    reg:status agldwgstatus:experimental ;
    owl:versionIRI :1.0 ;
    owl:versionInfo "1.0" ;
    skos:definition "This vocabulary describes the travel direction assigned to a section of a road. "@en ;
    skos:hasTopConcept
        :bi-directional ,
# Added new concept "clockwise":
        :clockwise ,
        :none ,
        :one-way ,
        :one-way-against-vector ,
        :one-way-with-vector ,
        :unknown ;
# History note extended
    skos:historyNote "This vocabulary was created by the Queensland Spatial Information services and imports some concepts from other vocabularies" ;
    skos:prefLabel "Road Travel Direction"@en ;
    prov:qualifiedAttribution
        [
            prov:hadRole droles:custodian ;
            prov:agent <https://linked.data.gov.au/org/icsm>
        ] ;
```

- Create new ``skos:collection``

```turtle
:srti-vocabulary
    a skos:Collection ;
    dcterms:source "https://cef.uv.es/lodroadtran18/def/transporte/dtx_srti/"^^xsd:anyURI ;
    rdfs:isDefinedBy cs: ;
    skos:definition "Concepts from the LOD SRTI DATEX II ontology" ;
    skos:inScheme cs: ;
    skos:member
        <http://cef.uv.es/lodroadtran18/def/transporte/dtx_srti#clockwise> ;
    skos:prefLabel "LOD SRTI DATEX II"@en ;
    prov:wasDerivedFrom <https://cef.uv.es/lodroadtran18/def/transporte/dtx_srti/> ;
.
```

- **Select** "One Way From To"
- **Open** Concept relationships
- **Open** options for Broader
- **Select** Add an IRI value
- **From** the new dropdown box, select (or search for) "One way"
- **Select** the Tick button
- **Go to** Project > Save
- **Navigate** to the `road-travel-directions.ttl` file, open it, and note that there is a new `skos:broader` relationship.


# References and Further Reading

* AGLDWG. (n.d.). VocPub profile specification. Retrieved April 17, 2025, from https://agldwg.github.io/vocpub-profile/specification.html
* W3C (n.d.). QSKOS. Retrieved March 5, 2025, from https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2009). SKOS reference. https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). Retrieved from https://www.w3.org/TR/turtle/

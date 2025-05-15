
# Advanced vocabulary editing

>
>***Scope***
>
>This content is in intended to provide guidance on the creation optional vocabulary elements that will enrich and optimise semantics, provenance and interoperability. 

>
>***Prerequisite***
>
>_It is recommended that [Introduction to Vocabularies](https://docs.kurrawong.ai/concepts/vocabs/introduction/) module is completed prior to Advanced vocabulary editing. Note that some of the exercises in this module will build on changes implemented in the introductory module_
>
>***Outcome***
>
>_On completing this module you will be able to understand and apply an expanded set of properties to vocabulary concepts and concept schemes._
>
>----------------

💡 _Identifies troubleshooting tips, common errors and potential issues._

> 📝 _Notes that summarise content at the end of a module._

## Introduction

The _Introduction to vocabularies_ module focused on basic vocabulary properties that are typically required by vocabulary systems and standards. This module will describe more optional properties that will improve the a vocabularies semantics, provenance and interoperability with other vocabularies and with data systems. 

## Mapping concepts with concepts in other vocabularies

In the basic structure of a vocabulary, concepts may be related to other concepts via broader, narrower or related properties. We can also relate to a concept to a concept in a _different_ vocabulary. Concept matching across vocabularies is done in a similar way with these properties: [Broad match](http://www.w3.org/2004/02/skos/core#broadMatch), [Narrower match](http://www.w3.org/2004/02/skos/core#narrowMatch), [Related match](http://www.w3.org/2004/02/skos/core#relatedMatch).

`skos:broadMatch` example:

_Limestone packstone_ `skos:broadMatch` _Packstone_
... where _Limestone packstone_ is a concept in the <a href="https://linked.data.gov.au/def/gswa-rock-classification-scheme" target="_blank">GSWA rock classification scheme</a>, and _Packstone_ is a concept in the <a href="http://inspire.ec.europa.eu/codelist" target="_blank" rel="noopener noreferrer">INSPIRE code list</a> register.


`skos:exactMatch` example:


Child support `skos:exactMatch` Child support
... where _Child support_ is a concept in both [Public Policy Taxonomy](https://linked.data.gov.au/def/policy/0acd51d0-a4a3-48eb-b6f4-aa086f966057) and [FAST](http://id.worldcat.org/fast/854679).

### 🚧 Exercise: match a concept with a concept in another vocabulary. 

In some cases there may be concepts in a vocabulary that we can reliably say represent the same thing in the world. To promote interoperability between vocabularies (and therefore datasets, catalogues and collections) it's a good idea to 'match' these concepts. 

💡 **Tip:** use a skos match property to reference another skos:concept or to a similar semantic category such as an owl:NamedIndividual. Do not use skos match properties to match to non-semantic resources.

In this exercise we will use `skos:exactMatch` to link "Animal dispersal" with the concept "Zoochory" from the [National Agriculture Library Thesaurus](https://lod.nal.usda.gov/nalt/en/).

1. **Go to** [VocEdit](https://vocedit.dev.kurrawong.ai) in Chrome  
2. **Project** > **Open** `pestRiskPath.ttl` from your local directory (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*)  
3. **Select** **Animal dispersal** from under **Concepts** in the left-hand panel  
4. **Add a new predicate** > **Properties** > **Add new predicate**  
5. **Add a new predicate** > `"http://www.w3.org/2004/02/skos/core#exactMatch"` > **Add**  
6. **Select** **Properties** - **exactMatch** (the field you just created)  
7. **Select** **Add an IRI** > **Add** `"https://lod.nal.usda.gov/nalt/332111"`  
8. **Project** > **Save**

💡 **Tip:** strictly speaking you should only use `skos:exactMatch` when you know that the other vocabulary does, or plans to make a match back to the concept in your vocabulary. Why not get in touch? Notify the external vocabulary managers that you're matching with their vocabulary and you might get matched back!

Now let's add a `skos:broadMatch`. Like `skos:broader`, the `skos:broadMatch` property matches a concept with another broader concept that is in a different concept scheme. We will add a skos:broadMatch from "Wildlife trafficking" to "Crime" in the Centre for Agriculture and Bioscience International (CABI) Thesaurus.

9. **Select** **Wildlife trafficking** from under **Concepts** in the left-hand panel  
10. **Add a new predicate** > **Properties** > **Add new predicate**  
11. **Add a new predicate** > `"http://www.w3.org/2004/02/skos/core#broadMatch"` > **Add**  
12. **Select** **Properties** - **broadMatch** (the field you just created)  
13. **Select** **Add an IRI** > **Add** `"https://id.cabi.org/cabt/33618"`  
14. **Project** > **Save**  


## Images
Associating a `skos:concept` with an image that illustrates meaning is a powerful and, perhaps obviously, language-neutral way of clarifying the meaning and scope of a concept. There are various different ways of modelling an image reference within a skos vocabulary. The skos model does mention image references within the context of Documentation properties (e.g. `skos:example`; `skos:scopeNote`). While using Documentation properties to refer to an image may be syntactically correct, most systems will be expecting textual data in these fields. In the exercise below we will add an image reference using a schema.org property "Image".

💡 **Tip:** There are a number of approaches to adding an image to a vocabulary concept - the exercise below illustrates one valid approach. See other approaches in our [Patterns](https://docs.kurrawong.ai/concepts/vocabs/patterns/#images) document.

### 🚧 Exercise: add an image to a concept

We will add an image reference with a URL from Wikipedia Commons to the concept "Storm water".

1. **Go to** [VocEdit](https://vocedit.dev.kurrawong.ai) in Chrome  
2. **Project** > **Open** `pestRiskPath.ttl` from your local directory (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*)  
3. **Select** **Storm water** from under **Concepts** in the left-hand panel  
4. **Add a new predicate** > **Properties** > **Add new predicate**  
5. **Add a new predicate** > `"https://schema.org/image"` > **Add**  
6. **Select** **Properties** - **Image** (the field you just created)  
7. **Select** **Add an IRI** > **Add** `"https://commons.wikimedia.org/wiki/File:2019-07-29_172052_Rain_in_Berlin.jpg"`  
8. **Project** > **Save**

## Related (associated) concepts

SKOS supports non-hierarchical relationships between concepts using `skos:related` property. This is based on the 'associative relationship' defined in standards such as ISO 25964-1, which states that related terms are "semantically or conceptually associated to such an extent that the link between the needs to be made explicit... and it is important to do this for concepts that overlap in scope" (International Organization for Standardization, 2011, p.63)


## Notes

Note fields are available for each concept. A _definition_, such as found in a glossary, is required by VocPub ([AGLDWG, n.d.](#references-and-further-reading)). A definition is not intended to be an exhaustive treatment of a concept, but rather explains the scope and usage of the concept.

A `skos:historyNote` is a useful property for vocabulary managers to track decisions that have been made about a concept (label changes, new broader relationships). It can also be used to make a statement about the origin of a concept.


💡 **Tip:** When writing notes, use plain text only and limit paragraph breaks where possible.

## Collections

There may be a need to define a group of concepts within a vocabulary that share certain characteristics. A vocabulary may contain a collection, or even many collections of concepts.

Collections are like a non-hierarchical means of gathering Concepts. So for example concepts that are members of a Collection may be from different parts of a vocabulary hierarchy (and not all broader-narrower parts of a hierarchy branch). One use case for collections is to clearly represent concepts that have been 'imported' from another concept scheme. We will look at Collections used in this way in the [Vocabulary Reuse](vocab_reuse.md#adoption) module.

A `skos:collection` connects to a `skos:concept` using the `skos:member` property.



## Identifiers

Each concept must have a unique identifier that can be looked up in an application or on the web. An IRI, or _Internationalized Resource Identifier_, is a recommended identifier type for vocabulary concepts. 

IRIs are web page URLs that:

- can be used in data to identify things without necessarily resolving to a web page
- can be managed with domain name ownership
- allow for a specified range of characters, e.g. non-English alphabets
- have validation rules similar to web address (URL) rules, e.g. no spaces

An IRI typically follows a pattern such as:

``http:// [vocabulary subdomain] . [authority / domain] . [vocabulary name] . [concept ID]``

Here's a real example from a published vocabulary:

``http://vocabulary.curriculum.edu.au/scot/15326``

... where:

    _vocabulary_ is a subdomain
    _curriculum.edu.au_ is a managed or owned domain
    _scot_ is an identifier for the whole vocabulary, and
    _15326_ is a concept ID

#### IRI patterns

What is the name of the concept above that has _15326_ as an identifier? You need to look it up on the web! The whole point of using ``http`` identifiers is so that the concepts can be looked up on the web by anyone, anywhere (and by anything - humans, browsers, bots etc.).

Note that this IRI uses an increment method for generating a concept ID - the next concept IRI added to this vocabulary would have the suffix _15327_. This incremented number doesn't mean anything - we can't tell what the concept is about just by looking at this number. Any vocabulary could use this same increment method, and therefore this ID would appear for concepts in different vocabularies. The IRI as a whole, however, is unique.

Here's another method for generating an IRI suffix:

``http://vocabulary.curriculum.edu.au/crossCurriculum/f7f47140-a85e-498b-9367-0d468082fc2b``

The suffix here is a UUID, or a _Universally Unique Identifier_. Note that if we took the UUID out of context (away from the whole IRI), we could consider it to be unique on its own terms - UUIDs are designed that way. 

**Tip:** UUID are not registered and can be generated by anyone using [online tools](https://www.uuidgenerator.net).

A third _NOT RECOMMENDED_ method for constructing a concept ID is to base the ID on whatever ``prefLabel`` has been chosen. This has the advantage of making the IRI itself readable and understandable by humans - but there are several disadvantages also and the preferred label method should be avoided if possible.

``https://data.idnau.org/pid/vocab/org-indigeneity/run-by-indigenous-persons``

... where:
"/org-indigeneity/" is the ID for the vocabulary, and
"/run-by-indigenous-persons/" is the ID for the concept

The prefLabel method is not recommended. Why? What if the prefLabel for this concept changes to "_Managed_ by indigenous persons"? The IRI stays the same (they should be persistent), and now doesn't match (exactly) the ``prefLabel``. A similar problem is encountered if the concept has multiple ``prefLabel`` in different languages - which one should be used? IRIs are more robust if their concept IDs are opaque (they don't say anything about the concept itself).

#### Version IRI

A supplementary IRI may be added that indicates the version of a concept, e.g. "1.1". A [version IRI](https://www.w3.org/2002/07/owl#versionIRI) may be used, example:

```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

IRI: https://linked.data.gov.au/def/address-alias-type
skos:prefLabel: Address Alias Type
owl:VersionIRI: https://linked.data.gov.au/def/address-alias-type/1.0
```

# References and Further Reading

* AGLDWG. (n.d.). VocPub profile specification. Retrieved April 17, 2025, from https://agldwg.github.io/vocpub-profile/specification.html
* International Organization for Standardization. (2011). Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval (ISO Standard No. 25964-1:2011). https://www.iso.org/standard/53657.html
* W3C (n.d.). QSKOS. Retrieved March 5, 2025, from https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2009). SKOS reference. https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). Retrieved from https://www.w3.org/TR/turtle/


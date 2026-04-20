
# Advanced Vocabulary Editing

>
>***Scope***
>
>_This content provides guidance on the creation of optional vocabulary elements that will enrich and optimise semantics, provenance and interoperability_. 

>
>***Prerequisite***
>
>_Some of the exercises in this module will build on changes implemented in the [Introduction to Vocabularies](https://docs.kurrawong.ai/concepts/vocabs/introduction/) module_
>
>***Outcome***
>
>_On completing this module you will be able to understand and apply an expanded set of vocabulary properties._
>
>----------------

💡 _Identifies troubleshooting tips, common errors and potential issues._

## Introduction

The _Introduction to vocabularies_ module focused on basic vocabulary properties that are typically required by vocabulary systems and standards. This module will describe more optional properties that will improve vocabularies semantics, provenance and interoperability with other vocabularies and with data systems. 

## Mapping concepts with concepts in other vocabularies

In the basic structure of a vocabulary, concepts may be related to other concepts via broader, narrower or related properties. We can also relate a concept to a concept in a _different_ vocabulary. Concept matching across vocabularies is done in a similar way with these properties: [Broad match](http://www.w3.org/2004/02/skos/core#broadMatch), [Narrower match](http://www.w3.org/2004/02/skos/core#narrowMatch), [Related match](http://www.w3.org/2004/02/skos/core#relatedMatch).

`skos:broadMatch` example:

_Limestone packstone_ `skos:broadMatch` _Packstone_
... where _Limestone packstone_ is a concept in the <a href="https://linked.data.gov.au/def/gswa-rock-classification-scheme" target="_blank">GSWA rock classification scheme</a>, and _Packstone_ is a concept in the <a href="http://inspire.ec.europa.eu/codelist" target="_blank" rel="noopener noreferrer">INSPIRE code list</a> register.

`skos:exactMatch` example:

Child support `skos:exactMatch` Child support

... where _Child support_ is a concept in both [Public Policy Taxonomy](https://linked.data.gov.au/def/policy/0acd51d0-a4a3-48eb-b6f4-aa086f966057) and [FAST](http://id.worldcat.org/fast/854679).

### 🚧 Match a concept with a concept in another vocabulary. 

In some cases there may be concepts in a vocabulary that we can reliably say represent the same thing in the world. To promote interoperability between vocabularies (and therefore datasets, catalogues and collections) it's a good idea to _match_ these concepts. 

💡 Use one of the SKOS _match_ properties to reference another `skos:Concept` or to a similar semantic category such as an `owl:NamedIndividual`. Do not use any of the SKOS _match_ properties to match to non-semantic resources.

In this exercise we will use `skos:exactMatch` to link _Animal dispersal_ with the concept _Zoochory_ from the [National Agriculture Library Thesaurus](https://lod.nal.usda.gov/nalt/en/).

1. **Go to** [VocEdit](https://vocedit.kurrawong.ai) in Chrome  
2. **Project** > **Open** `pestRiskPath_training.ttl` from your local directory (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*)  
3. **Select** **Animal dispersal** from under **Concepts** in the left-hand panel  
4. **Edit** > **Other Properties** > **Add property**  
5. **Add** > `http://www.w3.org/2004/02/skos/core#exactMatch` > **Add**  
6. **Other Properties** > **exactMatch** (the field you just created)  > **Add new value** > **IRI**
7. **[...]** > **Widget** > **URIEditor** > **Add** `https://lod.nal.usda.gov/nalt/332111`  
8. **Save**

💡 strictly speaking, you should only use `skos:exactMatch` when you know that the other vocabulary does, or plans to make a match back to the concept in your vocabulary. Why not get in touch? Notify the external vocabulary managers that you're matching with their vocabulary and you might get matched back! Otherwise, the looser semantics of `skos:closeMatch` may be more suitable.

Now let's add a `skos:broadMatch`. Like `skos:broader`, the `skos:broadMatch` property matches a concept with another broader concept that is in a different concept scheme. We will add a `skos:broadMatch` from _Wildlife trafficking_ to _Crime_ in the _Centre for Agriculture and Bioscience International (CABI) Thesaurus_.

9.  **Select** **Wildlife trafficking** from under **Concepts** in the left-hand panel  
10. **Edit** > **Other Properties** > **Add property**  
11. **Add** > `http://www.w3.org/2004/02/skos/core#broadMatch` > **Add**  
12. **Other Properties** > **broadMatch** (the field you just created)  > **Add new value** > **IRI**
13. **[...]** > **Widget** > **URIEditor** > **Add** `https://id.cabi.org/cabt/33618` 
14. **Save**


## Images
Associating a `skos:Concept` with an image that illustrates meaning is a powerful and, perhaps obviously, language-neutral way of clarifying the meaning and scope of a concept. There are various different ways of modelling an image reference within a skos vocabulary. The skos model does mention image references within the context of _documentation_ properties (e.g. `skos:example`; `skos:scopeNote`). While using documentation properties to refer to an image may be syntactically correct, most systems will be expecting textual data in these fields. In the exercise below we will add an image reference using a schema.org property `schema:image`.

💡 There are a number of approaches to adding an image to a vocabulary concept - the exercise below illustrates one valid approach. See other approaches in our [Patterns](https://docs.kurrawong.ai/concepts/vocabs/patterns/#images) document.

### 🚧 Exercise: add an image to a concept

We will add an image reference with a URL from Wikipedia Commons to the Concept _Storm water_.

1. **Go to** [VocEdit](https://vocedit.kurrawong.ai) in Chrome
2. **Project** > **Open** `pestRiskPath_training.ttl` from your local directory (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*)  
3. **Select** _Storm water_ from under **Concepts** in the left-hand panel
4. **Edit** > **Other Properties** > **Add property** 
5. **Add** > `https://schema.org/image` > **Add**
6. **Other Properties** > **exactMatch** (the field you just created)  > **Add new value** > **IRI**  
7. **[...]** > **Widget** > **URIEditor** > **Add** `https://commons.wikimedia.org/wiki/File:2019-07-29_172052_Rain_in_Berlin.jpg`
8. **Save**

## Related (associated) concepts

SKOS supports non-hierarchical relationships between concepts using `skos:related` property. This is based on the _associative relationship_ defined in standards such as ISO 25964-1, which states that related terms are "semantically or conceptually associated to such an extent that the link between the two needs to be made explicit... and it is important to do this for concepts that overlap in scope" (International Organization for Standardization, 2011, p.63).

To add a `skos:related`, go to VocEdit and:

1. Select a Concept under _Concepts_
2. **Edit** > **Other Properties** > **Add property** 
3. **Add** > http://www.w3.org/2004/02/skos/core#related > **Add**
4. **Other Properties** > **related** (the field you just created)  > **+** > **IRI**  
5. **--Select a value** from the drop-down field
6. **Save**

## Documentation properties

In SKOS, _documentation_ properties include:

- `skos:note` - a note can say anything! If appropriate, use the following properties instead that have clearer semantics: `skos:changeNote`, `skos:definition`, `skos:editorialNote`, `skos:example`, or `skos:historyNote`
- `skos:changeNote` - you can indicate a change to a label, or even a changed relationship to another concept.
- `skos:definition` - this field is mandatory in VocPub for all `skos:Concept`, `skos:ConceptScheme` and `skos:Collection` instances.  
- `skos:editorialNote` - similar to `skos:changeNote` but perhaps for internal use only, such as "Fixed typo [date]" or "review by [date]".
- `skos:example` - indicate some thing in the world that exemplifies the concept - this might be any kind of information resource, but references to images are not usually expected in Documentation properties (see [#images] to do this).
- `skos:historyNote` - this property must be used to indicate the origins of a `skos:ConceptScheme` or a `skos:Collection`, where the origin cannot be indicated with an IRI (so with a textual reference, e.g. (this vocabulary / collection was created for purpose X by project Y on behalf of agency Z"). For a skos:Concept, the same rules apply if the concept origin is NOT from within its `skos:ConceptScheme`, e.g. "this Concept originated in Vocabulary X, added here [date]".  
- `skos:scopeNote` - use a Scope note to say what kinds of things are included in the concept and what is not included. It may be useful to indicate another concept that should be used instead to describe or catalogue certain kinds of things. For example:

```turtle
<http://vocabulary.curriculum.edu.au/scot/10109> a skos:Concept ;
skos:prefLabel "Educational publications"@en ;
skos:scopeNote "Use for resources about development, distribution or management of industry publications relevant across the education sector. For resources about publications generated by individual schools USE School publications."@en ;
skos:related <http://vocabulary.curriculum.edu.au/scot/10141>
```

💡 When a `skos:scopeNote` refers to another `skos:Concept`, use a `skos:related` property also to indicate that concept with an IRI.

💡 When writing notes, use plain text only and limit paragraph breaks where possible.

## Collections

There may be a need to define a group of concepts within a vocabulary that share certain characteristics. A vocabulary may contain a `skos:Collection`, or even many collections of concepts.

Collections are like a non-hierarchical means of gathering concepts. So for example concepts that are members of a `skos:Collection` may be from different parts of a vocabulary hierarchy (and not all from within the same broader-narrower parts of a hierarchy branch). One use case for creating a `skos:Collection` is to clearly represent concepts that have been 'imported' from another `skos:ConceptScheme`. For more about using collections in this way see the [Import a concept](vocab-reuse.md#-import-a-concept) exercise in the _Vocabulary reuse_ module.

💡 `skos:Collection` indicates a `skos:Concept` using the `skos:member` property.


* AGLDWG. (n.d.). VocPub profile specification. Retrieved April 17, 2025, https://linked.data.gov.au/def/vocpub
* International Organization for Standardization. (2011). Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval (ISO Standard No. 25964-1:2011). https://www.iso.org/standard/53657.html
* W3C (n.d.). QSKOS. Retrieved March 5, 2025. https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2009). SKOS reference. https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). https://www.w3.org/TR/turtle/


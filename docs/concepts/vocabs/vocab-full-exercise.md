
# Vocabulary Full Exercise

>
>***Scope***
>
>Provides guidance on building a SKOS vocabulary with common source materials.
>
>***Audience***
>
>_Vocabulary editors and maintainers. It is assumed that learners have some experience with common office tools, such as spreadsheet applications._
>
>***Outcome***
>
> Learners should be able to transform a semi-structured vocabulary in a publication-ready form that conforms to common vocabulary standards.
>
>----------------

> 🚧 _Exercises_

> 💡 _Troubleshooting tips, common errors and potential issues._




## Introduction
This module is a comprehensive exercise that progresses a simple, mid-sized list of terms in a table through to a publication-ready vocabulary featuring a range of [SKOS](https://en.wikipedia.org/wiki/Simple_Knowledge_Organization_System) semantics. Many of the steps precede use of vocabulary-specific editing and publishing tools, which are introduced only as the vocabulary evolves in complexity. This is _not a short exercise_ - the steps below simulate a realistic and tested  scenario and provide a comprehensive account of issues enountered during vocabulary construction.

Throughout this module, references will be made back to other vocabulary modules for additional context and guideance - but this module does not rely heavily on exernal references. If you _do_ need to step back and look at vocabularies basic concepts, the  [_Introduction to Vocabularies_](/concepts/vocabs/introduction) module will help.

## 🚧 Raw vocabulary data
Vocabularies often exist in semi-structured forms, such as in documents, spreadsheets or database tables. In this module a spreadsheet is provided - the Icecream Flavours spreadsheet includes a single column of terms. The spreadsheet is scraped from a [Wikipedia](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) page, with a little tidying up. 

**Download the sample file** <a href="../../assets/3rdparty/source/icecream-flavours.xlsx" download>
  "icecream-flavors.xlsx"
</a>

> 💡 Should we be citing Wikipedia somehow? Don't worry, we will! In a later step we'll add some metadata to the vocbulary that indicates the source with a web link.

In column A you will see a list of icecream flavors. Notice that these are separated into three groups (FRUIT FLAVORS; CHOCOLATE, NUTS AND OTHER SWEETS; SAVORY FLAVORS). We'll reflect these groupings in the final vocabulary.

You may also notice that some of the flavors include additional documentation - for example:

_Neapolitan : composed of vanilla, chocolate and strawberry ice cream together side by side_

We will separate the label "Neapolitan" from "composed of vanilla, chocolate..." and retain both in different vocabulary fields. 

You will notice that these terms are un-identified - that is, there is no identifier or code for each term. Identifiers are _absolutely necessary_ for progressing any vocabulary through each stage through to publication. In many cases, term lists already have codes assigned - it's a good idea to reuse existing codes if possible. In this exercise we assume that no codes exist, and we will implement, or 'mint' new identifiers.

### Add identifiers

The sample file does not include a codes column - _identifiers are necessary in a SKOS vocabulary that conforming to any standard or practice_. It's a good idea to use any identifiers that already exist for a draft vocabulary, but for this exercise we will need to mint new onces. We will add identifiers using the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) scheme. 

> Why are we using the UUID scheme? If you want to learn more about identifier strategy, see [_Identifiers_](/concepts/vocabs/creation#identifiers) for a guideance.

- **Insert a a new "Identifiers" column before the Labels column**

 

- **Generate UUIDs for new column** - Paste the following code** into Cell (A,1) and copy to the end of the list:

```
=LOWER(CONCAT(
"icf:",
DEC2HEX(RANDBETWEEN(0,POWER(16,8)-1),8),"-",
DEC2HEX(RANDBETWEEN(0,POWER(16,4)-1),4),"-",
"4",DEC2HEX(RANDBETWEEN(0,POWER(16,3)-1),3),"-",
DEC2HEX(RANDBETWEEN(8,11)),DEC2HEX(RANDBETWEEN(0,POWER(16,3)-1),3),"-",
DEC2HEX(RANDBETWEEN(0,POWER(16,8)-1),8),
DEC2HEX(RANDBETWEEN(0,POWER(16,4)-1),4)
))
```

Column A will not include values like "icf:0f8002df-64cd-4018-bfed-9f9f1c3d4fc5" (the exact identifier will be different in each case as the UUID is a random string).

> 💡 the prefix "icf:" is a based on the proposed vocabulary name "Icecream Flavors" - for readability, it's a good idea to choose prefixes that indicate, or give a hint on what the vocabulary elements are. When using the code above for a different vocabulary project, update the second line accordingly, so for example for a "Textured Vegetable Protein" vocabulary you might update this line to "tvp:" (the ":" colon character is mandatory).

- **Paste values into a new column**
Insert a new column, and use the copy and paste values option to transform the identifiers into absolute values (that won't get accidently recalculated with further steps).

- **Delete IDs** pasted for empty rows. - **Keep** the Identifiers for the grouping terms (FRUIT FLAVORS, etc)

- **Add column header** "Identifier". 

- **Delete the column with the formulas**, just keep the Identifier column with the pasted values.
- **Save** your file.

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours.xlsx" download> icecream-flavours.xlsx </a> - move on to the next step.

### Separate labels from definitions

- **Move the definitions into a new column** 
For a list this size, you could do this manually, or use MS Excel 'text to columns' method, using the ":" character as a delimiter. 

> 💡 Be careful to review data after using text to columns or other delimiting process. The delimiter you choose could also be in the definitions - you might end up with three or more colums wiht definitions split up. You won't need to worry about this in the icecream-flavours.xlsx example.

- **Add column header** "Definition"
- **Save** your file.

> 💡 Some of the definitions data may not look like true definitions, but rather history or useage notes. Don't worry, we'll look at these again in [_Curate deinitions_](#curate-definitions).

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-definitions.xlsx" download> icecream-flavours.xlsx </a> - move on to the next step.

### Find synonyms

We will add synonyms, or alternative labels, that exist in the file. There are two fields that synonyms can be found in:

- the Label - sometimes the term has an alternative term indicated by parenthetical qualifier, such as "Ube (purple yam)" - we can use "purple yam" as an alternative label
- definitions - some definitons mention synonyms explicitly, such as "Cherry : includes variations (e.g. Amaretto cherry, black cherry)". We will add both "Amaretto cherry" and "black cherry" as alternative labels

> 💡 Are the synonyms for Cherry really synonyms, or are they more specific flavor types? In this step, but don't worry, we'll treat them as synonyms now but look at promoting these to separate, identified vocabulary concepts in a later step. Want to know more about alternative labels now? see [introduction#alternative-labels] section in the Introduction module.

- **add column with header "Alternate Label"** to the right of the Definition column
- **remove "purple yam"** text from the "Ube" label and past in the Alternate Label column (same row). Delete the remaining parentheses ().
- **add "amaretto cherry" and "black cherry"** in the Alternate Label column in the same row as the Cherry label. 
- **delete "(e.g. Amaretto cherry, black cherry)"** from the Definition for Cherry.
- **Save** your file.

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-altLabels.xlsx" download> icecream-flavours.xlsx </a> - move on to the next step.

### Add remaining definitions

In the [Separate Labels From Definitions](#separate-labels-from-definitions) step, we extracted definitions from the source text. In this step we will add definitions for the remaining terms.

> 💡 Some vocabulary standards and tools will expect a definition for each concept for the vocabulary to be valid. In this exercise we will treat definitions as mandatory for publication.

We will get definitions from the the Wikipedia page that the source list links to.

- **Open** [List of ice cream flavors](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) in your browser.
- **Select a flavour that needs a definition** - from the top, this is a link to "Banana split". 
- **Cut and paste** the first sentence from the [Banana split](https://en.wikipedia.org/wiki/Banana_split) page into the Definition column in the same row as Banana split.

> 💡 The [List of ice cream flavors](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) page is a dynamic, user-contributed list and items may differ over time. 

- **Repeat** for remaining concepts that do not have definitions.
- **Save** your file.

> 💡 What if definitions are needed for hundreds or thousands of terms? Ideally, each term will have a curated definition, requiring significant effort. That's great if possible! But that effort may not be possible the early stages of vocabulary development. As a work-around, copy the term label into the definition field - in this case prefixed with "... ice cream flavor". This may not seem like a very rich definition, but if the term is discovered out of context, it will give a strong hint about the semantics, e.g. "banana split" means _banana split ice cream flavor_, and not the stand-alone dessert (discussed further below under [Curate definitions](#curate-definitions))

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-altLabels.xlsx" download> icecream-flavours-all-defined.xlsx </a> - move on to the next step.

### Curate definitions

You may notice that the extracted definitions are mostly indicative but not always clear in context. For example:

> A banana split is an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise, and served with ice cream and sauce between the two pieces.

This essentially defines a 'banana split', and not _banana split flavored icecream_. A simple edit can be made:

> **An ice cream flavour based on a banana split**, an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise...

In the case where a definition is determined to be unsuitable for a given concept, either:
- copy the labes into the definition field, suffixed with "ice cream flavor", e.g. the definition for Goody Goody Gum Drops changes from "unique to New Zealand" to "Goody Goody Gum Drops ice cream flavor". This can be done for a many terms at once using Excel `CONCATENATE` function, or
- do as above, but retain the original definition, resulting in "Goody Goody Gum Drops ice cream flavor, unique to New Zealand". Note that this requires manual edits and the `CONCATENATE` option may not work easily.

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-altLabels.xlsx" download> icecream-flavours-all-curated-definitions.xlsx </a> - move on to the next exercise.


## 🚧 Use a vocabulary editor

By creating and separating out identifiers, labels, alternatie labels and definitions in the [Raw vocabulary data](#raw-vocabulary-data) step, you've been preparing the vocabulary for transformation into a publication-ready format. Well done! It's at this stage that we'll migrate (cut-and-paste) the raw data into a specialised vocabulary editor, where we will do a bit more editing - we're not far away now from creating a SKOS RDF file that can be readily integrated into common metadata systems.

Why move to a vocabulary editor? It will

- support creating _whole of vocabulary_ metadata,
- ensure data is _transformation-ready_ before creating a SKOS RDF file.

### Download VocExcel

_VocExcel_ is a vocabulary editor that is essentially a _MS Excel_ template. We'll copy our raw data into VocExcel, and then upload it to an online SKOS RDF transformer.

> 💡 You will need access to MS Excel to do this exercise.

- **Go to** the KurrawongAI [VocExcel](https://tools.kurrawong.ai/vocexcel) in any browser.
- **Get VocExcel Template**
- **Open** the downloaded template (it may have opened automatically)
**Save As** a new file, e.g. "VocExcel-ice-cream-flavor.xlsx"

> VocExcel will open at the _Introduction_ tab. Note also the _Documentation_ tab, which gives you a rundown of the properties that you may be editing.

### Update Concept Scheme

- **Open** the _Concept Scheme_ tab

The Concept Scheme is a description, or metadata for the vocabulary as a whole. Some fields on this tab have an asterisk (*) and are mandatory - we'll help you fill these out as follows:

- **Vocabulary IRI** - this needs to be a web URL that indicates what vocabulary is hosted. For this exercise, enter `http://vocab.example.com/icecreamflavors`
- **Preferred Label** - the name of the Vocabulary. Add "Ice Cream Flavors Vocabulary".
- **Definition** - add "A vocabulary of ice cream flavors".
- **Creation Date** - add the day you first edit this file in yyyy-mm-dd format
- **Modified Date** - should be changed each day you make edits. Use the same vale for Creation date in the first instance
- **Creator** - that's you or your business! Here you can add just text OR an identifier if you have one - so `Jane Doe`, `Japan Ice Cream Association`, `https://orcid.org/0000-0002-1584-4316` or `https://ror.org/02hgxnr90` are all acceptable here
- **Publisher** - same as for Creator. Usually the Publisher is an organisation rather than a person - but either is valid
- **History Note** - add "Presented here for the first time as part of the KurrawongAI Vocabulary Full Exercise training module"

That's the mandatory fields for describing a vocabulary completed. But wait, we said we'd cite Wikipedia as the source of the raw data! Let's do that now:

- **Citation** - add `https://en.wikipedia.org/wiki/List_of_ice_cream_flavors` .

After this step, the spreadsheet should resemble "VocExcel-ice-cream-flavor-concept-scheme.xlsx" - save, and move on to the next step.

### Add concepts

We will now copy the contents of the raw data file to the VocExcel template in the Concepts tab.

- **Cut and paste** the first four columns from "icecream-flavours-all-curated-definitions.xlsx" to the first four columns in the VocExcel file. 

> 💡 We have retained the "grouping" terms (FRUIT FLAVORS, etc), without definitions. We'll deal with these in the next step.

After this step, the spreadsheet should resemble "VocExcel-ice-cream-flavor-concepts.xlsx" - save, and move on to the next step.

### Create collections

We will use the grouping terms (FRUIT FLAVORS; CHOCOLATE, NUTS AND OTHER SWEETS; SAVORY FLAVORS) to create 'collections' of concepts. Collections are a standard way of grouping concepts by some category _within_ a vocabulary. 

> 💡 alternatively, these groupings could be used as 'broader concepts', so that a hierarchy is established. In this exercise we will use the collections method for grouping the ice cream flavors - don't worry, we'll create some broader concept hierarchy in a later step.

- **Cut just the three grouping terms** with identifers from the Concepts tab and past in Collection tab. _Keep these in the same rows_.
- **Copy the remaining identifiers** from the Concepts tab to the Collection tab "Member IRIs" column. 
- **Add a definition** for each collection, e.g. "Ice cream fruit flavors collection".

After this step, the spreadsheet should resemble "VocExcel-ice-cream-flavor-collections.xlsx" - save, and move on to the next step.

### Add prefixes

We added "icf:" to identifiers earlier. We need to add this prefix to the Prefixes tab. 

- **Open** the Prefixes tab
- **Add** "icf" in column A (without the colon ":")

After this step, the spreadsheet should resemble "VocExcel-ice-cream-flavor-prefixed.xlsx" - save, and move on to the next step.

### Add broader relationships

It's common practice to arrange vocabulary concetps in to hierarchies, where one concept is 'broader' than another in meaning. By doing so, a vocabulary supports inferences between datasetsthat are described with different concepts by using the hierarchal relationship. 

The Ice Cream Flavours Vocabulary is a mostly 'flat' list of concepts, but there are a couple of clear opportunities to implement some hierarchy. We'll just do this for "Vanilla" and "French vanilla", assuming that the latter concept is a specific type of the first.

- **Open** the Concepts tab
- **Copy** the Concept IRI for "French vanilla"
- **Paste** the IRI from "French vanilla" in the Narrower Concept IRIs column, in the same row as the "Vanilla" concept.

Done! The Ice Cream Flavours Vocabulary is now a 'taxonomy' - at least in part. You might see other opportunities to add narrower relationships, for example "Strawberry / Strawberry cheesecake" - think about the decision this way: if I wanted to find all information about "Strawberry" ice cream, would I be happy to retrieve also information about "Strawberry cheesecake" ice cream? If the answer is yes, then add the latter as a narrower concept. If the answer is "no, strawberry cheesecake ice cream is nothing like strawberry ice cream" then leave these concepts unrelated. 

What about the Cherry flavor and it's variants? Back in (#find-synonyms)[Find synonyms] step, we extracted synonyms from the definition and stored them as alternate labels. But let's decide that these 'variations' should be promoted to full concept status, with their own identifiers, definitions, collection membership and (potentially) relationships to still other concetps.

- **Cut** the term "Black cherry" from the Alternate Label column
- **Paste** "Black cherry" in a new row in the Preferred label column
- **Mint an identifier** in the Concept IRI column next to the new label using the Excel function from the [Add identifiers](#add-identifiers) step (or, just copy one from [UUID Generator](https://www.uuidgenerator.net))
- **Write a definition** for "Black cherry" - either research a definition, or just add "Black cherry ice cream flavor"
- **Copy** the new concept IRI to a new row in the Collections tab in the FRUIT FLAVORS collection group.

Repeat steps for Amaretto cherry - or not! Apply the same decision making steps for promoting Black cherry to full concept status. A concept can have alternative labels AND narrower relationships to other concepts.

After this step, the spreadsheet should resemble "VocExcel-ice-cream-flavor-hierarchy.xlsx" - save, and move on to the next step.

### Transform to SKOS RDF

The VocExcel spreadsheet is now ready to upload to the online transformer - well done! Follow the steps below:

- **Go to** [VocExcel](https://tools.kurrawong.ai/vocexcel) in any browser.
- **Upload an Excel or RDF file** > choose the VocExcel file you just saved
- **Upload**

You will be presented with a Result. From here you can view the Concept Scheme or any Concept in the file, or the Full RDF Turtle result. 

Save the output... [WIP]


## 🚧 Publish the vocabulary

So far in this module you've taken an unstructured list from a single column and transformed it into a valid SKOS file. That file is compatible with many informaiton systems that use vocabualry data. But what about publishing the vocabulary? In this step you will upload your file to a vocabulary presentation system so that the vocabulary can be searched and browsed on the web. The data itself will also be available via an API in the publishing platform, allowing information systems to fetch the vocabulary data. 

[WIP]







## References and further reading

* AGLDWG (2026). VocPub profile specification. https://agldwg.github.io/vocpub-profile/specification
* W3C (2009). SKOS Simple Knowledge Organization System Reference (W3C Recommendation). https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). https://www.w3.org/TR/turtle/

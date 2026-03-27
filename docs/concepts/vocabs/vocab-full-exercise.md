# Vocabulary Full Exercise

> **Scope**  
> Provides guidance on building a SKOS vocabulary from common source materials.
>
> **Audience**  
> _Vocabulary editors and maintainers. It is assumed that learners have some experience with common office tools, such as spreadsheet applications._
>
> **Outcome**  
> Learners should be able to transform a semi-structured vocabulary into a publication-ready form that conforms to common vocabulary standards.

---

> 🚧 _Exercises_
> 💡 _Troubleshooting tips, common errors and potential issues._
> 🧑‍🏫 _Trainers notes_

## Introduction

This module is a comprehensive exercise that progresses a simple, mid-sized list of terms in a table through to a publication-ready vocabulary featuring a range of [SKOS](https://en.wikipedia.org/wiki/Simple_Knowledge_Organization_System) semantics. Many of the steps precede the use of vocabulary-specific editing and publishing tools, which are introduced only as the vocabulary evolves in complexity. This is _not a short exercise_ — the steps below simulate a realistic and tested scenario and provide a comprehensive account of issues encountered during vocabulary construction.

Throughout this module, references are made back to other vocabulary modules for additional context and guidance, but this module does not rely heavily on external references. If you _do_ need to step back and look at basic vocabulary concepts, the [_Introduction to Vocabularies_](/concepts/vocabs/introduction) module will help.

??? info "🧑‍🏫 Trainer note"
    Emphasise that this is a **pipeline exercise**, not just a SKOS exercise.  
    Learners often assume vocabulary work starts in a specialist tool; here, it starts in messy source data.

## 🚧 Raw vocabulary data

Vocabularies often exist in semi-structured forms, such as documents, spreadsheets, or database tables. In this module, a spreadsheet is provided — the Ice Cream Flavours spreadsheet includes a single column of terms. The spreadsheet is scraped from a [Wikipedia](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) page, with a little tidying.

**Download** the sample file  
<a href="../../assets/3rdparty/source/icecream-flavours.xlsx" download>
  icecream-flavours.xlsx
</a>

> 💡 Should we cite Wikipedia somehow? Don't worry, we will. In a later step we'll add metadata to the vocabulary that indicates the source with a web link.

In column A you will see a list of ice cream flavours. Notice that these are separated into three groups: **FRUIT FLAVORS; CHOCOLATE, NUTS AND OTHER SWEETS; SAVORY FLAVORS**. We'll reflect these groupings in the final vocabulary.

You may also notice that some of the flavours include additional documentation. For example:

_Neapolitan : composed of vanilla, chocolate and strawberry ice cream together side by side_

We will separate the label **"Neapolitan"** from **"composed of vanilla, chocolate..."** and retain both in different vocabulary fields.

You will notice that these terms are unidentified — that is, there is no identifier or code for each term. Identifiers are _absolutely necessary_ for progressing any vocabulary through each stage to publication. In many cases, term lists already have codes assigned — it is a good idea to reuse existing codes if possible. In this exercise we assume that no codes exist, and we will mint new identifiers.

??? info "🧑‍🏫 Trainer note"
    Ask: **“Where have you seen vocabularies in the wild?”**  
    Typical answers include Excel, SharePoint lists, Word documents, PDFs, forms, and database extracts.

??? info "🧑‍🏫 Trainer note"
    The three source groupings are a good point to ask whether the source is implying:

    - hierarchy
    - grouping
    - or just visual organisation

    Do not resolve this too quickly.

??? info "🧑‍🏫 Trainer note"
    The _Neapolitan_ example is the first **label vs definition** teaching moment.  
    Many learners initially treat the whole string as a label.

### Add identifiers

The sample file does not include a codes column — _identifiers are necessary in a SKOS vocabulary conforming to common standards or practice_. It is a good idea to reuse any identifiers that already exist for a draft vocabulary, but for this exercise we will need to mint new ones. We will add identifiers using the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) scheme.

> 💡 Why are we using the UUID scheme? If you want to learn more about identifier strategy, see [_Identifiers_](/concepts/vocabs/creation#identifiers) for guidance.

- **Insert** a new "Identifier" column before the Labels column

- **Generate** UUIDs for the new column — paste the following formula into cell A1 and copy it to the end of the list:

```excel
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

Column A will now include values like `icf:0f8002df-64cd-4018-bfed-9f9f1c3d4fc5` (the exact identifier will differ in each case, as the UUID is random).

> 💡 The prefix `icf:` is based on the proposed vocabulary name "Ice Cream Flavors". For readability, it is a good idea to choose prefixes that indicate, or at least hint at, what the vocabulary elements are. When using the code above for a different vocabulary project, update the first line accordingly — for example, for a "Textured Vegetable Protein" vocabulary you might update it to `tvp:`. The colon (`:`) character is mandatory.

- **Paste** values into a new column  
  Insert a new column, then use Excel's **Paste Values** option to transform the identifiers into fixed values that will not be accidentally recalculated in later steps.

- **Delete** identifiers pasted for empty rows — but **keep** the identifiers for the grouping terms (**FRUIT FLAVORS**, etc.)

- **Add** the column header `Identifier`

- **Delete** the original column with the formulas and keep only the `Identifier` column with the pasted values

- **Save** your file

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours.xlsx" download>icecream-flavours.xlsx</a>. Move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This is a **critical conceptual step**, not just a mechanical one.

    Prompt questions:

    - Why are row numbers not enough?
    - What breaks if identifiers change?
    - Why might existing identifiers be preferable to newly minted ones?

??? info "🧑‍🏫 Trainer note"
    Ask: **“Why do we paste values?”**  
    Expected answer: because formula-generated IDs are volatile and can recalculate.

### Separate labels from definitions

- **Move** the definitions into a new column  
  For a list this size, you could do this manually, or use MS Excel’s **Text to Columns** method, using the `:` character as a delimiter.

> 💡 Be careful to review the data after using a delimiter-based process. The delimiter you choose may also appear in the definitions, so you could end up with three or more columns with definitions split up. You won’t need to worry about this in the `icecream-flavours.xlsx` example.

- **Add** column header `Definition`
- **Save** your file

> 💡 Some of the definition data may not look like true definitions, but rather history or usage notes. Don’t worry — we’ll look at these again in [_Curate definitions_](#curate-definitions).

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-definitions.xlsx" download>icecream-flavours-definitions.xlsx</a>. Move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This is the first real **modelling step disguised as Excel work**.

??? info "🧑‍🏫 Trainer note"
    Good moment to reinforce: **automation always needs review**.

### Find synonyms

We will add synonyms, or alternative labels, that exist in the file. There are two fields where synonyms can be found:

- the **Label** — sometimes the term has an alternative term indicated by a parenthetical qualifier, such as `Ube (purple yam)`; we can use `purple yam` as an alternative label
- **Definitions** — some definitions mention synonyms explicitly, such as `Cherry : includes variations (e.g. Amaretto cherry, black cherry)`. We will add both `Amaretto cherry` and `black cherry` as alternative labels

> 💡 Are the synonyms for Cherry really synonyms, or are they more specific flavour types? Don’t worry — in this step we’ll treat them as synonyms for now, but later we’ll consider promoting them to separate, identified concepts. If you want to know more about alternative labels now, see the [alternative labels section](/concepts/vocabs/introduction#alternative-labels) in the Introduction module.

- **Add** a column with header `Alternate Label` to the right of the `Definition` column
- **Remove** `purple yam` text from the `Ube` label and paste it into the `Alternate Label` column in the same row. Delete the remaining parentheses `()`.
- **Add** `amaretto cherry` and `black cherry` in the `Alternate Label` column in the same row as the `Cherry` label
- **Delete** `(e.g. Amaretto cherry, black cherry)` from the `Definition` for `Cherry`
- **Save** your file

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-altLabels.xlsx" download>icecream-flavours-altLabels.xlsx</a>. Move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This section is **intentionally ambiguous**.  
    Do not over-correct learners. Let them sit with the difference between:

    - alternative labels
    - narrower concepts
    - related concepts

### Add remaining definitions

In the [Separate labels from definitions](#separate-labels-from-definitions) step, we extracted definitions from the source text. In this step we will add definitions for the remaining terms.

> 💡 Some vocabulary standards and tools will expect a definition for each concept for the vocabulary to be valid. In this exercise we will treat definitions as mandatory for publication.

We will get definitions from the Wikipedia page that the source list links to.

- **Open** [List of ice cream flavors](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) in your browser
- **Select** a flavour that needs a definition — from the top of the list, this is `Banana split`
- **Copy and paste** the first sentence from the [Banana split](https://en.wikipedia.org/wiki/Banana_split) page into the `Definition` column in the same row as `Banana split`

> 💡 The [List of ice cream flavors](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) page is a dynamic, user-contributed list and items may differ over time.

- **Repeat** for remaining concepts that do not yet have definitions
- **Save** your file

> 💡 What if definitions are needed for hundreds or thousands of terms? Ideally, each term will have a curated definition, which requires significant effort. That is great if possible — but it may not be practical in the early stages of vocabulary development. As a workaround, copy the term label into the definition field, in this case suffixed with `ice cream flavor`. This may not seem like a rich definition, but if the term is discovered out of context it will give a strong hint about the intended semantics, e.g. `banana split ice cream flavor`, and not the stand-alone dessert.

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-all-defined.xlsx" download>icecream-flavours-all-defined.xlsx</a>. Move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This step is intentionally labour-intensive.  
    It helps learners feel the difference between:

    - extracting data
    - and curating a vocabulary

??? info "🧑‍🏫 Trainer note"
    Good prompt: **“What counts as ‘good enough’ in an early-stage vocabulary?”**

### Curate definitions

You may notice that the extracted definitions are mostly indicative but not always clear in context. For example:

> A banana split is an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise, and served with ice cream and sauce between the two pieces.

This essentially defines a _banana split_, not _banana split flavoured ice cream_. A simple edit can be made:

> **An ice cream flavour based on a banana split**, an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise...

In cases where a definition is determined to be unsuitable for a given concept, either:

- copy the **label** into the definition field, suffixed with `ice cream flavor`, e.g. the definition for `Goody Goody Gum Drops` changes from `unique to New Zealand` to `Goody Goody Gum Drops ice cream flavor`. This can be done for many terms at once using Excel’s `CONCAT` function, or
- do as above, but retain the original definition, resulting in `Goody Goody Gum Drops ice cream flavor, unique to New Zealand`

After this step, the spreadsheet should _resemble_ <a href="../../assets/3rdparty/source/icecream-flavours-all-curated-definitions.xlsx" download>icecream-flavours-all-curated-definitions.xlsx</a>. Move on to the next exercise.

??? info "🧑‍🏫 Trainer note"
    This is a **semantic correction** step, not just an editing step.  
    Reinforce that vocabularies define **concepts in context**, not merely reuse source text.

## 🚧 Use a vocabulary editor

By creating and separating out identifiers, labels, alternate labels, and definitions in the [Raw vocabulary data](#raw-vocabulary-data) step, you have been preparing the vocabulary for transformation into a publication-ready format. Well done. At this stage we will migrate (cut and paste) the raw data into a specialised vocabulary editor, where we will do a bit more editing. We are now very close to creating a SKOS RDF file that can be integrated into common metadata systems.

Why move to a vocabulary editor? It will:

- support creating _whole-of-vocabulary_ metadata
- ensure data is _transformation-ready_ before creating a SKOS RDF file

??? info "🧑‍🏫 Trainer note"
    This is the major transition from:

    - spreadsheet cleanup
    - to semantic modelling in a purpose-built structure

### Download VocExcel

_VocExcel_ is a vocabulary editor that is essentially an _MS Excel_ template. We’ll copy our raw data into VocExcel, and then upload it to an online SKOS RDF transformer.

> 💡 You will need access to MS Excel to complete this exercise.

- **Go to** the KurrawongAI [VocExcel](https://tools.kurrawong.ai/vocexcel) page in any browser
- **Get** VocExcel Template
- **Open** the downloaded template (it may have opened automatically)
- **Save As** a new file, e.g. `VocExcel-ice-cream-flavor.xlsx`

> VocExcel will open at the _Introduction_ tab. Note also the _Documentation_ tab, which gives you a rundown of the properties that you may be editing.

### Update Concept Scheme

- **Open** the _Concept Scheme_ tab

The Concept Scheme is a description, or metadata, for the vocabulary as a whole. Some fields on this tab have an asterisk (`*`) and are mandatory. Fill them out as follows:

- **Vocabulary IRI** — this needs to be a web URL indicating where the vocabulary is hosted. For this exercise, enter `http://vocab.example.com/icecreamflavors`
- **Preferred Label** — add `Ice Cream Flavors Vocabulary`
- **Definition** — add `A vocabulary of ice cream flavors`
- **Creation Date** — add the day you first edit this file in `yyyy-mm-dd` format
- **Modified Date** — update this each day you make edits. Use the same value as the creation date in the first instance
- **Creator** — this is you or your business. You can add text or an identifier, e.g. `Jane Doe`, `Japan Ice Cream Association`, `https://orcid.org/0000-0002-1584-4316`, or `https://ror.org/02hgxnr90`
- **Publisher** — same as for Creator. Usually the Publisher is an organisation rather than a person, but either is valid
- **History Note** — add `Presented here for the first time as part of the KurrawongAI Vocabulary Full Exercise training module`

That completes the mandatory fields for describing a vocabulary. But we also said we would cite Wikipedia as the source of the raw data. Let’s do that now:

- **Citation** — add `https://en.wikipedia.org/wiki/List_of_ice_cream_flavors`

After this step, the spreadsheet should resemble `VocExcel-ice-cream-flavor-concept-scheme.xlsx`. Save, and move on to the next step.

??? info "🧑‍🏫 Trainer note"
    Slow learners down here.  
    Many people rush straight to concepts and treat scheme-level metadata as an afterthought.

??? info "🧑‍🏫 Trainer note"
    Good discussion points:

    - Is a Vocabulary IRI “just a string”, or also a web identifier?
    - Why distinguish Creator from Publisher?
    - Why is provenance useful even in a toy exercise?

### Add concepts

We will now copy the contents of the raw data file into the VocExcel template in the `Concepts` tab.

- **Cut and paste** the first four columns from `icecream-flavours-all-curated-definitions.xlsx` into the first four columns in the VocExcel file

> 💡 We have retained the grouping terms (`FRUIT FLAVORS`, etc.), without definitions. We’ll deal with these in the next step.

After this step, the spreadsheet should resemble `VocExcel-ice-cream-flavor-concepts.xlsx`. Save, and move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This step often feels “too easy” to learners.  
    Reassure them that the difficult part was the preparation.

### Create collections

We will use the grouping terms (`FRUIT FLAVORS`; `CHOCOLATE, NUTS AND OTHER SWEETS`; `SAVORY FLAVORS`) to create _collections_ of concepts. Collections are a standard way of grouping concepts by some category _within_ a vocabulary.

> 💡 Alternatively, these groupings could be used as broader concepts, so that a hierarchy is established. In this exercise we will use the collections method for grouping the ice cream flavors. Don’t worry — we’ll create some broader concept hierarchy in a later step.

- **Cut** just the three grouping terms with identifiers from the `Concepts` tab and **paste** them into the `Collections` tab. _Keep these in the same rows._
- **Copy** the remaining identifiers** from the `Concepts` tab and **paste** to the `Collections` tab `Member IRIs` column
- **Add** a definition for each collection, e.g. `Ice cream fruit flavors collection`

After this step, the spreadsheet should resemble `VocExcel-ice-cream-flavor-collections.xlsx`. Save, and move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This is a key modelling fork.  
    Ask explicitly: **“Why collections and not broader concepts?”**

    Expected insight: these groupings are categories of convenience, not necessarily `is-a` relationships.

### Add prefixes

We added `icf:` to identifiers earlier. We now need to add this prefix to the `Prefixes` tab.

- **Open** the `Prefixes` tab
- **Add** `icf` in column A (without the colon `:`)

After this step, the spreadsheet should resemble `VocExcel-ice-cream-flavor-prefixed.xlsx`. Save, and move on to the next step.

??? info "🧑‍🏫 Trainer note"
    Reinforce that prefixes are not the identifiers themselves — they are shorthand for IRI stems.

### Add broader relationships

It is common practice to arrange vocabulary concepts into hierarchies, where one concept is broader than another in meaning. By doing so, a vocabulary supports inferences between datasets described with different concepts by using the hierarchical relationship.

The Ice Cream Flavours Vocabulary is mostly a flat list of concepts, but there are a couple of clear opportunities to implement hierarchy. We’ll do this for `Vanilla` and `French vanilla`, assuming that the latter concept is a more specific type of the former.

- **Open** the `Concepts` tab
- **Copy** the Concept IRI for `French vanilla`
- **Paste** the IRI for `French vanilla` in the `Narrower Concept IRIs` column, in the same row as the `Vanilla` concept

Done. The Ice Cream Flavours Vocabulary is now a taxonomy — at least in part.

You might see other opportunities to add narrower relationships, for example `Strawberry` / `Strawberry cheesecake`. Think about the decision this way: if you wanted to find all information about `Strawberry` ice cream, would you be happy also to retrieve information about `Strawberry cheesecake` ice cream? If the answer is yes, then add the latter as a narrower concept. If the answer is no, then leave these concepts unrelated.

What about the `Cherry` flavour and its variants? Back in the [Find synonyms](#find-synonyms) step, we extracted candidate synonyms from the definition and stored them as alternate labels. But let’s now decide that these variations should be promoted to full concept status, with their own identifiers, definitions, collection membership, and potentially relationships to other concepts.

- **Cut** the term `Black cherry` from the `Alternate Label` column
- **Paste** `Black cherry` in a new row in the `Preferred Label` column
- **Mint** an identifier in the `Concept IRI` column next to the new label using the Excel function from the [Add identifiers](#add-identifiers) step, or copy one from [UUID Generator](https://www.uuidgenerator.net)
- **Write** a definition for `Black cherry` — either research a definition, or add `Black cherry ice cream flavor`
- **Copy** the new concept IRI to a new row in the `Collections` tab in the `FRUIT FLAVORS` collection group

Repeat these steps for `Amaretto cherry` — or not. Apply the same decision-making logic for promoting `Black cherry` to full concept status. A concept can have alternative labels _and_ narrower relationships to other concepts.

After this step, the spreadsheet should resemble `VocExcel-ice-cream-flavor-hierarchy.xlsx`. Save, and move on to the next step.

??? info "🧑‍🏫 Trainer note"
    This section closes the earlier ambiguity around synonyms vs full concepts.

??? info "🧑‍🏫 Trainer note"
    Important point to make explicit: **the same source data can support multiple defensible modelling choices**.

### Transform to SKOS RDF

The VocExcel spreadsheet is now ready to upload to the online transformer. Well done. Follow the steps below:

- **Go to** [VocExcel](https://tools.kurrawong.ai/vocexcel) in any browser
- **Upload** an Excel file > choose the VocExcel file you just saved

You will be presented with a result. From here you can view the Concept Scheme, any Concept in the file, or the full RDF Turtle result.

- **Save** the Turtle output

??? info "🧑‍🏫 Trainer note"
    This is the “magic moment” for many learners: spreadsheet in, RDF out.  
    Encourage them to inspect the Turtle and locate familiar fields.

## 🚧 Publish the vocabulary

So far in this module you have taken an unstructured list from a single column and transformed it into a valid SKOS file. That file is compatible with many information systems that use vocabulary data. But what about publishing the vocabulary? In this step you would upload your file to a vocabulary presentation system so that the vocabulary can be searched and browsed on the web. The data itself would also be available via an API in the publishing platform, allowing information systems to fetch the vocabulary data.

[WIP]

??? info "🧑‍🏫 Trainer note"
    Frame publication as **making vocabularies usable**, not just valid.

## References and further reading

* AGLDWG (2026). _VocPub profile specification_. https://agldwg.github.io/vocpub-profile/specification
* W3C (2009). _SKOS Simple Knowledge Organization System Reference_ (W3C Recommendation). https://www.w3.org/TR/skos-reference/
* W3C (2014). _Turtle: Terse RDF triple language_ (W3C Recommendation). https://www.w3.org/TR/turtle/

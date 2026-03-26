
# Vocabulary Full Exercise


>
>***Scope***
>
>Provides guidance on building a complete SKOS vocabulary with common source materials.
>
>***Audience***
>
>_This module is primarily targeted to editors of draft and un-published vocabularies. It is assumed that learners have some experience with common productivity tools, including spreadsheet applications._
>
>***Outcome***
>
> Learners should be able to transform a unstructured or semi-structured vocabulary in a publication-ready form that conforms to common vocabulary standards.
>
>----------------

> 💡 _Identifies troubleshooting tips, common errors and potential issues._

> 🚧 _Exercises_

> 🎬 _Videos_

## Introduction
This module is a comprehensive exercise that progresses a simple, mid-sized list of terms in a single column table through to a publication-read controlled vocabulary featuring a wide range of SKOS semantics. Many of the steps precede use of vocabulary-specific editing and publishing tools, which are introduced only as the vocabulary evolves in complexity. This is NOT a short exercise - the steps below simulate a real-world scenario and provide an exhuastive account of issues enountered in vocabulary construction.

Throughout this module, references will be made back to other vocabulary modules for additional context - but this module stands alone as an activity that does not rely heavily on exernal references. If you do need to step back and learn first  what vocabularies are and used for, the  [_Introduction to Vocabularies_](/concepts/vocabs/introduction) module will help.

### Raw Vocabulary Data
Vocabularies often exist in semi-structured forms, such as in documents, spreadsheets or database tables. In this module a spreadsheet is provided - the Icecream Flavours spreadsheet includes a single column of terms. The spreadsheet is basically scraped from a [Wikipedia](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) page, with a little tidying up. 

**Download** [docs/docs/assets/3rdparty/source/icecream-flavours.xlsx] to get started!

> 💡 Should we be citing Wikipedia somehow? Don't worry, we will! In a later step well add some metadata to the vocbulary that indicates the source with a web link.

In column A you will see a list of icecream flavors. Notice that these are separated into three groups (FRUIT FLAVORS; CHOCOLATE, NUTS AND OTHER SWEETS; SAVORY FLAVORS). We'll reflect these groupings in the transformed data.

You may also notice that some of the flavors include additional documentation - for example:

> Neapolitan : composed of vanilla, chocolate and strawberry ice cream together side by side

We will separate the label "Neapolitan" from "composed of vanilla, chocolate..." and retain both in different vocabulary fields. 

You will notice that these terms are un-identified - that is, there is no identifier or code for each term. Identifiers are absolutely necessary for progressing the vocabulary through each stage through to publication. In many cases, term lists already have codes assigned - it's a good idea to reuse to reuse those codes if possible. In this exercise we assume that no codes exist, and we will implement these.

#### Separate labels from definitions

**Move the definitions into column B** 
For a list this size, you could do this manually, or use MS Excel 'text to columns' method, using the ":" character as a delimiter. 

> 💡 Be careful to review data after using text to columns or other delimiting process. The delimiter you choose could also be in the definitions - you might end up with three or more colums wiht definitions split up. You won't need to worry about this in the icecream-flavours.xlsx example.

**Add header "Definition" to column B**

> 💡 Some of the column B data may not look like true definitions, but rather history or useage notes. Don't worry, we'll split these up further in a later step.

After this step, the spreadsheet should resemble icecream-flavours-def.xlsx - move on to the next step.

#### Add identifiers

The sample file does not include a codes column - _identifiers are necessary in a SKOS vocabulary that conforming to any standard or practice_. It's a good idea to use any identifiers that already exist for a draft vocabulary, but for this exercise we will need to mint new onces. We will add identifiers using the UUID scheme. 

> Why are we using the UUID scheme? If you want to learn more about identifier strategy, see [creation#identifiers] for a guideance.

1. Insert a column before the labels 

VocExcel is a spreadsheet based tool that allows you to easily import and transform large amounts of raw vocabulary data. Vocabularies often exist in static documents and tables - these can be pasted into the VocEdit template and transformed into a SKOS vocabulary using the VocExcel tranformation service. 

2. Generate UUIDs for column A

**Paste the following code** into Cell (A,1) and copy to the end of the list:

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

> 💡 the prefix "icf" is a based on the proposed vocabulary name "Icecream Flavors" - for readability, it's a good idea to choose prefixes that indicate, or give a hint on what the vocabulary elements are. When using the code above for a different vocabulary project, update the second line accordingly, so for example for a "Textured Vegetable Protein" vocabulary you might update this line to "tvp:" (the ":" colon character is mandatory).

**Paste values into a new column**
Insert a new column, and use the copy and paste values option to transform the identifiers into absolute values (that won't get accidently recalculated with further steps).

**Delete the column with the formulas**

**Add column header** "Identifier". 

After this step, the spreadsheet should resemble icecream-flavours-ids.xlsx - move on to the next step.

#### Find synonyms

We will add synonyms, or alternative labels, that exist in the file. There are two fields that synonyms can be found in:

- the Label - sometimes the term has an alternative term indicated by parenthetical qualifier, such as "Ube (purple yam)" - we can use "purple yam" as an alternative label
- definitions - some definitons mention synonyms explicitly, such as "Cherry : includes variations (e.g. Amaretto cherry, black cherry)". We will add both "Amaretto cherry" and "black cherry" as alternative labels

> 💡 Are the synonyms for Cherry really synonyms, or are they more specific flavor types? In this step, but don't worry, we'll treat them as synonyms now but look at promoting these to separate, identified vocabulary concepts in a later step. Want to know more about alternative labels now? see [introduction#alternative-labels] section in the Introduction module.

**add column with header "Alternate Label"** to the right of the Definition column
**remove "purple yam"** text from the "Ube" label and past in the Alternate Label column (same row). Delete the remaining parentheses ().
**add "amaretto cherry" and "black cherry"** in the Alternate Label column in the same row as the Cherry label. 
**delete "(e.g. Amaretto cherry, black cherry)"** from the Definition for Cherry.

After this step, the spreadsheet should resemble icecream-flavours-altLabels.xlsx - move on to the next step.

#### Add more definitions

In the (#separate-labels-from-definitionseparate-labels-from-definitions) step, we extracted definitions from the source text. In this step we will add definitions for the remaining terms.

> 💡 Some vocabulary standards and tools will expect a definition for each concept for the vocabulary to be valid. In this exercise we will treat definitions as mandatory for publication.

We will get definitions from the the Wikipedia page that the source list links to.

**Open** [List of ice cream flavors](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) in your browser.
**Select a flavour that needs a definition** - from the top, this is a link to "Banana split". 
**Cut and paste** the first sentence from the [Banana split](https://en.wikipedia.org/wiki/Banana_split) page into the Definition column in the same row as Banana split.

> 💡 Note that the [List of ice cream flavors](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) page is a dynamic, user-contributed list and items may differ over time. 

**Repeat** for remaining concepts that do not have definitions.

After this step, the spreadsheet should resemble icecream-flavours-all-definined.xlsx - move on to the next step.

#### Curate definitions

You may notice that the extracted definitions are mostly indicative but not always clear in context. For example:

> A banana split is an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise, and served with ice cream and sauce between the two pieces.

This essentially defines a 'banana split', and not banana split flavored icecream. A simple edit can be made:

> A flavour based on a banana split, an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise, and served with ice cream and sauce between the two pieces.




### VocEdit

Throughout these Vocabulary modules we have presented exercises that direct you to save vocabulary files to your desktop - you can close VocEdit, open it again and just return to that same file to continue editing. But what if a file needs to be reviewed, edited or validated outside the VocEdit tool? And you may want to store your vocabulary where others can access it. VocEdit is integrated with GitHub to achieve these goals. 

#### 🚧 Save a vocabulary to GitHub

> 💡 This exercise assumes you have a vocabulary saved in a GitHub repository that you have permission to configure. Don't have a vocabulary? You can upload the file from the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) to your GitHub repository.  

1. **Go to** the KurrawongAI [VocEdit](https://tools.kurrawong.ai/vocedit) in Chrome browser.
2. **Select** **Integrations** > **GitHub** > **GitHub App Configuration**
3. **Select** a GitHub account from the list
4. **Select** _Only select repositories_ (this is the most anticipated option for training and first time users - but select _All repositories_ if needed)
5. **Select repositories** (assuming you selected _Only select repositories_ option)
6. **Select** the repository where you have a vocabulary file
7. **Install & Authorise** -

> 💡 if you do not have permissions to install in the repository, the button in the last step will read _Authorise & Request_. In this case you will need to request access before proceeding with GitHub integration.

8. **Save**
9. **Project** > **Open** > **GitHub File** - you will be presented with the repository that you configured > **Select** > **Next**
10. Either create a new branch or select an existing branch > **Next**
11. Select a vocabulary file
12. Edit the vocabulary - any changes that you like
13. Save
14. **Project** > **Save**
15. Go to your GitHub repository - note the change!

Close your project in VocEdit. The next time you return to this same project:

16. **Project** > **Open** > **GitHub File**

Now your vocabulary is available in your GitHub repository where it can be reviewed, edited, accessed over the web and even deployed. 

### VocExcel

VocExcel is a vocabulary editor that is essentially a MS Excel template. Using VocExcel, you will be creating vocabulary data in tabular form. Don't worry, VocExcel comes with a transformation service that will convert the Excel file into a range of RDF formats.

> 💡 _VocExcel_ is more suitable for simple or 'flat' vocabularies, such as a vocabulary where all `skos:Concept` s are top concepts of a `skos:ConceptScheme`. VocExcel can technically handle a vocabulary of any hierarchy depth, but anything beyond a two-level vocabulary (top concepts with one level of `skos:narrower` concepts), is not as well-supported. For deeper, multi-level hierarchy vocabularies we recommend _VocEdit_.

To walk you through VocExcel features, we'll create a vocabulary from scratch. 

#### 🚧 Create a vocabulary in VocExcel

> 💡 You will need access to MS Excel to do this exercise.

1. **Go to** the KurrawongAI [VocExcel](https://tools.kurrawong.ai/vocexcel) in any browser.
2. **Get VocExcel Template**
3. **Open** the downloaded template (it may have opened automatically)
4. **Save As** a new file, e.g. "VocExcel-newVocab.xlsx"

> VocExcel will open at the _Introduction_ tab. Note also the _Documentation_ tab, which gives you a rundown of the properties that you may be editing.

5. **Open** the _Concept Scheme_ tab

> On the Concept Scheme tab you can create a new Concept Scheme for the vocabulary. Note that VocExcel conforms to the [VocPub Specification](https://agldwg.github.io/vocpub-profile/specification.html), and some fields with an asterisk (*) are mandatory - they are:

> - Vocabulary IRI
> - Preferred Label
> - Definition
> - Creation Date (yyyy-mm-dd)
> - Modified Date (yyyy-mm-dd) - repeat the Creation Date if this is the first edit
> - Creator
> - Publisher
> - History Note

6. Add data for all mandatory fields in the Concept Scheme
7. **Open** the _Concept_ tab
8. Add data for all mandatory fields for a Concept
9. **Save** the template
10. Go to [VocExcel](https://tools.kurrawong.ai/vocexcel) in any browser.
11. **Upload an Excel or RDF file** > choose MS Excel file you just saved > **Upload**

You will be presented with a Result. From here you can view the Concept Scheme or any Concept in the file, or the Full RDF Turtle result.

> 💡 Why not try downloading the RDF, uploading it to a GitHub repository, and continuing on with the [VocEdit + GitHub](#vocedit-+-github) steps above? Both VocEdit and VocExcel generate vocabulary data in the same format - you can switch between the tools if you like!

## SHACL Validator
You can check that your vocabulary is valid by using a SHACL validator. What does _valid_ mean, and what is SHACL? 

A vocabulary validator will typically check for two things:

- the RDF syntax is valid - e.g. there are correct end of line terminators; all prefixes are defined;
- the vocabulary conforms to some vocabulary profile - a set of rules or quality measures that state what classes and properties feature in the vocabulary, and that certain datatypes are used to express property values.

SHACL (W3C, 2017), or the _Shapes Constraint Language_, is a way of encoding a vocabulary profile so that it is machine-readable and used in some tool to check a vocabulary's conformance with that profile. 

A SHACL file can be used in various validation tools and services - here we'll demonstrate the KurrawongAI SHACL Validator, with a special focus on the VocPub profile, through an exercise.

🎬 You can find out about the SHACL Validator on the [KurrawongAI YouTube](https://www.youtube.com/watch?v=aOiEVHHfOMc) channel.


### 🚧 Validate a vocabulary with VocPub SHACL Validator

1. **Go to** the KurrawongAI [SHACL Validator](https://tools.kurrawong.ai/validate) in any browser 
2. **Data to validate** > **Upload** > select `pestRiskPath_training.ttl` (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*) 
3. **Data to validate** form > **Upload**
4. Scroll down to **SHACL Shapes** form
5. **Use Validators** > expand **VocPub** > **Add** the most recent version > **Close**
6. **Validate**

A page of Validation Results will launch. This report lets you know where your vocabulary does not conform to the VocPub profile. The messages are colour coded and indicate issues in your vocabulary that are:

- a 🔴 Violation - these issues MUST be addressed for the vocabulary to conform with VocPub specification;
- a 🟡 Warning - it is recommended that these issues are addressed, but your vocabulary is still valid if you do not; and
- _Informational_ - these are optional improvements to the vocabulary

> 💡 Below these results, a **Full Validation Report** is also available.

Note that each message includes a reference to the VocPub specification, such as:

> _For http://example.com/pestRiskPath: Requirement 2.15 - modified date - violated_

The Requirement referred to here can be looked up in the VocPub Specification in the [Vocabulary](https://linked.data.gov.au/def/vocpub/spec#vocabulary) section (as this violation refers to a `skos:ConceptScheme`) at Requirement 2.15.

>💡 **Tip:** Looking up the VocPub Specification requirement gives you more information about the Warning given in the Validator Results.


## RDF Converter

This and other modules have featured exercises using Turtle (.ttl) files. Turtle is just one RDF serialisation - there are other standard formats that vocabulary data can be managed in. 

The RDF Converter can be used to both transform Turtle files into other formats and also to improve Turtle file management. The Converter can:
- transform RDF between formats such as Turtle, JSON-LD and XML
- apply prefixes, improving both file readability and minimizing file size by shortening IRIs.

The two exercises below demonstrate how the KurrawongAI [RDF Converter](https://tools.kurrawong.ai/convert) can be used to convert SKOS vocabularies into different formats and also apply prefixes.  

### 🚧 Convert a Turtle file to XML

1. **Go to** the KurrawongAI [RDF Converter](https://tools.kurrawong.ai/convert) in any browser 
2. **RDF Data** > **Upload** > select `pestRiskPath_training.ttl` (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*) 
3. Next to the Convert button, select **XML** > **Convert**
4. Scroll down to **RDF Output** form
5. Copy or download results

>💡 **Tip:** XML is a W3C Recommendation (W3C, 2008)

### 🚧 Apply prefixes to a Turtle file

1. **Go to** the KurrawongAI [RDF Converter](https://tools.kurrawong.ai/convert) in any browser 
2. In a separate tab or window, **Go to** [Public Policy Taxonomy](https://vocabs.ardc.edu.au/viewById/309) at Research Vocabularies Australia.
3. **Download** > .ttl file
4. **RDF Data** > **Upload** > select `apo_public-policy-taxonomy_[date].ttl`
5. In the RDF Data form, add to the prefixes near the top of the file: `@prefix ppt: <https://linked.data.gov.au/def/policy/> .`
6. Next to the Convert button, select **Turtle** > **Convert**

The Output will have shortened IRIs for each `skos:Concept`, such as:
* `https://linked.data.gov.au/def/policy/1e0b0209-a519-4167-9165-2c3e1b753bb7` , transformed to:
* `ppt:1e0b0209-a519-4167-9165-2c3e1b753bb7`

Prefixes can substantially reduce file sizes. Note also that the RDF Converter re-orders the prefixes alphabetically, which improves human readability. The RDF Converter also removes any un-used prefixes in the input file.

💡 In Turtle format, prefixes may be declared with one of two different syntaxes:
* `@prefix <https://linked.data.gov.au/def/policy/> .` OR
* `PREFIX <https://linked.data.gov.au/def/policy/>`

A trailing space and period (" .") must be included in the old Turtle format, and `PREFIX` must be all UPPERCASE in the new Turtle format. The Converter will accept either, but may transform prefixes between syntax formats.

<br>

## References and Further Reading

* AGLDWG (2025). VocPub profile specification. https://agldwg.github.io/vocpub-profile/specification
* W3C (n.d.). QSKOS. Retrieved March 5, 2025. https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2008). Extensible Markup Language (XML) 1.0 (W3C Recommendation). https://www.w3.org/TR/xml/
* W3C (2009). SKOS Simple Knowledge Organization System Reference (W3C Recommendation). https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). https://www.w3.org/TR/turtle/
* W3C (2017). Shapes Constraint Language (SHACL) (W3C Recommendation). https://www.w3.org/TR/shacl
* W3C (2020). JSON-LD 1.1: A JSON-based serialization for Linked Data (W3C Recommendation). https://www.w3.org/TR/json-ld11/

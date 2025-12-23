
# Vocabulary Systems



>
>***Scope***
>
>This content is intended to provide guidance on the use of vocabulary systems that support editing and validation of vocabularies.
>
>***Audience***
>
>_This module is primarily targeted to managers and editors of established vocabularies. It is assumed that learners have some experience with data management in practice._
>
>***Outcome***
>
> Learners should be able to use systems to edit, validate, transform and version vocabularies.
>
>----------------

> 💡 _Identifies troubleshooting tips, common errors and potential issues._

> 🚧 _Exercises_

> 🎬 _videos_

## Introduction
Vocabularies are data, and data management inevitably requires application support. Vocabularies are no different! In this module we will step you through some vocabulary systems developed by KurrawongAI that will make the task of managing vocabularies easier.

If you've been working through [_Introduction to Vocabularies_](/concepts/vocabs/introduction), [_Advanced Vocabulary Editing_](/concepts/vocabs/creation) or [_Vocabulary Reuse_](/concepts/vocabs/vocab-reuse), you will have already encountered a key tool in any vocabulary managers toolkit: an editor. In this module we will look again at _VocEdit_, but draw your attention to a _VocEdit > GitHub_ integration feature that help you manage vocabulary review and versioning. We'll also introduce you to _VocExcel_, a spreadsheet-based tool for editing simple vocabularies. And we'll introduce tools that help you validate a vocabulary, and a tool that converts a vocabulary from one RDF format to another.

## Vocabulary editing tools

KurrawongAI has develped VodEdit and VocExcel for editing and managing vocabulary data. Each feature different requirements and strengths suited to different workflows. We also mention [PoolParty](https://www.poolparty.biz), an editor that is available via commercial license, or in Australia a non-commercial feature-limited license is available for research institutions via the [Research Vocabularies Australia[(https://documentation.ardc.edu.au/rva/what-is-rva-editor-poolparty) service. 

In short, these systems best address the following scenarios:

**VocEdit**

- no client-side setup
- editing deep, complex hierarchies
- GitHub integtration

**VocExcel**

- minimal client-side setup
- bulk-load vocabulary data from tables
- extending profiles (SKOS+, VocPub+)

**PoolParty**

- database backend
- mulit-lingual vocabularies
- native support for multiple formats

<br>

|  | VocEdit | VocExcel | PoolParty
|:-------------|:--------|:--------------|:---------------------|
| sign-up required | NO | NO | YES |
| tech requirements | browser (Chrome) | browser, MS Excel | browser (Firefox, Chrome, MS Edge)|
| bulk load from spreadsheet | NO | YES | YES |
| support for deep hierarchy editing | YES | limited | YES |
| VocPub conformance | YES | YES | NO |
| add non-VocPub properties | per concept | per vocabulary | per vocabulary |
| RDF formats | Turtle | Turtle | many |
| file management | GitHub integration | local directory | database |

> 💡 Migrating vocabulary data between VocExcel and VocEdit is seemless. PoolParty will ingest data from VocExcel or VocEdit, and will store and output data with minor syntactic differences. It's a good idea to consider the relative strengths of each system, but as these systems all have RDF and SKOS as core business logic, lock-in scenarios are minimal. 

<br>

### VocEdit + GitHub

Throughout these Vocabulary modules we have presented exercises that direct you to save vocabulary files to your desktop - you can close _VocEdit_, open it again and just return to that same file to continue editing. But what if a file needs to be reviewed, edited or validated outside the _VocEdit_ tool? And you may want to store your vocabulary where others can access it. VocEdit is integrated with GitHub to achieve these goals. 

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

> On the Concept Scheme tab you can create a new Concept Scheme for the vocabulary. Note that VocExcel conforms to the [VocPub Specification](https://agldwg.github.io/vocpub-profile/specification.html), and some fields with an asterix (*) are mandatory - they are:

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
5. **Use Validators** > expand **VocPub > **Add** the most recent version > **Close**
6. **Validate**

A page of Validation Results will launch. This report lets you know where your vocabulary does not conform to the VocPub profile. The messages are colour coded and indicates issues in your vocabulary that are:

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

The two exercises below demonstrate how the KurrawongAI [RDF Coverter](https://tools.kurrawong.ai/convert) can be used to convert SKOS vocabularies into different formats and also apply prefixes.  

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
5. In the RDF Data form, add to the prefixes section near the top of the file:
- `@prefix <https://linked.data.gov.au/def/policy/> .`
6. Next to the Convert button, select **Turtle** > **Convert**

The Output will have shortened IRIs for each `skos:Concept`, such as `https://linked.data.gov.au/def/policy/1e0b0209-a519-4167-9165-2c3e1b753bb7` transformed to `ppt:1e0b0209-a519-4167-9165-2c3e1b753bb7`. Prefixes can substantially reduce file sizes Note also that the Converter re-orders the prefixes in alphabetical order, which supports human readability. The Converter also removes any un-used prefixes in the input file.

>💡 In Turtle, prefixes may be declared with two different syntaxes: `@prefix <https://linked.data.gov.au/def/policy/> .` OR `PREFIX <https://linked.data.gov.au/def/policy/>`. Note that a trailing space and period (" .") must be included in the old Turtle format, and `PREFIX` must be all uppercase in the new Turtle format. The Converter will accept either, but may transform prefixes between syntax formats.

<br>

## References and Further Reading

* AGLDWG (2025). VocPub profile specification. https://agldwg.github.io/vocpub-profile/specification
* W3C (n.d.). QSKOS. Retrieved March 5, 2025. https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2008). Extensible Markup Language (XML) 1.0 (W3C Recommendation). https://www.w3.org/TR/xml/
* W3C (2009). SKOS Simple Knowledge Organization System Reference (W3C Recommendation). https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). https://www.w3.org/TR/turtle/
* W3C (2017). Shapes Constraint Language (SHACL) (W3C Recommendation). https://www.w3.org/TR/shacl
* W3C (2020). JSON-LD 1.1: A JSON-based serialization for Linked Data (W3C Recommendation). https://www.w3.org/TR/json-ld11/

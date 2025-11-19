
# Vocabulary Systems



>
>***Scope***
>
>This content is in intended to provide guidance on the use of vocabulary systems. It will introduce systems that support editing and validation of vocabularies.
>
>***Audience***
>
>_This module is primarily targeted to managers and editors of established vocabularies. It is assumed that learners have some experience with data management in practice._
>
>***Outcome***
>
> Learners should be able to use systems to edit, vadidate, transform and version vocabularies.
>
>----------------

💡 _Identifies troubleshooting tips, common errors and potential issues._

> 🚧 _Exercises_

> 🎬 _videos_

## Introduction
Vocabularies are data, and data management inevitably requires application support. Vocabularies are no different! In this module we will step you through some vocabualry systems developed by KurrawongAI that will make the task of managing vocabularies easier.

If you've been working through _Introduction to Voabularies_, _Advanced Vocabulary Editing_, _Vocabulary Patterns_ or Vocabulary Resue, you will have already encountered a key tool in any vocabualry managers tookkit: an editor. In this module we will look at _VocEdit_ again, but draw your attention to a _VocEdit > GitHub_ integration feature that help you manage vocabulary review and versioning. We'll also introduce you to a spreadsheet-based tool for editing simple vocabularies. And we'll introduce tools that help you validate a vocabulary, and and a tool that converts a vocabulary from one RDF format to another. 


## VocEdit + GitHub

Throughout these Vocabulary modules we have presented excersises that assume you are saving a vocabulary file to your desktop - you can close _VocEdit_, open it again and just return to that same file to continue editing. But what if a file needs to be checked, validated, or edited outside of the _VocEdit_ tool? And you may want to store your vocabulary where ohthers can access it. VocEdit can be integrated with GitHub to achieve these goals. 

### 🚧 _Exercises_ Save a vocabulary to GitHub

> 💡 This exercise assumes you have at least one GitHub repository that you have permission to configure it.

1. **Go to** the KurrawongAI [VocEdit](https://tools.kurrawong.ai/vocedit) in Chrome brower.
2. **Select** **Integrations** > **GitHub** > **GitHub App Configuration**
3. **Select** a GitHub account from the list
4. **Select** _Only select repositories_ (this is the most anticipated option for training and first time users - but you can select _All repositories_ if needed)
5. **Select repositories** (assuming you selected _Only select repositories_ option)
6. **Select** a repository where you will save vocabulary files to
7. **Install & Authorise** -

> 💡 note that if you do not have permissions to install in a given repository, the button in the last step will read _Authorise & Request_). In this case you will need to be granted access before proceeding with the integration.

8. **Save**
10. 

## VocExcel

VocExcel is a vocabulary editor that is essentially a MS Excel template. Using VocExcel, you will be creating vocabualry data in tabular form. Don't worry, VocExcel comes with a transformation service that will convert the Excel file format into a range of RDF formats.

> 💡 _VocExcel_ is more suitable for simple or 'flat' vocabularies, such as a vocabulary where all `skos:Concept` s are top concepts of a `skos:ConceptSchem`. VocExcel can technically handle a vocabulary of any hierarchy depth, but anything beyond a two-level vocabualry (top concepts with one level of `skos:narrower` concepts), is not as well supported. For deeper, multi-level hierarchy vocabularies we recommend _VodEdit_.

To walk you through VocExcel features, we'll create a vocabualry from scratch. 

### 🚧 _Exercises_ Create a vocabulary in VocExcel

> 💡 You will need access to MS Excel to do this exercise

1. **Go to** the KurrawongAI [VocExcel](https://tools.kurrawong.ai/vocexcel) in any brower.
2. **Get VocExcel Template**
3. 

## 
  


## SHACL Validator
You can check that your vocabulary is valid by using a SHACL validator. What does _valid_ mean, and what is SHACL? 

A vocabulary validator will typically check for two things:

- the RDF syntax is valid - e.g. there are correct end of line terminators; all prefixes are defined;
- the vocabulary conforms to some vocabulary profile - a set of rules or quality measures that state what classes and properties feature in the vocabulary, and that certain datatypes are used to express property values.

SHACL (W3C, 2017), or the _Shapes Constraint Language_, is a way of encoding a vocabulary profile so that it is machine-readable and used in some tool to check a vocabulary's conformance with that profile. 

A SHACL file can be used in various validation tools and services - here we'll demonstrate the KurrawongAI SHACL Validator, with a special focus on the VocPub profile, through an excersise.

🎬 You can find out about the SHACL Validator on the [KurrawongAI YouTube](https://www.youtube.com/watch?v=aOiEVHHfOMc) channel.


### 🚧 Validate a vocabulary with VocPub SHACL Validator

1. **Go to** the KurrawongAI [SHACL Validator](https://tools.kurrawong.ai/validate) in any browser 
2. **Data to validate** > **Upload** > select `pestRiskPath_training.ttl` (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*) 
3. **Data to validate** form > **Upload**
4. Scroll down to **SHACL Shapes* form
5. **Use Validators** > expand **VocPub > *Add** the most recent version > **Close**
6. **Validate**

A page of Validation Results will launch. This report let's you know where your vocabulary does not conform to the VocPub profile. The messages are colour coded and indicates issues in your vocabulary that are:

- a 🔴 Violation - these issues MUST be addressed for the vocabulary to coform with VocPub specification;
- a 🟡 Warning - it is recommended that these issues are addressed, but your vocabulary is still valid if you do not; and
- _Informational_ - these are optional improvements to the vocabulary

> 💡 Below these results, a **Full Vaidation Report** is also available.

Note that each message includes a reference to the VocPub specification, such as:

<pre>For http://example.com/pestRiskPath: Requirement 2.15 - modified date - violated_</pre>

The Requirement referred to here can be looked up in the VocPub Specification in the [Vocabulary] (https://linked.data.gov.au/def/vocpub/spec#vocabulary) section (as this violation refers to a `skos:ConcpetSchem`) at Requirement 2.15.

>💡 **Tip:** Looking up the VocPub Specification requirement gives you more information about the Warning given in the Validator Results.


## RDF Converter

This and other modules have featured excersies using Turtle (.ttl) files. Turtle is just one RDF serialisation - there are other standard formats that vocabulary data can be managed in. 

What if you have a vocabualry file that needs to be in a different format? KurrawongAI have develped an [RDF Coverter](https://tools.kurrawong.ai/convert). This coverter can be used to transform RDF files (not just SKOS vocabularies) into different formats. 

### 🚧 Convert a Turtle file to XML

1. **Go to** the KurrawongAI [RDF Converter](https://tools.kurrawong.ai/convert) in any browser 
2. **RDF Data** > **Upload** > select `pestRiskPath_training.ttl` (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*) 
3. Next to the Convert button, select **XML** > **Convert**
4. Scroll down to **RDF Output** form
5. Copy or download results

>💡 **Tip:** XML is a W3C Recommendation (W3C, 2008)


## References and Further Reading

* AGLDWG (2025). VocPub profile specification. https://agldwg.github.io/vocpub-profile/specification
* W3C (n.d.). QSKOS. Retrieved March 5, 2025, from https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2008). Extensible Markup Language (XML) 1.0 (W3C Recommendation). https://www.w3.org/TR/xml/
* W3C (2009). SKOS Simple Knowledge Organization System Reference (W3C Recommendation). https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). https://www.w3.org/TR/turtle/
* W3C (2017). Shapes Constraint Language (SHACL) (W3C Recommendation). https://www.w3.org/TR/shacl
* W3C (2020). JSON-LD 1.1: A JSON-based serialization for Linked Data (W3C Recommendation). https://www.w3.org/TR/json-ld11/

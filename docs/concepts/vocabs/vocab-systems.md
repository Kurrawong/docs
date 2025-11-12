
# Vocabulary Systems



>
>***Scope***
>
>This content is in intended to provide guidance on the use of vocabulary systems. It will introduce systems that support editing and validation of vocabularies.
>
>***Audience***
>
>_This module is primarily targeted to managers and users (vocab owners and contributors) of established vocabularies. It is assumed that learners have some experience with using document management or version control systems, and general familiarity with data management in practice._
>
>***Outcome***
>
>_Learners should be able to use systems to edit, vadidate, transform and version vocabularies.
>
>----------------

💡 _Identifies troubleshooting tips, common errors and potential issues._

> 📝 _Notes that summarise content at the end of a module._

> 🚧 _Exercises_

> 🎬 _videos_

## Introduction


## VocEdit + GitHub


### 🚧 _Exercises_ Save a vocabulary to GitHub

## VocExcel


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

<pre>_For http://example.com/pestRiskPath:
_Requirement 2.15 - modified date - violated_</pre>


The Requirement referred to here can be looked up in the VocPub Specification in the [Vocabulary] (https://linked.data.gov.au/def/vocpub/spec#vocabulary) section (as this violation refers to a `skos:ConcpetSchem`) at Requirement 2.15.

>💡 **Tip:** Looking up the VocPub Specification requirement gives you more information about the Warning given in the Validator Results.


## RDF Converter

This and other modules have featured excersies using Turtle (.ttl) files. Turtle is just one RDF serialisation - there are other standard formats that vocabulary data can be managed in. 

What if you have a vocabualry file that needs to be in a different format? KurrawongAI have develped an [RDF Coverter](https://tools.kurrawong.ai/convert). This coverter can be used to transform RDF files (not just SKOS vocabularies) into different formats. 

### 🚧 Convert a Turtle file to JSON

1. **Go to** the KurrawongAI [RDF Converter](https://tools.kurrawong.ai/convert) in any browser 
2. **RDF Data** > **Upload** > select `pestRiskPath_training.ttl` (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*) 
3. Next to the Convert button, select **JSON-LD** > **Convert**
4. Scroll down to **RDF Output** form
5. Copy or download results

>💡 JSON-LD is a W3C Recommendation (W3C, 2020)


## References and Further Reading

* AGLDWG (2025). VocPub profile specification. https://agldwg.github.io/vocpub-profile/specification
* W3C (n.d.). QSKOS. Retrieved March 5, 2025, from https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2009). SKOS Simple Knowledge Organization System Reference (W3C Recommendation). https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). https://www.w3.org/TR/turtle/
* W3C (2017). Shapes Constraint Language (SHACL) (W3C Recommendation). https://www.w3.org/TR/shacl
* W3C (2020). JSON-LD 1.1: A JSON-based serialization for Linked Data (W3C Recommendation). https://www.w3.org/TR/json-ld11/

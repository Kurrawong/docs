
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


### 🚧 Validate a SKOS vocabulary with the VocPub SHACL validator

1. **Go to** the KurrawongAI [SHACL Validator](https://tools.kurrawong.ai/validate) in any browser 
2. **Data to validate** > **Upload** > select `pestRiskPath_training.ttl` (*don't have the file? see the [first exercise](https://docs.kurrawong.ai/concepts/vocabs/introduction/#minimum-properties-preflabel-definition-and-identifier) in Introduction to Vocabularies*) 
3. **Data to validate** form > **Upload**
4. Scroll down to **SHACL Shapes* form
5. **Use Validators** > expand **VocPub > *Add** the most recent version > **Close**
6. **Validate**

A page of Validation Results will launch. This report let's you know where your vocabulary does not conform to the VocPub profile. The messages are colour coded and indicates issues in your vocabulary that are:

<span style="color:red">This text is red</span>

- a <span style="color:red">Violation</span> - these issues MUST be addressed for the vocabulary to coform with VocPub specification;
- a <span style="color:green">Warning</span> - it is recommended that these issues are addressed, but your vocabulary is still valid if you do not; and
- _Informational_ - these are optional improvements to the vocabulary

💡 **Tip:** Below these results, a **Full Vaidation Report** is also available.

Note that each message includes a reference to the VocPub specification, such as:

For http://example.com/pestRiskPath:
Requirement 2.15 - modified date - violated

The Requirement referred to here can be looked up in the VocPub Specification in the [Vocabulary] (https://linked.data.gov.au/def/vocpub/spec#vocabulary) section (as this violation refers to a `skos:ConcpetSchem`) at Requirement 2.15.

💡 **Tip:** Looking up the VocPub Specification requirement gives you more information about the Warning given in the Validator Results.


## RDF Converter


  
### 🚧 _Exercises_ Save a vocabulary to GitHub

# References and Further Reading

* AGLDWG. (n.d.). VocPub profile specification. https://agldwg.github.io/vocpub-profile/specification
* W3C (n.d.). QSKOS. Retrieved March 5, 2025, from https://www.w3.org/2001/sw/wiki/QSKOS
* W3C (2009). SKOS reference. https://www.w3.org/TR/skos-reference/
* W3C (2014). Turtle: Terse RDF triple language (W3C Recommendation). Retrieved from https://www.w3.org/TR/turtle/
* W3C (2017). Shapes Constraint Language (SHACL). https://www.w3.org/TR/shacl

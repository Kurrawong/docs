# kurra

![](/assets/logo-kurra.svg){width="750"}

kurra is a Python package and command-line application for working with Knowledge Graph ([RDF](https://www.w3.org/RDF/)) 
data. It provides file conversion and hierarchy tools, label handling, SPARQL access, SHACL validation, Graph Store 
Protocol operations, and database helpers.

It is built on top of [RDFLib](/products/3rdparty/rdflib/) and, over time, some of its functionality is likely to be 
absorbed into RDFLib.

It supplies functions to:

* manipulate local RDF files
* send commands to RDF databases - "triplestores"
* query files or databases using the [SPARQL](https://en.wikipedia.org/wiki/SPARQL) query language

kurra has detailed documentation for installation and use at its repository's home page:

* **<https://kurrawong.github.io/kurra/>**

!!! note

    kurra is a dependency of other KurrawongAI tooling, in particular
	[KGM](kgm.md).

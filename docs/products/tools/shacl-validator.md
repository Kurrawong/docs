# SHACL validator

Our RDF data validation too uses the [Shapes Constraint Language, SHACL](https://www.w3.org/TR/shacl/), validate RDF against either rules. The rules can be supplied by the user or selected from a number of preloaded validators we have collected from our work.

The tool is built on top of the [pySHACL](https://pypi.org/project/pyshacl/) open source validation tool and is available online at:

* <https://tools.kurrawong.ai/validate>.

The preloaded validators it contains are sourced from a list of validators in our [Semantic Background](https://github.com/Kurrawong/semantic-background/tree/main/resources/validators/items), a reference set of semantic resources we maintain.

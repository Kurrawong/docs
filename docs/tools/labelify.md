# labelify

labelify is a Python module and command line utility that identifies unlabelled resources in a graph.
It is highly configurable and works on a number of different RDF data sources.

If you would like to use the labelify tool directly, we provide an online GUI for some of our most useful tools [here](https://tools.dev.kurrawong.ai/). Alternatively, click [here](https://github.com/Kurrawong/labelify)to access the labelify repository in GitHub.

---
Example command line use:

```shell
pip install git+https://github.com/Kurrawong/labelify
```

## Command Line Usage

Find all missing labels in `myOntology.ttl:`

```bash
labelify myOntology.ttl
```

Find missing labels for all the predicates (not subjects or objects) in `myOntology.ttl:`

```bash
labelify myOntology.ttl --nodetype predicates
```

Find all missing labels in `myOntology.ttl` taking into account the labels which have been defined in
another file called `supportingVocab.ttl`.

_but don't check for missing labels in `supportingVocab.ttl`_

```bash
labelify myOntology.ttl --context supportingVocab.ttl
```

Same as above but use the additional labelling predicates given in `myLabellingPredicates.txt.`

_By default only rdfs:label is used as a labelling predicate._

```bash
labelify myOntology.ttl --context supportingVocab.ttl --labels myLabellingPredicates.txt
```

Where `myLabellingPredicates.txt` is a list of labelling predicates (one per line and unprefixed):

[source,txt]
```
http://www.w3.org/2004/02/skos/core#prefLabel
http://schema.org/name
```

And finally, find all the missing labels in the subgraph `http://example-graph`
at the sparql endpoint `http://mytriplestore/sparql` using basic HTTP auth to connect.

_labelify will prompt for the password or it can be provided with the `--password` flag if you dont
mind it being saved to the shell history.

```bash
labelify http://mytriplestore/sparql --graph http://example-graph --username admin
```

## Command line output formats

By default, Labelify will print helpful progress and configuration messages and attempt to group the
missing labels by namespace, making it easier to quickly parse the output.

The `--raw` option can be appended to any of the examples above to tell labelify to only print the
uris of objects with missing labels (one per line) and no other messages. This is useful for command
line composition if you wish to pipe the output into another process.

## More command line options

For more help and the complete list of command line options just run `labelify --help`

As per unix conventions all the flags shown above can also be used with short codes.
i.e. `-g` is the same as `--graph`.

## Usage as a module

print missing labels for all the objects (not subjects or predicates) in `myOntology.ttl`.
Take into account any labels which have been defined in files in the `supportingVocabs` directory.
Using skos:prefLabel and rdfs:label as the labelling predicates

```python
from labelify import get_missing_labels
from rdflib import Graph
from rdflib.namespace import RDFS, SKOS
import glob

graph = Graph().parse("myOntology.ttl")
context_graph = Graph()
for context_file in glob.glob("supportingVocabs/*.ttl"):
    context_graph.parse(context_file)
labelling_predicates = [SKOS.prefLabel, RDFS.label],
nodetype = "objects"

missing_labels = get_missing_labels(
    graph,
    context_graph,
    labelling_predicates,
    nodetype
)
print(missing_labels)
```

<<<<<<< HEAD
As per the command line script further above, this use within a Python script looks for missing labels within the RDF file tests/one/data-access-rights.ttl, supplying any that it can from tests/one/background/ and treating `skos:prefLabel` and `rdfs:label` as labelling predicates.

Full command line usage documentation:

```shell
usage: labelify [-h] [-v] [-c CONTEXT] [-s {true,false}] [-l LABELS] [-n {subjects,predicates,objects,all}] [-e {true,false}] input

positional arguments:
  input                 Input RDF file being analysed

options:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  -c CONTEXT, --context CONTEXT
                        A folder path containing RDF files or a single RDF file path to the ontology(ies) containing labels for the input
  -s {true,false}, --supress {true,false}
                        Produces no output if set to 'true'. This is used for testing only
  -l LABELS, --labels LABELS
                        A list of predicates (IRIs) to looks for that indicate labels. A comma-delimited list may be supplied or the path of a file containing labelling IRIs, one per line
                        may be supplied. Default is RDFS.label
  -n {subjects,predicates,objects,all}, --nodetype {subjects,predicates,objects,all}
                        The type of node you want to check for labels. Select 'subject', 'predicate', 'object' or 'all'
  -e {true,false}, --evaluate {true,false}
                        Evaluate nodes in the context graphs for labels
```

---
## Installation

This tool uses Python’s [Poetry](https://python-poetry.org/) dependency manager so you can load the necessary dependencies into a Python virtual environment by running `python poetry install` in the root directory of the GitHub repository.

After that, the `labelify` command line tool will work, on Linux/Mac.

---
## License

[BSD-3-Clause](https://opensource.org/license/bsd-3-clause/) license.

---
## Development

### Install Python dependencies
=======
## Development

### Installing from source

Clone the repository and install the dependencies
>>>>>>> origin/main

_labelify uses https://python-poetry.org/[Poetry] to manage its dependencies._

```bash
git clone git@github.com:Kurrawong/labelify.git
cd labelify
poetry install
```

You can then use labelify from the command line

```bash
poetry shell
python labelify/ ...
```

### Running tests

```bash
poetry run pytest
```

### Formatting the codebase

```bash
poetry run black . && poetry run ruff check --fix labelify/
```

## License

https://opensource.org/license/bsd-3-clause/[BSD-3-Clause], if anyone is asking.


## Contact

*KurrawongAI* +
info@kurrawong.ai +
https://kurrawong.ai

---
Visit the KurrawongAI [tools](https://kurrawong.ai/services/tools) page for more information on our specialised Knowledge Graph Tooling Support. 

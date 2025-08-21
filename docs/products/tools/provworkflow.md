# ProvWorkflow

ProvWorkflow records the provenance of Python workflows in RDF according to the Prov Workflow Ontology and the Prov Data Model.

## Installation

The package is [available in PyPi](https://pypi.org/project/provworkflow/) and can be installed with

```bash
pip install provworkflow
```

The source code is available publicly on GitHub at https://github.com/Kurrawong/provworkflow

## Usage

ProvWorkflow can be used to record the usage and generation of Entities as part of a workflow process.

The following example demonstrates how you might use ProvWorkflow to record the usage of local and remote entities in a script.
It also records the generation of some local and remote entities.

The workflow is done in two Blocks, each having its own recorded inputs and outputs.

Finally the workflow is serialised as RDF in the turtle format and printed to the console.

```python
from provworkflow import Workflow, Block, Entity

# set up the Workflow and Block
w = Workflow(label="My Simple Workflow 2")
b = Block()

# Block 1
b.used = [
    Entity(value="local data"),
    Entity(uri="http://example.com/endpoint"),
]
e_int = Entity(label="Internal Entity")
e_ext = Entity(label="External Entity", external=True)
b.generated = [e_int, e_ext]
w.blocks.append(b)

# Block 2
b2 = Block()
b2.used = [Entity(value="other local data"), e_int, e_ext]
b2.generated.append(
    Entity(uri="http://somewhere-on-s3/d/e/f", label="Final Workflow Output")
)
w.blocks.append(b2)

# print out
print(w.prov_to_graph().serialize(format="turtle"))

```

Currently provworkflow is only documented in the source code. But a public repository and accompanying tool documentation is on the way.

If you would like to see some of our tools in use, we provide an online GUI with some of our most useful tools [here](https://tools.kurrawong.ai/).

To find out more about other ways KurrawongAI could provide Knowledge Graph tools that solve *your* data problems, visit the KurrawongAI [tools](https://kurrawong.ai/services/tools) page for more information on our specialised Knowledge Graph Tooling Support. 
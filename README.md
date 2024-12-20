# KurrawongAI docs

This repository contains the source code for [KurrawongAI](https://kurrawong.ai)'s documentation website:

* <https://docs.kurrawong.ai>

## License & Rights

This repository's content is available for reuse according to the [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

This content is copyright as follows:

&copy; KurrawongAI, 2024

## Contacts

For all matters, please contact:

**KurrawongAI**  
<info@kurrawong.ai>

# Technical Operations

This repository uses the [MkDocs](https://www.mkdocs.org/) tool to build a static website - just HTML pages, no database etc. - from simple [Markdown](https://www.markdownguide.org/) text files and images.

MkDocs uses [Python](https://www.python.org/) scripting to compile the Markdown files, images etc. into HTML. It can be run locally - on a desktop/laptop - to test documentation changes, and pushed to GitHub to be auto-deployed.

To serve this content as a static site locally, run:

`mkdocs serve`
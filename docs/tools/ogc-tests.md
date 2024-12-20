# OGC API Test Suite
--- unofficial ---

Kurrawong AI maintains an unofficial, open source, Python implementation of the Open GeoSpatial Consortium's \[OGC] Java based test suite.
## What does it do
The test suite tries to verify the compliance of an endpoint against several standards defined by the OGC. The standards define how an API should be structured as well as the content and format of the responses it returns.

The standards are:

1. [Features API Part 1 Core](https://docs.ogc.org/is/17-069r3/17-069r3.html)
2. [Features API Part 2 CRS](https://docs.ogc.org/is/18-058r1/18-058r1.html)
3. [Features API Part 3 Filtering](https://docs.ogc.org/DRAFTS/19-079r1.html#_cql2_functions)
4. [Features API Part 4 CRUD](https://docs.ogc.org/DRAFTS/20-002.html)
5. [Features API Part 5 Schemas](https://docs.ogc.org/DRAFTS/23-058.html)
6. [Records API Part 1 Core](https://docs.ogc.org/DRAFTS/20-004.html)

> Note that only the Features API Part 1 Core is currently implemented.

The official test suite for the Features API Part 1 can be found [here]([ets-ogcapi-features10](https://github.com/opengeospatial/ets-ogcapi-features10)) and Part 2 [here]([ets-ogcapi-features10-part2](https://github.com/opengeospatial/ets-ogcapi-features10-part2)).

## How to get it
The test suite is available on PyPi, and can be installed in the usual way.

```bash
$ python -m pip install ogctests
```

## How to run it
Instructions on how to run the test suite are available on [PyPi](https://pypi.org/project/ogctests/) and [GitHub](https://github.com/Kurrawong/ogctests).

## Why make another one
This test suite was designed to be used internally at KurrawongAI while developing Prez to be compliant with the OGC API specifications.

This test suite is not designed to replace the official test suite and is not able to verify compliance with the standards in any kind of official capacity.
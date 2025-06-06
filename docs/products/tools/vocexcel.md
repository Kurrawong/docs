# VocExcel

#python #cli

VocExcel is a Python library that converts Excel workbooks into [SKOS](https://www.w3.org/TR/skos-primer/) vocabularies.

VocExcel:

* uses fixed templates to keep it simple
* meets particular SKOS profile outcomes ([VocPub](https://w3id.org/profile/vocpub))
* is under active development, production use, and is commercially supported

An online version of VocExcel is available at <https://tools.dev.kurrawong.ai/vocexcel>. For other applications, access the GitHub repository [here](https://github.com/Kurrawong/VocExcel).

---
## Creating vocabularies

The process to create an RDF vocabulary from an Excel template is:

1. Fill in a copy of an Excel template
2. Process it
** Using one of the options, and export an RDF file
** You can choose to validate the RDF produced while processing
### Templates

The GitHub repository includes a *templates/* folder that is to be used to create vocabularies. The templates hopefully contain all the information needed to understand how to fill them in.

Use one Excel workbook per vocabulary.

Unless you have a good reason to do something different, please use the latest version of the template.

Older templates still convert, so if you've used one and like it, keep using it.

### Examples

Example filled-in templates versions are given in the `tests/` folder of the GitHub repository. Just ensure you're looking at examples prefixed with the same template version you are after, e.g. 0.6.0 = 060_simple.xlsx*

---
## Processing

To process an Excel template, you will need to either:

* run the VocExcel Python script, or
* use an Online tool

The Python script can also run as a Python module, i.e. within a larger Python workflow.

### Installation

You will need to:

1. have Python installed on your computer
* 3.6+ required
2. install the required packages in your environment or a virtual environment
    * you can use the https://python-poetry.org/docs/basic-usage/[Poetry] tool with the _pyproject.toml_ file, or
    * a `requirements.txt` file is also provided for basic Python PIP package installation

### Running

#### As a command line script

The Python script `convert.py` in the `vocexcel/` directory can be run on Windows/Unix/Linux/Mac systems like this:

`~$ python convert.py some-excel-file.xlsx`

The command line argument options can be found by typing:

`~$ python convert.py -h`

They are:

```shell

usage: vocexcel [-h] [-i] [-l] [-v] [-p PROFILE] [-o OUTPUTFILE] [-f {turtle,xml,json-ld}] [-s SHEET] [-t TEMPLATEFILE] [-e ERRORLEVEL] [-m MESSAGELEVEL] [-g LOGFILE] [file_to_convert]
`positional arguments:
  file_to_convert       The Excel file to convert to a SKOS vocabulary in RDF or an RDF file to convert to an Excel file (default: None)

optional arguments:
  -h, --help            show this help message and exit
  -i, --info            The version and other info of this instance of VocExcel. (default: False)
  -l, --listprofiles    This flag, if set, must be the only flag supplied. It will cause the program to list all the vocabulary profiles that this converter, indicating both their URI and their short token for use with
                        the -p (--profile) flag when converting Excel files (default: False)
  -v, --validate        Validate output file (default: False)
  -p PROFILE, --profile PROFILE
                        A profile - a specified information model - for a vocabulary. This tool understands several profiles andyou can choose which one you want to convert the Excel file according to. The list of
                        profiles - URIs and their corresponding tokens - supported by VocExcel, can be found by running the program with the flag -lp or --listprofiles. (default: vocpub)
  -o OUTPUTFILE, --outputfile OUTPUTFILE
                        An optionally-provided output file path. If not provided, output is to standard out. (default: None)
  -f {turtle,xml,json-ld,graph}, --outputformat {turtle,xml,json-ld,graph}
                        An optionally-provided output format for RDF outputs. 'graph' returns the in-memory graph object, not serialized RDF. (default: turtle)
  -s SHEET, --sheet SHEET
                        The sheet within the target Excel Workbook to process (default: vocabulary)
  -t TEMPLATEFILE, --templatefile TEMPLATEFILE
                        An optionally-provided Excel-template file to be used in SKOS-> Excel converion. (default: None)
  -e ERRORLEVEL, --errorlevel ERRORLEVEL
                        The minimum severity level which fails validation (default: 1)
  -m MESSAGELEVEL, --messagelevel MESSAGELEVEL
                        The minimum severity level printed to console (default: 1)
  -g LOGFILE, --logfile LOGFILE
                        The file to write logging output to (default: None)
```

#### As a library

The _convert.py_ file as a function that you can call to do conversions: `excel_to_rdf()`, like this:

`from vocexcel import convert
`from pathlib import Path`
`convert.rdf_to_excel(Path(".") / "path" / "to" / "vocab-file.xlsx")```

#### Online

<https://tools.dev.kurrawong.ai/vocexcel>

---
## License

This code is licensed using the BSD 3-Clause. See the _LICENSE_ for the deed. Note that Excel is property of Microsoft.

---
## Contact

**Commercial support**: +
info@kurrawong.ai

*Lead Developer*: +
**Nicholas Car** +
*Data System Architect* +
https://kurrawong.ai[KurrawongAI] +
nick@kurrawong.ai
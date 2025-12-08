# VocExcel

VocExcel is a Python library that converts Excel workbooks into [SKOS](https://www.w3.org/TR/skos-primer/) vocabularies.

Features:

* uses fixed templates to keep it simple
* meets particular SKOS profile outcomes ([VocPub](https://w3id.org/profile/vocpub))
* is under active development, production use, and is commercially supported

An online version of VocExcel is available at [https://tools.kurrawong.ai/vocexcel](https://tools.kurrawong.ai/tools/vocexcel). For other applications, access the GitHub repository [here](https://github.com/Kurrawong/VocExcel).

---
## Creating vocabularies

The process to create a SKOS vocabulary from an Excel template is:

1. Fill in a copy of an Excel template
2. Process it
    * Using one of the options given below, and export an RDF file
    * You can choose to validate the RDF produced while processing
   
### Templates

The GitHub repository [includes a *templates/* folder](https://github.com/Kurrawong/VocExcel/tree/main/vocexcel/templates) that lists all in use templates. 

The templates should contain all the information needed fill them in - see the _Documentation_ sheet and info at the top of all the other sheets.

Use one Excel workbook per vocabulary.

Unless you have a good reason to do something different, please use [the latest version of the template](https://github.com/kurrawong/vocexcel?tab=readme-ov-file#latest-template). There are template variants created for specific organisations. 

Older templates still work if listed in the templates folder, so if you've used one and like it, keep using it.

### Examples

Example filled-in templates versions are given in the `tests/` folder of the GitHub repository. Just ensure you're looking at examples prefixed with the same template version you are after, e.g. 0.9.0 = 090.xlsx

---
## Processing

To process an Excel template, you will need to either:

* use the Online tool
    * <https://tools.kurrawong.ai/vocexcel>
* run the VocExcel Python script

See the [GitHub README file for script running details](https://github.com/kurrawong/vocexcel?tab=readme-ov-file#processing).

---
## License

VocExcel is licensed using the BSD 3-Clause. See the _LICENSE_ file in the GitHub repository for the deed. Note that Excel is property of Microsoft.

---
## Contact & Support

**Commercial Support**:  
info@kurrawong.ai

*Lead Developer*:  
**Nicholas Car**  
*Data System Architect*  
https://kurrawong.ai[KurrawongAI]  
<nick@kurrawong.ai>

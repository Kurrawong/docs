# Preparing Data for Display in Prez

#prez #fuseki #prezui

When loading your data into a triple store for display in Prez there are some steps
that you can take in preparation to make the experience as smooth as possible.

The following steps describe the recommended way to prepare your data for loading to
into the Prez system.

1.  Arrange the data into two folders.

    1.  data and metadata

        The data and metadata folder is all the RDF that makes up your dataset. This includes
        resource definitions, containers, collections, vocabularies, ontologies, catalogs, etc.
        It is the data that you actually want to load into the Prez system.

        This folder can have subfolders to logically group the data. The important part
        is just to seperate the main data from any required annotations or background
        data (discussed in the next bullet point).

        Typically, you would have a hierarchy of resources, such as for a vocabulary

            dcat:Catalog
                ⤷ (dcterms:hasPart) skos:ConceptScheme
                    ⤷ (skos:hasTopConcept) skos:Concept

        The data and metadata folder should contain declarations and definitions for all
        these resources.

    2.  background annotations

        The background folder contains labels and descriptions for resources that are
        referenced but not defined in the data you want to load. For example, you may
        have be using the made up dog ontology to declare that

        ```turtle
        dog:fifi dog:tailWaggingStyle "vigorous" .
        ```

        But you haven't -and have no intention of- defining a label for the
        `dog:tailWaggingStyle` predicate. In this case, the label is defined
        externally (in the `dog` ontology) and we just need to include the label
        so that the predicate can be displayed neatly in Prez, but we don't need
        to include the whole ontology.

        In this case a declaration such as

        ```turtle
        dog:tailWaggingStyle rdfs:label "Tail wagging style" .
        ```

        Should be added to the background annotations folder.

        > **NOTE**  
        > Prez includes some annotations out of the box. You can see which annotations are
        > included by checking [here](https://github.com/RDFLib/prez/tree/main/prez/reference_data/annotations).
        >
        > These annotations are taken from the [semantic background](https://github.com/kurrawong/semantic-background/).
        > A public repository of annotations for most of the major public ontologies.

        > **IMPORTANT**  
        > The reason for separating out the annotations like this is so that you can
        > feed them into a tool like Labelify as 'context' when checking for missing
        > labels. It also allows you to easily load background data into a separate 
        > named graph which is often a useful strategy.

2.  Validate the data

    It's always a good idea to ensure that the data is valid before trying to load it. This
    will save time and catch errors early.

    There are a selection of tools available that can
    be used to validate RDF data. For an easy to use web based validator, check out [SHACL
    Validator](https://tools.dev.kurrawong.ai/validate). It can be used to check if your RDF
    is syntactically valid, and enforce that your data conforms that any
    [SHACL](https://www.w3.org/TR/shacl/) rules that may apply. Note that if no SHACL
    shapes are provided then the tool will just validate the RDF.

3.  Check for missing labels

    As mentioned above when loading data into Prez it is important to ensure that all
    resources are properly annotated, otherwise they cannot be rendered nicely in the UI.

    To see which labels are missing from your data you can use [Labelify](https://tools.dev.kurrawong.ai/labelify).
    An online RDF labelling tool that can help you easily identify any missing labels.

    Remember that Prez includes [annotations for most major ontologies](https://github.com/RDFLib/prez/tree/main/prez/reference_data/annotations)
    out of the box, so you don't need to include those again.


4. Complete

    You should now be able to load data into Prez and have it nicely presented. For
    troubleshooting and common gotchas check the FAQ.

## FAQ

- ...

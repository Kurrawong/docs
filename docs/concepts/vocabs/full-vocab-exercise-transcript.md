# Vocab full exercise video script

## Introduction

Hello. In this video I'm going to walk you through a step-by-step exercise where we will create and publish a vocabulary from scratch. This exercise will be useful if you already know a bit about vocabularies - what they do, and how they help to manage data. Here's your chance to jump off if I'm already not making any sense - if you want an Introduction to Vocabularies, there's a guide at the KurrawongAI website [_Introduction to Vocabularies_](/concepts/vocabs/introduction). Hope to see you back here if you want to know more about building and publishing vocabularies.

There are three parts to this exercise:

[overview slide]

First, vocabularies are all around - in raw, unstructured or semi-structured formats. Using an example, we'll walk you through preparing raw vocabulary data so that it's ready for transformation into a standard web-ready vocabulary.

Then, we'll take some cleaned up vocabulary data and dot all the i's and cross all the t's using a free vocabulary editing tool, and you'll end up with a standard vocabulary file that actually works in information systems.

And in the last exercise, we'll walk you through publishing the vocabulary in a searchable, browsable vocabulary web interface. In fact you'll be able to manage the vocabulary in future using the publishing  platform, because it also has editing tools for future changes.

OK, let's start with working with raw vocabulary data.

## I Love Ice-cream

[icecream slide]
I love ice-cream. Ice-cream is one of those foods that I'd pick if I was stuck on a desert island and had to choose just one food - or is that dessert island? Anyway, Ice-cream is just the best. 

[coffee icecream slide]
Coffee flavour is go-to flavour. The only flavour that knocks it out of first place is hot-cross-bun flavoured ice-cream

[hot cross bun slide]

...which tends to be a bit seasonal. And the un-sung hero of Ice-cream? Vanilla. How did vanilla get to be such a pejorative term. Beats me.

So naturally, we're going to make an ice cream flavours vocabulary. This will give us the chance to explore some basic concepts in vocabulary construction, such as:

[slide]

- labelling - what makes a good ice-cream flavour name, and what to do when there are different names for a flavour
- definitions - what needs to be said when describing a flavour, and making sure definitions are clear and future-proof
- relationships between flavours. One flavour might be a 'type' of another flavour, or some flavours might share some kind of characteristic - we want to group these together with relationships or by creating special collections

## 🚧 Start with some raw data

[section title slide]

OK as much as I Love Ice-Cream, I don't actually keep a list of ice-cream flavours lying around. But I found a list at [Wikipedia](https://en.wikipedia.org/wiki/List_of_ice_cream_flavors) 

[Wikipedia slide]

Let's use the List of ice cream flavours as a starting point. This is what you might call semi-structured vocabulary data - the flavours here are already arranged into some groups, and many already have definitions or descriptions.

[Wikipedia slide close up slide]

Some descriptions mention that a flavour is known by many names - we can use that.

By the way, in the finished published vocabulary, we'll cite the Wikipedia page as source material.

OK so we're going to scrape this page into a spreadsheet. This can be messy work - we've got a an Excel file with the scraped flavours and you can download it from [here] to get started. 

**Download** the sample file  
<a href="../../assets/3rdparty/source/icecream-flavours.xlsx" download>
  icecream-flavours.xlsx
</a>

[spreadsheet slide column A]
In column A you can see the list of ice cream flavours. These are separated into three groups: **FRUIT FLAVORS; CHOCOLATE, NUTS AND OTHER SWEETS; SAVORY FLAVORS**. We'll reflect these groupings in the final vocabulary.

Here is one of those descriptions:

[spreadsheet slide description]
_Neapolitan : composed of vanilla, chocolate and strawberry ice cream together side by side_

## Add identifiers

[section title]

For vocabulary to work on the web and in information systems, each flavour needs an identifier. In many cases, term lists already have identifiers or codes — it is a good idea to reuse any existing codes if possible. But in this case we will need to make some new identifiers.

Let's make a new colum to the left of the flavours.

Now, how do we decide what the identifiers are?

There are three common approaches here, and each has strengths and weaknesses:

[Identifier types prefLabel]

First, you can use the name of the flavour as the identifier. Sounds easy, doesn't it? Just copy and paste the label into a new identifier column. Well, this is easy at first, but it can be trouble later. What if we want to change the label? You must not change the identifier - identifiers need to be persistent or it's not really a controlled vocabulary. Using the label is always tempting, but we recommend that you don't use this approach.

[Identifier types increment]

Second, you can just number them 1,2,3,4 and so on. This is pretty easy to do, and if the label changes, the new label doesn't look weird or confusing next to the identifier.

[Identifier types UUID]

Third, you can use a randomly generated long identifier that can't be duplicated - or at least it's VERY unlikely to be duplicated. If you and someone else were both working on a vocabulary at the same time, and using this identifier method, it would be almost impossible that you'd accidentally create duplicate identifiers. This is probably the gold standard from a pure design perspective. But practice, many people don't use it because these identifiers are too long to display, and you can't easily refer to an identifier like this in conversation. Trust me, I've tried - it's not pretty. 

[Identifier types increment - tick]

So we're going to take the second option - as easy as 1,2,3. 

[Prefix slide, annimated]

There's just one more thing - the identifier needs to include a prefix - a short code that indicates what  vocabulary the flavour belongs to, and also with a colon. So in the new column A cell 2, we'll type "icf:1", where "icf" is an acronym for Ice Cream Flavours, and "1" is the identifier for the first flavour here. Now drag that cell all the way down so that each label as an identifier.

So now column A will now include values like `icf:1`, `icf:2` and so on. OK so I said this would be as easy as 1,2,3, well that was a slight exaggeration. But as we like to say in data management, you'll thank me later for this step.

Just a bit of house-keeping now - we're going to **Delete** the identifiers for these empty rows — but we will **keep** the identifiers for the grouping terms such as **FRUIT FLAVORS**. 

Ok if you're editing a spreadsheet with me, save your file! If you're not, there's a finished spreadsheet to download later on.

## Separate labels from definitions

[section slide]

OK now we're going to separate the flavour names, which are called labels, from the notes, which we will now call definitions.

[text to colums slide, animated]

For a list this size, you could do this manually, or use MS Excel’s **Text-to-Columns** function, using the `:` character as a delimiter.

[be careful slide]

But be careful to review the data after using Text-to-Columns. The delimiter you choose may also appear in the definitions, so you could end up with three or more columns with the definitions split up.

[definition looks odd slide]

Now you might think that some of these definitions here don't look like real definitions, but more like notes about the flavours history or some other context. Don’t worry — we will tidy some of these up later.

## Find synonyms

[section slide]

Are there other names for these flavours? Probably! Some alternative names can already be found right here in the file. 

[Purple yam slide]

For example look at `Ube (purple yam)`; when you see parentheses like this it often means there is a synonym, or another name for the same thing. 

[Cherry slide]

Also, look at the definition for `Cherry` - it reads "includes variations (e.g. `Amaretto cherry`, `Black cherry`". Great! We can use those terms as alternative labels too.

Ok you might be wondering if `Amaretto cherry` and `Black cherry` are really synonyms for Cherry, or if they are actually more specific flavour types. For now, we’ll treat them as synonyms, but later we’ll look at promoting these as separate flavours in their own right.

[add altLabel column and labels slide, animated]

So now let's **Add** a column with heading `Alternate Label` to the right of the `Definition` column; we'll **Remove** the `Purple yam` text from the `Ube` label and paste it into the `Alternate Label` column in the same row. Also delete the remaining parentheses `()`.

And now we'll **Add** `Amaretto cherry` and `Black cherry` in the `Alternate Label` column in the same row as the `Cherry` label

We also need to **Delete** those references from the `Definition` field.

## Add remaining definitions

[section slide]

Now you can see that not all of these flavours came packaged with definitions. In this step we will add some ones. Some vocabulary standards and tools will expect a definition for every item in the vocabulary, and so we are going to assume that this field is mandatory, even if you do think the flavour name is self-explanatory. 

[get more definitions from Wiki slide]

Let's just get some definitions text from the Wikipedia pages that the ice cream flavours list links to.

- **Open** that [List of ice cream flavors] again in your browser
- **Select** a flavour that needs a definition — from the top of the list, this is `Banana split`
- **Copy and paste** the first sentence from the [Banana split](https://en.wikipedia.org/wiki/Banana_split) page into the `Definition` column in the same row as `Banana split`

Now this is Wikipedia - the list you can see in this video may look a little different by the time you're watching this video. Don't worry - if Banana split is off the menu by then, just search the web for another definition, or write your own if you think you know what this flavour is all about.

So this method works for twenty, or maybe even a hundred items in your vocabulary. 

[hundres of rows slide]

But what if you need definitions for hundreds or even thousands of labels? 

It's best if each term has a curated definition, and that might require significant effort. Depending on what your vocabulary is for, that effort may be warranted! If it's not practical in the early stages of vocabulary development, 

[append prefix phrase slide]

try copying the term label into the definition field, and just append `ice cream flavor` as a suffix. This may not seem like a very rich definition, but at least we've clarified that 'banana split' means `banana split ice cream flavor`, and not the famous dessert that the flavour is based on. You might have to review bulk-created definitions like this later - for now, the vocabulary data will at least be valid and we will be able to transform it to a standard vocabulary format.

## Curate definitions

[section slide]

I'm just going to edit one of the flavours to give you a taste of what makes for a good definition. You may notice that the Wikipedia definitions are mostly sensible but not always clear in context. For example:

[definitions unsuitable slide]

> A banana split is an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise, and served with ice cream and sauce between the two pieces.

This essentially defines a _banana split_, not _banana split flavoured ice cream_. A simple edit can be made:

> **An ice cream flavour based on a banana split**, an American ice cream-based dessert consisting of a peeled banana cut in half lengthwise...

oh, and if you don't like the imperialist overtones there, how about 

> **An ice cream flavour based on a banana split**, an ice cream-based dessert consisting of a peeled banana cut in half lengthwise...

Here's a similar case:

[goody goody gum drops slide]
the definition for `Goody Goody Gum Drops` just reads `unique to New Zealand` - this is not a definition, it's just context. Let's change it to `Goody Goody Gum Drops ice cream flavor`. If you decide that the regional context is necessary, then change the definition to `Goody Goody Gum Drops ice cream flavor, unique to New Zealand`.

## Use a vocabulary editor
[section slide]

OK that's all of the preparation work we need to do in this spreadsheet. So far we have:

[progress so far slide]

- separated out identifiers form labels; from alternate labels; and from definitions
- we've found some alternative labels that were hiding out in labels and definition fields, and
- we've done a bit of editing to make the definitions more suitable

Well done. So now we will cut and paste this spreadsheet into a special template that will format this data, and then we'll do a bit more editing that we need to do so that the vocabulary data is in a valid format.

## Download VocExcel

[section slide]

_VocExcel_ is a a _Microsoft Excel_ template. 

[VocExcel slide]
Ok now open any browser and go to the KurrawongAI [VocExcel](https://tools.kurrawong.ai/vocexcel) page

Get the VocExcel Template here

And let's save this file as `VocExcel-ice-cream-flavor.xlsx`

[VocExcel into tab slide]

When you open VocExcel it will open at the _Introduction_ tab. 

[VocExcel into documentation slide]

There is also a _Documentation_ tab, which we don't really need to look at for this exercise. It's this next tab - "Concept Scheme" - that I'm going to walk you through now.

[VocExcel concept scheme slide]

The Concept Scheme is a description of the vocabulary as a whole. Some fields on this tab have an asterisk (`*`) next to them, and these fields are mandatory. Ok I'm going to fill these out now:

[VocExcel concept scheme slide, animated]

- **Vocabulary IRI** — this is the identifer for the vocabulary. This needs to be a web URL indicating where the vocabulary will be hosted. We're using a fictional domain for this exercise, so I'm adding `http://vocab.example.com/icecreamflavors`
- **Preferred Label** — add `Ice Cream Flavors Vocabulary` - keep the vocabulary name simple - you can say more about the vocabulary in the next field, which is
- **Definition** — add `A vocabulary of ice cream flavors`. We could add more here, such as "based on Wikipeida list", or "created for the National Ice Cream Flavours Repository Project", or whatever makes sense. The definition can be longer than that if it needs to be - but you're not writing an essay here. Just think about what would help someone if they stumbled across this vocabualry and wanted to know a bit more about it.
- **Creation Date** — add the day that you first edit this file in `yyyy-mm-dd` format
- **Modified Date** — if you save this file on a later day, update this field. For now, we need to just add the same date as the creation date
- **Creator** — this is either your name or the name of a business or perhaps your team's name. You can add text or an identifier, e.g. 

[creator name or ID slide]
 
You can just enter plain text like `Jane Doe`, `Japan Ice Cream Association`, 

but if you already have a web identifier such as an ORCID or ROR identifier, that's even better - add these:

`https://orcid.org/0000-0002-1584-4316`, or `https://ror.org/02hgxnr90`

[VocExcel concept scheme slide, animated, continued]

- **Publisher** — this is the same as for Creator. Usually the Publisher is an organisation rather than a person, but either is valid, so "My vocabulary publishing company" would be fine, or an identifier if you have one.
- **History Note** — we will add `Presented here for the first time as part of the KurrawongAI Vocabulary Full Exercise training video` - that's all we at KurrawongAI ask in terms of acknowledging us, many thanks. You can add other text here later, for example you can update this field when you make substantial changes to the vocabualry, but you don't need to update it everytime you update the modification date.

That completes the mandatory fields for describing a vocabulary. But we also said we would cite Wikipedia as the source of the raw data. Let’s do that now:

- **Citation** — add the page URL `https://en.wikipedia.org/wiki/List_of_ice_cream_flavors`

Once published, that link will take anyone who is interested in where the source data came from back to where we started - how's that for provenance!

## Add concepts

[section slide]

We will now copy the contents of the raw data file into the VocExcel template in the `Concepts` tab.

[add concepts slide]

- **Cut and paste** the first four columns from `icecream-flavours-all-curated-definitions.xlsx` into the first four columns in the VocExcel file, including the grouping terms (`FRUIT FLAVORS`, etc.) - these don't have definitions yet, don't worry we'll deal with that soon. 

## Create collections

[section slide]

Now about those grouping terms `FRUIT FLAVORS`, `CHOCOLATE, NUTS AND OTHER SWEETS`, `SAVORY FLAVORS`? We're going to use those terms to create _collections_. Collections are a way of grouping concepts _within_ a vocabulary.

[cut and paste collection labels slide]

- **Cut** just the three grouping terms with identifiers from the `Concepts` tab and **paste** them into the `Collections` tab. _Keep these in the same rows._

[cut and paste collection IDs slide]

- **Copy** the remaining identifiers from the `Concepts` tab and **paste** to the `Collections` tab `Member IRIs` column

[add collection definitions slide]

- **Add** a definition for each collection, e.g. `Ice cream fruit flavors collection`

[copy collection IDs and delete rows, animated]

- **Copy** the collection IRI, label and descriptions so they line up with each member concept
- **Delete** any remaining empty **rows**, _including the first row(s) if empty_, on the `Concepts` tab.

## Add prefixes

[section slide]

Remember we added those prefixes to the flavour IDs? `icf:`. We now need to add this prefix to the `Prefixes` tab.

[add prefixes to prefix tab slide, animated]

- **Open** the `Prefixes` tab
- **Add** `icf` in column A 'Prefix' (_without_ the colon `:`)
- **Add** `http://vocab.example.com/icecreamflavors/` in column B 'Namespace' (include the trailing "/")

See? The prefix is like a shorthand way of indicating the URL for the vocabulary. When we upload the data into a publishing environment, the identifier for each flavour will be this URL with the short id as a suffix. 

## Add relationships between flavours

[section slide]

The _Ice Cream Flavours Vocabulary_ is mostly a simple list, but we can link flavours together. Let's do this for `Vanilla` and `French vanilla`, because we can safely assume that French vanilla is a type of Vanilla.  

[add narrower vanilla slide, animated]

so **Open** the `Concepts` tab
 **Copy** the Concept ID for `French vanilla`
 **Paste** the ID for `French vanilla` in the `Narrower Concept IRIs` column, in the same row as the `Vanilla` concept

Done. The Ice Cream Flavours Vocabulary is now a taxonomy!

[flat list with one indented term slide]

— that means, that some of the vocabulary is arranged in a hierarchy. In some vocabularies, every item belongs within a hierarchy or tree structure - ok we're not going to try to do that in this exercise (but if you do, why not share the results with us!)

[strawberry cheese cake slide]

You might see other opportunities to add narrower relationships, for example `Strawberry` / `Strawberry cheesecake`. But think about it this way: if you wanted to find all information about `Strawberry` ice cream, would you be happy also to retrieve information about `Strawberry cheesecake` ice cream? If the answer is yes, then add strawberry cheesecake as a narrower flavour of `Strawberry`. If the answer is no, then leave these concepts unrelated. Just because they both include the word 'strawberry' may not mean that they are similar enough to treat as one-is-a-type-of-the-other. These decisions can be subjective - think about people using your vocabulary, for example for browsing information, what would they expect? 

[cherry slide]

What about the `Cherry` flavour and its variants? In an earlier step, we extracted synonyms from the definition and stored them as alternate labels. But now let's treat these variations as flavours in their own right, with their own identifiers, definitions, collection membership, and potentially relationships to other flavours.

[promote black cherry slide, animated]

I'm going to cut the term `Black cherry` from the `Alternate Label` column here, and paste it into a new row in this `Preferred Label` column

And now this is a new independent flavour, and so it needs an identifier, so I'm going to give it the next increment number - later when we edit in the publication system platform, the system will generate these IDs for you and make sure there are no duplicates.

And now I'm going to write a definition for `Black cherry` — I could go and do some research here, but for now I'm just going to write `Black cherry ice cream flavor`

one more step: I'm going to copy this new concept ID to a new row in the `Collections` tab in the `FRUIT FLAVORS` collection group. I hope you agree that Black Cherry belongs in this collection. 

[amaretto cherry slide]

You can repeat the same steps for `Amaretto cherry` — or leave it as an alternative label if you like. Just apply the same decision-making logic for promoting `Black cherry` - if I searched for Black cherry in some catalogue, would I be happy to find information about plain old 'regular cherry'? If so, then make leave it as an alternative label. If not, make it a flavour in its own right and make it narrower to the Cherry flavour.

Ok as promised, there is a finished file that you can download [here] `VocExcel-ice-cream-flavor-hierarchy.xlsx`. This is the file that we are going to upload into a transformer application.

## Transform the file

[section slide]

This is a big moment. The VocExcel spreadsheet is now ready to be uploaded to the online transformer. Well done! Now I'll walk you through these steps:

[vocexcel upload slide]

- **Go to** [VocExcel](https://tools.kurrawong.ai/vocexcel) in any browser
- **Upload** the Excel file > choose the file saved or downloaded in the last step.

You will be presented with a result. 

[VocExcel Turtle view slide]

From here you can view the Concept Scheme information about the Ice Cream Flavours Vocabulary, and the specific ice cream flavours.

Here you can see the full "RDF Turtle" result. If you don't know what RDF or Turtle are, well, I don't mean to sound terse, but you don't need to know to continue to the next stage.

So now **Save** the output here - the saved file will have a ".ttl" file extension.

## Publish the vocabulary

[section slide]

This is where vocabulary work stops being just spreadsheets and starts becoming web architecture.

[progress summary slide]
So far in this exercise you have 
- taken an unstructured list from a single column and transformed it into a standard, valid vocabulary file. - the file is compatible with many information systems that use vocabulary data. 

But what about publishing the vocabulary? 

In this next step you will upload your file to a vocabulary presentation system so that the vocabulary can be searched and browsed on the web. The data itself will also be available to information systems via an API - or an application interface. 

## Introducing K-Maker

The vocabulary publisher and manager we will use is K-Maker. We don't want to tell you if the 'K' stands for Knowledge, or KurrawongAI, or King - King Maker is my personal favourite, and when you've uploaded the Ice Cream Flavours Vocabulary into this free application, ...you’ll feel like a king. Or queen. We did briefly consider Q-Maker.”.

You can read about K-Maker on the KurrawongAI products page. https://kurrawong.ai/products/k-maker. 




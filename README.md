# jStyler
jQuery is used for CSS generator. It's used for applications which are related with UI / UX. To apply CSS for user selected values to the targeted element.

## Is this Usefull?

This is usefull in case:
-- If you get `background-color`, `color`, `font-size`, `line-height` etc from user and apply this in your output generate file. Then, This code is the prototyp for FrontEnd & BackEnd.
- Extend the flexibility of existing code.

## How to use?
Add the data data attribute `data-jstyler` to the targeted element.

###### Objectives:
- It apply either `self` (default) or `targeted css selector`
- Use generated CSS for `normal` (default) or `hover` view.

*Eg.*

#### A) BASIC:

This apply `normal` CSS to `self`

<code> &lt;div data-jstyler='{"background-color":"red","color":"orange"}'&gt; jStyler &lt;/div&gt; </code>

Same with `ShortHand`

<code> &lt;div data-jstyler='{"bg":"red","c":"orange"}'&gt; jStyler &lt;/div&gt; </code>

##### A.1) `JSON` Object for `normal`

This apply CSS with `JSON` object `normal` to `self`

<code> &lt;div data-jstyler='{normal:{bg:"green",c:"red",}'&gt; jStyler &lt;/div&gt; </code>

##### A.2) `JSON` Object for `normal` & `hover`

This apply CSS with `JSON` object `normal` & `hover` to `self`

<code> &lt;div data-jstyler='{normal:{bg:"green",c:"red",},hover:{bg:"red",c:"green",}'&gt; jStyler &lt;/div&gt; </code>


#### B) CSS SELECTOR:

This apply CSS to `self` for CSS selector `.abc`

<code> &lt;div data-jstyler='{"background-color":"red","color":"orange"}' data-jstyler-selector=".abc"&gt; jStyler &lt;/div&gt; </code>

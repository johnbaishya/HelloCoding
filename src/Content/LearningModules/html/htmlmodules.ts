
export const level1module1 = `
# HTML Definition

### **What is HTML?**

HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It uses a system of tags and attributes to define elements on a webpage, such as headings, paragraphs, images, and links.

### **Key Points:**

- **HyperText**: Refers to the ability to link documents together via hyperlinks.
- **Markup Language**: Uses tags (\`<tag>\`) to structure content.
- **Web Browsers**: Read and interpret HTML to display web pages.

## Basic HTML Example:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Basics</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a basic webpage structure.</p>
</body>
</html>
\`\`\`
`;

export const level1module2 = `
# HTML Structure

### **The Structure of an HTML Document**

An HTML document is composed of elements enclosed in tags. These elements define the content and structure of the webpage.

### **HTML Document Structure:**

- **DOCTYPE Declaration**: Specifies the document type.
- **<html>**: Root element of the HTML document.
- **<head>**: Contains metadata and links to external resources.
- **<body>**: Contains the content of the webpage.

### **Basic HTML Structure:**

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Structure</title>
</head>
<body>
    <h1>Understanding HTML Structure</h1>
</body>
</html>
\`\`\`
`;

export const level1module3 = `
# The Document Object Model (DOM)

### **What is the DOM?**

The Document Object Model (DOM) represents the structure of a web page. It allows JavaScript to interact with HTML and XML documents. The DOM makes it possible to change the document structure, style, and content dynamically.

### **Key Points:**

- The DOM is a tree-like structure.
- Each HTML element is represented as a node in the tree.
- JavaScript can manipulate the DOM to create dynamic content.

### **DOM Example:**

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Example</title>
</head>
<body>
    <h1>Manipulating the DOM</h1>
    <p>This is a paragraph.</p>
    <button onclick="changeText()">Click Me</button>
    <script>
        function changeText() {
            document.querySelector('p').textContent = "You clicked the button!";
        }
    </script>
</body>
</html>
\`\`\`
`;

export const level1module4 = `
# HTML File Syntax and Structure

### **Correct Syntax in HTML**

HTML tags should always be properly nested, and most tags should be closed. For example, a <div> element should always have a corresponding </div> closing tag.

### **Important Points:**

- HTML is not case-sensitive, but it’s common practice to use lowercase for tags.
- Always close self-closing tags like <img>, <br>, and <hr> in XHTML, but they are optional in HTML5.

### **Example of Proper HTML Syntax:**

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Syntax</title>
</head>
<body>
    <h1>Good Syntax in HTML</h1>
    <p>Correctly closed tags are important for a valid document.</p>
    <img src="image.jpg" alt="Image">
</body>
</html>
\`\`\`
`;


// Level 2: Basic HTML Tags (continued)

export const level2module1 = `
# HTML Headings

### **Headings in HTML**

Headings are used to define the importance of the content, ranging from <h1> (most important) to <h6> (least important).

### **Example:**

\`\`\`html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Sub Heading</h3>
<h4>Minor Heading</h4>
<h5>Minor Sub Heading</h5>
<h6>Smallest Heading</h6>
\`\`\`
`;

export const level2module2 = `
# Paragraphs

### **What is a Paragraph?**

A paragraph is a block of text enclosed in the <p> tag. It helps separate text into readable sections.

### **Example:**

\`\`\`html
<p>This is a paragraph of text.</p>
<p>HTML allows us to structure text in a meaningful way.</p>
\`\`\`
`;

export const level2module3 = `
# Text Formatting

### **Text Formatting Tags**

HTML allows you to format text with different tags like <strong>, <em>, and <u>.

### **Examples:**

\`\`\`html
<strong>This is bold text.</strong>
<em>This is italic text.</em>
<u>This is underlined text.</u>
\`\`\`
`;

export const level2module4 = `
# Line Breaks

### **Line Breaks in HTML**

The <br> tag creates a line break, allowing you to split text into multiple lines.

### **Example:**

\`\`\`html
<p>This is some text.<br>This is the next line of text.</p>
\`\`\`
`;

export const level2module5 = `
# Horizontal Rules

### **Creating Horizontal Rules**

The <hr> tag creates a horizontal line that separates content visually.

### **Example:**

\`\`\`html
<p>This is content above the line.</p>
<hr>
<p>This is content below the line.</p>
\`\`\`
`;

export const level2module6 = `
# Comments

### **Adding Comments in HTML**

HTML comments are added using the <!-- --> syntax. Comments are not displayed in the browser but are useful for documentation.

### **Example:**

\`\`\`html
<!-- This is a comment. It won't appear in the browser. -->
<p>This is visible content.</p>
\`\`\`
`;


// Level 3: HTML Attributes (continued)

export const level3module1 = `
# Introduction to Attributes

### **What Are Attributes?**

Attributes provide additional information about HTML elements. They are written inside the opening tag of an element.

### **Example:**

\`\`\`html
<a href="https://www.example.com">Visit Example</a>
\`\`\`
`;

export const level3module2 = `
# Global Attributes

### **Common Global Attributes**

Some attributes can be used with almost any HTML element. Examples include id, class, and style.

### **Examples:**

\`\`\`html
<div id="main-container" class="container" style="color: blue;">This is a styled div.</div>
\`\`\`
`;

export const level3module3 = `
# Links and the href Attribute

### **Working with Links**

The <a> tag is used to create hyperlinks. The href attribute defines the URL to link to.

### **Example:**

\`\`\`html
<a href="https://www.example.com">Click here to visit Example</a>
\`\`\`
`;

export const level3module4 = `
# Image Attributes

### **Using Images**

The <img> tag is used to display images. The src attribute specifies the image source, while alt provides an alternative text description.

### **Example:**

\`\`\`html
<img src="image.jpg" alt="An example image">
\`\`\`
`;

export const level3module5 = `
# The Title Attribute

### **What is the Title Attribute?**

The title attribute provides additional information when the user hovers over an element.

### **Example:**

\`\`\`html
<a href="https://www.example.com" title="Visit Example">Example Link</a>
\`\`\`
`;

export const level3module6 = `
# Forms and Form Elements

### **Forms and Input Elements**

Forms are used to collect user input. Common form elements include <input>, <button>, and <select>.

### **Example:**

\`\`\`html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>
\`\`\`
`;

// Level 4: Links and Media (continued)

export const level4module1 = `
# Working with Links

### **Links and Navigation**

The <a> tag is used to create hyperlinks. You can set the href attribute to link to external pages or internal sections.

### **Example:**

\`\`\`html
<a href="https://www.example.com">Go to Example</a>
\`\`\`
`;

export const level4module2 = `
# Opening Links in New Tabs

### **Using target="_blank"**

To open a link in a new tab, use the target="_blank" attribute.

### **Example:**

\`\`\`html
<a href="https://www.example.com" target="_blank">Visit Example</a>
\`\`\`
`;

export const level4module3 = `
# Embedding Images

### **Embedding Images with <img>**

The <img> tag is used to display images on a webpage.

### **Example:**

\`\`\`html
<img src="image.jpg" alt="An example image">
\`\`\`
`;

export const level4module4 = `
# Audio and Video Tags

### **Embedding Audio and Video**

HTML5 allows embedding audio and video using the <audio> and <video> tags.

### **Examples:**

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
\`\`\`

\`\`\`html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
\`\`\`
`;

// Level 4: Links and Media (continued)

export const level4module5 = `
# Embedding Content from Other Sites

### **Using <iframe> to Embed Content**

The <iframe> tag allows embedding content from other websites into your webpage. This is commonly used for embedding videos, maps, or other external resources like social media posts or surveys.

### **Attributes of <iframe>:**

- **src**: Specifies the URL of the page to embed.
- **width** and **height**: Set the dimensions of the iframe.
- **frameborder**: Specifies whether the iframe should have a border.
- **allowfullscreen**: Allows the iframe to be displayed in fullscreen mode.

### **Example:**

\`\`\`html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" frameborder="0" allowfullscreen></iframe>
\`\`\`

### **Use Case:** 
This could be useful for embedding a YouTube video directly on your page, like so:

\`\`\`html
<iframe src="https://www.youtube.com/embed/examplevideoid" width="800" height="450" frameborder="0" allowfullscreen></iframe>
\`\`\`
`;

// Level 5: Lists and Tables

export const level5module1 = `
# Unordered Lists (<ul>)

### **What is an Unordered List?**

An unordered list (<ul>) is a collection of items that do not have any particular order. Each item in the list is placed within an <li> tag.

### **Example:**

\`\`\`html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
</ul>
\`\`\`

### **Use Case:** 
Unordered lists are often used when the order of items is not important, such as listing ingredients, hobbies, or features.

\`\`\`html
<ul>
    <li>Milk</li>
    <li>Cheese</li>
    <li>Yogurt</li>
</ul>
\`\`\`
`;

export const level5module2 = `
# Ordered Lists (<ol>)

### **What is an Ordered List?**

An ordered list (<ol>) is used when the items have a defined order, such as steps in a process or ranking. Items are also wrapped in <li> tags.

### **Example:**

\`\`\`html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
\`\`\`

### **Use Case:** 
Ordered lists are ideal for presenting instructions or rankings.

\`\`\`html
<ol>
    <li>Preheat the oven to 180°C.</li>
    <li>Mix the ingredients.</li>
    <li>Bake for 25 minutes.</li>
</ol>
\`\`\`
`;

export const level5module3 = `
# Definition Lists (<dl>)

### **What is a Definition List?**

A definition list (<dl>) consists of a list of terms and their definitions. It is made up of <dt> (definition term) and <dd> (definition description) tags.

### **Example:**

\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages.</dd>
    <dt>CSS</dt>
    <dd>A style sheet language used for describing the presentation of a document.</dd>
</dl>
\`\`\`

### **Use Case:** 
Definition lists are useful when you need to define terms, such as a glossary or FAQ section.

\`\`\`html
<dl>
    <dt>Responsive Design</dt>
    <dd>Designing websites that work well on all devices.</dd>
    <dt>Accessibility</dt>
    <dd>Making websites usable for people with disabilities.</dd>
</dl>
\`\`\`
`;

export const level5module4 = `
# Table Structure (<table>, <tr>, <th>, <td>)

### **What is a Table in HTML?**

A table in HTML is used to represent tabular data. It consists of rows (<tr>) and columns defined by table header (<th>) and table data (<td>) elements.

### **Basic Table Example:**

\`\`\`html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>John</td>
        <td>30</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
        <td>Los Angeles</td>
    </tr>
</table>
\`\`\`

### **Explanation:**

- **<table>**: Creates the table.
- **<tr>**: Represents a table row.
- **<th>**: Represents a table header cell.
- **<td>**: Represents a table data cell.

### **Use Case:** 
Tables are ideal for displaying structured data, such as a product list or a schedule.

\`\`\`html
<table>
    <tr>
        <th>Product</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>Laptop</td>
        <td>$999</td>
    </tr>
    <tr>
        <td>Smartphone</td>
        <td>$499</td>
    </tr>
</table>
\`\`\`
`;

export const level5module5 = `
# Nested Lists and Tables

### **What are Nested Lists and Tables?**

You can nest lists and tables within each other. For example, you can create an ordered list where each item contains an unordered list, or create a table with multiple tables inside.

### **Nested List Example:**

\`\`\`html
<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrot</li>
            <li>Spinach</li>
        </ul>
    </li>
</ul>
\`\`\`

### **Nested Table Example:**

\`\`\`html
<table>
    <tr>
        <td>Table 1</td>
        <td>
            <table border="1">
                <tr>
                    <th>Sub-table</th>
                    <th>Sub-table</th>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
\`\`\`

### **Use Case:** 
Nested structures help in organizing complex information. A nested list can categorize fruits and vegetables, and a nested table can organize detailed information about a product.
`;


// Level 6: Forms and Input Elements

export const level6module1 = `
# Introduction to Forms

### **What is a Form in HTML?**

A form is used to collect input from users. Forms are typically used for login, contact, and feedback purposes. Forms in HTML are created using the <form> tag.

### **Basic Form Structure:**

\`\`\`html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <button type="submit">Submit</button>
</form>
\`\`\`

### **Key Form Elements:**

- **<input>**: Used to collect data from the user.
- **<button>**: A button to submit or interact with the form.
- **<label>**: Provides a label for a form element.

### **Use Case:**
Forms can be used for user registration, login, and search bars.
`;

export const level6module2 = `
# Form Attributes

### **Key Attributes in Forms**

Forms have several important attributes that control how the form behaves:

- **action**: Specifies where to send the form data upon submission.
- **method**: Defines the HTTP method (GET or POST) used when sending the form data.

### **Example:**

\`\`\`html
<form action="/submit-form" method="POST">
    <input type="text" name="user">
    <button type="submit">Submit</button>
</form>
\`\`\`

### **Use Case:**
The action attribute sends data to a server, and the method determines how the data is transmitted.
`;

export const level6module3 = `
# Text Inputs (<input type="text">, <input type="password">)

### **Text Inputs**

The <input> element is used to collect user input. The type attribute defines the kind of input expected.

- **text**: Standard text input.
- **password**: Masks the text entered.

### **Example:**

\`\`\`html
<input type="text" placeholder="Enter your name">
<input type="password" placeholder="Enter your password">
\`\`\`

### **Use Case:** 
Text inputs are common in forms for entering names, email addresses, and passwords.
`;

export const level6module4 = `
# Radio Buttons and Checkboxes

### **Radio Buttons and Checkboxes**

Radio buttons allow a user to select one option from a list, while checkboxes allow multiple selections.

### **Radio Button Example:**

\`\`\`html
<input type="radio" name="color" value="red"> Red
<input type="radio" name="color" value="green"> Green
\`\`\`

### **Checkbox Example:**

\`\`\`html
<input type="checkbox" name="subscribe" value="yes"> Subscribe to newsletter
\`\`\`

### **Use Case:**
Radio buttons are ideal when only one option should be selected, such as gender, and checkboxes are useful for selecting multiple options, such as interests or preferences.
`;

export const level6module5 = `
# Dropdown Menus (<select>)

### **Using Dropdowns**

The <select> element creates a dropdown list, allowing users to choose from a list of options.

### **Example:**

\`\`\`html
<select name="city">
    <option value="newyork">New York</option>
    <option value="losangeles">Los Angeles</option>
    <option value="chicago">Chicago</option>
</select>
\`\`\`

### **Use Case:**
Dropdowns are useful for selecting options from a predefined list, such as selecting a country or choosing a payment method.
`;

export const level6module6 = `
# Submit Buttons and Actions

### **Submit Button**

The <button> element with type="submit" submits the form data to the server.

### **Example:**

\`\`\`html
<button type="submit">Submit</button>
\`\`\`

### **Use Case:**
The submit button is crucial in forms for submitting the input data to the server. 

### **Actions on Submit**

You can define actions for the form submission such as sending data via JavaScript (AJAX) instead of traditional form submission, using event listeners.

\`\`\`html
<form id="myForm">
    <input type="text" id="username" name="username">
    <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Form submitted!");
});
</script>
\`\`\`
`;

export const level7module1 = `
# Importance of Semantic HTML

### **What is Semantic HTML?**

Semantic HTML refers to the use of HTML tags that provide meaning about the content they enclose. These tags convey the structure and purpose of content, making it more accessible, SEO-friendly, and easier to maintain.

### **Why is Semantic HTML Important?**

- **Improved Accessibility**: Semantic tags provide clarity for screen readers, making it easier for users with disabilities to navigate and understand the content.
- **Better SEO**: Search engines give preference to semantic tags, helping pages rank higher as they understand the content better.
- **Cleaner, Maintainable Code**: Semantic HTML helps create a more organized structure, which is easier for developers to manage and update.

### **Example:**

\`\`\`html
<header>
    <h1>Website Title</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>
\`\`\`

### **Use Case:**
Using semantic HTML helps both users and search engines better understand the content, which improves user experience and search engine ranking.
`;

export const level7module2 = `
# Semantic Tags Overview

### **Common Semantic Tags**

Semantic HTML comes with a set of tags designed to represent different sections and types of content. Below are some commonly used semantic tags:

- **\`<header>\`**: Represents the introductory section of a document or section. Typically contains logos, navigation, or headings.
- **\`<footer>\`**: Represents the footer of a document or section, often containing copyright information and links to important pages.
- **\`<article>\`**: Represents a self-contained, independent piece of content that can be reused, such as blog posts or news articles.
- **\`<section>\`**: Represents a thematic grouping of content within a document, usually with its own heading.
- **\`<nav>\`**: Represents navigation links, helping users to easily navigate between different sections of the website.

### **Example:**

\`\`\`html
<footer>
    <p>© 2025 Your Website. All Rights Reserved.</p>
    <a href="#">Privacy Policy</a>
</footer>
\`\`\`

### **Use Case:**
Using these tags ensures that the page content is logically structured, which improves the accessibility and readability of the page for both users and search engines.
`;

export const level7module3 = `
# Creating Accessible Web Content

### **What is Web Accessibility?**

Web accessibility ensures that web content is usable by everyone, including people with disabilities. This includes making content readable with screen readers, navigable via keyboard shortcuts, and accessible through other assistive devices.

### **Key Strategies for Creating Accessible Web Content:**

- **Use of ARIA Roles**: Utilize ARIA (Accessible Rich Internet Applications) roles to enhance accessibility by providing additional information to assistive technologies.
- **Label Form Elements Properly**: Use the <label> element to provide meaningful descriptions of form fields, improving usability for screen reader users.
- **Provide Keyboard Navigation**: Ensure users can navigate the website using only a keyboard by defining logical tab orders and keyboard-friendly links.
  
### **Example:**

\`\`\`html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" aria-required="true">
    <button type="submit">Submit</button>
</form>
\`\`\`

### **Use Case:**
Creating accessible web content ensures that your website is inclusive, helping users with disabilities to have an equal browsing experience.
`;

export const level8module1 = `
# HTML5 Structural Elements

### **What are HTML5 Structural Elements?**

HTML5 introduces several structural elements that allow developers to better organize content in a meaningful way. These elements help define the document structure and improve accessibility.

### **Common HTML5 Structural Tags:**

- **\`<main>\`**: Represents the primary content of the document, excluding headers, footers, and navigation sections.
- **\`<section>\`**: Represents a thematic grouping of content within a document, usually with its own heading.
- **\`<article>\`**: Represents an independent, self-contained piece of content that could be distributed or reused independently, such as blog posts, news articles, or forum posts.

### **Example:**

\`\`\`html
<main>
    <article>
        <h2>Understanding HTML5</h2>
        <p>HTML5 introduces new features that enhance web development...</p>
    </article>
</main>
\`\`\`

### **Use Case:**
These structural tags allow for better organization of content, which improves both the accessibility and readability of the page.
`;

export const level8module2 = `
# HTML5 Form Enhancements

### **What are HTML5 Form Enhancements?**

HTML5 introduced new form input types that help improve the user experience and allow for more accurate data collection.

### **New Form Input Types:**

- **\`<input type="email">\`**: Ensures the input is a valid email address.
- **\`<input type="date">\`**: Allows the user to select a date from a date picker.
- **\`<input type="range">\`**: Allows the user to select a value within a given range using a slider.

### **Example:**

\`\`\`html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" required>
    <button type="submit">Submit</button>
</form>
\`\`\`

### **Use Case:**
HTML5 form enhancements streamline data entry, improve accuracy, and provide a better experience for users when filling out forms.
`;

export const level8module3 = `
# New Input Attributes

### **What are New Input Attributes in HTML5?**

HTML5 introduces several new input attributes that enhance form validation and user experience.

### **Common HTML5 Input Attributes:**

- **\`placeholder\`**: Provides a short hint describing the expected value of an input field.
- **\`required\`**: Specifies that a field must be filled out before submitting the form.
- **\`pattern\`**: Specifies a regular expression that the input's value must match.

### **Example:**

\`\`\`html
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required pattern="^[A-Za-z0-9]+$">
    <button type="submit">Submit</button>
</form>
\`\`\`

### **Use Case:**
These new attributes help with form validation and ensure users provide the correct input, enhancing the form's usability and data quality.
`;

export const level9module1 = `
# Writing Clean and Well-Structured Code

### **Why Write Clean Code?**

Writing clean, well-structured HTML code improves readability, maintainability, and accessibility. It also ensures that your code is easy to debug, test, and optimize.

### **Tips for Writing Clean HTML Code:**

- **Use Proper Indentation**: Indent your code to make it easier to read and maintain.
- **Avoid Inline Styles**: Keep styles in separate CSS files to ensure your HTML is clean and uncluttered.
- **Use Semantic Tags**: Use appropriate semantic tags to provide meaning to the content.

### **Example:**

\`\`\`html
<header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>
\`\`\`

### **Use Case:**
Writing clean code makes it easier to collaborate with others, debug issues, and maintain your website in the long run.
`;

export const level9module2 = `
# Accessibility (ARIA)

### **What is ARIA?**

ARIA (Accessible Rich Internet Applications) is a set of attributes that help make web content more accessible, especially dynamic content and advanced user interface controls.

### **ARIA Roles and Attributes:**

- **\`role\`**: Defines the role of an element, such as \`role="button"\`.
- **\`aria-labelledby\`**: Associates an element with a label, making it more accessible to screen readers.
- **\`aria-hidden\`**: Hides an element from assistive technologies, useful for non-essential content.

### **Example:**

\`\`\`html
<button aria-label="Close" onclick="closeWindow()">X</button>
\`\`\`

### **Use Case:**
ARIA improves accessibility, ensuring that users with disabilities can interact with all content on the web.
`;

export const level9module3 = `
# Optimizing HTML for SEO

### **Why Optimize HTML for SEO?**

Optimizing HTML improves search engine visibility and rankings. Search engines use the structure of your HTML to understand the content of your page.

### **SEO Best Practices:**

- **Use Proper Headings**: Organize content using \`<h1>\`, \`<h2>\`, etc., to help search engines understand the page hierarchy.
- **Optimize Meta Tags**: Use descriptive \`<meta>\` tags like \`<meta name="description" content="...">\` to help search engines understand your page.
- **Alt Text for Images**: Add descriptive \`alt\` attributes to images for better indexing and accessibility.

### **Example:**

\`\`\`html
<meta name="description" content="Learn HTML for web development">
<img src="html-tutorial.jpg" alt="HTML Tutorial Image">
\`\`\`

### **Use Case:**
Optimizing your HTML for SEO ensures that your content is discoverable and ranks well on search engines.
`;

export const level9module4 = `
# Best Practices for Forms and Input Validation

### **Why is Form Validation Important?**

Form validation ensures that users provide accurate and appropriate data, improving the quality of submissions and reducing errors.

### **Best Practices for Forms:**

- **Use Required Fields**: Ensure mandatory fields are marked with the \`required\` attribute.
- **Provide Helpful Error Messages**: If a form field is invalid, show clear error messages to guide the user.
- **Use Fieldsets and Legends**: Group related form fields together using \`<fieldset>\` and provide a description with \`<legend>\`.

### **Example:**

\`\`\`html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Submit</button>
</form>
\`\`\`

### **Use Case:**
Following best practices for forms ensures a smooth and efficient user experience while reducing the likelihood of errors in submissions.
`;


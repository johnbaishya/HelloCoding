// Level 1: Introduction to CSS

export const cssLevel1Module1 = `
# CSS Definition

### **What is CSS?**

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall visual appearance of a webpage.

### **Key Points:**

- **Separation of Concerns**: CSS separates content (HTML) from presentation (styling).
- **Cascading**: Styles can cascade, meaning multiple styles can apply to the same element, with the most specific rule taking precedence.
- **Selectors**: CSS uses selectors to target HTML elements and apply styles.

### **Basic CSS Example:**

\`\`\`css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
    text-align: center;
}
\`\`\`
`;

export const cssLevel1Module2 = `
# CSS Syntax

### **CSS Rule Structure**

A CSS rule consists of a selector and a declaration block. The declaration block contains one or more declarations, each made up of a property and a value.

### **CSS Syntax Example:**

\`\`\`css
selector {
    property: value;
}
\`\`\`

### **Example:**

\`\`\`css
p {
    color: blue;
    font-size: 16px;
}
\`\`\`

### **Explanation:**

- **Selector**: Targets the HTML element(s) to style (e.g., \`p\` for paragraphs).
- **Property**: The aspect of the element you want to change (e.g., \`color\`).
- **Value**: The specific setting for the property (e.g., \`blue\`).
`;

export const cssLevel1Module3 = `
# Inline, Internal, and External CSS

### **Inline CSS**

Inline CSS is applied directly within an HTML element using the \`style\` attribute.

### **Example:**

\`\`\`html
<p style="color: red; font-size: 14px;">This is a red paragraph.</p>
\`\`\`

### **Internal CSS**

Internal CSS is defined within a \`<style>\` tag in the \`<head>\` section of an HTML document.

### **Example:**

\`\`\`html
<head>
    <style>
        p {
            color: green;
            font-size: 16px;
        }
    </style>
</head>
\`\`\`

### **External CSS**

External CSS is stored in a separate \`.css\` file and linked to the HTML document using the \`<link>\` tag.

### **Example:**

\`\`\`html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

### **Use Case:**
External CSS is the most efficient method for styling multiple pages, as it promotes reusability and maintainability.
`;

// Level 2: CSS Selectors and Specificity

export const cssLevel2Module1 = `
# Basic Selectors

### **Element Selector**

Targets all instances of a specific HTML element.

### **Example:**

\`\`\`css
p {
    color: blue;
}
\`\`\`

### **Class Selector**

Targets elements with a specific class attribute. Classes are reusable and can be applied to multiple elements.

### **Example:**

\`\`\`css
.highlight {
    background-color: yellow;
}
\`\`\`

### **ID Selector**

Targets a single element with a specific ID attribute. IDs should be unique within a page.

### **Example:**

\`\`\`css
#header {
    font-size: 24px;
}
\`\`\`
`;

export const cssLevel2Module2 = `
# Combinators and Advanced Selectors

### **Descendant Selector**

Targets elements that are descendants of another element.

### **Example:**

\`\`\`css
div p {
    color: red;
}
\`\`\`

### **Child Selector**

Targets elements that are direct children of another element.

### **Example:**

\`\`\`css
ul > li {
    list-style-type: square;
}
\`\`\`

### **Adjacent Sibling Selector**

Targets an element that is immediately preceded by a specific element.

### **Example:**

\`\`\`css
h1 + p {
    font-weight: bold;
}
\`\`\`

### **General Sibling Selector**

Targets all elements that are siblings of a specific element.

### **Example:**

\`\`\`css
h1 ~ p {
    color: green;
}
\`\`\`
`;

export const cssLevel2Module3 = `
# Specificity and Importance

### **What is Specificity?**

Specificity determines which CSS rule is applied when multiple rules target the same element. It is calculated based on the types of selectors used.

### **Specificity Hierarchy:**

1. **Inline Styles**: Highest specificity.
2. **ID Selectors**: Higher specificity than classes and elements.
3. **Class and Attribute Selectors**: Medium specificity.
4. **Element Selectors**: Lowest specificity.

### **Example:**

\`\`\`css
#header { color: red; } /* ID selector */
.header { color: blue; } /* Class selector */
h1 { color: green; } /* Element selector */
\`\`\`

### **The \`!important\` Rule**

The \`!important\` rule overrides all other styles, regardless of specificity.

### **Example:**

\`\`\`css
p {
    color: blue !important;
}
\`\`\`

### **Use Case:**
Use \`!important\` sparingly, as it can make debugging and maintaining CSS difficult.
`;

// Level 3: CSS Box Model

export const cssLevel3Module1 = `
# The Box Model

### **What is the Box Model?**

Every element in CSS is represented as a rectangular box. The box model consists of:

- **Content**: The actual content of the element.
- **Padding**: Space between the content and the border.
- **Border**: A line surrounding the padding and content.
- **Margin**: Space outside the border, separating the element from other elements.

### **Box Model Diagram:**

\`\`\`
+---------------------------+
|         Margin            |
|  +---------------------+  |
|  |      Border         |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
\`\`\`

### **Example:**

\`\`\`css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
\`\`\`
`;

export const cssLevel3Module2 = `
# Margin and Padding

### **Margin**

Margin is the space outside the border of an element. It creates space between elements.

### **Example:**

\`\`\`css
p {
    margin: 10px; /* Applies 10px margin to all sides */
    margin-top: 20px; /* Applies 20px margin to the top */
}
\`\`\`

### **Padding**

Padding is the space between the content and the border of an element.

### **Example:**

\`\`\`css
p {
    padding: 15px; /* Applies 15px padding to all sides */
    padding-left: 30px; /* Applies 30px padding to the left */
}
\`\`\`

### **Use Case:**
Margins and padding are essential for creating spacing and layout in web design.
`;

export const cssLevel3Module3 = `
# Borders

### **Border Properties**

Borders can be styled using properties like \`border-width\`, \`border-style\`, and \`border-color\`.

### **Example:**

\`\`\`css
div {
    border-width: 2px;
    border-style: solid;
    border-color: red;
}
\`\`\`

### **Shorthand Border Syntax**

You can define all border properties in a single line.

### **Example:**

\`\`\`css
div {
    border: 2px solid red;
}
\`\`\`

### **Border Radius**

The \`border-radius\` property rounds the corners of an element.

### **Example:**

\`\`\`css
div {
    border-radius: 10px;
}
\`\`\`

### **Use Case:**
Borders are useful for highlighting elements and creating visual separation.
`;

// Level 4: CSS Layout

export const cssLevel4Module1 = `
# Display Property

### **What is the Display Property?**

The \`display\` property controls how an element is rendered on the page. Common values include:

- **\`block\`**: The element takes up the full width and starts on a new line.
- **\`inline\`**: The element takes up only as much width as necessary and does not start on a new line.
- **\`inline-block\`**: The element behaves like an inline element but allows setting width and height.
- **\`none\`**: The element is not displayed.

### **Example:**

\`\`\`css
div {
    display: block;
}

span {
    display: inline;
}

button {
    display: inline-block;
}
\`\`\`
`;

export const cssLevel4Module2 = `
# Flexbox

### **What is Flexbox?**

Flexbox is a layout model that allows you to design flexible and responsive layouts. It aligns and distributes space among items in a container.

### **Flex Container Properties:**

- **\`display: flex\`**: Defines a flex container.
- **\`justify-content\`**: Aligns items horizontally.
- **\`align-items\`**: Aligns items vertically.

### **Example:**

\`\`\`css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
\`\`\`

### **Flex Item Properties:**

- **\`flex-grow\`**: Defines how much an item should grow relative to others.
- **\`flex-shrink\`**: Defines how much an item should shrink relative to others.

### **Example:**

\`\`\`css
.item {
    flex-grow: 1;
    flex-shrink: 0;
}
\`\`\`

### **Use Case:**
Flexbox is ideal for creating responsive layouts and aligning content dynamically.
`;

export const cssLevel4Module3 = `
# CSS Grid

### **What is CSS Grid?**

CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts.

### **Grid Container Properties:**

- **\`display: grid\`**: Defines a grid container.
- **\`grid-template-columns\`**: Defines the columns of the grid.
- **\`grid-template-rows\`**: Defines the rows of the grid.

### **Example:**

\`\`\`css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
}
\`\`\`

### **Grid Item Properties:**

- **\`grid-column\`**: Defines the column span of an item.
- **\`grid-row\`**: Defines the row span of an item.

### **Example:**

\`\`\`css
.item {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}
\`\`\`

### **Use Case:**
CSS Grid is perfect for creating complex, responsive layouts with precise control over rows and columns.
`;

// Level 5: Responsive Design

export const cssLevel5Module1 = `
# Media Queries

### **What are Media Queries?**

Media queries allow you to apply CSS styles based on the characteristics of the device, such as screen width, height, or orientation.

### **Example:**

\`\`\`css
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
\`\`\`

### **Common Breakpoints:**

- **Mobile**: \`max-width: 480px\`
- **Tablet**: \`max-width: 768px\`
- **Desktop**: \`min-width: 1024px\`

### **Use Case:**
Media queries are essential for creating responsive designs that adapt to different screen sizes.
`;

export const cssLevel5Module2 = `
# Responsive Units

### **Relative Units**

Relative units like \`%\`, \`em\`, \`rem\`, \`vw\`, and \`vh\` allow you to create scalable and responsive layouts.

### **Example:**

\`\`\`css
.container {
    width: 80%; /* 80% of the parent element's width */
    font-size: 1.2rem; /* 1.2 times the root font size */
    height: 50vh; /* 50% of the viewport height */
}
\`\`\`

### **Use Case:**
Relative units ensure that your layout scales proportionally across different devices and screen sizes.
`;

export const cssLevel5Module3 = `
# Mobile-First Design

### **What is Mobile-First Design?**

Mobile-first design is an approach where you design for mobile devices first and then add styles for larger screens using media queries.

### **Example:**

\`\`\`css
/* Base styles for mobile */
body {
    font-size: 14px;
}

/* Styles for tablets and larger screens */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}
\`\`\`

### **Use Case:**
Mobile-first design ensures that your website is optimized for smaller screens and progressively enhanced for larger ones.
`;

// Level 6: Advanced CSS

export const cssLevel6Module1 = `
# CSS Variables

### **What are CSS Variables?**

CSS variables (custom properties) allow you to store reusable values, such as colors, fonts, or sizes, and use them throughout your stylesheet.

### **Example:**

\`\`\`css
:root {
    --primary-color: #3498db;
    --font-size: 16px;
}

body {
    color: var(--primary-color);
    font-size: var(--font-size);
}
\`\`\`

### **Use Case:**
CSS variables make it easier to maintain and update styles across your project.
`;

export const cssLevel6Module2 = `
# Transitions and Animations

### **CSS Transitions**

Transitions allow you to smoothly change property values over a specified duration.

### **Example:**

\`\`\`css
button {
    background-color: #3498db;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2980b9;
}
\`\`\`

### **CSS Animations**

Animations allow you to create complex, multi-step animations using keyframes.

### **Example:**

\`\`\`css
@keyframes slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
}

div {
    animation: slide 2s infinite;
}
\`\`\`

### **Use Case:**
Transitions and animations enhance user experience by adding interactivity and visual feedback.
`;

export const cssLevel6Module3 = `
# Pseudo-classes and Pseudo-elements

### **Pseudo-classes**

Pseudo-classes target elements based on their state or position.

### **Example:**

\`\`\`css
a:hover {
    color: red;
}

li:nth-child(odd) {
    background-color: #f0f0f0;
}
\`\`\`

### **Pseudo-elements**

Pseudo-elements target specific parts of an element, such as the first letter or line.

### **Example:**

\`\`\`css
p::first-letter {
    font-size: 24px;
    font-weight: bold;
}

p::after {
    content: " - Read more";
}
\`\`\`

### **Use Case:**
Pseudo-classes and pseudo-elements allow you to style elements dynamically and add decorative content.
`;

// Level 7: CSS Best Practices

export const cssLevel7Module1 = `
# Writing Maintainable CSS

### **Best Practices for Maintainable CSS**

- **Use Meaningful Class Names**: Choose class names that describe the purpose of the element.
- **Avoid Overly Specific Selectors**: Keep selectors simple to avoid specificity issues.
- **Organize Your Stylesheet**: Group related styles together and use comments to separate sections.

### **Example:**

\`\`\`css
/* Header Styles */
.header {
    background-color: #333;
    color: #fff;
}

/* Button Styles */
.button {
    padding: 10px 20px;
    background-color: #3498db;
}
\`\`\`

### **Use Case:**
Maintainable CSS ensures that your stylesheet is easy to read, update, and debug.
`;

export const cssLevel7Module2 = `
# CSS Frameworks

### **What are CSS Frameworks?**

CSS frameworks like Bootstrap and Tailwind CSS provide pre-designed components and utilities to speed up development.

### **Example:**

\`\`\`html
<!-- Bootstrap Button -->
<button class="btn btn-primary">Click Me</button>

<!-- Tailwind CSS Button -->
<button class="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
\`\`\`

### **Use Case:**
CSS frameworks are useful for rapid prototyping and building consistent, responsive designs.
`;



export const cssLevel7Module3 = `
# CSS Preprocessors

### **What are CSS Preprocessors?**

CSS preprocessors like Sass and Less extend CSS with features such as variables, nesting, mixins, and functions. These features help streamline your CSS workflow by allowing you to write more modular, maintainable, and reusable code.

### **Example:**

\`\`\`scss
// Sass Example
$primary-color: #3498db;
$padding: 10px;

.button {
    background-color: $primary-color;
    padding: $padding;
    border: none;
    border-radius: 5px;
    color: #fff;
    
    &:hover {
        background-color: darken($primary-color, 10%);
    }
}
\`\`\`

### **Use Case:**
CSS preprocessors make it easier to write and maintain large, complex stylesheets by:
- **Using Variables:** Store reusable values (colors, fonts, spacing) to ensure consistency.
- **Nesting Selectors:** Reflect the HTML structure in your CSS for better organization.
- **Creating Mixins:** Write reusable blocks of code to avoid repetition.
- **Leveraging Functions:** Perform calculations directly within your styles.

### **Advantages:**
- **Modularity:** Break down your CSS into smaller, manageable pieces.
- **Reusability:** Use mixins and variables to reduce code duplication.
- **Maintainability:** Update a single variable or mixin and have changes propagate throughout your stylesheet.
- **Enhanced Features:** Incorporate logic (like conditionals and loops) to generate dynamic styles.

### **Conclusion:**
Adopting a CSS preprocessor can significantly improve your development workflow by making your stylesheets more organized and easier to maintain. For large projects, they offer a way to write scalable and efficient CSS that can adapt to complex design requirements.

`;

export const cssLevel8Module1 = `
# CSS Inheritance and the Cascade

### **Inheritance**

CSS properties can be inherited by child elements from their parent elements. However, not all properties are inherited by default. For example:
- **Inherited:** Font properties (like font-family and color).
- **Not Inherited:** Box model properties (margin, padding, border).

### **The Cascade**

The cascade is the process browsers use to determine which CSS rule applies when multiple rules target the same element. Key factors include:
- **Source Order:** Later rules can override earlier ones.
- **Specificity:** More specific selectors take precedence.
- **Importance:** Inline styles or those marked with \`!important\` override other declarations.

### **Example:**

\`\`\`css
/* This rule applies to all paragraphs unless overridden */
p {
  color: blue;
}

/* Inline style will override the above rule */
<p style="color: red;">This text will be red.</p>
\`\`\`

Understanding inheritance and the cascade is essential for writing effective CSS.
`;


export const cssLevel8Module2 = `
# CSS Positioning

### **Overview**

CSS positioning enables you to control the placement of elements on the page. The main positioning schemes are:

- **Static:** The default position; elements flow naturally.
- **Relative:** Positioned relative to its normal position.
- **Absolute:** Positioned relative to its nearest positioned ancestor.
- **Fixed:** Positioned relative to the viewport; remains in place during scrolling.
- **Sticky:** Acts like relative until a specified offset is met, then behaves as fixed.

### **Examples:**

\`\`\`css
/* Static (default) */
.static-box {
  position: static;
}

/* Relative positioning */
.relative-box {
  position: relative;
  left: 20px;
  top: 10px;
}

/* Absolute positioning */
.absolute-box {
  position: absolute;
  top: 50px;
  left: 100px;
}

/* Fixed positioning */
.fixed-box {
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* Sticky positioning */
.sticky-box {
  position: sticky;
  top: 0;
}
\`\`\`

These positioning techniques allow you to create dynamic, layered layouts.
`;


export const cssLevel8Module3 = `
# CSS Units and Measurements

### **Absolute Units**

Absolute units are fixed and do not scale relative to other elements:
- **px:** Pixels (most common in digital design).
- **cm, mm, in:** Physical measurements (less common in web design).

### **Relative Units**

Relative units scale relative to another value, making them ideal for responsive design:
- **em:** Relative to the font-size of the parent element.
- **rem:** Relative to the font-size of the root element (HTML).
- **%:** A percentage relative to the parent element's size.

### **Viewport Units**

Viewport units are relative to the size of the viewport:
- **vw:** 1% of the viewport's width.
- **vh:** 1% of the viewport's height.
- **vmin/vmax:** 1% of the smaller or larger viewport dimension, respectively.

### **Example:**

\`\`\`css
.container {
  width: 80%;       /* 80% of the parent element's width */
  padding: 1rem;    /* Relative to the root font size */
  font-size: 1.2em; /* Relative to the parent's font size */
  height: 50vh;     /* 50% of the viewport height */
}
\`\`\`

Using the correct units is key to achieving a responsive design.
`;


export const cssLevel8Module4 = `
# Using Developer Tools for CSS Debugging

### **Overview**

Browser developer tools are invaluable for inspecting, debugging, and fine-tuning your CSS. They allow you to see how styles are applied in real time.

### **Key Features:**

- **Element Inspector:** Examine the HTML structure and see which CSS rules are applied.
- **Live Editing:** Modify CSS properties on the fly to test changes.
- **Box Model Visualization:** View the padding, border, and margin of an element.
- **Computed Styles:** Check all styles currently affecting an element.
- **Device Emulation:** Test responsiveness by simulating different screen sizes and resolutions.

### **How to Access:**

- **Chrome:** Right-click an element and select "Inspect" or press \`Ctrl+Shift+I\` (Windows/Linux) or \`Cmd+Option+I\` (Mac).
- **Firefox:** Right-click and choose "Inspect Element" or press \`Ctrl+Shift+I\`.
- **Safari:** Enable the Develop menu in Preferences, then right-click and select "Inspect Element."

### **Example Usage:**

Open your browser's developer tools, select an element, and modify its styles. This live feedback loop helps you quickly pinpoint issues and adjust your layout as needed.

Mastering these tools will significantly improve your efficiency when working with CSS.
`;

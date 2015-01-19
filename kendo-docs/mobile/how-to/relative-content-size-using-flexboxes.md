---
title: Relative content size using flexboxes
page_title: Relative content size using flexboxes
description: Relative content size using flexboxes
---

# Relative content size using flexboxes

The example below demonstrates how to create relative content size using CSS 3 flexboxes.

#### Example:

```html
     <div data-role="view" data-title="Percents" data-stretch="true">
      <div data-role="header">
        <div data-role="navbar">
          <div data-role="view-title"></div>
        </div>
      </div>
      <div style="display: flex; flex-direction:column">
        <div style="flex: 1; background: red"></div>
        <div style="flex: 3; background: blue"></div>
        <div style="flex: 2; background: green"></div>
      </div>
      <div data-role="footer">
        <div data-role="tabstrip">
          <a href="" data-icon="home">Home</a>
          <a href="" data-icon="home">Settings</a>
        </div>
      </div>
    </div>

    <script>
      new kendo.mobile.Application();
    </script>
```

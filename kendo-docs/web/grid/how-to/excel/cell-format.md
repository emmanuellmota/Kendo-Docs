---
title: Cell Format
description: Format the cell values
---

# Set Cell Format During Excel export

To format the cell values set the [format](/api/javascript/ooxml/workbook.html#configuration-sheets.rows.cells.format) option of the cells.

The [Create a custom number format](https://support.office.com/en-us/article/Create-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4) page describes the formats that Excel supports.

#### Example - format cell values

```html
<div id="grid"></div>
<script>
    $("#grid").kendoGrid({
        toolbar: ["excel"],
        excelExport: function(e) {
          var sheet = e.workbook.sheets[0];

          for (var rowIndex = 1; rowIndex < sheet.rows.length; rowIndex++) {
            var row = sheet.rows[rowIndex];
            for (var cellIndex = 0; cellIndex < row.cells.length; cellIndex ++) {
              row.cells[cellIndex].format = "[Blue]#,##0.0_);[Red](#,##0.0);0.0;"
            }
          }
        },
        dataSource: {
          data: [
            { text: "Positive", value: 10.5 },
            { text: "Negative", value: -10.5 },
            { text: "Zero", value: 0 }
          ]
        }
    });
</script>
```

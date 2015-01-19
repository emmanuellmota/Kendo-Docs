---
title: PivotGrid
page_title: Configuration, methods and events of Kendo UI PivotGrid
description: Code examples for PivotGrid UI widget configuration, learn how to use methods and which events to set once the grid UI widget detail is initialized and expanded.
---

# kendo.ui.PivotGrid

Represents the Kendo UI PivotGrid widget. Inherits from [Widget](/api/framework/widget).

## Configuration

### dataSource `Object|kendo.data.PivotDataSource`

The data source of the widget which is used to display values. Can be a JavaScript object which represents a valid data source configuration or an existing [kendo.data.PivotDataSource](/api/framework/pivotdatasource)
instance.

If the `dataSource` option is set to a JavaScript object the widget will initialize a new [kendo.data.PivotDataSource](/api/framework/pivotdatasource) instance using that value as data source configuration.

If the `dataSource` option is an existing [kendo.data.PivotDataSource](/api/framework/pivotdatasource) instance the widget will use that instance and will **not** initialize a new one.

#### Example - set dataSource as a JavaScript object

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

#### Example - set dataSource as an existing kendo.data.PivotDataSource instance

    <div id="pivotgrid"></div>
    <script>
    var dataSource = new kendo.data.PivotDataSource({
        type: "xmla",
        columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
        rows: [{ name: "[Product].[Product]" }],
        measures: ["[Measures].[Internet Sales Amount]"],
        transport: {
            connection: {
                catalog: "Adventure Works DW 2008R2",
                cube: "Adventure Works"
            },
            read: {
                url: "http://demos.telerik.com/olap/msmdpump.dll",
                dataType: "text",
                contentType: "text/xml",
                type: "POST"
            }
        },
        schema: {
            type: "xmla"
        }
    });

    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: dataSource
    });
    </script>

### autoBind `Boolean` *(default: true)*

If set to `false` the widget will not bind to the data source during initialization. In this case data binding will occur when the [change](/api/framework/datasource#events-change) event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.

> Setting `autoBind` to `false` is useful when multiple widgets are bound to the same data source. Disabling automatic binding ensures that the shared data source doesn't make more than one request to the remote service.

#### Example - disable automatic binding

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        autoBind: false,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var dataSource = $("#pivotgrid").data("kendoPivotGrid").dataSource;
    dataSource.read(); // "read()" will fire the "change" event of the dataSource and the widget will be bound
    </script>

### reorderable `Boolean` *(default: true)*

If set to `false` the user will not be able to add/close/reorder current fields for columns/rows/measures.

#### Example - disable fields reordering

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        reorderable: false,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### filterable `Boolean` *(default: false)*

If set to `true` the user will be able to filter by using the field menu.

#### Example - enable filtering

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        filterable: true,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### sortable `Boolean|Object` *(default: false)*

If set to `true` the user could sort the pivotgrid by clicking the dimension fields. By default sorting is disabled.

Can be set to a JavaScript object which represents the sorting configuration.

#### Example - enable sorting

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        sortable: true,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### sortable.allowUnsort `Boolean` *(default: true)*

If set to `true` the user can get the pivotgrid in unsorted state by clicking the sorted dimension field.

#### Example - disable unsorting

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        sortable: {
            allowUnsort: false
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### columnWidth `Number`

The width of the table columns. Value is treated as pixels.

#### Example - set the column width as a number

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        columnWidth: 200,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### height `Number|String`

The height of the PivotGrid. Numeric values are treated as pixels.

#### Example - set the height as a number

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

#### Example - set the height as a string

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: "550px",
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### columnHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) which renders the content of the column header cell. By default it renders the *caption* of the tuple member.

The fields which can be used in the template are:

* member - the member of the corresponding column header cell
* tuple - the tuple of the corresponding column header cell

For information about the tuple structure check this [link](/api/framework/pivotdatasource#configuration-schema.axes).

#### Example - emphasize the title of a specific member

    <div id="pivotgrid"></div>

    <script id="columnTemplate" type="text/x-kendo-template">
        # if (member.name === "[Date].[Calendar].[Year].&[2005]") { #
            <em>#: member.caption #</em>
        # } else { #
            #: member.caption #
        # } #
    </script>

    <script>
    $("#pivotgrid").kendoPivotGrid({
        columnHeaderTemplate: $("#columnTemplate").html(),
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true } ],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### dataCellTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) which renders the content of the data cell. By default renders the formatted value (fmtValue) of the data item.

The fields which can be used in the template are:

* columnTuple - the tuple of the corresponding column header cell
* rowTuple - the tuple of the corresponding row header cell
* measure - the value of the data cell measure
* dataItem - the data item itself

For information about the tuple structure check this [link](/api/framework/pivotdatasource#configuration-schema.axes).
About the data item structure review this [help topic](/api/framework/pivotdatasource#configuration-schema.data).

#### Example - emphasize the values in *2005*

    <div id="pivotgrid"></div>

    <script id="datacelltemplate" type="text/x-kendo-template">
        # if (columnTuple.members[0].name === "[Date].[Calendar].[Year].&[2005]") { #
            <em>#: kendo.toString(kendo.parseFloat(dataItem.value), "c2") #</em>
        # } else { #
            #: kendo.toString(kendo.parseFloat(dataItem.value), "c2") #
        # } #
    </script>

    <script>
    $("#pivotgrid").kendoPivotGrid({
        dataCellTemplate: $("#dataCellTemplate").html(),
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true } ],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### kpiStatusTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) which renders the content of the `KPI Status` value. By default renders "open", "hold" and "denied" status icons.

The fields which can be used in the template are:

* columnTuple - the tuple of the corresponding column header cell
* rowTuple - the tuple of the corresponding row header cell
* measure - the value of the data cell measure
* dataItem - the data item itself

For information about the tuple structure check this [link](/api/framework/pivotdatasource#configuration-schema.axes).
About the data item structure review this [help topic](/api/framework/pivotdatasource#configuration-schema.data).

#### Example - specify a custom template for the KPI Status measure

    <div id="pivotgrid"></div>

    <script id="kpiStatusTemplate" type="text/x-kendo-template">
        # if (dataItem.value !== 0) { #
            <em>Open/Denied</em>
        # } else { #
            <strong>Hold</strong>
        # } #
    </script>

    <script>
    $("#pivotgrid").kendoPivotGrid({
        kpiStatusTemplate: $("#kpiStatusTemplate").html(),
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true } ],
            measures: ["[Measures].[Internet Revenue Status]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### kpiTrendTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) which renders the content of the `KPI Trend` value. By default renders "increase", "decrease" and "equal" status icons.

The fields which can be used in the template are:

* columnTuple - the tuple of the corresponding column header cell
* rowTuple - the tuple of the corresponding row header cell
* measure - the value of the data cell measure
* dataItem - the data item itself

For information about the tuple structure check this [link](/api/framework/pivotdatasource#configuration-schema.axes).
About the data item structure review this [help topic](/api/framework/pivotdatasource#configuration-schema.data).

#### Example - specify a custom template for the KPI Trend measure

    <div id="pivotgrid"></div>

    <script id="kpiTrendTemplate" type="text/x-kendo-template">
        # if (dataItem.value !== 0) { #
            <em>Increase/Decrease</em>
        # } else { #
            <strong>Equal</strong>
        # } #
    </script>

    <script>
    $("#pivotgrid").kendoPivotGrid({
        kpiTrendTemplate: $("#kpiTrendTemplate").html(),
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true } ],
            measures: ["[Measures].[Internet Revenue Trend]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### rowHeaderTemplate `String|Function`

The [template](/api/framework/kendo#methods-template) which renders the content of the row header cell. By default it renders the *caption* of the tuple member.

The fields which can be used in the template are:

* member - the member of the corresponding row header cell
* tuple - the tuple of the corresponding row header cell

For information about the tuple structure check this [link](/api/framework/pivotdatasource#configuration-schema.axes).

#### Example - emphasize the title of a specific member

    <div id="pivotgrid"></div>

    <script id="rowTemplate" type="text/x-kendo-template">
        # if (member.name === "[Date].[Calendar].[Year].&[2005]") { #
            <em>#: member.caption #</em>
        # } else { #
            #: member.caption #
        # } #
    </script>

    <script>
    $("#pivotgrid").kendoPivotGrid({
        columnHeaderTemplate: $("#columnTemplate").html(),
        dataSource: {
            type: "xmla",
            rows: [{ name: "[Date].[Calendar]", expand: true } ],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages `Object`

The text messages displayed in the fields sections.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        messages: {
            measureFields: "Drop Measure Here",
            columnFields: "Drop Column Here",
            rowFields: "Drop Rows Here"
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.measureFields `String` *(default: "Drop Measure Here")*

The text messages displayed in the measure fields sections.

#### Example - setting measure fields section default text

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        messages: {
            measureFields: "Drop Measure Here"
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.columnFields `String` *(default: "Drop Column Here")*

The text messages displayed in the column fields sections.

#### Example - setting column fields section default text

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        messages: {
            columnFields: "Drop Column Here"
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.rowFields `String` *(default: "Drop Rows Here")*

The text messages displayed in the row fields sections.

#### Example - setting row fields section default text

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        messages: {
            rowFields: "Drop Rows Here"
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu `Object`

The text messages displayed in the field menu.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                info: "Show items with value that:",
                sortAscending: "Sort Ascending",
                sortDescending: "Sort Descending",
                filterFields: "Fields Filter",
                filter: "Filter",
                include: "Include Fields...",
                title: "Fields to include",
                clear: "Clear",
                ok: "Ok",
                cancel: "Cancel"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.info `String` *(default: "Show items with value that:")*

The text messages displayed in fields filter.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                info: "Filter items by field name:"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.sortAscending `String` *(default: "Sort Ascending")*

The text message displayed for the menu item which performs ascending sort.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        sortable: true,
        height: 550,
        messages: {
            fieldMenu: {
              sortAscending: "Sort (asc)"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.sortDescending `String` *(default: "Sort Descending")*

The text message displayed for the menu item which performs descending sort.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        sortable: true,
        height: 550,
        messages: {
            fieldMenu: {
              sortDescending: "Sort (desc)"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.filterFields `String` *(default: "Fields Filter")*

The text messages of the fields filter menu item.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                filterFields: "Filter current field"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.filter `String` *(default: "Filter")*

The text messages of the filter button.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                filter: "Done"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.include `String` *(default: "Include Fields...")*

The text messages of the include menu item.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                include: "Choose fields to include"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.title `String` *(default: "Fields to include")*

The title of the include fields dialog.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                title: "Choose fields to include"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.clear `String` *(default: "Clear")*

The text of the clear filter expressions button.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                clear: "Clear filter expressions"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.ok `String` *(default: "Ok")*

The text of the OK button in the include fields dialog.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                ok: "Done"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.cancel `String` *(default: "Cancel")*

The text of the cancel button in the include fields dialog.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                cancel: "Close"
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators `Object`

The text of the filter operators displayed in the filter menu.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    contains: "Contains",
                    doesnotcontain: "Does not contain",
                    startswith: "Starts with",
                    endswith: "Ends with",
                    eq: "Is equal to",
                    neq: "Is not equal to"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators.contains `String` *(default: "Contains")*

The text of the "contains" filter operator.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    contains: "Contains"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators.doesnotcontain `String` *(default: "Does not contain")*

The text of the "Does not contain" filter operator.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    doesnotcontain: "Doesn't contain"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators.startswith `String` *(default: "Starts with")*

The text of the "Starts with" filter operator.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    startswith: "Starts"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators.endswith `String` *(default: "Ends with")*

The text of the "Ends with" filter operator.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    endswith: "Ends"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators.eq `String` *(default: "Is equal to")*

The text of the "equal" filter operator.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    eq: "Equal to"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

### messages.fieldMenu.operators.neq `String` *(default: "Is not equal to")*

The text of the "not equal" filter operator.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        height: 550,
        messages: {
            fieldMenu: {
                operators: {
                    neq: "Not equal to"
                }
            }
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

## Fields

### dataSource `kendo.data.PivotDataSource`

The [data source](/api/framework/pivotdatasource) of the widget. Configured via the [dataSource](#configuration-dataSource) option.

> Changes of the data source will be reflected in the widget.

> Assigning a new data source would have no effect. Use the [setDataSource](#methods-setDataSource) method instead.

#### Example - get reference to the widget data source

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });

    //get reference to the widget data source
    var dataSource = $("#pivotgrid").data("kendoPivotGrid").dataSource;
    </script>

## Methods

### cellInfo

Returns an information about a data cell at a specific column and row index.

#### Parameters

##### columnIndex `Number`

The index of the column cell that crosses the data cell.

##### rowIndex `Number`

The index of the row cell that crosses the data cell.

#### Returns

`Object` the data cell information.

The fields of the result object:

* columnTuple - the tuple of the corresponding column header cell
* rowTuple - the tuple of the corresponding row header cell
* measure - the measure value of the data cell
* dataItem - the data item itself

#### Example - get an information for a specific data cell

    <button id="get">Get info</button>
    <div id="pivotgrid"></div>
    <script>
    $(function() {
        var pivotgrid = $("#pivotgrid").kendoPivotGrid({
            height: 550,
            dataSource: {
                type: "xmla",
                columns: [{ name: "[Date].[Calendar]", expand: true } ],
                rows: [{ name: "[Product].[Category]", expand: true }],
                measures: ["[Measures].[Internet Sales Amount]"],
                transport: {
                    connection: {
                        catalog: "Adventure Works DW 2008R2",
                        cube: "Adventure Works"
                    },
                    read: {
                        url: "http://demos.telerik.com/olap/msmdpump.dll",
                        dataType: "text",
                        contentType: "text/xml",
                        type: "POST"
                    }
                },
                schema: {
                    type: "xmla"
                }
            }
        }).data("kendoPivotGrid");

        $("#button").click(function() {
            var columnIndex = 1; //2006
            var rowIndex = 1; //Bikes

            var info = pivotgrid.cellInfo(columnIndex, rowIndex); //retrieve data cell information

            console.log(info);
        });
    });
    </script>

### cellInfoByElement

Returns an information about for a specific data cell element

#### Parameters

##### cell `String|Element|jQuery`

A string, DOM element or jQuery object which represents the data table cell. A string is treated as a jQuery selector.

#### Returns

`Object` the data cell information.

The fields of the result object:

* columnTuple - the tuple of the corresponding column header cell
* rowTuple - the tuple of the corresponding row header cell
* measure - the measure value of the data cell
* dataItem - the data item itself

#### Example - get information on element hover

    <div id="pivotgrid"></div>
    <script>
    $(function() {
        var pivotgrid = $("#pivotgrid").kendoPivotGrid({
            height: 550,
            dataSource: {
                type: "xmla",
                columns: [{ name: "[Date].[Calendar]", expand: true } ],
                rows: [{ name: "[Product].[Category]", expand: true }],
                measures: ["[Measures].[Internet Sales Amount]"],
                transport: {
                    connection: {
                        catalog: "Adventure Works DW 2008R2",
                        cube: "Adventure Works"
                    },
                    read: {
                        url: "http://demos.telerik.com/olap/msmdpump.dll",
                        dataType: "text",
                        contentType: "text/xml",
                        type: "POST"
                    }
                },
                schema: {
                    type: "xmla"
                }
            }
        }).data("kendoPivotGrid");

        pivotgrid.wrapper.on("mouseenter", ".k-grid-content td", function(e){
            var info = pivotgrid.cellInfoByElement(e.currentTarget);

            console.log(info);
        });
    });
    </script>

### destroy

Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> This method does not remove the widget element from DOM.

#### Example

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.destroy();
    </script>

### refresh

Renders all content using the current data items.

#### Example - refresh the widget

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.refresh();
    </script>

### setDataSource

Sets the data source of the widget.

#### Parameters

##### dataSource `kendo.data.PivotDataSource`

The data source to which the widget should be bound.

#### Example - set the data source

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var dataSource = kendo.data.PivotDataSource({
        type: "xmla",
        columns: [{ name: "[Date].[Calendar]", expand: true }],
        rows: [{ name: "[Product].[Product]" }],
        measures: ["[Measures].[Internet Sales Amount]"],
        transport: {
            connection: {
                catalog: "Adventure Works DW 2008R2",
                cube: "Adventure Works"
            },
            read: {
                url: "http://demos.telerik.com/olap/msmdpump.dll",
                dataType: "text",
                contentType: "text/xml",
                type: "POST"
            }
        },
        schema: {
            type: "xmla"
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.setDataSource(dataSource);
    </script>

## Events

### dataBinding

Fired before the widget binds to its data source.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.preventDefault `Function`

If invoked prevents the data bind action. The PivotGrid will remain unchanged and `dataBound` event will not fire.

##### e.sender `kendo.ui.PivotGrid`

The widget instance which fired the event.

#### Example - subscribe to the "dataBinding" event during initialization

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataBinding: function(e) {
            e.preventDefault(); //this will prevent the data bind action
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

#### Example - subscribe to the "dataBinding" event after initialization

    <div id="pivotgrid"></div>
    <script>
    function dataBinding(e) {
        e.preventDefault();
    }

    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.bind("dataBinding", dataBinding);
    </script>

### dataBound

Fired after the widget is bound to the data from its data source.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.sender `kendo.ui.PivotGrid`

The widget instance which fired the event.

#### Example - subscribe to the "dataBound" event during initialization

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataBound: function(e) {
            console.log("data bound");
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

#### Example - subscribe to the "dataBound" event after initialization

    <div id="pivotgrid"></div>
    <script>
    function dataBound(e) {
        console.log("data bound");
    }

    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.bind("dataBound", dataBound);
    </script>

### expandMember

Fired before column or row field is expanded.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.preventDefault `Function`

If invoked prevents the expand and the widget will remain in its current state.

##### e.sender `kendo.ui.PivotGrid`

The widget instance which fired the event.

##### e.axis `String`

The axis that will be expanded. Possible values `columns` or `rows`.

##### e.path `String`

The path to the field that will be expanded.

#### Example - subscribe to the "expandMember" event during initialization

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        expandMember: function(e) {
            console.log("expand member");
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

#### Example - subscribe to the "expandMember" event after initialization

    <div id="pivotgrid"></div>
    <script>
    function expandMember(e) {
        console.log("expand member");
    }

    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.bind("expandMember", expandMember);
    </script>

### collapseMember

Fired before column or row field is collapsed.

The event handler function context (available via the `this` keyword) will be set to the widget instance.

#### Event Data

##### e.preventDefault `Function`

If invoked prevents the collapse and the widget will remain in its current state.

##### e.sender `kendo.ui.PivotGrid`

The widget instance which fired the event.

##### e.axis `String`

The axis that will be collapsed. Possible values `columns` or `rows`.

##### e.path `String`

The path to the field that will be collapsed.

#### Example - subscribe to the "collapseMember" event during initialization

    <div id="pivotgrid"></div>
    <script>
    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        collapseMember: function(e) {
            console.log("collapse member");
        },
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    </script>

#### Example - subscribe to the "collapseMember" event after initialization

    <div id="pivotgrid"></div>
    <script>
    function collapseMember(e) {
        console.log("collapse member");
    }

    $("#pivotgrid").kendoPivotGrid({
        height: 550,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Geography].[City]" } ],
            rows: [{ name: "[Product].[Product]" }],
            measures: ["[Measures].[Internet Sales Amount]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: {
                    url: "http://demos.telerik.com/olap/msmdpump.dll",
                    dataType: "text",
                    contentType: "text/xml",
                    type: "POST"
                }
            },
            schema: {
                type: "xmla"
            }
        }
    });
    var pivotgrid = $("#pivotgrid").data("kendoPivotGrid");
    pivotgrid.bind("collapseMember", collapseMember);
    </script>

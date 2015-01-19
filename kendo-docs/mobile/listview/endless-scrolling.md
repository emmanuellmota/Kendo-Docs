---
title: Endless Scrolling
previous_url: /howto/howto-use-the-mobile-listview-with-endless-scrolling
---

# Use the ListView of Kendo UI Mobile With Endless Scrolling

The Kendo Mobile ListView widget is used to display flat or grouped list of items. It can be either used in unbound mode by enhancing an HTML `UL` element, or bound to a DataSource instance.

Rendering a lot of data at once will lead to a performance issues with the application. One way to solve this problem is to use "endless scrolling".
Endless scrolling provides a way to load additional content dynamically. When the user scrolls down the listview and reaches the end of the list, more content is being loaded without a page refresh.

## Create a Mobile ListView with Endless Scrolling

First step is to decide what will be the best way to get the additional data. Here are the possible ways:

- **local** - The whole data is serialized on the client. As the user scrolls down, new data is displayed.
- **remote** - Only the first page of the data will serialized and rendered on the client. When the user reaches the end of the list an Ajax request will be made to fetch the next portion of the data.

### Bind the Mobile ListView to a Local Data

Let's see how the Mobile ListView works by building a simple example that uses locally generated data.

First, we'll define a target HTML element such as a list:

    <ul id="localListView"></ul>

Next we will define a function, which will return a list of generated data:

        //generate local data
        function getData() {
            var data = [], idx = 0;
            for (; idx < 1000; idx++) {
                data.push({
                    name: "Name" + idx
                });
            }

            return data;
        }

Next task is to create a DataSource instance. Please note that the `pageSize` is required:

        //define the DataSource
        var dataSource = new kendo.data.DataSource({ data: getData() });

Finally, we will initialize the Mobile ListView:

        //initialize the Mobile ListView
        $("#listView").kendoMobileListView({
            dataSource: dataSource,
            template: "#: name #",

            endlessScroll: true,
            virtualViewSize: 50 // needed setting, since local data virtualization does not use paging
        });

Here's the live example of the representation (above):

<a class="jsbin-embed" href="http://jsbin.com/ituVUTE/3/embed?live">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

### Bind the Mobile ListView to a Remote Data

For this example we will use the Northwind odata data. The ListView may be defined via a declarative binding:

    <div data-role="view" data-init="viewInit">
         <header data-role="header">
             <div data-role="navbar">My App</div>
         </header>

         <ul id="remoteListView" data-source="dataSource" data-role="listview" data-template="template" data-endless-scroll="true"></ul>
    </div>

    <script id="template" type="text/x-kendo-template">
        #: ProductName #
    </script>

Next, we will need to define a DataSource instance, which will fetch the data from the Northwind oData service:

    var dataSource = new kendo.data.DataSource({
      type: "odata",
      transport: {
        read: {
          url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
        }
      },
      schema: {
        total: "d.__count" // schema total is required for the server paging to work as expected
      },
      sort: {
        field: "ProductID",
        dir: "desc"
      },
      serverPaging: true,
      serverSorting: true,
      pageSize: 50
    });


Here's the live example of the representation (above):

<a class="jsbin-embed" href="http://jsbin.com/eHocUTI/2/embed?live">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>


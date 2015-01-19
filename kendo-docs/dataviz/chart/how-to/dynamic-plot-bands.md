---
title: Dynamic plot bands
page_title: Dynamic plot bands
description: Dynamic plot bands
---

# Dynamic plot bands

The example below demonstrates how create dynamic plot bands for Kendo UI Chart.

#### Example:

```html
    <div id="chart"></div>
    <script>
      $("#chart").kendoChart({
        categoryAxis: {
          type: "date",
          categories: [new Date("2014/01/01"), new Date("2014/01/02"), new Date("2014/01/31")],
          plotBands: [{
            from: new Date("2014/01/02"),
            to: new Date("2014/01/02"),
            color: "red"
          }]
        }
      });         

      function togglePlotBand(element, date, color) {
        var plotBands = element.data("plotBands");
        if (!plotBands) {
          plotBands = {};
          element.data("plotBands", plotBands);
        }

        var band = plotBands[date];
        if (band) {
          
        }
        plotBands.push({
          from: pFrom, to: pTo,
          color: pColor, opacity: opac
        })

        var chart = domElm.data("kendoChart");
        var axisNames = ["valueAxis", "xAxis"];
        var options = {};

        for (var i = 0; i < axisNames.length; i++) {
          options[axisNames[i]] = { plotBands: plotBands };
        }
        
        chart.setOptions(options);
      }
    </script>
```

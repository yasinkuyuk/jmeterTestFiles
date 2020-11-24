/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 84.26666666666667, "KoPercent": 15.733333333333333};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0075, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.016666666666666666, 500, 1500, "user-loadUser"], "isController": false}, {"data": [0.0013333333333333333, 500, 1500, "doctorAvailibility-get-uid"], "isController": false}, {"data": [6.666666666666666E-4, 500, 1500, "userSettings-save"], "isController": false}, {"data": [0.016, 500, 1500, "doctorInformation-getAll"], "isController": false}, {"data": [0.006666666666666667, 500, 1500, "profile-loadConnectedProfiles"], "isController": false}, {"data": [0.0036666666666666666, 500, 1500, "appointment-getByDoctor-uid"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 9000, 1416, 15.733333333333333, 12159.9156666667, 20, 54894, 10619.0, 23305.10000000001, 28097.799999999952, 42526.989999999976, 45.86758537741378, 4431.660517875299, 53.16877328417007], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["user-loadUser", 1500, 145, 9.666666666666666, 10329.45999999999, 20, 51874, 8581.0, 18281.600000000006, 22694.95000000001, 30498.29, 8.487763474324517, 19.11917350403169, 9.126003501202433], "isController": false}, {"data": ["doctorAvailibility-get-uid", 1500, 232, 15.466666666666667, 11162.121333333309, 22, 50608, 10178.0, 19229.100000000013, 23542.300000000003, 35859.87000000002, 8.572751224474633, 3393.762091151206, 9.535511371754499], "isController": false}, {"data": ["userSettings-save", 1500, 261, 17.4, 17764.89266666663, 22, 54894, 16081.5, 34899.600000000006, 41065.350000000006, 50738.630000000005, 8.991242529775997, 7.785134076284699, 13.284912058155356], "isController": false}, {"data": ["doctorInformation-getAll", 1500, 184, 12.266666666666667, 9664.001333333346, 22, 52309, 7959.0, 17756.800000000003, 24447.100000000002, 36458.35000000002, 8.21962847279303, 179.35736632829196, 8.92600279467368], "isController": false}, {"data": ["profile-loadConnectedProfiles", 1500, 186, 12.4, 13690.39466666666, 21, 53249, 12653.0, 24621.9, 28022.800000000003, 44838.66000000002, 8.332685235592788, 12.19651231987512, 9.08946231265346], "isController": false}, {"data": ["appointment-getByDoctor-uid", 1500, 408, 27.2, 10348.624000000003, 21, 46340, 9465.0, 20298.9, 24234.9, 31778.93, 9.712446824353638, 1529.038964009719, 10.812684941174947], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500", 197, 13.912429378531073, 2.188888888888889], "isController": false}, {"data": ["500\/Internal Server Error", 1219, 86.08757062146893, 13.544444444444444], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 9000, 1416, "500\/Internal Server Error", 1219, "500", 197, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["user-loadUser", 1500, 145, "500\/Internal Server Error", 144, "500", 1, null, null, null, null, null, null], "isController": false}, {"data": ["doctorAvailibility-get-uid", 1500, 232, "500\/Internal Server Error", 206, "500", 26, null, null, null, null, null, null], "isController": false}, {"data": ["userSettings-save", 1500, 261, "500\/Internal Server Error", 261, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["doctorInformation-getAll", 1500, 184, "500\/Internal Server Error", 180, "500", 4, null, null, null, null, null, null], "isController": false}, {"data": ["profile-loadConnectedProfiles", 1500, 186, "500\/Internal Server Error", 186, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["appointment-getByDoctor-uid", 1500, 408, "500\/Internal Server Error", 242, "500", 166, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

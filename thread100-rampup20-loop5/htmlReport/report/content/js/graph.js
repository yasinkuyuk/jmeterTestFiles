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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 53013.0, "series": [{"data": [[0.0, 29.0], [0.1, 34.0], [0.2, 36.0], [0.3, 38.0], [0.4, 41.0], [0.5, 44.0], [0.6, 45.0], [0.7, 46.0], [0.8, 47.0], [0.9, 48.0], [1.0, 49.0], [1.1, 50.0], [1.2, 51.0], [1.3, 51.0], [1.4, 51.0], [1.5, 53.0], [1.6, 53.0], [1.7, 54.0], [1.8, 55.0], [1.9, 55.0], [2.0, 56.0], [2.1, 57.0], [2.2, 57.0], [2.3, 57.0], [2.4, 58.0], [2.5, 58.0], [2.6, 59.0], [2.7, 59.0], [2.8, 60.0], [2.9, 60.0], [3.0, 61.0], [3.1, 61.0], [3.2, 62.0], [3.3, 63.0], [3.4, 63.0], [3.5, 64.0], [3.6, 65.0], [3.7, 65.0], [3.8, 65.0], [3.9, 65.0], [4.0, 66.0], [4.1, 67.0], [4.2, 67.0], [4.3, 67.0], [4.4, 68.0], [4.5, 68.0], [4.6, 68.0], [4.7, 69.0], [4.8, 69.0], [4.9, 69.0], [5.0, 69.0], [5.1, 70.0], [5.2, 70.0], [5.3, 71.0], [5.4, 71.0], [5.5, 72.0], [5.6, 72.0], [5.7, 72.0], [5.8, 73.0], [5.9, 73.0], [6.0, 73.0], [6.1, 74.0], [6.2, 74.0], [6.3, 74.0], [6.4, 74.0], [6.5, 75.0], [6.6, 75.0], [6.7, 76.0], [6.8, 76.0], [6.9, 76.0], [7.0, 77.0], [7.1, 77.0], [7.2, 77.0], [7.3, 77.0], [7.4, 78.0], [7.5, 78.0], [7.6, 78.0], [7.7, 79.0], [7.8, 79.0], [7.9, 80.0], [8.0, 80.0], [8.1, 80.0], [8.2, 80.0], [8.3, 81.0], [8.4, 81.0], [8.5, 82.0], [8.6, 82.0], [8.7, 83.0], [8.8, 83.0], [8.9, 83.0], [9.0, 84.0], [9.1, 84.0], [9.2, 84.0], [9.3, 85.0], [9.4, 85.0], [9.5, 86.0], [9.6, 86.0], [9.7, 86.0], [9.8, 86.0], [9.9, 86.0], [10.0, 87.0], [10.1, 87.0], [10.2, 87.0], [10.3, 87.0], [10.4, 87.0], [10.5, 87.0], [10.6, 88.0], [10.7, 88.0], [10.8, 88.0], [10.9, 88.0], [11.0, 88.0], [11.1, 88.0], [11.2, 89.0], [11.3, 89.0], [11.4, 89.0], [11.5, 90.0], [11.6, 90.0], [11.7, 90.0], [11.8, 90.0], [11.9, 90.0], [12.0, 91.0], [12.1, 91.0], [12.2, 91.0], [12.3, 92.0], [12.4, 92.0], [12.5, 92.0], [12.6, 92.0], [12.7, 93.0], [12.8, 93.0], [12.9, 93.0], [13.0, 93.0], [13.1, 94.0], [13.2, 94.0], [13.3, 94.0], [13.4, 94.0], [13.5, 95.0], [13.6, 95.0], [13.7, 95.0], [13.8, 95.0], [13.9, 96.0], [14.0, 96.0], [14.1, 96.0], [14.2, 96.0], [14.3, 97.0], [14.4, 97.0], [14.5, 97.0], [14.6, 98.0], [14.7, 98.0], [14.8, 98.0], [14.9, 98.0], [15.0, 99.0], [15.1, 99.0], [15.2, 99.0], [15.3, 100.0], [15.4, 100.0], [15.5, 100.0], [15.6, 101.0], [15.7, 101.0], [15.8, 102.0], [15.9, 102.0], [16.0, 102.0], [16.1, 103.0], [16.2, 103.0], [16.3, 103.0], [16.4, 104.0], [16.5, 104.0], [16.6, 104.0], [16.7, 104.0], [16.8, 105.0], [16.9, 105.0], [17.0, 105.0], [17.1, 105.0], [17.2, 106.0], [17.3, 106.0], [17.4, 106.0], [17.5, 107.0], [17.6, 107.0], [17.7, 107.0], [17.8, 107.0], [17.9, 108.0], [18.0, 108.0], [18.1, 108.0], [18.2, 108.0], [18.3, 109.0], [18.4, 109.0], [18.5, 109.0], [18.6, 109.0], [18.7, 109.0], [18.8, 109.0], [18.9, 110.0], [19.0, 110.0], [19.1, 110.0], [19.2, 110.0], [19.3, 111.0], [19.4, 111.0], [19.5, 111.0], [19.6, 112.0], [19.7, 112.0], [19.8, 112.0], [19.9, 112.0], [20.0, 113.0], [20.1, 113.0], [20.2, 113.0], [20.3, 114.0], [20.4, 114.0], [20.5, 114.0], [20.6, 114.0], [20.7, 115.0], [20.8, 115.0], [20.9, 115.0], [21.0, 116.0], [21.1, 116.0], [21.2, 116.0], [21.3, 117.0], [21.4, 117.0], [21.5, 117.0], [21.6, 118.0], [21.7, 118.0], [21.8, 118.0], [21.9, 119.0], [22.0, 119.0], [22.1, 119.0], [22.2, 119.0], [22.3, 120.0], [22.4, 120.0], [22.5, 120.0], [22.6, 120.0], [22.7, 121.0], [22.8, 121.0], [22.9, 121.0], [23.0, 122.0], [23.1, 122.0], [23.2, 122.0], [23.3, 122.0], [23.4, 123.0], [23.5, 123.0], [23.6, 123.0], [23.7, 123.0], [23.8, 123.0], [23.9, 124.0], [24.0, 124.0], [24.1, 124.0], [24.2, 124.0], [24.3, 125.0], [24.4, 125.0], [24.5, 126.0], [24.6, 126.0], [24.7, 126.0], [24.8, 127.0], [24.9, 127.0], [25.0, 127.0], [25.1, 128.0], [25.2, 128.0], [25.3, 128.0], [25.4, 128.0], [25.5, 129.0], [25.6, 129.0], [25.7, 129.0], [25.8, 129.0], [25.9, 130.0], [26.0, 130.0], [26.1, 130.0], [26.2, 130.0], [26.3, 131.0], [26.4, 131.0], [26.5, 132.0], [26.6, 132.0], [26.7, 133.0], [26.8, 133.0], [26.9, 134.0], [27.0, 134.0], [27.1, 134.0], [27.2, 135.0], [27.3, 135.0], [27.4, 135.0], [27.5, 136.0], [27.6, 136.0], [27.7, 136.0], [27.8, 136.0], [27.9, 136.0], [28.0, 137.0], [28.1, 137.0], [28.2, 137.0], [28.3, 138.0], [28.4, 138.0], [28.5, 138.0], [28.6, 139.0], [28.7, 139.0], [28.8, 139.0], [28.9, 139.0], [29.0, 140.0], [29.1, 140.0], [29.2, 140.0], [29.3, 141.0], [29.4, 141.0], [29.5, 141.0], [29.6, 142.0], [29.7, 142.0], [29.8, 143.0], [29.9, 143.0], [30.0, 143.0], [30.1, 144.0], [30.2, 144.0], [30.3, 145.0], [30.4, 145.0], [30.5, 145.0], [30.6, 146.0], [30.7, 146.0], [30.8, 146.0], [30.9, 147.0], [31.0, 147.0], [31.1, 147.0], [31.2, 147.0], [31.3, 148.0], [31.4, 148.0], [31.5, 149.0], [31.6, 150.0], [31.7, 150.0], [31.8, 150.0], [31.9, 150.0], [32.0, 151.0], [32.1, 151.0], [32.2, 151.0], [32.3, 152.0], [32.4, 152.0], [32.5, 153.0], [32.6, 153.0], [32.7, 153.0], [32.8, 154.0], [32.9, 155.0], [33.0, 156.0], [33.1, 157.0], [33.2, 158.0], [33.3, 158.0], [33.4, 159.0], [33.5, 159.0], [33.6, 160.0], [33.7, 160.0], [33.8, 162.0], [33.9, 163.0], [34.0, 164.0], [34.1, 165.0], [34.2, 165.0], [34.3, 166.0], [34.4, 166.0], [34.5, 166.0], [34.6, 167.0], [34.7, 167.0], [34.8, 168.0], [34.9, 168.0], [35.0, 169.0], [35.1, 169.0], [35.2, 170.0], [35.3, 170.0], [35.4, 171.0], [35.5, 172.0], [35.6, 173.0], [35.7, 174.0], [35.8, 175.0], [35.9, 176.0], [36.0, 176.0], [36.1, 177.0], [36.2, 177.0], [36.3, 177.0], [36.4, 178.0], [36.5, 178.0], [36.6, 178.0], [36.7, 178.0], [36.8, 178.0], [36.9, 179.0], [37.0, 180.0], [37.1, 181.0], [37.2, 181.0], [37.3, 183.0], [37.4, 183.0], [37.5, 184.0], [37.6, 184.0], [37.7, 185.0], [37.8, 185.0], [37.9, 186.0], [38.0, 186.0], [38.1, 187.0], [38.2, 188.0], [38.3, 188.0], [38.4, 189.0], [38.5, 189.0], [38.6, 190.0], [38.7, 191.0], [38.8, 192.0], [38.9, 193.0], [39.0, 193.0], [39.1, 193.0], [39.2, 194.0], [39.3, 195.0], [39.4, 196.0], [39.5, 197.0], [39.6, 198.0], [39.7, 199.0], [39.8, 200.0], [39.9, 200.0], [40.0, 201.0], [40.1, 202.0], [40.2, 203.0], [40.3, 207.0], [40.4, 208.0], [40.5, 208.0], [40.6, 210.0], [40.7, 211.0], [40.8, 212.0], [40.9, 214.0], [41.0, 215.0], [41.1, 218.0], [41.2, 219.0], [41.3, 221.0], [41.4, 222.0], [41.5, 223.0], [41.6, 224.0], [41.7, 227.0], [41.8, 228.0], [41.9, 230.0], [42.0, 230.0], [42.1, 231.0], [42.2, 232.0], [42.3, 233.0], [42.4, 233.0], [42.5, 235.0], [42.6, 235.0], [42.7, 237.0], [42.8, 238.0], [42.9, 241.0], [43.0, 243.0], [43.1, 244.0], [43.2, 246.0], [43.3, 248.0], [43.4, 250.0], [43.5, 252.0], [43.6, 254.0], [43.7, 255.0], [43.8, 257.0], [43.9, 258.0], [44.0, 259.0], [44.1, 260.0], [44.2, 260.0], [44.3, 262.0], [44.4, 264.0], [44.5, 266.0], [44.6, 268.0], [44.7, 269.0], [44.8, 270.0], [44.9, 273.0], [45.0, 274.0], [45.1, 276.0], [45.2, 277.0], [45.3, 278.0], [45.4, 282.0], [45.5, 283.0], [45.6, 284.0], [45.7, 287.0], [45.8, 290.0], [45.9, 292.0], [46.0, 297.0], [46.1, 298.0], [46.2, 302.0], [46.3, 306.0], [46.4, 308.0], [46.5, 312.0], [46.6, 317.0], [46.7, 319.0], [46.8, 321.0], [46.9, 326.0], [47.0, 328.0], [47.1, 332.0], [47.2, 335.0], [47.3, 344.0], [47.4, 346.0], [47.5, 350.0], [47.6, 352.0], [47.7, 354.0], [47.8, 359.0], [47.9, 361.0], [48.0, 373.0], [48.1, 375.0], [48.2, 379.0], [48.3, 381.0], [48.4, 384.0], [48.5, 388.0], [48.6, 390.0], [48.7, 401.0], [48.8, 405.0], [48.9, 407.0], [49.0, 410.0], [49.1, 412.0], [49.2, 415.0], [49.3, 419.0], [49.4, 425.0], [49.5, 432.0], [49.6, 435.0], [49.7, 438.0], [49.8, 444.0], [49.9, 447.0], [50.0, 453.0], [50.1, 456.0], [50.2, 465.0], [50.3, 471.0], [50.4, 476.0], [50.5, 481.0], [50.6, 487.0], [50.7, 492.0], [50.8, 498.0], [50.9, 505.0], [51.0, 512.0], [51.1, 514.0], [51.2, 519.0], [51.3, 523.0], [51.4, 531.0], [51.5, 535.0], [51.6, 538.0], [51.7, 541.0], [51.8, 547.0], [51.9, 552.0], [52.0, 553.0], [52.1, 555.0], [52.2, 562.0], [52.3, 568.0], [52.4, 572.0], [52.5, 574.0], [52.6, 582.0], [52.7, 587.0], [52.8, 588.0], [52.9, 594.0], [53.0, 598.0], [53.1, 603.0], [53.2, 604.0], [53.3, 608.0], [53.4, 618.0], [53.5, 624.0], [53.6, 633.0], [53.7, 636.0], [53.8, 642.0], [53.9, 652.0], [54.0, 665.0], [54.1, 667.0], [54.2, 669.0], [54.3, 674.0], [54.4, 681.0], [54.5, 685.0], [54.6, 690.0], [54.7, 693.0], [54.8, 695.0], [54.9, 698.0], [55.0, 707.0], [55.1, 722.0], [55.2, 726.0], [55.3, 732.0], [55.4, 734.0], [55.5, 740.0], [55.6, 747.0], [55.7, 752.0], [55.8, 757.0], [55.9, 772.0], [56.0, 775.0], [56.1, 780.0], [56.2, 784.0], [56.3, 787.0], [56.4, 792.0], [56.5, 794.0], [56.6, 798.0], [56.7, 803.0], [56.8, 813.0], [56.9, 816.0], [57.0, 817.0], [57.1, 828.0], [57.2, 834.0], [57.3, 839.0], [57.4, 841.0], [57.5, 849.0], [57.6, 853.0], [57.7, 860.0], [57.8, 863.0], [57.9, 874.0], [58.0, 883.0], [58.1, 891.0], [58.2, 893.0], [58.3, 898.0], [58.4, 906.0], [58.5, 913.0], [58.6, 917.0], [58.7, 926.0], [58.8, 936.0], [58.9, 938.0], [59.0, 942.0], [59.1, 946.0], [59.2, 951.0], [59.3, 959.0], [59.4, 963.0], [59.5, 966.0], [59.6, 973.0], [59.7, 983.0], [59.8, 987.0], [59.9, 990.0], [60.0, 996.0], [60.1, 998.0], [60.2, 1000.0], [60.3, 1002.0], [60.4, 1005.0], [60.5, 1008.0], [60.6, 1017.0], [60.7, 1022.0], [60.8, 1027.0], [60.9, 1030.0], [61.0, 1032.0], [61.1, 1042.0], [61.2, 1058.0], [61.3, 1067.0], [61.4, 1068.0], [61.5, 1075.0], [61.6, 1081.0], [61.7, 1085.0], [61.8, 1088.0], [61.9, 1089.0], [62.0, 1090.0], [62.1, 1097.0], [62.2, 1102.0], [62.3, 1107.0], [62.4, 1113.0], [62.5, 1116.0], [62.6, 1123.0], [62.7, 1152.0], [62.8, 1156.0], [62.9, 1160.0], [63.0, 1167.0], [63.1, 1170.0], [63.2, 1176.0], [63.3, 1180.0], [63.4, 1181.0], [63.5, 1185.0], [63.6, 1188.0], [63.7, 1193.0], [63.8, 1196.0], [63.9, 1200.0], [64.0, 1203.0], [64.1, 1206.0], [64.2, 1208.0], [64.3, 1211.0], [64.4, 1213.0], [64.5, 1225.0], [64.6, 1230.0], [64.7, 1239.0], [64.8, 1245.0], [64.9, 1254.0], [65.0, 1258.0], [65.1, 1259.0], [65.2, 1264.0], [65.3, 1271.0], [65.4, 1278.0], [65.5, 1283.0], [65.6, 1290.0], [65.7, 1299.0], [65.8, 1304.0], [65.9, 1310.0], [66.0, 1314.0], [66.1, 1318.0], [66.2, 1324.0], [66.3, 1327.0], [66.4, 1333.0], [66.5, 1347.0], [66.6, 1355.0], [66.7, 1363.0], [66.8, 1368.0], [66.9, 1372.0], [67.0, 1374.0], [67.1, 1378.0], [67.2, 1384.0], [67.3, 1394.0], [67.4, 1406.0], [67.5, 1412.0], [67.6, 1416.0], [67.7, 1420.0], [67.8, 1424.0], [67.9, 1427.0], [68.0, 1434.0], [68.1, 1436.0], [68.2, 1437.0], [68.3, 1442.0], [68.4, 1446.0], [68.5, 1450.0], [68.6, 1454.0], [68.7, 1459.0], [68.8, 1468.0], [68.9, 1473.0], [69.0, 1479.0], [69.1, 1483.0], [69.2, 1490.0], [69.3, 1494.0], [69.4, 1501.0], [69.5, 1510.0], [69.6, 1512.0], [69.7, 1513.0], [69.8, 1519.0], [69.9, 1526.0], [70.0, 1531.0], [70.1, 1541.0], [70.2, 1544.0], [70.3, 1551.0], [70.4, 1556.0], [70.5, 1568.0], [70.6, 1576.0], [70.7, 1584.0], [70.8, 1599.0], [70.9, 1609.0], [71.0, 1616.0], [71.1, 1620.0], [71.2, 1629.0], [71.3, 1633.0], [71.4, 1636.0], [71.5, 1641.0], [71.6, 1647.0], [71.7, 1658.0], [71.8, 1661.0], [71.9, 1666.0], [72.0, 1672.0], [72.1, 1683.0], [72.2, 1690.0], [72.3, 1695.0], [72.4, 1701.0], [72.5, 1703.0], [72.6, 1714.0], [72.7, 1717.0], [72.8, 1720.0], [72.9, 1721.0], [73.0, 1723.0], [73.1, 1736.0], [73.2, 1748.0], [73.3, 1757.0], [73.4, 1768.0], [73.5, 1771.0], [73.6, 1777.0], [73.7, 1785.0], [73.8, 1792.0], [73.9, 1800.0], [74.0, 1808.0], [74.1, 1815.0], [74.2, 1820.0], [74.3, 1823.0], [74.4, 1838.0], [74.5, 1841.0], [74.6, 1848.0], [74.7, 1852.0], [74.8, 1861.0], [74.9, 1866.0], [75.0, 1875.0], [75.1, 1883.0], [75.2, 1888.0], [75.3, 1890.0], [75.4, 1895.0], [75.5, 1904.0], [75.6, 1907.0], [75.7, 1918.0], [75.8, 1920.0], [75.9, 1923.0], [76.0, 1934.0], [76.1, 1941.0], [76.2, 1944.0], [76.3, 1949.0], [76.4, 1953.0], [76.5, 1957.0], [76.6, 1967.0], [76.7, 1978.0], [76.8, 1980.0], [76.9, 1998.0], [77.0, 2011.0], [77.1, 2020.0], [77.2, 2032.0], [77.3, 2040.0], [77.4, 2045.0], [77.5, 2058.0], [77.6, 2066.0], [77.7, 2075.0], [77.8, 2080.0], [77.9, 2086.0], [78.0, 2087.0], [78.1, 2098.0], [78.2, 2102.0], [78.3, 2117.0], [78.4, 2123.0], [78.5, 2126.0], [78.6, 2134.0], [78.7, 2141.0], [78.8, 2145.0], [78.9, 2157.0], [79.0, 2174.0], [79.1, 2182.0], [79.2, 2197.0], [79.3, 2214.0], [79.4, 2220.0], [79.5, 2228.0], [79.6, 2243.0], [79.7, 2246.0], [79.8, 2252.0], [79.9, 2256.0], [80.0, 2261.0], [80.1, 2269.0], [80.2, 2275.0], [80.3, 2281.0], [80.4, 2297.0], [80.5, 2310.0], [80.6, 2312.0], [80.7, 2327.0], [80.8, 2338.0], [80.9, 2347.0], [81.0, 2349.0], [81.1, 2355.0], [81.2, 2360.0], [81.3, 2367.0], [81.4, 2376.0], [81.5, 2381.0], [81.6, 2387.0], [81.7, 2392.0], [81.8, 2403.0], [81.9, 2419.0], [82.0, 2424.0], [82.1, 2442.0], [82.2, 2453.0], [82.3, 2459.0], [82.4, 2466.0], [82.5, 2476.0], [82.6, 2484.0], [82.7, 2490.0], [82.8, 2497.0], [82.9, 2503.0], [83.0, 2524.0], [83.1, 2549.0], [83.2, 2557.0], [83.3, 2564.0], [83.4, 2568.0], [83.5, 2582.0], [83.6, 2602.0], [83.7, 2611.0], [83.8, 2618.0], [83.9, 2623.0], [84.0, 2634.0], [84.1, 2638.0], [84.2, 2645.0], [84.3, 2663.0], [84.4, 2669.0], [84.5, 2678.0], [84.6, 2690.0], [84.7, 2697.0], [84.8, 2715.0], [84.9, 2750.0], [85.0, 2757.0], [85.1, 2773.0], [85.2, 2787.0], [85.3, 2805.0], [85.4, 2810.0], [85.5, 2821.0], [85.6, 2826.0], [85.7, 2835.0], [85.8, 2866.0], [85.9, 2871.0], [86.0, 2895.0], [86.1, 2900.0], [86.2, 2909.0], [86.3, 2927.0], [86.4, 2930.0], [86.5, 2953.0], [86.6, 2971.0], [86.7, 2973.0], [86.8, 2989.0], [86.9, 3005.0], [87.0, 3009.0], [87.1, 3017.0], [87.2, 3053.0], [87.3, 3074.0], [87.4, 3102.0], [87.5, 3113.0], [87.6, 3124.0], [87.7, 3147.0], [87.8, 3160.0], [87.9, 3180.0], [88.0, 3186.0], [88.1, 3221.0], [88.2, 3237.0], [88.3, 3244.0], [88.4, 3272.0], [88.5, 3300.0], [88.6, 3303.0], [88.7, 3332.0], [88.8, 3347.0], [88.9, 3369.0], [89.0, 3387.0], [89.1, 3401.0], [89.2, 3420.0], [89.3, 3438.0], [89.4, 3475.0], [89.5, 3499.0], [89.6, 3519.0], [89.7, 3542.0], [89.8, 3584.0], [89.9, 3592.0], [90.0, 3610.0], [90.1, 3638.0], [90.2, 3684.0], [90.3, 3706.0], [90.4, 3731.0], [90.5, 3737.0], [90.6, 3746.0], [90.7, 3766.0], [90.8, 3778.0], [90.9, 3792.0], [91.0, 3841.0], [91.1, 3865.0], [91.2, 3870.0], [91.3, 3880.0], [91.4, 3906.0], [91.5, 3935.0], [91.6, 3999.0], [91.7, 4010.0], [91.8, 4051.0], [91.9, 4066.0], [92.0, 4117.0], [92.1, 4131.0], [92.2, 4166.0], [92.3, 4194.0], [92.4, 4220.0], [92.5, 4239.0], [92.6, 4322.0], [92.7, 4338.0], [92.8, 4364.0], [92.9, 4394.0], [93.0, 4430.0], [93.1, 4451.0], [93.2, 4489.0], [93.3, 4544.0], [93.4, 4598.0], [93.5, 4666.0], [93.6, 4690.0], [93.7, 4781.0], [93.8, 4823.0], [93.9, 4905.0], [94.0, 4962.0], [94.1, 5002.0], [94.2, 5034.0], [94.3, 5066.0], [94.4, 5151.0], [94.5, 5219.0], [94.6, 5223.0], [94.7, 5269.0], [94.8, 5304.0], [94.9, 5358.0], [95.0, 5527.0], [95.1, 5597.0], [95.2, 5618.0], [95.3, 5750.0], [95.4, 5802.0], [95.5, 5863.0], [95.6, 5951.0], [95.7, 5985.0], [95.8, 6008.0], [95.9, 6039.0], [96.0, 6166.0], [96.1, 6195.0], [96.2, 6223.0], [96.3, 6308.0], [96.4, 6428.0], [96.5, 6439.0], [96.6, 6494.0], [96.7, 6540.0], [96.8, 6646.0], [96.9, 6665.0], [97.0, 6764.0], [97.1, 6813.0], [97.2, 6864.0], [97.3, 7132.0], [97.4, 7277.0], [97.5, 7397.0], [97.6, 7490.0], [97.7, 7603.0], [97.8, 7744.0], [97.9, 7960.0], [98.0, 7995.0], [98.1, 8110.0], [98.2, 8159.0], [98.3, 8423.0], [98.4, 8631.0], [98.5, 8948.0], [98.6, 9327.0], [98.7, 9683.0], [98.8, 10280.0], [98.9, 10874.0], [99.0, 11148.0], [99.1, 11574.0], [99.2, 12017.0], [99.3, 13193.0], [99.4, 14355.0], [99.5, 15864.0], [99.6, 17257.0], [99.7, 22083.0], [99.8, 24425.0], [99.9, 32541.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 735.0, "series": [{"data": [[0.0, 457.0], [100.0, 735.0], [34500.0, 1.0], [200.0, 192.0], [300.0, 76.0], [400.0, 66.0], [500.0, 65.0], [600.0, 58.0], [700.0, 51.0], [800.0, 50.0], [900.0, 56.0], [1000.0, 59.0], [1100.0, 52.0], [1200.0, 55.0], [1300.0, 48.0], [1400.0, 61.0], [1500.0, 45.0], [1600.0, 46.0], [1700.0, 45.0], [1800.0, 47.0], [1900.0, 45.0], [2000.0, 35.0], [2100.0, 33.0], [2200.0, 36.0], [2300.0, 40.0], [2400.0, 33.0], [2500.0, 21.0], [2600.0, 35.0], [2800.0, 24.0], [2700.0, 16.0], [2900.0, 25.0], [3000.0, 14.0], [3100.0, 21.0], [3300.0, 18.0], [3200.0, 13.0], [3400.0, 13.0], [3500.0, 13.0], [3700.0, 20.0], [3600.0, 9.0], [3800.0, 14.0], [3900.0, 7.0], [4000.0, 11.0], [4300.0, 12.0], [4200.0, 7.0], [4100.0, 10.0], [4400.0, 8.0], [4500.0, 6.0], [4600.0, 6.0], [4800.0, 4.0], [4700.0, 4.0], [5000.0, 8.0], [4900.0, 6.0], [5100.0, 4.0], [5200.0, 9.0], [5300.0, 4.0], [5500.0, 4.0], [5600.0, 4.0], [5400.0, 2.0], [5800.0, 4.0], [5700.0, 4.0], [5900.0, 6.0], [6000.0, 7.0], [6100.0, 5.0], [6300.0, 2.0], [6200.0, 5.0], [6600.0, 7.0], [6500.0, 3.0], [6400.0, 9.0], [6700.0, 2.0], [6900.0, 1.0], [6800.0, 5.0], [7000.0, 1.0], [7100.0, 1.0], [7400.0, 3.0], [7300.0, 3.0], [7200.0, 3.0], [7500.0, 2.0], [7600.0, 2.0], [7700.0, 3.0], [7900.0, 4.0], [7800.0, 1.0], [8100.0, 5.0], [8000.0, 2.0], [8400.0, 2.0], [8600.0, 2.0], [8700.0, 1.0], [8300.0, 1.0], [8500.0, 1.0], [9100.0, 1.0], [8900.0, 1.0], [9600.0, 2.0], [9500.0, 1.0], [9300.0, 2.0], [9700.0, 1.0], [10200.0, 1.0], [9900.0, 1.0], [10700.0, 1.0], [10400.0, 1.0], [11200.0, 1.0], [10800.0, 1.0], [11000.0, 2.0], [11100.0, 1.0], [11500.0, 2.0], [11900.0, 1.0], [12000.0, 1.0], [12100.0, 1.0], [11800.0, 1.0], [12300.0, 1.0], [13200.0, 1.0], [13100.0, 1.0], [13600.0, 1.0], [14300.0, 1.0], [14900.0, 1.0], [15800.0, 2.0], [15900.0, 1.0], [16800.0, 1.0], [17200.0, 1.0], [18400.0, 1.0], [19500.0, 1.0], [22000.0, 1.0], [23600.0, 1.0], [24400.0, 1.0], [24200.0, 1.0], [27100.0, 1.0], [28700.0, 1.0], [32500.0, 1.0], [53000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 53000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 500.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1033.0, "series": [{"data": [[0.0, 1033.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 550.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 917.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 500.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 46.69230769230769, "minX": 1.6058256E12, "maxY": 74.00220070422515, "series": [{"data": [[1.60582566E12, 74.00220070422515], [1.6058256E12, 46.69230769230769]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60582566E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 116.125, "minX": 1.0, "maxY": 8963.166666666668, "series": [{"data": [[2.0, 134.66666666666666], [3.0, 156.66666666666666], [4.0, 587.5], [5.0, 233.33333333333331], [6.0, 116.125], [7.0, 249.75], [8.0, 192.26666666666665], [9.0, 1636.3076923076922], [10.0, 214.625], [11.0, 268.7], [12.0, 1662.0], [13.0, 1219.3103448275865], [14.0, 340.75], [15.0, 305.55555555555554], [16.0, 400.0], [17.0, 292.2352941176471], [18.0, 361.7], [19.0, 363.8666666666667], [20.0, 422.1052631578947], [21.0, 332.07692307692304], [22.0, 546.625], [23.0, 514.3636363636364], [24.0, 533.5357142857143], [25.0, 667.8333333333334], [26.0, 334.9375], [27.0, 388.5], [28.0, 383.75], [29.0, 750.48], [30.0, 662.0714285714286], [31.0, 675.8214285714286], [32.0, 582.7], [33.0, 427.625], [34.0, 631.2142857142858], [35.0, 576.7], [36.0, 616.9655172413794], [37.0, 1163.9333333333332], [38.0, 428.8571428571429], [39.0, 944.0], [40.0, 732.8181818181818], [41.0, 679.4242424242425], [42.0, 1011.2926829268292], [43.0, 827.0], [44.0, 903.6428571428571], [45.0, 692.032258064516], [46.0, 881.0], [47.0, 433.5], [48.0, 1140.0], [49.0, 788.6666666666667], [50.0, 982.0000000000001], [51.0, 821.0666666666666], [52.0, 774.2], [53.0, 1218.6785714285713], [54.0, 717.1923076923076], [55.0, 1353.2727272727273], [56.0, 660.4666666666666], [57.0, 1164.2142857142856], [58.0, 644.4736842105262], [59.0, 957.5172413793106], [60.0, 1175.8571428571427], [61.0, 1166.5416666666667], [62.0, 1175.8269230769229], [63.0, 1651.6666666666665], [64.0, 1152.0363636363638], [65.0, 1176.6666666666667], [66.0, 591.7142857142857], [67.0, 1650.4285714285716], [68.0, 2274.7368421052633], [69.0, 1516.7037037037035], [70.0, 1836.5517241379307], [71.0, 1436.9199999999998], [72.0, 1403.1086956521738], [73.0, 1433.9492753623188], [74.0, 1159.9047619047622], [75.0, 1487.4285714285713], [76.0, 1531.4383561643835], [77.0, 1695.3333333333333], [78.0, 895.2631578947368], [79.0, 2079.2999999999997], [80.0, 2584.032608695652], [81.0, 3493.411764705883], [82.0, 4538.622222222222], [83.0, 1268.84], [84.0, 1532.7142857142858], [85.0, 3061.571428571428], [86.0, 1427.0869565217395], [87.0, 2138.2784810126573], [88.0, 1240.1000000000004], [89.0, 1722.7714285714285], [90.0, 1736.738461538461], [91.0, 1547.2927756654003], [92.0, 1897.346613545817], [93.0, 1683.065476190476], [1.0, 8963.166666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[67.375, 1436.0150000000042]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 93.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 13965.8, "minX": 1.6058256E12, "maxY": 7357566.8, "series": [{"data": [[1.60582566E12, 7357566.8], [1.6058256E12, 2708125.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60582566E12, 43700.86666666667], [1.6058256E12, 13965.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60582566E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 826.7362637362634, "minX": 1.6058256E12, "maxY": 1631.2416373239419, "series": [{"data": [[1.60582566E12, 1631.2416373239419], [1.6058256E12, 826.7362637362634]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60582566E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 228.9244505494505, "minX": 1.6058256E12, "maxY": 243.0506161971826, "series": [{"data": [[1.60582566E12, 243.0506161971826], [1.6058256E12, 228.9244505494505]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60582566E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2.964348591549289, "minX": 1.6058256E12, "maxY": 13.401098901098896, "series": [{"data": [[1.60582566E12, 2.964348591549289], [1.6058256E12, 13.401098901098896]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60582566E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 29.0, "minX": 1.6058256E12, "maxY": 53013.0, "series": [{"data": [[1.60582566E12, 53013.0], [1.6058256E12, 5984.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60582566E12, 51.91099955201149], [1.6058256E12, 39.03499925732613]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60582566E12, 53.0], [1.6058256E12, 41.83850029706955]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60582566E12, 52.85049977600575], [1.6058256E12, 40.59249962866306]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60582566E12, 36.0], [1.6058256E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60582566E12, 1160.0], [1.6058256E12, 598.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60582566E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 38.0, "minX": 1.0, "maxY": 5334.0, "series": [{"data": [[33.0, 879.0], [2.0, 3948.5], [36.0, 359.0], [37.0, 981.5], [39.0, 512.0], [38.0, 995.0], [40.0, 655.0], [43.0, 958.5], [45.0, 496.0], [44.0, 1368.0], [47.0, 1167.0], [49.0, 798.0], [48.0, 874.0], [3.0, 174.5], [51.0, 1326.0], [50.0, 949.5], [52.0, 463.5], [53.0, 1420.0], [54.0, 1492.5], [55.0, 2651.5], [56.0, 1437.0], [57.0, 373.0], [58.0, 907.0], [61.0, 1006.0], [66.0, 1311.0], [4.0, 328.0], [69.0, 1010.5], [70.0, 1310.0], [72.0, 1180.0], [73.0, 804.0], [90.0, 862.0], [13.0, 268.0], [1.0, 5334.0], [23.0, 1406.0], [24.0, 2423.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 142.0], [36.0, 139.0], [37.0, 105.0], [39.0, 114.0], [38.0, 208.0], [40.0, 136.0], [43.0, 258.0], [45.0, 129.0], [44.0, 104.0], [47.0, 114.0], [49.0, 259.0], [48.0, 134.0], [3.0, 38.0], [51.0, 107.0], [50.0, 104.5], [52.0, 157.5], [53.0, 128.5], [54.0, 125.0], [55.0, 211.0], [56.0, 123.0], [57.0, 109.5], [58.0, 276.0], [61.0, 104.5], [66.0, 129.0], [4.0, 39.0], [69.0, 149.5], [70.0, 129.0], [72.0, 143.0], [73.0, 130.0], [90.0, 154.0], [13.0, 65.0], [23.0, 277.0], [24.0, 199.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 38.0, "minX": 1.0, "maxY": 277.0, "series": [{"data": [[33.0, 257.5], [2.0, 262.5], [36.0, 124.0], [37.0, 176.5], [39.0, 147.0], [38.0, 265.0], [40.0, 226.0], [43.0, 248.5], [45.0, 129.5], [44.0, 162.0], [47.0, 166.0], [49.0, 234.0], [48.0, 218.0], [3.0, 124.5], [51.0, 149.0], [50.0, 139.0], [52.0, 126.0], [53.0, 147.5], [54.0, 132.0], [55.0, 193.0], [56.0, 166.0], [57.0, 149.5], [58.0, 273.0], [61.0, 118.0], [66.0, 157.0], [4.0, 78.0], [69.0, 206.0], [70.0, 225.0], [72.0, 120.0], [73.0, 144.5], [90.0, 151.0], [13.0, 60.0], [1.0, 236.0], [23.0, 197.0], [24.0, 227.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 142.0], [36.0, 139.0], [37.0, 105.0], [39.0, 114.0], [38.0, 208.0], [40.0, 136.0], [43.0, 258.0], [45.0, 129.0], [44.0, 104.0], [47.0, 114.0], [49.0, 259.0], [48.0, 134.0], [3.0, 38.0], [51.0, 107.0], [50.0, 104.5], [52.0, 157.5], [53.0, 128.5], [54.0, 125.0], [55.0, 211.0], [56.0, 123.0], [57.0, 109.5], [58.0, 276.0], [61.0, 104.5], [66.0, 129.0], [4.0, 39.0], [69.0, 149.5], [70.0, 129.0], [72.0, 143.0], [73.0, 130.0], [90.0, 154.0], [13.0, 64.0], [23.0, 277.0], [24.0, 199.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 13.566666666666666, "minX": 1.6058256E12, "maxY": 36.43333333333333, "series": [{"data": [[1.60582566E12, 36.43333333333333], [1.6058256E12, 13.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60582566E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.6058256E12, "maxY": 31.3, "series": [{"data": [[1.60582566E12, 31.3], [1.6058256E12, 10.366666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60582566E12, 6.566666666666666], [1.6058256E12, 1.7666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60582566E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.6058256E12, "maxY": 31.3, "series": [{"data": [[1.60582566E12, 31.3], [1.6058256E12, 10.366666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60582566E12, 6.566666666666666], [1.6058256E12, 1.7666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60582566E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.6058256E12, "maxY": 31.3, "series": [{"data": [[1.60582566E12, 31.3], [1.6058256E12, 10.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60582566E12, 6.566666666666666], [1.6058256E12, 1.7666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60582566E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


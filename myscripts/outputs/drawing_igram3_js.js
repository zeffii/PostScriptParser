
function sortOnBoundsSize(p1, p2){

    var x = (p1.bounds.width * p1.bounds.height);
    var y = (p2.bounds.width * p2.bounds.height);

    if (x < y)
            return 1;
    else if (x==y)
            return 0;
    else
            return -1;

}



function remove_empty_paths(unsortedPathList){

    var validUnsortedPathList = [];
    for (var i = 0; i < unsortedPathList.length; i += 1){
        if (unsortedPathList[i].segments != 0){
            validUnsortedPathList.push(unsortedPathList[i]);
        }
        else{
            console.log("removed path");
        }
    }
    return validUnsortedPathList;

}


function draw_glyph_0(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [23.961, -69.926]);
    path0.cubicCurveTo(point + [23.988, -66.852], point + [24.047, -61.903], point + [24.141, -55.087]);
    path0.cubicCurveTo(point + [24.23, -48.27], point + [24.191, -41.446], point + [24.012, -34.614]);
    path0.cubicCurveTo(point + [23.836, -27.786], point + [23.359, -22.813], point + [22.578, -19.7]);
    path0.cubicCurveTo(point + [21.973, -17.712], point + [21.109, -16.098], point + [19.988, -14.86]);
    path0.cubicCurveTo(point + [18.863, -13.622], point + [17.652, -12.93], point + [16.359, -12.786]);
    path0.cubicCurveTo(point + [15.566, -14.926], point + [14.387, -16.751], point + [12.816, -18.258]);
    path0.cubicCurveTo(point + [11.246, -19.766], point + [9.203, -20.555], point + [6.68, -20.622]);
    path0.cubicCurveTo(point + [4.691, -20.571], point + [3.086, -19.919], point + [1.871, -18.661]);
    path0.cubicCurveTo(point + [0.656, -17.403], point + [0.035, -15.829], point + [0.0, -13.938]);
    path0.cubicCurveTo(point + [0.188, -11.204], point + [1.254, -9.247], point + [3.195, -8.063]);
    path0.cubicCurveTo(point + [5.141, -6.883], point + [6.84, -6.309], point + [8.293, -6.337]);
    path0.cubicCurveTo(point + [13.957, -6.508], point + [18.93, -8.239], point + [23.211, -11.52]);
    path0.cubicCurveTo(point + [27.492, -14.801], point + [30.969, -18.606], point + [33.637, -22.926]);
    path0.cubicCurveTo(point + [35.441, -25.997], point + [36.672, -29.012], point + [37.324, -31.969]);
    path0.cubicCurveTo(point + [37.977, -34.926], point + [38.285, -38.055], point + [38.246, -41.356]);
    path0.cubicCurveTo(point + [38.266, -42.848], point + [38.344, -46.141], point + [38.477, -51.235]);
    path0.cubicCurveTo(point + [38.609, -56.329], point + [38.688, -62.559], point + [38.707, -69.926]);
    path0.lineTo(point + [38.707, -75.223]);
    path0.cubicCurveTo(point + [38.715, -82.536], point + [38.758, -89.169], point + [38.836, -95.126]);
    path0.cubicCurveTo(point + [38.914, -101.083], point + [38.988, -104.665], point + [39.051, -105.868]);
    path0.cubicCurveTo(point + [39.078, -106.954], point + [39.398, -107.747], point + [40.016, -108.243]);
    path0.cubicCurveTo(point + [40.633, -108.739], point + [41.734, -108.985], point + [43.316, -108.977]);
    path0.lineTo(point + [48.152, -108.977]);
    path0.cubicCurveTo(point + [48.492, -108.973], point + [48.734, -109.04], point + [48.871, -109.18]);
    path0.cubicCurveTo(point + [49.012, -109.317], point + [49.078, -109.559], point + [49.074, -109.899]);
    path0.lineTo(point + [49.074, -112.778]);
    path0.cubicCurveTo(point + [49.078, -113.067], point + [49.012, -113.27], point + [48.871, -113.399]);
    path0.cubicCurveTo(point + [48.734, -113.524], point + [48.492, -113.587], point + [48.152, -113.587]);
    path0.cubicCurveTo(point + [47.332, -113.571], point + [45.691, -113.512], point + [43.227, -113.415]);
    path0.cubicCurveTo(point + [40.766, -113.313], point + [36.879, -113.255], point + [31.563, -113.239]);
    path0.cubicCurveTo(point + [25.57, -113.255], point + [21.258, -113.313], point + [18.633, -113.415]);
    path0.cubicCurveTo(point + [16.008, -113.512], point + [14.406, -113.571], point + [13.824, -113.587]);
    path0.cubicCurveTo(point + [13.594, -113.59], point + [13.422, -113.524], point + [13.305, -113.383]);
    path0.cubicCurveTo(point + [13.191, -113.247], point + [13.133, -113.005], point + [13.133, -112.665]);
    path0.lineTo(point + [13.133, -109.555]);
    path0.cubicCurveTo(point + [13.133, -109.188], point + [13.363, -108.997], point + [13.824, -108.977]);
    path0.lineTo(point + [18.434, -108.977]);
    path0.cubicCurveTo(point + [20.441, -108.973], point + [21.777, -108.637], point + [22.434, -107.969]);
    path0.cubicCurveTo(point + [23.094, -107.301], point + [23.449, -106.333], point + [23.5, -105.063]);
    path0.cubicCurveTo(point + [23.652, -103.274], point + [23.758, -100.372], point + [23.824, -96.352]);
    path0.cubicCurveTo(point + [23.891, -92.337], point + [23.93, -88.477], point + [23.945, -84.778]);
    path0.cubicCurveTo(point + [23.957, -81.079], point + [23.965, -78.817], point + [23.961, -77.989]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [23.961, -69.926]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new GrayColor(1.0);
    compoundPath.strokeColor = new GrayColor(1.0);
}
draw_glyph_0();


function draw_glyph_1(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [76.945, -37.325]);
    path0.cubicCurveTo(point + [77.781, -34.864], point + [79.047, -33.075], point + [80.746, -31.954]);
    path0.cubicCurveTo(point + [82.445, -30.833], point + [84.406, -30.282], point + [86.625, -30.298]);
    path0.cubicCurveTo(point + [89.914, -30.446], point + [92.375, -31.301], point + [93.996, -32.86]);
    path0.cubicCurveTo(point + [95.617, -34.423], point + [96.695, -35.794], point + [97.223, -36.977]);
    path0.cubicCurveTo(point + [97.441, -37.544], point + [97.52, -37.969], point + [97.453, -38.247]);
    path0.cubicCurveTo(point + [97.383, -38.524], point + [97.23, -38.715], point + [96.992, -38.821]);
    path0.lineTo(point + [95.609, -39.743]);
    path0.cubicCurveTo(point + [95.387, -39.868], point + [95.195, -39.907], point + [95.031, -39.86]);
    path0.cubicCurveTo(point + [94.871, -39.809], point + [94.676, -39.618], point + [94.457, -39.282]);
    path0.cubicCurveTo(point + [94.203, -38.801], point + [93.73, -38.38], point + [93.047, -38.016]);
    path0.cubicCurveTo(point + [92.359, -37.653], point + [91.602, -37.458], point + [90.77, -37.438]);
    path0.cubicCurveTo(point + [89.738, -37.387], point + [88.98, -37.954], point + [88.496, -39.137]);
    path0.cubicCurveTo(point + [88.012, -40.325], point + [87.77, -42.446], point + [87.773, -45.505]);
    path0.lineTo(point + [87.773, -51.032]);
    path0.lineTo(point + [87.543, -69.235]);
    path0.cubicCurveTo(point + [87.59, -70.813], point + [87.445, -72.352], point + [87.113, -73.856]);
    path0.cubicCurveTo(point + [86.781, -75.36], point + [86.004, -76.7], point + [84.781, -77.876]);
    path0.cubicCurveTo(point + [83.836, -78.817], point + [82.613, -79.583], point + [81.121, -80.18]);
    path0.cubicCurveTo(point + [79.629, -80.774], point + [77.316, -81.083], point + [74.184, -81.098]);
    path0.cubicCurveTo(point + [70.379, -81.063], point + [66.926, -80.446], point + [63.813, -79.258]);
    path0.cubicCurveTo(point + [60.703, -78.067], point + [57.938, -76.532], point + [55.52, -74.649]);
    path0.cubicCurveTo(point + [53.785, -73.348], point + [52.473, -71.86], point + [51.574, -70.184]);
    path0.cubicCurveTo(point + [50.676, -68.508], point + [50.227, -66.848], point + [50.219, -65.204]);
    path0.cubicCurveTo(point + [50.254, -63.93], point + [50.648, -62.962], point + [51.402, -62.294]);
    path0.cubicCurveTo(point + [52.156, -61.626], point + [53.066, -61.29], point + [54.137, -61.286]);
    path0.cubicCurveTo(point + [56.543, -61.305], point + [58.297, -61.899], point + [59.406, -63.071]);
    path0.cubicCurveTo(point + [60.516, -64.243], point + [61.063, -65.876], point + [61.051, -67.969]);
    path0.cubicCurveTo(point + [60.969, -69.34], point + [60.844, -70.481], point + [60.676, -71.395]);
    path0.cubicCurveTo(point + [60.508, -72.305], point + [60.785, -73.048], point + [61.512, -73.614]);
    path0.cubicCurveTo(point + [62.465, -74.301], point + [63.551, -74.821], point + [64.766, -75.169]);
    path0.cubicCurveTo(point + [65.98, -75.512], point + [67.121, -75.684], point + [68.191, -75.684]);
    path0.cubicCurveTo(point + [69.469, -75.692], point + [70.602, -75.563], point + [71.59, -75.298]);
    path0.cubicCurveTo(point + [72.578, -75.032], point + [73.367, -74.583], point + [73.953, -73.958]);
    path0.cubicCurveTo(point + [74.617, -73.227], point + [75.07, -72.266], point + [75.305, -71.079]);
    path0.cubicCurveTo(point + [75.539, -69.887], point + [75.703, -68.696], point + [75.793, -67.508]);
    path0.lineTo(point + [75.793, -61.516]);
    path0.cubicCurveTo(point + [74.547, -60.63], point + [72.781, -59.641], point + [70.496, -58.551]);
    path0.cubicCurveTo(point + [68.211, -57.462], point + [65.293, -56.067], point + [61.742, -54.376]);
    path0.cubicCurveTo(point + [57.668, -52.501], point + [54.867, -50.34], point + [53.332, -47.895]);
    path0.cubicCurveTo(point + [51.793, -45.446], point + [51.066, -42.883], point + [51.141, -40.204]);
    path0.cubicCurveTo(point + [51.207, -36.969], point + [52.0, -34.512], point + [53.52, -32.833]);
    path0.cubicCurveTo(point + [55.039, -31.153], point + [56.895, -30.305], point + [59.09, -30.298]);
    path0.cubicCurveTo(point + [60.242, -30.282], point + [61.426, -30.313], point + [62.648, -30.399]);
    path0.cubicCurveTo(point + [63.867, -30.481], point + [65.141, -30.719], point + [66.465, -31.102]);
    path0.cubicCurveTo(point + [68.688, -31.844], point + [70.602, -32.723], point + [72.207, -33.739]);
    path0.cubicCurveTo(point + [73.816, -34.755], point + [75.238, -35.95], point + [76.484, -37.325]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [75.793, -42.165]);
    path1.cubicCurveTo(point + [75.688, -41.04], point + [74.863, -39.887], point + [73.316, -38.708]);
    path1.cubicCurveTo(point + [71.773, -37.528], point + [70.141, -36.837], point + [68.422, -36.633]);
    path1.cubicCurveTo(point + [66.992, -36.63], point + [65.762, -37.212], point + [64.734, -38.376]);
    path1.cubicCurveTo(point + [63.707, -39.54], point + [63.172, -41.301], point + [63.121, -43.661]);
    path1.cubicCurveTo(point + [63.332, -47.704], point + [64.813, -50.618], point + [67.559, -52.403]);
    path1.cubicCurveTo(point + [70.305, -54.184], point + [73.051, -55.801], point + [75.793, -57.255]);
    path1.closePath();
    path1.moveTo(point + [75.793, -42.165]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new GrayColor(1.0);
    compoundPath.strokeColor = new GrayColor(1.0);
}
draw_glyph_1();


function draw_glyph_2(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [119.176, -29.954]);
    path0.cubicCurveTo(point + [119.852, -29.958], point + [120.402, -30.176], point + [120.832, -30.598]);
    path0.cubicCurveTo(point + [121.262, -31.024], point + [121.672, -31.614], point + [122.059, -32.372]);
    path0.cubicCurveTo(point + [122.344, -32.973], point + [123.242, -34.981], point + [124.758, -38.403]);
    path0.cubicCurveTo(point + [126.273, -41.825], point + [127.84, -45.356], point + [129.453, -48.993]);
    path0.cubicCurveTo(point + [131.07, -52.633], point + [132.176, -55.079], point + [132.77, -56.333]);
    path0.cubicCurveTo(point + [134.051, -59.079], point + [135.691, -62.458], point + [137.695, -66.469]);
    path0.cubicCurveTo(point + [139.695, -70.481], point + [141.281, -73.169], point + [142.445, -74.532]);
    path0.cubicCurveTo(point + [143.047, -75.04], point + [143.746, -75.38], point + [144.551, -75.555]);
    path0.cubicCurveTo(point + [145.352, -75.731], point + [146.109, -75.813], point + [146.824, -75.801]);
    path0.lineTo(point + [148.781, -75.801]);
    path0.cubicCurveTo(point + [149.34, -75.821], point + [149.609, -76.126], point + [149.59, -76.723]);
    path0.lineTo(point + [149.59, -79.258]);
    path0.cubicCurveTo(point + [149.598, -79.544], point + [149.523, -79.751], point + [149.359, -79.876]);
    path0.cubicCurveTo(point + [149.195, -80.005], point + [148.887, -80.067], point + [148.438, -80.063]);
    path0.cubicCurveTo(point + [147.992, -80.048], point + [147.039, -79.993], point + [145.586, -79.891]);
    path0.cubicCurveTo(point + [144.133, -79.79], point + [142.086, -79.731], point + [139.453, -79.719]);
    path0.cubicCurveTo(point + [136.395, -79.731], point + [134.102, -79.79], point + [132.57, -79.891]);
    path0.cubicCurveTo(point + [131.039, -79.993], point + [129.953, -80.048], point + [129.313, -80.063]);
    path0.cubicCurveTo(point + [128.973, -80.067], point + [128.734, -80.005], point + [128.594, -79.876]);
    path0.cubicCurveTo(point + [128.453, -79.751], point + [128.387, -79.544], point + [128.395, -79.258]);
    path0.lineTo(point + [128.395, -76.723]);
    path0.cubicCurveTo(point + [128.395, -76.126], point + [128.621, -75.821], point + [129.082, -75.801]);
    path0.lineTo(point + [130.926, -75.801]);
    path0.cubicCurveTo(point + [131.996, -75.778], point + [132.793, -75.305], point + [133.316, -74.391]);
    path0.cubicCurveTo(point + [133.84, -73.473], point + [133.887, -72.255], point + [133.461, -70.731]);
    path0.cubicCurveTo(point + [132.855, -68.774], point + [131.863, -66.032], point + [130.484, -62.501]);
    path0.cubicCurveTo(point + [129.102, -58.969], point + [127.734, -55.563], point + [126.379, -52.274]);
    path0.cubicCurveTo(point + [125.023, -48.989], point + [124.082, -46.731], point + [123.555, -45.505]);
    path0.lineTo(point + [122.863, -45.505]);
    path0.cubicCurveTo(point + [122.652, -46.036], point + [122.113, -47.43], point + [121.242, -49.692]);
    path0.cubicCurveTo(point + [120.371, -51.958], point + [119.508, -54.208], point + [118.648, -56.442]);
    path0.cubicCurveTo(point + [117.789, -58.68], point + [117.273, -60.024], point + [117.102, -60.481]);
    path0.cubicCurveTo(point + [116.637, -61.813], point + [115.898, -64.04], point + [114.887, -67.161]);
    path0.cubicCurveTo(point + [113.871, -70.282], point + [113.305, -72.508], point + [113.188, -73.844]);
    path0.cubicCurveTo(point + [113.207, -74.477], point + [113.457, -74.962], point + [113.934, -75.298]);
    path0.cubicCurveTo(point + [114.414, -75.63], point + [115.012, -75.798], point + [115.723, -75.801]);
    path0.lineTo(point + [117.563, -75.801]);
    path0.cubicCurveTo(point + [117.906, -75.805], point + [118.145, -75.911], point + [118.285, -76.118]);
    path0.cubicCurveTo(point + [118.422, -76.325], point + [118.492, -76.602], point + [118.484, -76.954]);
    path0.lineTo(point + [118.484, -79.141]);
    path0.cubicCurveTo(point + [118.496, -79.481], point + [118.418, -79.723], point + [118.254, -79.86]);
    path0.cubicCurveTo(point + [118.094, -80.001], point + [117.785, -80.067], point + [117.332, -80.063]);
    path0.cubicCurveTo(point + [116.695, -80.048], point + [115.496, -79.993], point + [113.734, -79.891]);
    path0.cubicCurveTo(point + [111.973, -79.79], point + [109.332, -79.731], point + [105.813, -79.719]);
    path0.cubicCurveTo(point + [101.238, -79.731], point + [98.121, -79.79], point + [96.453, -79.891]);
    path0.cubicCurveTo(point + [94.789, -79.993], point + [93.684, -80.048], point + [93.141, -80.063]);
    path0.cubicCurveTo(point + [92.691, -80.067], point + [92.383, -80.001], point + [92.219, -79.86]);
    path0.cubicCurveTo(point + [92.059, -79.723], point + [91.98, -79.481], point + [91.988, -79.141]);
    path0.lineTo(point + [91.988, -76.723]);
    path0.cubicCurveTo(point + [91.988, -76.383], point + [92.051, -76.141], point + [92.176, -76.001]);
    path0.cubicCurveTo(point + [92.305, -75.864], point + [92.512, -75.798], point + [92.797, -75.801]);
    path0.lineTo(point + [94.984, -75.801]);
    path0.cubicCurveTo(point + [95.98, -75.829], point + [96.813, -75.544], point + [97.492, -74.938]);
    path0.cubicCurveTo(point + [98.168, -74.333], point + [98.945, -73.239], point + [99.824, -71.653]);
    path0.cubicCurveTo(point + [100.176, -71.032], point + [100.789, -69.637], point + [101.668, -67.469]);
    path0.cubicCurveTo(point + [102.543, -65.298], point + [103.414, -63.083], point + [104.277, -60.825]);
    path0.cubicCurveTo(point + [105.141, -58.567], point + [105.73, -56.993], point + [106.043, -56.102]);
    path0.cubicCurveTo(point + [106.52, -54.926], point + [107.516, -52.555], point + [109.031, -48.985]);
    path0.cubicCurveTo(point + [110.547, -45.415], point + [112.039, -41.942], point + [113.504, -38.567]);
    path0.cubicCurveTo(point + [114.969, -35.188], point + [115.859, -33.2], point + [116.18, -32.602]);
    path0.cubicCurveTo(point + [116.625, -31.735], point + [117.066, -31.079], point + [117.508, -30.63]);
    path0.cubicCurveTo(point + [117.949, -30.18], point + [118.504, -29.954], point + [119.176, -29.954]);
    path0.closePath();
    path0.moveTo(point + [119.176, -29.954]);
    path0.fillColor = new GrayColor(1.0);
}
draw_glyph_2();


function draw_glyph_3(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [173.82, -37.325]);
    path0.cubicCurveTo(point + [174.656, -34.864], point + [175.922, -33.075], point + [177.621, -31.954]);
    path0.cubicCurveTo(point + [179.32, -30.833], point + [181.281, -30.282], point + [183.5, -30.298]);
    path0.cubicCurveTo(point + [186.789, -30.446], point + [189.25, -31.301], point + [190.871, -32.86]);
    path0.cubicCurveTo(point + [192.492, -34.423], point + [193.57, -35.794], point + [194.098, -36.977]);
    path0.cubicCurveTo(point + [194.316, -37.544], point + [194.395, -37.969], point + [194.328, -38.247]);
    path0.cubicCurveTo(point + [194.258, -38.524], point + [194.105, -38.715], point + [193.867, -38.821]);
    path0.lineTo(point + [192.484, -39.743]);
    path0.cubicCurveTo(point + [192.262, -39.868], point + [192.07, -39.907], point + [191.906, -39.86]);
    path0.cubicCurveTo(point + [191.746, -39.809], point + [191.551, -39.618], point + [191.332, -39.282]);
    path0.cubicCurveTo(point + [191.078, -38.801], point + [190.605, -38.38], point + [189.922, -38.016]);
    path0.cubicCurveTo(point + [189.234, -37.653], point + [188.477, -37.458], point + [187.645, -37.438]);
    path0.cubicCurveTo(point + [186.613, -37.387], point + [185.855, -37.954], point + [185.371, -39.137]);
    path0.cubicCurveTo(point + [184.887, -40.325], point + [184.645, -42.446], point + [184.648, -45.505]);
    path0.lineTo(point + [184.648, -51.032]);
    path0.lineTo(point + [184.418, -69.235]);
    path0.cubicCurveTo(point + [184.461, -70.813], point + [184.32, -72.352], point + [183.988, -73.856]);
    path0.cubicCurveTo(point + [183.656, -75.36], point + [182.879, -76.7], point + [181.656, -77.876]);
    path0.cubicCurveTo(point + [180.711, -78.817], point + [179.488, -79.583], point + [177.996, -80.18]);
    path0.cubicCurveTo(point + [176.504, -80.774], point + [174.191, -81.083], point + [171.059, -81.098]);
    path0.cubicCurveTo(point + [167.254, -81.063], point + [163.801, -80.446], point + [160.688, -79.258]);
    path0.cubicCurveTo(point + [157.578, -78.067], point + [154.813, -76.532], point + [152.395, -74.649]);
    path0.cubicCurveTo(point + [150.66, -73.348], point + [149.348, -71.86], point + [148.449, -70.184]);
    path0.cubicCurveTo(point + [147.551, -68.508], point + [147.102, -66.848], point + [147.094, -65.204]);
    path0.cubicCurveTo(point + [147.129, -63.93], point + [147.523, -62.962], point + [148.277, -62.294]);
    path0.cubicCurveTo(point + [149.031, -61.626], point + [149.941, -61.29], point + [151.012, -61.286]);
    path0.cubicCurveTo(point + [153.418, -61.305], point + [155.172, -61.899], point + [156.281, -63.071]);
    path0.cubicCurveTo(point + [157.391, -64.243], point + [157.938, -65.876], point + [157.926, -67.969]);
    path0.cubicCurveTo(point + [157.844, -69.34], point + [157.719, -70.481], point + [157.551, -71.395]);
    path0.cubicCurveTo(point + [157.383, -72.305], point + [157.66, -73.048], point + [158.387, -73.614]);
    path0.cubicCurveTo(point + [159.34, -74.301], point + [160.426, -74.821], point + [161.641, -75.169]);
    path0.cubicCurveTo(point + [162.855, -75.512], point + [163.996, -75.684], point + [165.066, -75.684]);
    path0.cubicCurveTo(point + [166.344, -75.692], point + [167.477, -75.563], point + [168.465, -75.298]);
    path0.cubicCurveTo(point + [169.453, -75.032], point + [170.242, -74.583], point + [170.828, -73.958]);
    path0.cubicCurveTo(point + [171.492, -73.227], point + [171.945, -72.266], point + [172.18, -71.079]);
    path0.cubicCurveTo(point + [172.414, -69.887], point + [172.578, -68.696], point + [172.668, -67.508]);
    path0.lineTo(point + [172.668, -61.516]);
    path0.cubicCurveTo(point + [171.422, -60.63], point + [169.656, -59.641], point + [167.371, -58.551]);
    path0.cubicCurveTo(point + [165.086, -57.462], point + [162.168, -56.067], point + [158.617, -54.376]);
    path0.cubicCurveTo(point + [154.543, -52.501], point + [151.742, -50.34], point + [150.207, -47.895]);
    path0.cubicCurveTo(point + [148.668, -45.446], point + [147.941, -42.883], point + [148.016, -40.204]);
    path0.cubicCurveTo(point + [148.082, -36.969], point + [148.875, -34.512], point + [150.395, -32.833]);
    path0.cubicCurveTo(point + [151.914, -31.153], point + [153.77, -30.305], point + [155.965, -30.298]);
    path0.cubicCurveTo(point + [157.117, -30.282], point + [158.301, -30.313], point + [159.523, -30.399]);
    path0.cubicCurveTo(point + [160.742, -30.481], point + [162.016, -30.719], point + [163.34, -31.102]);
    path0.cubicCurveTo(point + [165.563, -31.844], point + [167.477, -32.723], point + [169.082, -33.739]);
    path0.cubicCurveTo(point + [170.691, -34.755], point + [172.113, -35.95], point + [173.359, -37.325]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [172.668, -42.165]);
    path1.cubicCurveTo(point + [172.563, -41.04], point + [171.738, -39.887], point + [170.191, -38.708]);
    path1.cubicCurveTo(point + [168.648, -37.528], point + [167.016, -36.837], point + [165.297, -36.633]);
    path1.cubicCurveTo(point + [163.867, -36.63], point + [162.637, -37.212], point + [161.609, -38.376]);
    path1.cubicCurveTo(point + [160.582, -39.54], point + [160.047, -41.301], point + [159.996, -43.661]);
    path1.cubicCurveTo(point + [160.207, -47.704], point + [161.688, -50.618], point + [164.434, -52.403]);
    path1.cubicCurveTo(point + [167.18, -54.184], point + [169.926, -55.801], point + [172.668, -57.255]);
    path1.closePath();
    path1.moveTo(point + [172.668, -42.165]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new GrayColor(1.0);
    compoundPath.strokeColor = new GrayColor(1.0);
}
draw_glyph_3();


function draw_glyph_4(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [203.008, -57.598]);
    path0.cubicCurveTo(point + [202.785, -57.606], point + [202.629, -57.536], point + [202.535, -57.399]);
    path0.cubicCurveTo(point + [202.441, -57.258], point + [202.367, -57.02], point + [202.316, -56.676]);
    path0.cubicCurveTo(point + [202.223, -56.005], point + [202.027, -54.051], point + [201.73, -50.817]);
    path0.lineTo(point + [200.832, -41.114]);
    path0.cubicCurveTo(point + [200.535, -37.88], point + [200.336, -35.926], point + [200.242, -35.251]);
    path0.cubicCurveTo(point + [200.242, -34.669], point + [200.359, -34.219], point + [200.59, -33.899]);
    path0.cubicCurveTo(point + [200.82, -33.575], point + [201.164, -33.411], point + [201.625, -33.407]);
    path0.cubicCurveTo(point + [202.074, -33.395], point + [202.445, -33.481], point + [202.75, -33.669]);
    path0.cubicCurveTo(point + [203.051, -33.856], point + [203.367, -34.227], point + [203.699, -34.79]);
    path0.cubicCurveTo(point + [204.035, -35.38], point + [204.344, -35.872], point + [204.621, -36.258]);
    path0.cubicCurveTo(point + [204.898, -36.649], point + [205.207, -36.848], point + [205.543, -36.864]);
    path0.cubicCurveTo(point + [205.875, -36.864], point + [206.25, -36.747], point + [206.668, -36.52]);
    path0.cubicCurveTo(point + [207.082, -36.29], point + [207.633, -35.942], point + [208.309, -35.481]);
    path0.cubicCurveTo(point + [210.551, -33.739], point + [213.207, -32.387], point + [216.285, -31.423]);
    path0.cubicCurveTo(point + [219.363, -30.458], point + [223.23, -29.965], point + [227.891, -29.954]);
    path0.cubicCurveTo(point + [235.563, -30.137], point + [241.531, -32.645], point + [245.805, -37.469]);
    path0.cubicCurveTo(point + [250.078, -42.294], point + [252.246, -48.313], point + [252.313, -55.524]);
    path0.cubicCurveTo(point + [252.305, -59.344], point + [251.805, -62.567], point + [250.816, -65.188]);
    path0.cubicCurveTo(point + [249.828, -67.813], point + [248.406, -70.083], point + [246.555, -72.001]);
    path0.cubicCurveTo(point + [244.363, -74.258], point + [241.887, -76.075], point + [239.125, -77.442]);
    path0.cubicCurveTo(point + [236.359, -78.809], point + [233.305, -79.993], point + [229.965, -80.985]);
    path0.cubicCurveTo(point + [227.551, -81.7], point + [225.008, -82.688], point + [222.332, -83.95]);
    path0.cubicCurveTo(point + [219.66, -85.215], point + [217.52, -86.606], point + [215.91, -88.126]);
    path0.cubicCurveTo(point + [214.566, -89.626], point + [213.684, -91.239], point + [213.262, -92.965]);
    path0.cubicCurveTo(point + [212.84, -94.692], point + [212.648, -96.536], point + [212.684, -98.497]);
    path0.cubicCurveTo(point + [212.648, -100.844], point + [213.645, -103.317], point + [215.68, -105.911]);
    path0.cubicCurveTo(point + [217.715, -108.505], point + [221.02, -109.911], point + [225.586, -110.13]);
    path0.cubicCurveTo(point + [228.219, -110.13], point + [230.504, -109.727], point + [232.441, -108.919]);
    path0.cubicCurveTo(point + [234.383, -108.114], point + [236.09, -106.903], point + [237.566, -105.294]);
    path0.cubicCurveTo(point + [239.609, -103.071], point + [241.172, -100.891], point + [242.262, -98.755]);
    path0.cubicCurveTo(point + [243.352, -96.618], point + [244.168, -94.727], point + [244.711, -93.083]);
    path0.cubicCurveTo(point + [244.832, -92.743], point + [244.992, -92.528], point + [245.199, -92.434]);
    path0.cubicCurveTo(point + [245.406, -92.34], point + [245.629, -92.325], point + [245.863, -92.391]);
    path0.lineTo(point + [247.707, -92.965]);
    path0.cubicCurveTo(point + [248.168, -93.063], point + [248.398, -93.329], point + [248.398, -93.77]);
    path0.cubicCurveTo(point + [248.375, -94.337], point + [248.215, -96.024], point + [247.918, -98.833]);
    path0.cubicCurveTo(point + [247.625, -101.641], point + [247.328, -104.489], point + [247.031, -107.376]);
    path0.cubicCurveTo(point + [246.734, -110.258], point + [246.578, -112.098], point + [246.555, -112.895]);
    path0.cubicCurveTo(point + [246.559, -113.477], point + [246.492, -113.926], point + [246.352, -114.247]);
    path0.cubicCurveTo(point + [246.215, -114.571], point + [245.973, -114.735], point + [245.633, -114.739]);
    path0.cubicCurveTo(point + [245.293, -114.739], point + [244.992, -114.68], point + [244.738, -114.567]);
    path0.cubicCurveTo(point + [244.484, -114.45], point + [244.246, -114.278], point + [244.02, -114.048]);
    path0.lineTo(point + [242.523, -112.548]);
    path0.cubicCurveTo(point + [242.242, -112.255], point + [241.91, -112.067], point + [241.527, -111.989]);
    path0.cubicCurveTo(point + [241.148, -111.907], point + [240.672, -111.981], point + [240.102, -112.204]);
    path0.cubicCurveTo(point + [238.965, -112.723], point + [237.207, -113.298], point + [234.832, -113.93]);
    path0.cubicCurveTo(point + [232.457, -114.567], point + [229.375, -114.911], point + [225.586, -114.969]);
    path0.cubicCurveTo(point + [222.27, -114.981], point + [219.285, -114.551], point + [216.633, -113.673]);
    path0.cubicCurveTo(point + [213.977, -112.794], point + [211.508, -111.383], point + [209.23, -109.438]);
    path0.cubicCurveTo(point + [206.473, -107.255], point + [204.438, -104.825], point + [203.125, -102.153]);
    path0.cubicCurveTo(point + [201.809, -99.477], point + [201.156, -96.532], point + [201.164, -93.309]);
    path0.cubicCurveTo(point + [201.16, -89.782], point + [201.633, -86.618], point + [202.578, -83.821]);
    path0.cubicCurveTo(point + [203.523, -81.024], point + [204.973, -78.696], point + [206.926, -76.837]);
    path0.cubicCurveTo(point + [209.816, -74.301], point + [212.848, -72.231], point + [216.027, -70.618]);
    path0.cubicCurveTo(point + [219.203, -69.005], point + [221.777, -67.852], point + [223.746, -67.161]);
    path0.cubicCurveTo(point + [229.797, -65.028], point + [234.164, -62.669], point + [236.848, -60.075]);
    path0.cubicCurveTo(point + [239.531, -57.485], point + [240.848, -53.626], point + [240.793, -48.501]);
    path0.cubicCurveTo(point + [240.559, -43.755], point + [238.84, -40.313], point + [235.641, -38.173]);
    path0.cubicCurveTo(point + [232.438, -36.036], point + [229.164, -34.985], point + [225.816, -35.02]);
    path0.cubicCurveTo(point + [222.879, -35.02], point + [220.059, -35.712], point + [217.352, -37.094]);
    path0.cubicCurveTo(point + [214.645, -38.477], point + [212.398, -40.551], point + [210.613, -43.313]);
    path0.cubicCurveTo(point + [209.031, -45.848], point + [207.93, -48.212], point + [207.301, -50.399]);
    path0.cubicCurveTo(point + [206.672, -52.587], point + [206.316, -54.606], point + [206.234, -56.446]);
    path0.cubicCurveTo(point + [206.234, -56.79], point + [206.176, -57.028], point + [206.063, -57.169]);
    path0.cubicCurveTo(point + [205.945, -57.305], point + [205.773, -57.376], point + [205.543, -57.368]);
    path0.closePath();
    path0.moveTo(point + [203.008, -57.598]);
    path0.fillColor = new GrayColor(1.0);
}
draw_glyph_4();


function draw_glyph_5(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [298.633, -42.165]);
    path0.cubicCurveTo(point + [298.453, -42.333], point + [298.266, -42.426], point + [298.07, -42.438]);
    path0.cubicCurveTo(point + [297.875, -42.45], point + [297.719, -42.395], point + [297.594, -42.278]);
    path0.cubicCurveTo(point + [296.074, -41.036], point + [294.332, -40.005], point + [292.367, -39.18]);
    path0.cubicCurveTo(point + [290.402, -38.36], point + [287.996, -37.93], point + [285.152, -37.899]);
    path0.cubicCurveTo(point + [283.242, -37.844], point + [281.191, -38.247], point + [279.004, -39.11]);
    path0.cubicCurveTo(point + [276.82, -39.973], point + [274.914, -41.645], point + [273.289, -44.122]);
    path0.cubicCurveTo(point + [271.238, -47.54], point + [269.953, -50.665], point + [269.445, -53.497]);
    path0.cubicCurveTo(point + [268.934, -56.325], point + [268.715, -59.423], point + [268.797, -62.782]);
    path0.cubicCurveTo(point + [268.941, -66.919], point + [270.09, -70.169], point + [272.25, -72.532]);
    path0.cubicCurveTo(point + [274.41, -74.895], point + [276.715, -76.102], point + [279.164, -76.145]);
    path0.cubicCurveTo(point + [280.672, -76.196], point + [282.035, -75.895], point + [283.254, -75.255]);
    path0.cubicCurveTo(point + [284.473, -74.61], point + [285.488, -73.333], point + [286.305, -71.423]);
    path0.cubicCurveTo(point + [286.852, -69.872], point + [287.66, -68.54], point + [288.727, -67.419]);
    path0.cubicCurveTo(point + [289.789, -66.301], point + [291.289, -65.715], point + [293.219, -65.665]);
    path0.cubicCurveTo(point + [294.84, -65.704], point + [296.09, -66.2], point + [296.961, -67.161]);
    path0.cubicCurveTo(point + [297.836, -68.122], point + [298.277, -69.313], point + [298.285, -70.731]);
    path0.cubicCurveTo(point + [298.441, -72.676], point + [297.383, -74.837], point + [295.117, -77.212]);
    path0.cubicCurveTo(point + [292.852, -79.587], point + [288.457, -80.883], point + [281.93, -81.098]);
    path0.cubicCurveTo(point + [278.707, -81.094], point + [275.703, -80.528], point + [272.914, -79.399]);
    path0.cubicCurveTo(point + [270.125, -78.274], point + [267.523, -76.614], point + [265.109, -74.419]);
    path0.cubicCurveTo(point + [262.234, -71.696], point + [260.094, -68.505], point + [258.688, -64.844]);
    path0.cubicCurveTo(point + [257.281, -61.184], point + [256.578, -57.501], point + [256.586, -53.798]);
    path0.cubicCurveTo(point + [256.543, -50.962], point + [256.914, -48.282], point + [257.707, -45.762]);
    path0.cubicCurveTo(point + [258.5, -43.243], point + [259.969, -40.622], point + [262.113, -37.899]);
    path0.cubicCurveTo(point + [264.309, -35.165], point + [266.949, -33.208], point + [270.035, -32.024]);
    path0.cubicCurveTo(point + [273.121, -30.844], point + [276.625, -30.27], point + [280.547, -30.298]);
    path0.cubicCurveTo(point + [284.906, -30.442], point + [288.855, -31.477], point + [292.398, -33.395]);
    path0.cubicCurveTo(point + [295.938, -35.309], point + [298.477, -37.235], point + [300.016, -39.169]);
    path0.cubicCurveTo(point + [300.238, -39.458], point + [300.34, -39.715], point + [300.316, -39.946]);
    path0.cubicCurveTo(point + [300.297, -40.176], point + [300.195, -40.376], point + [300.016, -40.551]);
    path0.closePath();
    path0.moveTo(point + [298.633, -42.165]);
    path0.fillColor = new GrayColor(1.0);
}
draw_glyph_5();


function draw_glyph_6(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [311.531, -38.708]);
    path0.cubicCurveTo(point + [311.523, -37.622], point + [311.254, -36.829], point + [310.727, -36.333]);
    path0.cubicCurveTo(point + [310.195, -35.833], point + [309.469, -35.59], point + [308.535, -35.598]);
    path0.lineTo(point + [304.504, -35.598]);
    path0.cubicCurveTo(point + [304.109, -35.602], point + [303.836, -35.536], point + [303.684, -35.395]);
    path0.cubicCurveTo(point + [303.531, -35.255], point + [303.461, -35.016], point + [303.469, -34.676]);
    path0.lineTo(point + [303.469, -32.141]);
    path0.cubicCurveTo(point + [303.449, -31.583], point + [303.719, -31.317], point + [304.273, -31.333]);
    path0.cubicCurveTo(point + [304.734, -31.348], point + [306.09, -31.407], point + [308.336, -31.508]);
    path0.cubicCurveTo(point + [310.582, -31.606], point + [313.719, -31.665], point + [317.754, -31.68]);
    path0.cubicCurveTo(point + [321.977, -31.665], point + [325.309, -31.606], point + [327.746, -31.508]);
    path0.cubicCurveTo(point + [330.184, -31.407], point + [331.613, -31.348], point + [332.035, -31.333]);
    path0.cubicCurveTo(point + [332.594, -31.317], point + [332.863, -31.583], point + [332.844, -32.141]);
    path0.lineTo(point + [332.844, -34.79]);
    path0.cubicCurveTo(point + [332.848, -35.075], point + [332.781, -35.282], point + [332.641, -35.411]);
    path0.cubicCurveTo(point + [332.504, -35.536], point + [332.262, -35.598], point + [331.922, -35.598]);
    path0.lineTo(point + [326.852, -35.598]);
    path0.cubicCurveTo(point + [325.711, -35.567], point + [324.883, -35.915], point + [324.375, -36.633]);
    path0.cubicCurveTo(point + [323.867, -37.352], point + [323.617, -38.622], point + [323.629, -40.434]);
    path0.lineTo(point + [323.629, -62.669]);
    path0.cubicCurveTo(point + [323.629, -63.458], point + [323.742, -64.383], point + [323.973, -65.446]);
    path0.cubicCurveTo(point + [324.203, -66.512], point + [324.547, -67.465], point + [325.008, -68.313]);
    path0.cubicCurveTo(point + [325.73, -69.512], point + [326.535, -70.372], point + [327.43, -70.891]);
    path0.cubicCurveTo(point + [328.32, -71.411], point + [329.129, -71.665], point + [329.848, -71.653]);
    path0.cubicCurveTo(point + [330.43, -71.657], point + [330.996, -71.59], point + [331.547, -71.454]);
    path0.cubicCurveTo(point + [332.098, -71.313], point + [332.609, -71.075], point + [333.074, -70.731]);
    path0.cubicCurveTo(point + [333.539, -70.493], point + [334.105, -70.282], point + [334.773, -70.098]);
    path0.cubicCurveTo(point + [335.441, -69.915], point + [336.18, -69.821], point + [336.988, -69.809]);
    path0.cubicCurveTo(point + [338.559, -69.868], point + [339.973, -70.501], point + [341.223, -71.712]);
    path0.cubicCurveTo(point + [342.477, -72.923], point + [343.141, -74.36], point + [343.211, -76.032]);
    path0.cubicCurveTo(point + [343.191, -77.684], point + [342.652, -79.048], point + [341.598, -80.122]);
    path0.cubicCurveTo(point + [340.543, -81.196], point + [339.082, -81.755], point + [337.219, -81.79]);
    path0.cubicCurveTo(point + [334.672, -81.762], point + [332.223, -80.84], point + [329.875, -79.028]);
    path0.cubicCurveTo(point + [327.531, -77.212], point + [325.371, -74.676], point + [323.398, -71.423]);
    path0.lineTo(point + [322.938, -71.423]);
    path0.lineTo(point + [321.898, -79.719]);
    path0.cubicCurveTo(point + [321.848, -80.079], point + [321.746, -80.395], point + [321.598, -80.669]);
    path0.cubicCurveTo(point + [321.445, -80.942], point + [321.199, -81.087], point + [320.863, -81.098]);
    path0.cubicCurveTo(point + [320.527, -81.094], point + [320.219, -81.048], point + [319.941, -80.958]);
    path0.cubicCurveTo(point + [319.664, -80.864], point + [319.355, -80.758], point + [319.02, -80.637]);
    path0.lineTo(point + [305.082, -74.075]);
    path0.cubicCurveTo(point + [304.738, -73.907], point + [304.5, -73.751], point + [304.359, -73.598]);
    path0.cubicCurveTo(point + [304.223, -73.446], point + [304.152, -73.258], point + [304.16, -73.036]);
    path0.lineTo(point + [304.16, -72.344]);
    path0.cubicCurveTo(point + [304.152, -72.118], point + [304.223, -71.938], point + [304.359, -71.798]);
    path0.cubicCurveTo(point + [304.5, -71.657], point + [304.738, -71.532], point + [305.082, -71.423]);
    path0.lineTo(point + [307.152, -70.27]);
    path0.cubicCurveTo(point + [308.848, -69.423], point + [310.008, -68.356], point + [310.637, -67.075]);
    path0.cubicCurveTo(point + [311.266, -65.794], point + [311.566, -63.864], point + [311.531, -61.286]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [311.531, -38.708]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new RgbColor(1, 0, 1);
    compoundPath.strokeColor = new RgbColor(1, 0, 1);
}
draw_glyph_6();


function draw_glyph_7(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [352.477, -48.27]);
    path0.cubicCurveTo(point + [352.473, -46.641], point + [352.449, -44.942], point + [352.402, -43.173]);
    path0.cubicCurveTo(point + [352.359, -41.399], point + [352.305, -39.641], point + [352.246, -37.899]);
    path0.cubicCurveTo(point + [352.191, -36.997], point + [352.012, -36.383], point + [351.711, -36.059]);
    path0.cubicCurveTo(point + [351.414, -35.731], point + [350.977, -35.579], point + [350.402, -35.598]);
    path0.lineTo(point + [345.332, -35.598]);
    path0.cubicCurveTo(point + [344.984, -35.602], point + [344.703, -35.536], point + [344.5, -35.395]);
    path0.cubicCurveTo(point + [344.293, -35.255], point + [344.188, -35.016], point + [344.18, -34.676]);
    path0.lineTo(point + [344.18, -32.485]);
    path0.cubicCurveTo(point + [344.184, -32.036], point + [344.266, -31.727], point + [344.426, -31.563]);
    path0.cubicCurveTo(point + [344.586, -31.403], point + [344.813, -31.325], point + [345.102, -31.333]);
    path0.cubicCurveTo(point + [345.809, -31.348], point + [347.219, -31.407], point + [349.336, -31.508]);
    path0.cubicCurveTo(point + [351.453, -31.606], point + [354.191, -31.665], point + [357.543, -31.68]);
    path0.cubicCurveTo(point + [361.445, -31.665], point + [364.617, -31.606], point + [367.063, -31.508]);
    path0.cubicCurveTo(point + [369.508, -31.407], point + [370.98, -31.348], point + [371.484, -31.333]);
    path0.cubicCurveTo(point + [371.824, -31.34], point + [372.066, -31.446], point + [372.203, -31.653]);
    path0.cubicCurveTo(point + [372.344, -31.856], point + [372.41, -32.137], point + [372.406, -32.485]);
    path0.lineTo(point + [372.406, -34.79]);
    path0.cubicCurveTo(point + [372.414, -35.075], point + [372.34, -35.282], point + [372.176, -35.411]);
    path0.cubicCurveTo(point + [372.012, -35.536], point + [371.703, -35.598], point + [371.254, -35.598]);
    path0.lineTo(point + [366.645, -35.598]);
    path0.cubicCurveTo(point + [366.078, -35.59], point + [365.656, -35.833], point + [365.379, -36.317]);
    path0.cubicCurveTo(point + [365.102, -36.801], point + [364.906, -37.559], point + [364.801, -38.59]);
    path0.cubicCurveTo(point + [364.691, -39.337], point + [364.625, -40.614], point + [364.602, -42.423]);
    path0.cubicCurveTo(point + [364.578, -44.231], point + [364.566, -46.258], point + [364.57, -48.501]);
    path0.lineTo(point + [364.57, -60.942]);
    path0.cubicCurveTo(point + [364.566, -65.79], point + [364.578, -69.883], point + [364.602, -73.223]);
    path0.cubicCurveTo(point + [364.625, -76.563], point + [364.691, -78.727], point + [364.801, -79.719]);
    path0.cubicCurveTo(point + [364.898, -80.637], point + [364.59, -81.098], point + [363.879, -81.098]);
    path0.cubicCurveTo(point + [363.188, -81.098], point + [362.27, -80.868], point + [361.117, -80.411]);
    path0.cubicCurveTo(point + [360.344, -80.098], point + [358.879, -79.555], point + [356.723, -78.77]);
    path0.cubicCurveTo(point + [354.563, -77.989], point + [352.426, -77.212], point + [350.305, -76.442]);
    path0.cubicCurveTo(point + [348.184, -75.673], point + [346.797, -75.149], point + [346.141, -74.88]);
    path0.cubicCurveTo(point + [345.855, -74.77], point + [345.648, -74.645], point + [345.52, -74.505]);
    path0.cubicCurveTo(point + [345.395, -74.364], point + [345.332, -74.184], point + [345.332, -73.958]);
    path0.lineTo(point + [345.332, -72.692]);
    path0.cubicCurveTo(point + [345.316, -72.462], point + [345.379, -72.258], point + [345.52, -72.087]);
    path0.cubicCurveTo(point + [345.664, -71.915], point + [345.984, -71.77], point + [346.484, -71.653]);
    path0.cubicCurveTo(point + [349.055, -70.965], point + [350.715, -70.036], point + [351.469, -68.86]);
    path0.cubicCurveTo(point + [352.223, -67.684], point + [352.559, -66.235], point + [352.477, -64.512]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [363.879, -99.876]);
    path1.cubicCurveTo(point + [363.887, -101.286], point + [363.328, -102.614], point + [362.211, -103.868]);
    path1.cubicCurveTo(point + [361.094, -105.118], point + [359.383, -105.782], point + [357.082, -105.868]);
    path1.cubicCurveTo(point + [354.746, -105.809], point + [352.883, -105.149], point + [351.496, -103.895]);
    path1.cubicCurveTo(point + [350.109, -102.641], point + [349.398, -101.145], point + [349.367, -99.415]);
    path1.cubicCurveTo(point + [349.434, -97.434], point + [350.16, -95.868], point + [351.539, -94.723]);
    path1.cubicCurveTo(point + [352.918, -93.575], point + [354.539, -92.989], point + [356.395, -92.965]);
    path1.cubicCurveTo(point + [358.973, -93.044], point + [360.867, -93.778], point + [362.082, -95.169]);
    path1.cubicCurveTo(point + [363.293, -96.559], point + [363.891, -98.13], point + [363.879, -99.876]);
    path1.closePath();
    path1.moveTo(point + [363.879, -99.876]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new RgbColor(1, 0, 1);
    compoundPath.strokeColor = new RgbColor(1, 0, 1);
}
draw_glyph_7();


function draw_glyph_8(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [394.809, -32.372]);
    path0.cubicCurveTo(point + [396.586, -31.579], point + [398.391, -31.032], point + [400.223, -30.731]);
    path0.cubicCurveTo(point + [402.059, -30.426], point + [403.633, -30.282], point + [404.949, -30.298]);
    path0.cubicCurveTo(point + [412.141, -30.45], point + [418.086, -33.137], point + [422.773, -38.36]);
    path0.cubicCurveTo(point + [427.465, -43.583], point + [429.895, -50.419], point + [430.063, -58.868]);
    path0.cubicCurveTo(point + [430.09, -62.426], point + [429.629, -65.473], point + [428.68, -68.012]);
    path0.cubicCurveTo(point + [427.727, -70.548], point + [426.113, -72.989], point + [423.84, -75.34]);
    path0.cubicCurveTo(point + [422.016, -77.192], point + [420.02, -78.614], point + [417.852, -79.602]);
    path0.cubicCurveTo(point + [415.68, -80.59], point + [413.223, -81.09], point + [410.477, -81.098]);
    path0.cubicCurveTo(point + [407.09, -81.032], point + [404.016, -80.301], point + [401.262, -78.911]);
    path0.cubicCurveTo(point + [398.508, -77.52], point + [396.355, -75.868], point + [394.809, -73.958]);
    path0.lineTo(point + [394.578, -73.958]);
    path0.lineTo(point + [393.773, -79.602]);
    path0.cubicCurveTo(point + [393.715, -80.016], point + [393.602, -80.368], point + [393.426, -80.653]);
    path0.cubicCurveTo(point + [393.254, -80.938], point + [393.023, -81.087], point + [392.738, -81.098]);
    path0.cubicCurveTo(point + [392.285, -81.098], point + [391.805, -81.016], point + [391.297, -80.856]);
    path0.cubicCurveTo(point + [390.789, -80.696], point + [390.191, -80.469], point + [389.512, -80.18]);
    path0.lineTo(point + [376.379, -74.419]);
    path0.cubicCurveTo(point + [376.039, -74.309], point + [375.797, -74.184], point + [375.66, -74.044]);
    path0.cubicCurveTo(point + [375.52, -73.907], point + [375.453, -73.723], point + [375.457, -73.497]);
    path0.lineTo(point + [375.457, -72.344]);
    path0.cubicCurveTo(point + [375.453, -72.126], point + [375.52, -71.93], point + [375.66, -71.77]);
    path0.cubicCurveTo(point + [375.797, -71.606], point + [376.039, -71.415], point + [376.379, -71.192]);
    path0.lineTo(point + [378.914, -69.809]);
    path0.cubicCurveTo(point + [380.586, -68.93], point + [381.672, -67.981], point + [382.168, -66.958]);
    path0.cubicCurveTo(point + [382.66, -65.938], point + [382.883, -64.583], point + [382.828, -62.899]);
    path0.lineTo(point + [382.828, -23.157]);
    path0.cubicCurveTo(point + [382.836, -18.821], point + [382.824, -15.395], point + [382.801, -12.876]);
    path0.cubicCurveTo(point + [382.777, -10.352], point + [382.711, -8.481], point + [382.598, -7.258]);
    path0.cubicCurveTo(point + [382.492, -6.325], point + [382.242, -5.598], point + [381.852, -5.071]);
    path0.cubicCurveTo(point + [381.457, -4.54], point + [380.863, -4.274], point + [380.066, -4.262]);
    path0.lineTo(point + [375.918, -4.262]);
    path0.cubicCurveTo(point + [375.688, -4.258], point + [375.516, -4.18], point + [375.398, -4.032]);
    path0.cubicCurveTo(point + [375.285, -3.883], point + [375.227, -3.692], point + [375.227, -3.458]);
    path0.lineTo(point + [375.227, -0.923]);
    path0.cubicCurveTo(point + [375.223, -0.583], point + [375.289, -0.34], point + [375.43, -0.204]);
    path0.cubicCurveTo(point + [375.566, -0.063], point + [375.809, 0.003], point + [376.148, -0.001]);
    path0.cubicCurveTo(point + [376.605, -0.016], point + [377.879, -0.071], point + [379.977, -0.173]);
    path0.cubicCurveTo(point + [382.074, -0.274], point + [385.023, -0.333], point + [388.82, -0.344]);
    path0.cubicCurveTo(point + [393.25, -0.333], point + [396.484, -0.274], point + [398.523, -0.173]);
    path0.cubicCurveTo(point + [400.566, -0.071], point + [401.785, -0.016], point + [402.184, -0.001]);
    path0.cubicCurveTo(point + [402.633, 0.003], point + [402.941, -0.063], point + [403.105, -0.204]);
    path0.cubicCurveTo(point + [403.266, -0.34], point + [403.344, -0.583], point + [403.336, -0.923]);
    path0.lineTo(point + [403.336, -3.34]);
    path0.cubicCurveTo(point + [403.34, -3.633], point + [403.273, -3.856], point + [403.133, -4.016]);
    path0.cubicCurveTo(point + [402.992, -4.18], point + [402.754, -4.258], point + [402.414, -4.262]);
    path0.lineTo(point + [398.266, -4.262]);
    path0.cubicCurveTo(point + [397.129, -4.141], point + [396.32, -4.497], point + [395.832, -5.329]);
    path0.cubicCurveTo(point + [395.344, -6.157], point + [395.082, -8.184], point + [395.039, -11.407]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [394.809, -69.348]);
    path1.cubicCurveTo(point + [396.0, -70.973], point + [397.48, -72.219], point + [399.246, -73.094]);
    path1.cubicCurveTo(point + [401.012, -73.965], point + [402.836, -74.411], point + [404.719, -74.419]);
    path1.cubicCurveTo(point + [409.563, -74.133], point + [413.031, -71.653], point + [415.129, -66.973]);
    path1.cubicCurveTo(point + [417.223, -62.298], point + [418.246, -57.137], point + [418.195, -51.493]);
    path1.cubicCurveTo(point + [417.965, -45.505], point + [416.727, -41.212], point + [414.48, -38.606]);
    path1.cubicCurveTo(point + [412.234, -36.001], point + [409.672, -34.731], point + [406.789, -34.79]);
    path1.cubicCurveTo(point + [404.949, -34.786], point + [403.277, -34.997], point + [401.781, -35.423]);
    path1.cubicCurveTo(point + [400.281, -35.852], point + [398.957, -36.524], point + [397.805, -37.438]);
    path1.cubicCurveTo(point + [396.672, -38.157], point + [395.887, -39.087], point + [395.445, -40.235]);
    path1.cubicCurveTo(point + [395.004, -41.38], point + [394.789, -42.598], point + [394.809, -43.891]);
    path1.closePath();
    path1.moveTo(point + [394.809, -69.348]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new RgbColor(1, 0, 1);
    compoundPath.strokeColor = new RgbColor(1, 0, 1);
}
draw_glyph_8();


function draw_glyph_9(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [440.734, -73.383]);
    path0.lineTo(point + [440.734, -58.407]);
    path0.cubicCurveTo(point + [440.723, -56.012], point + [440.664, -53.024], point + [440.563, -49.45]);
    path0.cubicCurveTo(point + [440.461, -45.872], point + [440.406, -42.946], point + [440.391, -40.665]);
    path0.cubicCurveTo(point + [440.461, -38.118], point + [441.613, -35.786], point + [443.848, -33.669]);
    path0.cubicCurveTo(point + [446.078, -31.551], point + [448.957, -30.426], point + [452.484, -30.298]);
    path0.cubicCurveTo(point + [456.52, -30.419], point + [459.742, -31.04], point + [462.164, -32.169]);
    path0.cubicCurveTo(point + [464.582, -33.298], point + [466.195, -34.208], point + [467.0, -34.907]);
    path0.cubicCurveTo(point + [467.234, -35.13], point + [467.398, -35.372], point + [467.492, -35.626]);
    path0.cubicCurveTo(point + [467.582, -35.88], point + [467.57, -36.176], point + [467.461, -36.52]);
    path0.lineTo(point + [466.77, -37.899]);
    path0.cubicCurveTo(point + [466.664, -38.184], point + [466.504, -38.337], point + [466.297, -38.36]);
    path0.cubicCurveTo(point + [466.086, -38.387], point + [465.785, -38.309], point + [465.387, -38.13]);
    path0.cubicCurveTo(point + [464.563, -37.719], point + [463.563, -37.391], point + [462.395, -37.137]);
    path0.cubicCurveTo(point + [461.223, -36.887], point + [459.992, -36.755], point + [458.707, -36.747]);
    path0.cubicCurveTo(point + [457.445, -36.637], point + [456.141, -37.321], point + [454.789, -38.794]);
    path0.cubicCurveTo(point + [453.441, -40.266], point + [452.711, -43.196], point + [452.602, -47.579]);
    path0.lineTo(point + [452.602, -57.946]);
    path0.cubicCurveTo(point + [452.602, -60.505], point + [452.629, -63.106], point + [452.688, -65.751]);
    path0.cubicCurveTo(point + [452.746, -68.395], point + [452.832, -70.938], point + [452.945, -73.383]);
    path0.lineTo(point + [466.887, -73.383]);
    path0.cubicCurveTo(point + [467.559, -73.383], point + [467.941, -73.614], point + [468.039, -74.075]);
    path0.lineTo(point + [469.191, -78.911]);
    path0.cubicCurveTo(point + [469.25, -79.153], point + [469.215, -79.364], point + [469.09, -79.544]);
    path0.cubicCurveTo(point + [468.961, -79.727], point + [468.727, -79.825], point + [468.383, -79.833]);
    path0.lineTo(point + [453.176, -79.833]);
    path0.lineTo(point + [453.637, -91.239]);
    path0.cubicCurveTo(point + [453.637, -91.708], point + [453.523, -92.09], point + [453.293, -92.391]);
    path0.cubicCurveTo(point + [453.063, -92.688], point + [452.715, -92.84], point + [452.254, -92.852]);
    path0.cubicCurveTo(point + [451.906, -92.86], point + [451.57, -92.782], point + [451.246, -92.622]);
    path0.cubicCurveTo(point + [450.926, -92.458], point + [450.648, -92.149], point + [450.414, -91.7]);
    path0.cubicCurveTo(point + [448.848, -89.048], point + [446.305, -86.169], point + [442.781, -83.059]);
    path0.cubicCurveTo(point + [439.258, -79.95], point + [436.539, -77.989], point + [434.629, -77.184]);
    path0.cubicCurveTo(point + [433.152, -76.626], point + [432.422, -75.895], point + [432.441, -74.993]);
    path0.cubicCurveTo(point + [432.449, -74.423], point + [432.605, -74.012], point + [432.902, -73.755]);
    path0.cubicCurveTo(point + [433.199, -73.501], point + [433.582, -73.376], point + [434.055, -73.383]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [440.734, -73.383]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new GrayColor(1.0);
    compoundPath.strokeColor = new GrayColor(1.0);
}
draw_glyph_9();


function draw_glyph_10(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [478.875, -48.27]);
    path0.cubicCurveTo(point + [478.875, -46.641], point + [478.848, -44.942], point + [478.805, -43.173]);
    path0.cubicCurveTo(point + [478.758, -41.399], point + [478.707, -39.641], point + [478.645, -37.899]);
    path0.cubicCurveTo(point + [478.59, -36.997], point + [478.414, -36.383], point + [478.113, -36.059]);
    path0.cubicCurveTo(point + [477.813, -35.731], point + [477.375, -35.579], point + [476.801, -35.598]);
    path0.lineTo(point + [471.734, -35.598]);
    path0.cubicCurveTo(point + [471.383, -35.602], point + [471.105, -35.536], point + [470.898, -35.395]);
    path0.cubicCurveTo(point + [470.691, -35.255], point + [470.586, -35.016], point + [470.582, -34.676]);
    path0.lineTo(point + [470.582, -32.485]);
    path0.cubicCurveTo(point + [470.586, -32.036], point + [470.664, -31.727], point + [470.828, -31.563]);
    path0.cubicCurveTo(point + [470.988, -31.403], point + [471.211, -31.325], point + [471.504, -31.333]);
    path0.cubicCurveTo(point + [472.207, -31.348], point + [473.621, -31.407], point + [475.738, -31.508]);
    path0.cubicCurveTo(point + [477.855, -31.606], point + [480.59, -31.665], point + [483.945, -31.68]);
    path0.cubicCurveTo(point + [487.844, -31.665], point + [491.016, -31.606], point + [493.465, -31.508]);
    path0.cubicCurveTo(point + [495.91, -31.407], point + [497.383, -31.348], point + [497.883, -31.333]);
    path0.cubicCurveTo(point + [498.223, -31.34], point + [498.465, -31.446], point + [498.605, -31.653]);
    path0.cubicCurveTo(point + [498.742, -31.856], point + [498.809, -32.137], point + [498.805, -32.485]);
    path0.lineTo(point + [498.805, -34.79]);
    path0.cubicCurveTo(point + [498.816, -35.075], point + [498.738, -35.282], point + [498.574, -35.411]);
    path0.cubicCurveTo(point + [498.41, -35.536], point + [498.105, -35.598], point + [497.652, -35.598]);
    path0.lineTo(point + [493.047, -35.598]);
    path0.cubicCurveTo(point + [492.48, -35.59], point + [492.055, -35.833], point + [491.777, -36.317]);
    path0.cubicCurveTo(point + [491.5, -36.801], point + [491.309, -37.559], point + [491.203, -38.59]);
    path0.cubicCurveTo(point + [491.09, -39.337], point + [491.023, -40.614], point + [491.0, -42.423]);
    path0.cubicCurveTo(point + [490.977, -44.231], point + [490.969, -46.258], point + [490.973, -48.501]);
    path0.lineTo(point + [490.973, -60.942]);
    path0.cubicCurveTo(point + [490.969, -65.79], point + [490.977, -69.883], point + [491.0, -73.223]);
    path0.cubicCurveTo(point + [491.023, -76.563], point + [491.09, -78.727], point + [491.203, -79.719]);
    path0.cubicCurveTo(point + [491.297, -80.637], point + [490.992, -81.098], point + [490.281, -81.098]);
    path0.cubicCurveTo(point + [489.59, -81.098], point + [488.668, -80.868], point + [487.516, -80.411]);
    path0.cubicCurveTo(point + [486.746, -80.098], point + [485.281, -79.555], point + [483.121, -78.77]);
    path0.cubicCurveTo(point + [480.965, -77.989], point + [478.824, -77.212], point + [476.703, -76.442]);
    path0.cubicCurveTo(point + [474.586, -75.673], point + [473.195, -75.149], point + [472.539, -74.88]);
    path0.cubicCurveTo(point + [472.254, -74.77], point + [472.047, -74.645], point + [471.922, -74.505]);
    path0.cubicCurveTo(point + [471.793, -74.364], point + [471.73, -74.184], point + [471.734, -73.958]);
    path0.lineTo(point + [471.734, -72.692]);
    path0.cubicCurveTo(point + [471.719, -72.462], point + [471.777, -72.258], point + [471.922, -72.087]);
    path0.cubicCurveTo(point + [472.063, -71.915], point + [472.383, -71.77], point + [472.887, -71.653]);
    path0.cubicCurveTo(point + [475.453, -70.965], point + [477.113, -70.036], point + [477.867, -68.86]);
    path0.cubicCurveTo(point + [478.621, -67.684], point + [478.957, -66.235], point + [478.875, -64.512]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [490.281, -99.876]);
    path1.cubicCurveTo(point + [490.285, -101.286], point + [489.73, -102.614], point + [488.609, -103.868]);
    path1.cubicCurveTo(point + [487.492, -105.118], point + [485.781, -105.782], point + [483.484, -105.868]);
    path1.cubicCurveTo(point + [481.145, -105.809], point + [479.285, -105.149], point + [477.898, -103.895]);
    path1.cubicCurveTo(point + [476.508, -102.641], point + [475.801, -101.145], point + [475.766, -99.415]);
    path1.cubicCurveTo(point + [475.836, -97.434], point + [476.559, -95.868], point + [477.941, -94.723]);
    path1.cubicCurveTo(point + [479.32, -93.575], point + [480.938, -92.989], point + [482.793, -92.965]);
    path1.cubicCurveTo(point + [485.371, -93.044], point + [487.27, -93.778], point + [488.48, -95.169]);
    path1.cubicCurveTo(point + [489.691, -96.559], point + [490.293, -98.13], point + [490.281, -99.876]);
    path1.closePath();
    path1.moveTo(point + [490.281, -99.876]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new GrayColor(1.0);
    compoundPath.strokeColor = new GrayColor(1.0);
}
draw_glyph_10();


function draw_glyph_11(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [522.938, -73.958]);
    path0.lineTo(point + [535.496, -73.958]);
    path0.cubicCurveTo(point + [535.953, -73.954], point + [536.305, -73.993], point + [536.547, -74.075]);
    path0.cubicCurveTo(point + [536.789, -74.153], point + [536.938, -74.309], point + [536.992, -74.532]);
    path0.lineTo(point + [537.566, -78.68]);
    path0.cubicCurveTo(point + [537.586, -78.926], point + [537.551, -79.157], point + [537.453, -79.372]);
    path0.cubicCurveTo(point + [537.355, -79.587], point + [537.09, -79.704], point + [536.648, -79.719]);
    path0.lineTo(point + [522.938, -79.719]);
    path0.lineTo(point + [522.938, -83.52]);
    path0.cubicCurveTo(point + [522.91, -87.958], point + [522.992, -92.184], point + [523.184, -96.204]);
    path0.cubicCurveTo(point + [523.371, -100.227], point + [524.176, -103.333], point + [525.586, -105.524]);
    path0.cubicCurveTo(point + [526.621, -106.985], point + [527.723, -107.973], point + [528.898, -108.489]);
    path0.cubicCurveTo(point + [530.074, -109.001], point + [531.352, -109.243], point + [532.73, -109.208]);
    path0.cubicCurveTo(point + [533.539, -109.212], point + [534.336, -108.973], point + [535.121, -108.489]);
    path0.cubicCurveTo(point + [535.902, -108.005], point + [536.641, -107.247], point + [537.336, -106.212]);
    path0.cubicCurveTo(point + [537.688, -105.614], point + [538.141, -105.028], point + [538.691, -104.458]);
    path0.cubicCurveTo(point + [539.242, -103.883], point + [539.867, -103.473], point + [540.563, -103.219]);
    path0.cubicCurveTo(point + [541.035, -102.876], point + [541.59, -102.637], point + [542.234, -102.497]);
    path0.cubicCurveTo(point + [542.875, -102.36], point + [543.551, -102.294], point + [544.25, -102.298]);
    path0.cubicCurveTo(point + [545.496, -102.325], point + [546.746, -102.844], point + [547.992, -103.852]);
    path0.cubicCurveTo(point + [549.242, -104.86], point + [549.914, -106.184], point + [550.008, -107.825]);
    path0.cubicCurveTo(point + [549.93, -110.239], point + [548.824, -112.036], point + [546.699, -113.212]);
    path0.cubicCurveTo(point + [544.57, -114.387], point + [541.91, -114.973], point + [538.719, -114.969]);
    path0.cubicCurveTo(point + [535.277, -114.997], point + [531.965, -114.364], point + [528.785, -113.067]);
    path0.cubicCurveTo(point + [525.602, -111.77], point + [522.461, -109.641], point + [519.367, -106.673]);
    path0.cubicCurveTo(point + [516.793, -104.063], point + [514.738, -100.762], point + [513.203, -96.766]);
    path0.cubicCurveTo(point + [511.668, -92.774], point + [510.879, -87.86], point + [510.844, -82.02]);
    path0.lineTo(point + [510.844, -79.719]);
    path0.lineTo(point + [504.391, -79.719]);
    path0.cubicCurveTo(point + [503.926, -79.723], point + [503.563, -79.684], point + [503.297, -79.602]);
    path0.cubicCurveTo(point + [503.031, -79.52], point + [502.898, -79.368], point + [502.895, -79.141]);
    path0.lineTo(point + [502.434, -75.223]);
    path0.cubicCurveTo(point + [502.379, -74.77], point + [502.402, -74.442], point + [502.504, -74.247]);
    path0.cubicCurveTo(point + [502.609, -74.048], point + [502.777, -73.954], point + [503.008, -73.958]);
    path0.lineTo(point + [510.844, -73.958]);
    path0.lineTo(point + [510.844, -39.512]);
    path0.cubicCurveTo(point + [510.859, -38.243], point + [510.648, -37.27], point + [510.207, -36.606]);
    path0.cubicCurveTo(point + [509.766, -35.938], point + [508.98, -35.602], point + [507.848, -35.598]);
    path0.lineTo(point + [503.238, -35.598]);
    path0.cubicCurveTo(point + [502.789, -35.598], point + [502.48, -35.54], point + [502.316, -35.423]);
    path0.cubicCurveTo(point + [502.152, -35.309], point + [502.078, -35.137], point + [502.086, -34.907]);
    path0.lineTo(point + [502.086, -32.255]);
    path0.cubicCurveTo(point + [502.082, -31.915], point + [502.148, -31.676], point + [502.289, -31.536]);
    path0.cubicCurveTo(point + [502.43, -31.395], point + [502.668, -31.329], point + [503.008, -31.333]);
    path0.cubicCurveTo(point + [503.555, -31.348], point + [505.109, -31.407], point + [507.676, -31.508]);
    path0.cubicCurveTo(point + [510.238, -31.606], point + [513.289, -31.665], point + [516.832, -31.68]);
    path0.cubicCurveTo(point + [521.859, -31.665], point + [525.574, -31.606], point + [527.977, -31.508]);
    path0.cubicCurveTo(point + [530.383, -31.407], point + [531.734, -31.348], point + [532.039, -31.333]);
    path0.cubicCurveTo(point + [532.27, -31.34], point + [532.441, -31.446], point + [532.559, -31.653]);
    path0.cubicCurveTo(point + [532.672, -31.856], point + [532.73, -32.137], point + [532.73, -32.485]);
    path0.lineTo(point + [532.73, -34.559]);
    path0.cubicCurveTo(point + [532.738, -34.958], point + [532.664, -35.231], point + [532.5, -35.38]);
    path0.cubicCurveTo(point + [532.336, -35.532], point + [532.027, -35.602], point + [531.578, -35.598]);
    path0.lineTo(point + [526.277, -35.598]);
    path0.cubicCurveTo(point + [525.25, -35.602], point + [524.484, -35.88], point + [523.977, -36.43]);
    path0.cubicCurveTo(point + [523.465, -36.985], point + [523.16, -37.782], point + [523.055, -38.821]);
    path0.cubicCurveTo(point + [522.949, -40.704], point + [522.898, -44.141], point + [522.91, -49.133]);
    path0.cubicCurveTo(point + [522.918, -54.126], point + [522.93, -59.059], point + [522.938, -63.934]);
    path0.closePath();
    path0.moveTo(point + [522.938, -73.958]);
    path0.fillColor = new GrayColor(1.0);
}
draw_glyph_11();


function draw_glyph_12(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [546.375, -48.27]);
    path0.cubicCurveTo(point + [546.375, -46.641], point + [546.348, -44.942], point + [546.305, -43.173]);
    path0.cubicCurveTo(point + [546.258, -41.399], point + [546.207, -39.641], point + [546.145, -37.899]);
    path0.cubicCurveTo(point + [546.09, -36.997], point + [545.914, -36.383], point + [545.613, -36.059]);
    path0.cubicCurveTo(point + [545.313, -35.731], point + [544.875, -35.579], point + [544.301, -35.598]);
    path0.lineTo(point + [539.234, -35.598]);
    path0.cubicCurveTo(point + [538.883, -35.602], point + [538.605, -35.536], point + [538.398, -35.395]);
    path0.cubicCurveTo(point + [538.191, -35.255], point + [538.086, -35.016], point + [538.082, -34.676]);
    path0.lineTo(point + [538.082, -32.485]);
    path0.cubicCurveTo(point + [538.086, -32.036], point + [538.164, -31.727], point + [538.328, -31.563]);
    path0.cubicCurveTo(point + [538.488, -31.403], point + [538.711, -31.325], point + [539.004, -31.333]);
    path0.cubicCurveTo(point + [539.707, -31.348], point + [541.121, -31.407], point + [543.238, -31.508]);
    path0.cubicCurveTo(point + [545.355, -31.606], point + [548.09, -31.665], point + [551.445, -31.68]);
    path0.cubicCurveTo(point + [555.344, -31.665], point + [558.516, -31.606], point + [560.965, -31.508]);
    path0.cubicCurveTo(point + [563.41, -31.407], point + [564.883, -31.348], point + [565.383, -31.333]);
    path0.cubicCurveTo(point + [565.723, -31.34], point + [565.965, -31.446], point + [566.105, -31.653]);
    path0.cubicCurveTo(point + [566.242, -31.856], point + [566.309, -32.137], point + [566.305, -32.485]);
    path0.lineTo(point + [566.305, -34.79]);
    path0.cubicCurveTo(point + [566.316, -35.075], point + [566.238, -35.282], point + [566.074, -35.411]);
    path0.cubicCurveTo(point + [565.91, -35.536], point + [565.605, -35.598], point + [565.152, -35.598]);
    path0.lineTo(point + [560.547, -35.598]);
    path0.cubicCurveTo(point + [559.98, -35.59], point + [559.555, -35.833], point + [559.277, -36.317]);
    path0.cubicCurveTo(point + [559.0, -36.801], point + [558.809, -37.559], point + [558.703, -38.59]);
    path0.cubicCurveTo(point + [558.59, -39.337], point + [558.523, -40.614], point + [558.5, -42.423]);
    path0.cubicCurveTo(point + [558.477, -44.231], point + [558.469, -46.258], point + [558.473, -48.501]);
    path0.lineTo(point + [558.473, -60.942]);
    path0.cubicCurveTo(point + [558.469, -65.79], point + [558.477, -69.883], point + [558.5, -73.223]);
    path0.cubicCurveTo(point + [558.523, -76.563], point + [558.59, -78.727], point + [558.703, -79.719]);
    path0.cubicCurveTo(point + [558.797, -80.637], point + [558.492, -81.098], point + [557.781, -81.098]);
    path0.cubicCurveTo(point + [557.09, -81.098], point + [556.168, -80.868], point + [555.016, -80.411]);
    path0.cubicCurveTo(point + [554.246, -80.098], point + [552.781, -79.555], point + [550.621, -78.77]);
    path0.cubicCurveTo(point + [548.465, -77.989], point + [546.324, -77.212], point + [544.203, -76.442]);
    path0.cubicCurveTo(point + [542.086, -75.673], point + [540.695, -75.149], point + [540.039, -74.88]);
    path0.cubicCurveTo(point + [539.754, -74.77], point + [539.547, -74.645], point + [539.422, -74.505]);
    path0.cubicCurveTo(point + [539.293, -74.364], point + [539.23, -74.184], point + [539.234, -73.958]);
    path0.lineTo(point + [539.234, -72.692]);
    path0.cubicCurveTo(point + [539.219, -72.462], point + [539.277, -72.258], point + [539.422, -72.087]);
    path0.cubicCurveTo(point + [539.563, -71.915], point + [539.883, -71.77], point + [540.387, -71.653]);
    path0.cubicCurveTo(point + [542.953, -70.965], point + [544.613, -70.036], point + [545.367, -68.86]);
    path0.cubicCurveTo(point + [546.121, -67.684], point + [546.457, -66.235], point + [546.375, -64.512]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [557.781, -99.876]);
    path1.cubicCurveTo(point + [557.785, -101.286], point + [557.23, -102.614], point + [556.109, -103.868]);
    path1.cubicCurveTo(point + [554.992, -105.118], point + [553.281, -105.782], point + [550.984, -105.868]);
    path1.cubicCurveTo(point + [548.645, -105.809], point + [546.785, -105.149], point + [545.398, -103.895]);
    path1.cubicCurveTo(point + [544.008, -102.641], point + [543.301, -101.145], point + [543.266, -99.415]);
    path1.cubicCurveTo(point + [543.336, -97.434], point + [544.059, -95.868], point + [545.441, -94.723]);
    path1.cubicCurveTo(point + [546.82, -93.575], point + [548.438, -92.989], point + [550.293, -92.965]);
    path1.cubicCurveTo(point + [552.871, -93.044], point + [554.77, -93.778], point + [555.98, -95.169]);
    path1.cubicCurveTo(point + [557.191, -96.559], point + [557.793, -98.13], point + [557.781, -99.876]);
    path1.closePath();

    var path2 = new Path();
    path2.moveTo(point + [557.781, -99.876]);

    var unsortedPathList = [path0, path1, path2];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new RgbColor(1, 0.4, 0);
    compoundPath.strokeColor = new RgbColor(1, 0.4, 0);
}
draw_glyph_12();


function draw_glyph_13(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [583.066, -60.825]);
    path0.lineTo(point + [610.941, -60.825]);
    path0.cubicCurveTo(point + [611.984, -60.794], point + [612.781, -60.883], point + [613.332, -61.098]);
    path0.cubicCurveTo(point + [613.887, -61.313], point + [614.164, -61.837], point + [614.168, -62.669]);
    path0.cubicCurveTo(point + [614.195, -64.383], point + [613.668, -66.676], point + [612.578, -69.548]);
    path0.cubicCurveTo(point + [611.488, -72.419], point + [609.668, -75.024], point + [607.121, -77.372]);
    path0.cubicCurveTo(point + [604.57, -79.715], point + [601.121, -80.962], point + [596.773, -81.098]);
    path0.cubicCurveTo(point + [591.855, -81.133], point + [587.867, -80.489], point + [584.809, -79.169]);
    path0.cubicCurveTo(point + [581.746, -77.852], point + [579.055, -75.653], point + [576.73, -72.575]);
    path0.cubicCurveTo(point + [574.328, -69.438], point + [572.766, -66.583], point + [572.051, -64.008]);
    path0.cubicCurveTo(point + [571.332, -61.434], point + [571.012, -58.606], point + [571.086, -55.524]);
    path0.cubicCurveTo(point + [571.023, -51.989], point + [571.434, -48.692], point + [572.324, -45.633]);
    path0.cubicCurveTo(point + [573.211, -42.575], point + [574.949, -39.536], point + [577.535, -36.52]);
    path0.cubicCurveTo(point + [579.531, -34.243], point + [581.879, -32.63], point + [584.578, -31.68]);
    path0.cubicCurveTo(point + [587.277, -30.731], point + [590.461, -30.27], point + [594.125, -30.298]);
    path0.cubicCurveTo(point + [600.391, -30.532], point + [605.168, -32.02], point + [608.453, -34.762]);
    path0.cubicCurveTo(point + [611.738, -37.501], point + [613.949, -40.083], point + [615.09, -42.508]);
    path0.cubicCurveTo(point + [615.48, -43.239], point + [615.652, -43.766], point + [615.609, -44.094]);
    path0.cubicCurveTo(point + [615.566, -44.419], point + [615.395, -44.661], point + [615.09, -44.813]);
    path0.lineTo(point + [613.363, -45.848]);
    path0.cubicCurveTo(point + [613.133, -45.977], point + [612.902, -46.008], point + [612.672, -45.95]);
    path0.cubicCurveTo(point + [612.441, -45.891], point + [612.211, -45.665], point + [611.98, -45.274]);
    path0.cubicCurveTo(point + [610.789, -43.383], point + [609.055, -41.809], point + [606.781, -40.551]);
    path0.cubicCurveTo(point + [604.508, -39.294], point + [601.594, -38.641], point + [598.043, -38.59]);
    path0.cubicCurveTo(point + [594.543, -38.633], point + [591.227, -40.278], point + [588.09, -43.516]);
    path0.cubicCurveTo(point + [584.953, -46.758], point + [583.277, -51.337], point + [583.066, -57.255]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [583.41, -64.973]);
    path1.cubicCurveTo(point + [584.156, -68.844], point + [585.402, -71.786], point + [587.156, -73.798]);
    path1.cubicCurveTo(point + [588.906, -75.813], point + [591.191, -76.825], point + [594.008, -76.837]);
    path1.cubicCurveTo(point + [596.926, -76.626], point + [598.867, -75.348], point + [599.828, -73.008]);
    path1.cubicCurveTo(point + [600.785, -70.665], point + [601.227, -68.524], point + [601.152, -66.587]);
    path1.cubicCurveTo(point + [601.145, -66.114], point + [600.813, -65.731], point + [600.156, -65.434]);
    path1.cubicCurveTo(point + [599.504, -65.137], point + [598.566, -64.981], point + [597.352, -64.973]);
    path1.closePath();
    path1.moveTo(point + [583.41, -64.973]);

    var unsortedPathList = [path0, path1];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new RgbColor(1, 0.4, 0);
    compoundPath.strokeColor = new RgbColor(1, 0.4, 0);
}
draw_glyph_13();


function draw_glyph_14(){
    var point = new Point(0, 115);
    var path0 = new Path();
    path0.moveTo(point + [667.355, -75.684]);
    path0.cubicCurveTo(point + [667.348, -83.38], point + [667.367, -90.715], point + [667.414, -97.704]);
    path0.cubicCurveTo(point + [667.461, -104.688], point + [667.598, -109.755], point + [667.816, -112.895]);
    path0.cubicCurveTo(point + [667.918, -113.587], point + [667.891, -114.106], point + [667.73, -114.45]);
    path0.cubicCurveTo(point + [667.574, -114.798], point + [667.371, -114.969], point + [667.125, -114.969]);
    path0.cubicCurveTo(point + [666.684, -114.965], point + [666.242, -114.915], point + [665.801, -114.825]);
    path0.cubicCurveTo(point + [665.359, -114.735], point + [664.805, -114.626], point + [664.133, -114.508]);
    path0.cubicCurveTo(point + [662.5, -114.161], point + [660.117, -113.817], point + [656.988, -113.469]);
    path0.cubicCurveTo(point + [653.859, -113.126], point + [650.789, -112.778], point + [647.773, -112.434]);
    path0.cubicCurveTo(point + [647.434, -112.325], point + [647.191, -112.2], point + [647.055, -112.059]);
    path0.cubicCurveTo(point + [646.914, -111.919], point + [646.848, -111.739], point + [646.852, -111.512]);
    path0.lineTo(point + [646.852, -109.438]);
    path0.cubicCurveTo(point + [646.848, -109.212], point + [646.914, -109.032], point + [647.055, -108.891]);
    path0.cubicCurveTo(point + [647.191, -108.751], point + [647.434, -108.63], point + [647.773, -108.516]);
    path0.cubicCurveTo(point + [650.789, -107.981], point + [652.762, -107.212], point + [653.691, -106.212]);
    path0.cubicCurveTo(point + [654.621, -105.215], point + [655.066, -103.755], point + [655.031, -101.837]);
    path0.lineTo(point + [655.375, -79.489]);
    path0.cubicCurveTo(point + [653.988, -79.958], point + [652.387, -80.34], point + [650.566, -80.637]);
    path0.cubicCurveTo(point + [648.746, -80.938], point + [646.742, -81.09], point + [644.547, -81.098]);
    path0.cubicCurveTo(point + [641.102, -81.094], point + [637.973, -80.469], point + [635.16, -79.227]);
    path0.cubicCurveTo(point + [632.348, -77.985], point + [629.793, -76.153], point + [627.5, -73.727]);
    path0.cubicCurveTo(point + [624.543, -70.532], point + [622.449, -67.247], point + [621.219, -63.864]);
    path0.cubicCurveTo(point + [619.992, -60.481], point + [619.395, -56.821], point + [619.434, -52.876]);
    path0.cubicCurveTo(point + [619.43, -49.239], point + [620.016, -46.087], point + [621.191, -43.415]);
    path0.cubicCurveTo(point + [622.367, -40.743], point + [624.164, -38.255], point + [626.578, -35.942]);
    path0.cubicCurveTo(point + [628.738, -33.84], point + [631.012, -32.368], point + [633.402, -31.52]);
    path0.cubicCurveTo(point + [635.793, -30.673], point + [638.125, -30.266], point + [640.402, -30.298]);
    path0.cubicCurveTo(point + [643.16, -30.333], point + [646.051, -30.954], point + [649.07, -32.169]);
    path0.cubicCurveTo(point + [652.09, -33.383], point + [654.574, -34.989], point + [656.527, -36.977]);
    path0.lineTo(point + [658.141, -31.68]);
    path0.cubicCurveTo(point + [658.266, -31.215], point + [658.477, -30.88], point + [658.773, -30.673]);
    path0.cubicCurveTo(point + [659.074, -30.465], point + [659.398, -30.419], point + [659.754, -30.528]);
    path0.lineTo(point + [675.191, -34.907]);
    path0.cubicCurveTo(point + [675.883, -35.137], point + [676.113, -35.598], point + [675.883, -36.29]);
    path0.lineTo(point + [675.652, -37.669]);
    path0.cubicCurveTo(point + [675.555, -37.899], point + [675.344, -38.075], point + [675.02, -38.188]);
    path0.cubicCurveTo(point + [674.691, -38.305], point + [674.133, -38.36], point + [673.348, -38.36]);
    path0.cubicCurveTo(point + [672.512, -38.462], point + [671.648, -38.665], point + [670.754, -38.965]);
    path0.cubicCurveTo(point + [669.863, -39.27], point + [669.113, -39.758], point + [668.508, -40.434]);
    path0.cubicCurveTo(point + [668.059, -41.087], point + [667.75, -42.376], point + [667.586, -44.294]);
    path0.cubicCurveTo(point + [667.426, -46.215], point + [667.348, -48.305], point + [667.355, -50.571]);
    path0.closePath();

    var path1 = new Path();
    path1.moveTo(point + [655.375, -45.505]);
    path1.cubicCurveTo(point + [655.383, -44.59], point + [655.313, -43.766], point + [655.176, -43.028]);
    path1.cubicCurveTo(point + [655.035, -42.29], point + [654.797, -41.579], point + [654.453, -40.895]);
    path1.cubicCurveTo(point + [653.875, -39.915], point + [652.848, -38.997], point + [651.375, -38.13]);
    path1.cubicCurveTo(point + [649.898, -37.266], point + [648.008, -36.805], point + [645.699, -36.747]);
    path1.cubicCurveTo(point + [641.984, -36.868], point + [638.73, -38.989], point + [635.938, -43.114]);
    path1.cubicCurveTo(point + [633.145, -47.235], point + [631.676, -52.641], point + [631.531, -59.329]);
    path1.cubicCurveTo(point + [631.5, -61.704], point + [631.82, -64.063], point + [632.496, -66.411]);
    path1.cubicCurveTo(point + [633.168, -68.758], point + [634.383, -71.005], point + [636.137, -73.153]);
    path1.cubicCurveTo(point + [637.254, -74.505], point + [638.508, -75.426], point + [639.898, -75.915]);
    path1.cubicCurveTo(point + [641.285, -76.407], point + [642.684, -76.637], point + [644.086, -76.606]);
    path1.cubicCurveTo(point + [646.527, -76.563], point + [648.617, -76.02], point + [650.367, -74.981]);
    path1.cubicCurveTo(point + [652.113, -73.942], point + [653.398, -72.68], point + [654.223, -71.192]);
    path1.cubicCurveTo(point + [654.676, -70.372], point + [654.984, -69.481], point + [655.145, -68.516]);
    path1.cubicCurveTo(point + [655.309, -67.551], point + [655.387, -66.598], point + [655.375, -65.665]);
    path1.closePath();

    var path2 = new Path();
    path2.moveTo(point + [655.375, -45.505]);

    var unsortedPathList = [path0, path1, path2];
    unsortedPathList = remove_empty_paths(unsortedPathList);
    var sortedPathList = unsortedPathList.sort(sortOnBoundsSize);
    var compoundPath = new CompoundPath(sortedPathList);
    compoundPath.fillColor = new GrayColor(1.0);
    compoundPath.strokeColor = new GrayColor(1.0);
}
draw_glyph_14();


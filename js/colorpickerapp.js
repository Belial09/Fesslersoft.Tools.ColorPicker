var app = angular.module('colorpickerapp',[ 'mp.colorPicker' ]);
app.controller('colorpickerController', [
    '$scope',
    function($scope) {        
        $scope.$watch('color', function(newvalue,oldvalue) {
            $scope.CalculateHex(newvalue,oldvalue);
            $scope.CalculateDec(newvalue,oldvalue);
            $scope.CalculateRGB(newvalue,oldvalue);
            $scope.CalculateCMYK(newvalue,oldvalue);
            $scope.CalculateWebsafeRGB(newvalue,oldvalue);
            $scope.CalculateHSL(newvalue,oldvalue);
            $scope.CalculateHSV(newvalue,oldvalue);
        });
        
        $scope.CalculateHSV = function CalcHSV(newvalue,oldvalue){
            var colorConverter = tinycolor(newvalue);
            var colArr = colorConverter.toHsv();
            $scope.colHSVH = parseFloat(colArr["h"]).toFixed(3);
            $scope.colHSVS = parseFloat(colArr["s"]).toFixed(3);
            $scope.colHSVV = parseFloat(colArr["v"]).toFixed(3);
        }
        
        $scope.CalculateHSL = function CalcHSL(newvalue,oldvalue){
            var colorConverter = tinycolor(newvalue);
            var colArr = colorConverter.toHsl();
            $scope.colHSLH = parseFloat(colArr["h"]).toFixed(3);
            $scope.colHSLS = parseFloat(colArr["s"]).toFixed(3);
            $scope.colHSLL = parseFloat(colArr["l"]).toFixed(3);
        }
        
        $scope.CalculateWebsafeRGB = function CalcWebsafeRGB(newvalue,oldvalue){
            var color = rgb2NearestWebsafeColor($scope.colR,$scope.colG,$scope.colB);
            var colorConverter = tinycolor({r: color["R"], g: color["G"], b: color["B"]});
            $scope.webSafeHexColor = "#" + colorConverter.toHex();
        }
        
        $scope.CalculateRGB = function CalcRGB(newvalue,oldvalue){
            var colorConverter = tinycolor(newvalue);
            var colArr = colorConverter.toRgb(); 
            $scope.colR = colArr["r"];
            $scope.colG = colArr["g"]
            $scope.colB = colArr["b"];
        }
        
        $scope.CalculateCMYK = function CalcCMYK(newvalue,oldvalue){
            var colArr = rgb2cmyk([$scope.colR,$scope.colG,$scope.colB])
            $scope.colC =  parseFloat(colArr[0].toFixed(3));
            $scope.colM = parseFloat(colArr[1].toFixed(3));
            $scope.colY = parseFloat(colArr[2].toFixed(3));
            $scope.colK =parseFloat(colArr[3].toFixed(3));
        }
        
        $scope.CalculateDec = function CalcDec(newvalue,oldvalue){
            $scope.decColor = parseInt(newvalue.replace("#",""), 16);
        }
        
        $scope.CalculateHex = function CalcHex(newvalue,oldvalue){
            var color = tinycolor(newvalue);
            $scope.hex8Color = "#" + color.toHex8();
        }
    }
]);


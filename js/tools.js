function rgb2NearestWebsafeColor(r, g, b) {
    var getWebSafeValue = function(inputValue) {
            inputValue = Math.min(Math.max(0, inputValue), 255);
            var count, n;
            for (count=0; count<256; count=count+51) {
                n = (count+51);
                if (inputValue >= count && inputValue <= n) {return (inputValue-count > 25) ? n : count;}
            }                
        }
    var webSafeR = getWebSafeValue(r);
    var webSafeG = getWebSafeValue(g);
    var webSafeB = getWebSafeValue(b);
return {
        "R": webSafeR,
        "G": webSafeG,
        "B": webSafeB
    };
}
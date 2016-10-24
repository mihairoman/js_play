var binaryGap = (function() {

    return {
        getFor: function(nr){
            var arr = nr.toString(2).split("");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = parseInt(arr[i],10);
            }

            var max = 0,
                acc = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == 0) {
                    acc++;
                } else if (acc > max) {
                    max = acc;
                    acc = 0;
                }
            }
            return max;
        }
    }
})();

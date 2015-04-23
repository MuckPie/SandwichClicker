var sandwiches = 0;
var cursors = 0;
var factories = 0;

// addCommans function made by mredkj.com
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function sandwichClick(number) {
    sandwiches = sandwiches + number;
    document.getElementById("sandwiches").innerHTML = addCommas(sandwiches.toFixed()) + "<br> sandwiches";
};

function buyCursor() {
    var cursorCost = Math.ceil(15 * Math.pow(1.15,cursors));
    if(sandwiches >= cursorCost) {
        cursors = cursors + 1;
        sandwiches = sandwiches - cursorCost;
        document.getElementById('cursors').innerHTML = addCommas(cursors);
        document.getElementById("sandwiches").innerHTML = addCommas(sandwiches.toFixed()) + "<br> sandwiches";
    };
    var nextCost = Math.ceil(15 * Math.pow(1.15,cursors));
    document.getElementById('cursorCost').innerHTML = addCommas(nextCost);
};

function buyFactory() {
    var factoryCost = Math.ceil(100 * Math.pow(1.15,factories));
    if(sandwiches >= factoryCost) {
        factories = factories + 1;
        sandwiches = sandwiches - factoryCost;
        document.getElementById('factories').innerHTML = addCommas(factories);
        document.getElementById("sandwiches").innerHTML = addCommas(sandwiches.toFixed()) + "<br> sandwiches";
    };
    var nextCost = Math.ceil(100 * Math.pow(1.15,factories));
    document.getElementById('factoryCost').innerHTML = addCommas(nextCost);
};

window.setInterval(function() {
    sandwichClick(cursors * 0.1);
    sandwichClick(factories * 0.5);
}, 1000);

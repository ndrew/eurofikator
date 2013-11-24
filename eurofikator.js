function recursiveReplace(node) {
    if (node.nodeType == 3) { 
        var words = node.nodeValue.replace(/\s+/g, " ").split(/\s/);
        var res = "";
        for (var i = 0; i < words.length; i++) {
            var s = words[i];
            if (s.length > 2) {
                var c = s.charAt(0);
                if (c.match(/[\u0400-\u04FF]/)
                && (c.toLocaleUpperCase().indexOf("євро") !== 0 ) ) {
                    if (c == c.toLocaleUpperCase()) {
                        res = res + "Євро" + s.toLocaleLowerCase() + " ";
                    } else {
                        res = res + "євро" + s + " ";                 
                    }
                } else {
                    res = res + s + " ";
                }             
            } else {
                res = res + s + " ";
            }
        }
        node.nodeValue = res;
        return;
    }

    if (node.nodeType == 1) {
        $(node).contents().each(function () {
            recursiveReplace(this);
        });
    }
}

recursiveReplace(document.body);

document.body.style.backgroundRepeat="repeat";
document.body.style.backgroundImage="url('http://www.flags.net/images/largeflags/EUUN0001.GIF')";

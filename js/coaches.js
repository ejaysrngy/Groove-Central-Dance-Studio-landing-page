 function descending() {
    var mylist = document.getElementById('row1');
    var divs = mylist.getElementsByTagName('div');
    var listitems = [];
    for (i = 0; i < divs.length; i++) {
            listitems.push(divs.item(i));
    }
    listitems.sort(function(a, b) {
        var compA = a.getAttribute('id').toUpperCase();
        var compB = b.getAttribute('id').toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    for (i = 0; i < listitems.length; i++) {
        mylist.appendChild(listitems[i]);
    }
}

function ascending() {
    var mylist = document.getElementById('row1');
    var divs = mylist.getElementsByTagName('div');
    var listitems = [];
    for (i = 0; i < divs.length; i++) {
            listitems.push(divs.item(i));
    }
    listitems.sort(function(a, b) {
        var compA = a.getAttribute('id').toUpperCase();
        var compB = b.getAttribute('id').toUpperCase();
        return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
    });
    for (i = 0; i < listitems.length; i++) {
        mylist.appendChild(listitems[i]);
    }
}

function difficulty() {
    var mylist = document.getElementById('row1');
    var divs = mylist.getElementsByTagName('div');
    var listitems = [];
    for (i = 0; i < divs.length; i++) {
            listitems.push(divs.item(i));
    }
    listitems.sort(function(a, b) {
        var compA = a.getAttribute('difficulty');
        var compB = b.getAttribute('difficulty');
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    for (i = 0; i < listitems.length; i++) {
        mylist.appendChild(listitems[i]);
    }
}
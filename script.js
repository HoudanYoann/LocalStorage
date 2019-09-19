function dosetItem() {
    var produit = document.getElementById("prod").value;
    var data = document.getElementById("q").value;
    localStorage.setItem(produit,data);
    document.getElementById("prod").value="";
    document.getElementById("q").value="";
    afficher();
}
function dogetItem() {
    var produit = document.getElementById("prod").value;
    document.getElementById("q").value= localStorage.getItem(produit);
    afficher();
}

function doremoveItem() {
    var produit = document.getElementById("prod").value;
    localStorage.removeItem(produit);
    document.getElementById("prod").value="";
    afficher();
}

function doClear() {
    localStorage.clear();
    afficher();
}
function afficher() {
    var key ="";
    var paires = "<tr class=\"first\"><td><b>Produit</b></td><td><b>Quantité</b></td></tr>\n";
    var i = 0;
    for (i =0; i<=localStorage.length-1; i++)
    {
        key = localStorage.key(i);
        paires+="<tr><td class=\"product\">"+ key + "</td>\n<td class=\"second\">" + localStorage.getItem(key) + "</td></tr>\n";
    }
    if (paires == "<tr class=\"first\"><td><b>Produit</b></td><td><b>Quantité</b></td></tr>\n")
    {
        paires += "<tr><td><i>Vide</i></td>\n<td><i>Vide</i></td></tr>\n";
    }
    document.getElementById('paires').innerHTML = paires;
}

function afficherTotalQuantity() {
    var l = document.querySelectorAll('td.second');
    //var quant = document.getElementsByClassName('td.second');
    // for (var i = 0; i < l.length ; i++)
    // {
    //     document.getElementById('quantity').innerHTML = Number(l[i].innerHTML);
    // }
    //document.getElementById('quantity').innerHTML = quant;

    var quant = l;
    var obj = [];

    quant.forEach(function (item) {
        console.log(obj.push(item));
    });

    document.getElementById('quantity').innerHTML = Number(l[0].innerHTML) + Number(l[1].innerHTML) + Number(l[2].innerHTML);
    //console.log(l.reduce(reducer));
}

function doClearQuantity() {
    localStorage.clear();
    afficherTotalQuantity();
}

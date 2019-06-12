var t0, difference
t0 = document.getElementById("changeT0")  //to be updated by slider
difference = document.getElementById("changed") //to be updated by slider


function updateOutput() {
    document.getElementById("t0").innerHTML = t0.value;
    document.getElementById("t02").innerHTML = t0.value;
    document.getElementById("d").innerHTML = difference.value;
    document.getElementById("d2").innerHTML = difference.value;
}


function genTn() {
    document.getElementById("area").innerHTML = ''
    var tn
    var numOfTerms = 12
    console.log('start genTn')
    document.getElementById('buildButton').style.display = 'none'
    for (n = 0; n < numOfTerms; n++) {
        tn = t0.value * 1 + difference.value * n
        console.log(tn)
        setTimeout(buildNextOne, 1500 * n, n, tn)
    }
    setTimeout(showButton, 1500 * numOfTerms)
}

function showButton() {
    document.getElementById('buildButton').style.display = ''
}

function buildNextOne(n0, tn) {
    console.log('t' + n + " = " + tn)
    var onep = ''
    var tenp = ''
    var hundredp = ''
    var aVar = (tn.toString())
    var one = (aVar[aVar.length - 1])
    var ten = (aVar[aVar.length - 2])
    var hundred = (aVar[aVar.length - 3])
    if (tn < 0) {
        if (hundred !== undefined) {
            for (n = 0; n < hundred; n++) {
                hundredp += '<img src="img/neg100.png"> '
            }
        }

        if (ten !== undefined) {
            for (n = 0; n < ten; n++) {
                tenp += '<img src="img/neg10.png"> '
            }
        }
        if (one !== undefined) {
            for (n = 0; n < one; n++) {
                onep += '<img src="img/neg1.png"> '
            }
        }
    } else {

        if (hundred !== undefined) {
            for (n = 0; n < hundred; n++) {
                hundredp += '<img src="img/pos100.png"> '
            }
        }
        if (ten !== undefined) {
            for (n = 0; n < ten; n++) {
                tenp += '<img src="img/pos10.png"> '
            }
        }
        if (one !== undefined) {
            for (n = 0; n < one; n++) {
                onep += '<img src="img/pos1.png"> '
            }
        }

    }
    console.log(one, ten, hundred)
    document.getElementById("area").innerHTML += ('<div class="col-sm-2 box"><div class="border border-primary"><h5 class="tn">t' + n0 + '</h5><h3>' + tn + '</h3><br>' + hundredp + '<br>'+ tenp + '<br>' + onep + '<br></div></div>')
    var msg = new SpeechSynthesisUtterance(tn);
    window.speechSynthesis.speak(msg);

}

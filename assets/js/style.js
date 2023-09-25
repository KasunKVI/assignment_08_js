var ary1 = ["A", "B", "C", "D", "E", "F"];
var currentIndex = 0;
var spans = document.querySelectorAll("section div span");
var aryElement = 0;
var lastElement=1;
var el = 1;
function myFunction2() {

    spans[currentIndex].textContent = ary1[aryElement];

    aryElement++;
    currentIndex++;

    if (currentIndex===ary1.length){

        currentIndex = 0;
        aryElement = ary1.length-lastElement;
        el=lastElement;

        for (let j=el; el<ary1.length; j++){

            spans[el].textContent = ary1[currentIndex];
            el++;
            currentIndex++;


        if (el===ary1.length) {

            currentIndex=0;

            for (let i = aryElement; i !== ary1.length; i++) {

                spans[currentIndex].textContent = ary1[aryElement];

                currentIndex++;
                aryElement++;

            }
        }
    }
        aryElement=0;
        lastelement++;

        if (lastelement===ary1.length){

            lastelement=0;
        }

    }else {

    }


}

setInterval(myFunction2, 1000);
export default function calculateSquares() {
    const d = document;

    const $backSquare = d.querySelector("#button3");
    const $deleteNumbers = d.querySelector("#delButton3");
    const $numbers = d.querySelectorAll("#container301 .text3");
    const $msg3 = d.getElementById("msg3");

    $backSquare.addEventListener("click", calculate);
    $deleteNumbers.addEventListener("click", delNumbers);

    $numbers.forEach(txt => {
        txt.addEventListener("keypress", ifEnter);
    });

    function calculate() {

        const array1 = [];
        $numbers.forEach(elem => {
            array1.push(elem.value);
        });

        const calcSqr = (arr = undefined) => {

            if (arr === undefined) return $msg3.value += "No ingresaste un arreglo de números.\n";

            if (!(arr instanceof Array)) return $msg3.value += "El valor que ingresaste no es un arreglo. \n";
            console.log(arr);

            if (arr.length === 0) return $msg3.value += "El arreglo está vacío.\n";

            for (let num of arr) {
                if (typeof num !== "number" || num === "") {
                    if (isNaN(parseFloat(num)))
                        $msg3.value += `"${num}" no es un número.\n`;
                }

            }

            const array2 = arr.map(function(el) {
                if (el !== "" && !isNaN(parseFloat(el))) return el * el;
            });
            console.log(array2);

            const $squares = d.querySelectorAll("#container302 .text3");
            $squares.forEach((ele, key) => {
                let n = array2[key];
                if (n !== "" && n !== undefined && n !== null && typeof n === "number") ele.value = n;
                else ele.value = "";
            });
        }

        calcSqr(array1);
    }

    function delNumbers() {
        $numbers.forEach(el => {
            el.value = "";
        });
        const $squares = d.querySelectorAll("#container302 .text3");
        $squares.forEach(el => {
            el.value = "";
        });
        $msg3.value = "";
    }

    function ifEnter(e) {
        if (e.keyCode === 13) {
            let element = e.target;

            // para encontrar el siguiente elemento:
            let tabIndex = element.tabIndex + 1;
            console.log(tabIndex);
            var next = document.querySelector('[tabindex="' + tabIndex + '"]');

            // Si encontramos un elemento:
            if (next) {
                next.focus();
                e.preventDefault();
            }
        }
    }


}

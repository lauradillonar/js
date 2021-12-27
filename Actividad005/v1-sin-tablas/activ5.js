export default function maximumMinimum() {
    const d = document;

    const $minMax = d.querySelector("#button5");
    const $random = d.querySelector("#randomButton5");
    const $deleteNumbers = d.querySelector("#delButton5");
    const $numbers = d.querySelectorAll("#container501 .text501");
    const $msg5 = d.getElementById("msg5");

    $minMax.addEventListener("click", calculateMinMax);
    $deleteNumbers.addEventListener("click", delNumbers);
    $random.addEventListener("click", random)

    $numbers.forEach(txt => {
        txt.addEventListener("keypress", ifEnter);
    });

    function calculateMinMax() {

        const array1 = [];
        $numbers.forEach(elem => {
            array1.push(elem.value);
        });

        const calculate = (arr = undefined) => {

            const $max = d.querySelectorAll("#container502 .text502");
            $max[4].value = "";

            const $min = d.querySelectorAll("#container503 .text502");
            $min[4].value = "";

            if (arr === undefined) return $msg5.value += "No ingresaste un arreglo de números.\n";

            if (!(arr instanceof Array)) return $msg5.value += "El valor que ingresaste no es un arreglo. \n";

            if (arr.length === 0) return $msg5.value += "El arreglo está vacío.\n";

            for (let num of arr) {
                if (typeof num !== "number" || num === "") {
                    if (isNaN(parseFloat(num)))
                        return $msg5.value += `"${num}" no es un número.\n`;
                }
            }

            const finalArray = [Math.max(...arr), Math.min(...arr)];
            $max[4].value = finalArray[0];
            $min[4].value = finalArray[1];

            $msg5.value += `[${finalArray[0]},${finalArray[1]}]`

            return finalArray;
        }

        console.log(calculate(array1));

    }

    function random() {
        const list = [];
        for (let i = 0; i < 5; i++) {
            list[i] = Math.round(Math.random() * 100);
        }

        $numbers.forEach((el, key) => {
            el.value = list[key];
        });

        const $max = d.querySelectorAll("#container502 .text502");
        $max[4].value = "";

        const $min = d.querySelectorAll("#container503 .text502");
        $min[4].value = "";
    }

    function delNumbers() {
        $numbers.forEach(el => {
            el.value = "";
        });
        const $max = d.querySelectorAll("#container502 .text502");
        $max.forEach(el => {
            el.value = "";
        });
        const $min = d.querySelectorAll("#container503 .text502");
        $min.forEach(el => {
            el.value = "";
        });
        $msg5.value = "";
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

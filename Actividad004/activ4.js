export default function oddAndEven() {
    const d = document;

    const $oddEven = d.querySelector("#button4");
    const $random = d.querySelector("#randomButton4");
    const $deleteNumbers = d.querySelector("#delButton4");
    const $numbers = d.querySelectorAll("#container401 .text401");
    const $msg4 = d.getElementById("msg4");

    $oddEven.addEventListener("click", separateOddEven);
    $deleteNumbers.addEventListener("click", delNumbers);
    $random.addEventListener("click", random)

    $numbers.forEach(txt => {
        txt.addEventListener("keypress", ifEnter);
    });

    function separateOddEven() {

        const array1 = [];
        $numbers.forEach(elem => {
            array1.push(elem.value);
        });

        const separate = (arr = undefined) => {

            if (arr === undefined) return $msg4.value += "No ingresaste un arreglo de números.\n";

            if (!(arr instanceof Array)) return $msg4.value += "El valor que ingresaste no es un arreglo. \n";

            if (arr.length === 0) return $msg4.value += "El arreglo está vacío.\n";

            for (let num of arr) {
                if (typeof num !== "number" || num === "") {
                    if (isNaN(parseFloat(num)))
                        $msg4.value += `"${num}" no es un número.\n`;
                }
            }

            const finalObject = {
                pares: arr.filter(num => num % 2 === 0),
                impares: arr.filter(num => num % 2 === 1)
            }

            const $odd = d.querySelectorAll("#container402 .text402");
            const odd = finalObject.pares.reverse();
            $odd.forEach((el, key) => {
                if (key >= (10 - odd.length)) {
                    el.value = odd[9 - key];
                } else {
                    el.value = "";
                }
            });

            const $even = d.querySelectorAll("#container403 .text402");
            const even = finalObject.impares.reverse();
            $even.forEach((el, key) => {
                if (key >= (10 - even.length)) {
                    el.value = even[9 - key];
                } else {
                    el.value = "";
                }
            });

            return finalObject;
        }

        console.log(separate(array1));

    }

    function random() {
        const list = [];
        for (let i = 0; i < 10; i++) {
            list[i] = Math.round(Math.random() * 100);
        }

        $numbers.forEach((el, key) => {
            el.value = list[key];
        });

        const $odd = d.querySelectorAll("#container402 .text402");
        $odd.forEach(el => {
            el.value = "";
        });
        const $even = d.querySelectorAll("#container403 .text402");
        $even.forEach(el => {
            el.value = "";
        });
    }

    function delNumbers() {
        $numbers.forEach(el => {
            el.value = "";
        });
        const $odd = d.querySelectorAll("#container402 .text402");
        $odd.forEach(el => {
            el.value = "";
        });
        const $even = d.querySelectorAll("#container403 .text402");
        $even.forEach(el => {
            el.value = "";
        });
        $msg4.value = "";
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

export default function calculateSquares() {
    const d = document;
    const $form = d.getElementById("frmTransaction");
    const $tblData= d.getElementById("table301");
    const $backSquare = d.querySelector("#button3");
    const $deleteNumbers = d.querySelector("#delButton3");
    const $txtNumber = d.getElementById("text3");
    const $msg3 = d.getElementById("msg3");
    
    let numRow = 1;
    let numCell = 1;
    
    $txtNumber.addEventListener("click", function(e){
        $tblData.rows[numRow].cells[numCell].style.background = "#d8d0bf";
        $txtNumber.select();
    });
    
    $txtNumber.addEventListener("blur", function(e){
        $tblData.rows[numRow].cells[numCell].style.background = "#fff";
    });
    
    for(let i=1; i<$tblData.rows.length; i++){
        $tblData.rows[i].cells[numCell].addEventListener("click", function(e){
            $tblData.rows[numRow].cells[numCell].style.background = "#fff";
            numRow=i;
            $tblData.rows[numRow].cells[numCell].style.background = "#d8d0bf";
            $txtNumber.value= $tblData.rows[numRow].cells[numCell].textContent;
            $txtNumber.select();
            $txtNumber.focus();
        });
    }
    
    $form.addEventListener("submit", function(e){
        e.preventDefault();
        let frmData = new FormData($form);
        let txt = frmData.get("text3");
        $tblData.rows[numRow].cells[numCell].textContent=txt;
        if (typeof txt !== "number" || txt === "") {
                    if (isNaN(txt))
                        $msg3.value += `"${txt}" no es un número.\n`;
                }
        $tblData.rows[numRow].cells[2].textContent="";
        if(numRow < $tblData.rows.length-1){
            $tblData.rows[numRow].cells[numCell].style.background = "#fff";
            numRow++;
            $tblData.rows[numRow].cells[numCell].style.background = "#d8d0bf";
        }else{ 
            $tblData.rows[numRow].cells[numCell].style.background = "#fff";
            numRow=1;
            $tblData.rows[numRow].cells[numCell].style.background = "#d8d0bf";
        }
        $txtNumber.value=$tblData.rows[numRow].cells[numCell].textContent;
        $txtNumber.select();
        $txtNumber.focus();
    });
    
    $backSquare.addEventListener("click", calculate);
    $deleteNumbers.addEventListener("click", delNumbers);

    function calculate() {

        const array1 = [];
        let num=1;
        
        for(let i=1; i<$tblData.rows.length; i++){
            array1.push($tblData.rows[i].cells[num].textContent);
        }
        
        const calcSqr = (arr = undefined) => {

            if (arr === undefined) return $msg3.value += "No ingresaste un arreglo de números.\n";

            if (!(arr instanceof Array)) return $msg3.value += "El valor que ingresaste no es un arreglo. \n";
            console.log(arr);

            if (arr.length === 0) return $msg3.value += "El arreglo está vacío.\n";

            for (let num of arr) {
                if (typeof num !== "number" || num === "") {
                    if (isNaN(num))
                        $msg3.value += `"${num}" no es un número.\n`;
                }

            }

            const array2 = arr.map(function(el) {
                if (el !== "" && !isNaN(el)) return el * el;
            });
            console.log(array2);
            
            
            let sqr=2;
            for(let i=1; i<$tblData.rows.length; i++){
                let n = array2[i-1];
                if (n !== "" && n !== undefined && n !== null && typeof n === "number" && !isNaN(n))
                    $tblData.rows[i].cells[sqr].textContent = n;
                else 
                    $tblData.rows[i].cells[sqr].textContent = "";
                
            }
        }

        calcSqr(array1);
    }

    function delNumbers() {
        
        let num=1;
        let sqr=2;
        for(let i=1; i<$tblData.rows.length; i++){
            $tblData.rows[i].cells[num].textContent = "";
            $tblData.rows[i].cells[sqr].textContent = "";
        }
        
        $msg3.value = "";
        $txtNumber.value="";
    }
}

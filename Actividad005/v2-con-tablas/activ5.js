export default function maximumMinimum() {
    const d = document;
    const $form = d.getElementById("frmTransaction5");
    const $tblData= d.getElementById("table501");
    const $minMax = d.querySelector("#button5");
    const $random = d.querySelector("#randomButton5");
    const $deleteNumbers = d.querySelector("#delButton5");
    const $txtNumber = d.getElementById("text5");
    const $msg5 = d.getElementById("msg5");
    
    let numRow = 1;

    let scopeCell = 0; //Columna de id
    let numCell = 1;  //Columna Numeros
    let maxCell = 2; //Columna Maximo
    let minCell = 3;  //Columna Minimo
    
    $tblData.rows[numRow].cells[numCell].setAttribute("id","id5cell1");
    $tblData.rows[numRow].cells[numCell].setAttribute("class","selectable");
    
    // ****************************** Input
    
    $txtNumber.addEventListener("click", function(e){
        $tblData.rows[numRow].cells[numCell].style.backgroundColor="#d8d0bf";
        $txtNumber.select();
    });
    
    $txtNumber.addEventListener("blur", function(e){
        $tblData.rows[numRow].cells[numCell].removeAttribute("style");
    });
    
    
    $tblData.addEventListener("click", function(e){
        $tblData.rows[numRow].cells[numCell].removeAttribute("style");
        if(e.target.id!==""){
            let $rowClic = d.getElementById(e.target.id);
            $rowClic.style.backgroundColor="#d8d0bf";
            numRow = e.target.id.replace("id5cell","");
            $txtNumber.value= $rowClic.textContent;
            $txtNumber.select();
            $txtNumber.focus();
        }
    });
    
    $form.addEventListener("submit", function(e){
        e.preventDefault(); // evita que actualice la pagina
        let frmData = new FormData($form);
        let txt = frmData.get("text5");
        $tblData.rows[numRow].cells[numCell].textContent=txt;
        if (typeof txt !== "number" || txt === "") {
                    if (isNaN(txt))
                        $msg5.value += `"${txt}" no es un número.\n`;
                }
        // Como ingresó algo nuevo, habría que borrar o regenerar las columnas de pares e impares
        
        if(numRow < 5){
            $tblData.rows[numRow].cells[numCell].removeAttribute("style");
            numRow++;
            if($tblData.rows.length < 6){
                if(numRow === $tblData.rows.length ){
                    let newRowRef = $tblData.insertRow(-1); //Inserta una fila al final
                    let newCellRef = newRowRef.insertCell(scopeCell); // Inserta la primer celda en esa fila
                    newCellRef.textContent = numRow;
                    let newNumCellRef = newRowRef.insertCell(numCell);
                    newNumCellRef.setAttribute("id","id5cell"+numRow);
                    newNumCellRef.classList.add("selectable");
                    let newEvenCellRef = newRowRef.insertCell(maxCell);
                    let newOddCellRef = newRowRef.insertCell(minCell);
                }
            }
            
            $tblData.rows[numRow].cells[numCell].style.backgroundColor="#d8d0bf";
            $tblData.rows[numRow].cells[maxCell].textContent = "";
            $tblData.rows[numRow].cells[minCell].textContent = "";
            
            
        }else{ 
            $tblData.rows[numRow].cells[numCell].removeAttribute("style");
            numRow=1;
            $tblData.rows[numRow].cells[numCell].style.backgroundColor="#d8d0bf";
        }
        
        for(let i=1; i<$tblData.rows.length; i++){
            $tblData.rows[i].cells[maxCell].textContent = "";
            $tblData.rows[i].cells[minCell].textContent = "";
        }
        
        $txtNumber.value=$tblData.rows[numRow].cells[numCell].textContent;
        $txtNumber.select();
        $txtNumber.focus();
    });
    
    
    // ****************************** Process

    $minMax.addEventListener("click", calculateMinMax);
    $deleteNumbers.addEventListener("click", delNumbers);
    $random.addEventListener("click", random)


    function calculateMinMax() {
    
        const array1 = [];
        const array2 = [];
        let num=1;
        
        for(let i=1; i<$tblData.rows.length; i++){
            array1.push($tblData.rows[i].cells[num].textContent);
        }

        const calculate = (arr = undefined) => {

            $tblData.rows[1].cells[maxCell].textContent = "";
            $tblData.rows[1].cells[minCell].textContent = "";

            if (arr === undefined) return $msg5.value += "No ingresaste un arreglo de números.\n";

            if (!(arr instanceof Array)) return $msg5.value += "El valor que ingresaste no es un arreglo. \n";

            if (arr.length === 0) return $msg5.value += "El arreglo está vacío.\n";

            for (let num of arr) {
                console.log(num);
                if (typeof num !== "number" || num === "") {
                    if(isNaN(num) || num === "")
                        $msg5.value += `"${num}" no es un número.\n`;
                    else
                        array2.push(num);
                }
            }
            console.log(array2);
            
            if(array2.length !== 0){
                const finalArray = [Math.max(...array2), Math.min(...array2)];
            
                $tblData.rows[1].cells[maxCell].textContent = finalArray[0];
                $tblData.rows[1].cells[minCell].textContent = finalArray[1];

                $msg5.value += `[${finalArray[0]},${finalArray[1]}]\n`;

                return finalArray;
            }
        }

        console.log(calculate(array1));
    
    }

    function random() {
        delNumbers();
        
        let num=1;
        let max=2;
        let min=3;
        
        const list = [];
        
        for (let i = 0; i < 5; i++) {
            list[i] = Math.round(Math.random() * 100);
        }
        
        for(let i=2; i<6; i++){
            let newRowRef = $tblData.insertRow(-1); //Inserta una fila al final
            let newCellRef = newRowRef.insertCell(scopeCell); // Inserta la primer celda en esa fila
            newCellRef.textContent = i;
            let newNumCellRef = newRowRef.insertCell(numCell);
            newNumCellRef.setAttribute("id","id5cell"+i);
            newNumCellRef.classList.add("selectable");
            let newEvenCellRef = newRowRef.insertCell(maxCell);
            let newOddCellRef = newRowRef.insertCell(minCell);
        }
        
        for(let i=1; i<6; i++){
            $tblData.rows[i].cells[num].textContent = list[i-1];
        }
        
        calculateMinMax();
        
        numRow = 1;
        $tblData.rows[numRow].cells[num].removeAttribute("style");
        $txtNumber.blur();
        
    }

    function delNumbers() {
        let num=1;
        let max=2;
        let min=3;
        for(let i=1; i<$tblData.rows.length; i++){
            $tblData.rows[i].cells[num].textContent = "";
            $tblData.rows[i].cells[max].textContent = "";
            $tblData.rows[i].cells[min].textContent = "";
        }
        
        $msg5.value = "";
        $txtNumber.value="";
        
        let totalRows = $tblData.rows.length;
        for(let i=1; i<totalRows-1; i++){
            $tblData.deleteRow(-1);
        }
        
        numRow = 1;
        $tblData.rows[numRow].cells[num].style.backgroundColor="#d8d0bf";
        $txtNumber.select();
        $txtNumber.focus();
    }
}
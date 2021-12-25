const d = document;
const $product = d.getElementById("product");
const $addProduct = d.getElementById("addProduct");
const $list = d.getElementById("list");

export default function initList() {
    $addProduct.addEventListener('click', addProduct);
    $product.addEventListener('keypress', ifEnter);
    $product.focus();

}

function addProduct() {
    console.log("addProduct");
    if ($product.value !== "") {
        const $li = d.createElement("li");
        $li.innerHTML = $product.value;
        $li.id = "listItem";
        $li.addEventListener('click', removeProduct);
        $list.appendChild($li);
        $product.value = "";
        $product.focus();
    }
}

function ifEnter(e) {
    if (e.keyCode === 13) {
        addProduct();
    }
}

function removeProduct() {
    this.parentNode.removeChild(this);
}

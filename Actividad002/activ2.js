export default function saveTextBox() {
    const d = document;

    const $text1 = d.querySelector('#text1');
    const $text2 = d.querySelector('#text2');
    $text2.value = "";

    // $button1.addEventListener('click', saveMsg);
    // $button2.addEventListener('click', deleteMsg);
    $text1.addEventListener('keypress', ifEnter);

    d.addEventListener('click', (e) => {
        if (e.target.matches('#button1')) saveMsg();
        if (e.target.matches('#button2')) deleteMsg();
    });



    function saveMsg() {
        if ($text1.value !== "") {
            $text2.value += $text1.value + '\n';
            $text1.value = "";
        }
    }

    function deleteMsg() {
        $text2.value = "";
    }

    function ifEnter(e) {
        if (e.keyCode === 13) {
            saveMsg();
        }
    }

}

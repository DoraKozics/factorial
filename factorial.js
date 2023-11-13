document.addEventListener("DOMContentLoaded", () => {
    let number = document.getElementById("number");
    let result = document.getElementById("result");


    document.getElementById("number").oninput = () =>
        result.innerHTML = "It is exactly " + factorial(number.value) + ".";

    function factorial(n) {
        if (n == 0) {
            return 1;
        } else if (n < 0) {
            return -1;
        } else {
            if (n > 0) {
                return n * factorial(n - 1);
            }
        }
    }
})
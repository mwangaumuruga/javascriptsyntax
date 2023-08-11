document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("numberForm");
    const resultElement = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const numbers = [
            parseFloat(document.getElementById("no1").value),
            parseFloat(document.getElementById("no2").value),
            parseFloat(document.getElementById("no3").value),
            parseFloat(document.getElementById("no4").value),
            parseFloat(document.getElementById("no5").value)
        ];

        const largestNumber = Math.max(...numbers);
        resultElement.textContent = largestNumber;
    });
});

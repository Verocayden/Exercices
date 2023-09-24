const ButtonHandler = {
    getRandom: function () {
        return Math.floor(Math.random() * 10 + 1);
    },
    showValue: function () {
        const randomValue = this.getRandom();
        const display = document.getElementById("random-display");
        display.textContent = `Valeur aléatoire : ${randomValue}`;
    },
    addHandler: function (element) {
        // Error: Uncaught TypeError: this.getRandom is not a function at HTMLButtonElement.showValue (script.js:6:34)
        // Wrong object is used as "this"!!
        // element.addEventListener("click", this.showValue);

        // Solution 1: Arrow function (this is determined based on creation context)
        // element.addEventListener("click", () => { this.showValue() });

        // Solution 2: Use bind()
        element.addEventListener("click", this.showValue.bind(this));
    },
};

const button = document.getElementById("btn");
ButtonHandler.addHandler(button);
class GuessNumber {
    constructor(answerGenerator) {
        this.answer = answerGenerator.generateRandomNumber();
        this.timess = 0;
    }

    test(input) {
        this.timess++;
        if (this.timess > 6) {
            return 'game over';
        }
        var a = 0, b = 0, sequence = [];
        var realNumber = this.answer;
        var userInput = this.formatInput(input.split(" ").map(ele => +ele));
        if (userInput == false) {
            return 'Wrong Input，Input again';
        }

        for (var item of userInput) {
            if (realNumber.indexOf(item) >= 0) b++;
        }
        for (var ite = 0; ite < 4; ite++) {
            if (userInput[ite] == realNumber[ite]) a++;
        }
        const result = `${a}A${(b - a)}B`;
        return result;

    }

    formatInput(collection) {
        var flag = true;
        var s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (collection.length != 4) flag = false;
        for (var item of collection) {
            if (s.indexOf(item) == -1) {
                flag = false;
            }
        }
        var ck = [];

        for (var i = 0; i < collection.length; i++) {
            for (var j = i + 1; j < collection.length; j++) {
                if (collection[i] == collection[j]) {
                    flag = false;
                }
            }
        }
        if (flag) {
            return collection;
        }
        return false

    }

}

module.exports = GuessNumber;

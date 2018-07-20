class AnswerGenerator {
    constructor(min, max, length) {
        this.min = min;
        this.max = max;
        this.length = length;
    }

    generateRandomNumber() {
        const sequence = [];
        while (sequence.length < this.length) {
            const randomNumber = ~~(Math.random() * (this.max - this.min + 1)) + this.min;
            if (!sequence.includes(randomNumber)) {
                sequence.push(randomNumber);
            }
        }
        return sequence;
    }
}
module.exports = AnswerGenerator;
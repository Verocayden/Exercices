export default class ScoreCalculator {
    constructor() { }

    getStats(reviews) {
        const grades = reviews.reduce((acc, review) => {
            if (this.validateStars(review)) {
                acc.totalAverage.push(review.stars);
                if (review.author) {
                    acc.authoredAverage.push(review.stars);
                }
                else {
                    acc.anonymousAverage.push(review.stars);
                }
            }
            return acc;
        }, {
            totalAverage : [],
            authoredAverage: [],
            anonymousAverage: [],
        });
        return {
            totalAverage: this.calculateAverages(grades.totalAverage),
            authoredAverage: this.calculateAverages(grades.authoredAverage),
            anonymousAverage: this.calculateAverages(grades.anonymousAverage),
        };
    }

    validateStars(review) {
        return (review.stars >= 1 && review.stars <= 5);
    }

    calculateAverages(array) {
        return array.reduce((acc, value) => acc + value, 0) / array.length;
    }
}
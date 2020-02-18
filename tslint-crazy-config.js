module.exports = {
    extends: "./tslint-base.json",
    rules: {
        "no-excessive-commenting": [true, {maxComments: Math.random() * 10}]
    }
};

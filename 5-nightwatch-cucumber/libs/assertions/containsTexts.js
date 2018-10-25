/**
 * Assert to validate whole the strings on a text
 *
 * Example:
 *
 *     browser
 *         .assert.containsTexts(".container.download .intro", ["a","b"])
 *
 * @author sergiogq
 * @param @param {string} selector The selector (CSS / Xpath) used to locate the text element.
 * @param {Array} textsToValidate - strings to validate on a text
 * @param {String} [msg] - Optional log message to display in the output. If missing, one is displayed by default.
 */

exports.assertion = function(selector, textsToValidate, msg) {
    
    // The message which will be used in the test output
    this.message = msg || `Look for '${textsToValidate}' on < ${selector} >.`;
    
    // A value to perform the assertion on. If a function is defined, its result will be used.
    this.expected = true;
    
    /**
     * The method which performs the actual assertion. It is
     * called with the result of the value method as the argument.
     */
    this.pass = function(value) {
        return value === this.expected;
    };
    
    /**
     * The method which returns the value to be used on the
     * assertion. It is called with the result of the command's callback as argument.
     */
    this.value = function(result) {
        return result;
    };
    
    /**
     * Performs a protocol command/action and its result is
     * passed to the value method via the callback argument.
     */
    this.command = function(callback) {
        let allWereFound = true;
        const self = this;
        this.api.getText(selector, (result) => {
            let allText = result.value;
            console.log(`Text to validate: '${allText}'`);
            textsToValidate.forEach((textToValidate) => {
                if (!allText.includes(textToValidate)) {
                    allWereFound = false;
                }
            })
            callback.call(self, allWereFound);
        });
    };
    
};

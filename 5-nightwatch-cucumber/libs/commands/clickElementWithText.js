/**
 * Finds an array of elements based on a common selector, then finds a
 * specific element within the array by its text, and clicks on it
 *
 * Example: browser.clickElementWithText('button', 'Confirm');
 *
 * @param selector - Selector of elements (ie. '[data-qa=MultipleElements]')
 * @param text - Unique text of the specific element you want to click on
 * @param selectorType - Unique text of the specific element type
 */

exports.command = function (selector, text, selectorType = "css selector", shouldBeEqual = true) {
    let elementToClick
    this.elements(`${selectorType}`, selector, (elements) => {
        Object.keys(elements.value).forEach((keyElement) => {
            this.elementIdText(elements.value[keyElement].ELEMENT,
                (elementText) => {
                    if (elementText.status === 0 && shouldBeEqual
                        && elementText.value.toLowerCase() === text.toLowerCase()){
                        elementToClick = elements.value[keyElement]
                    } else if (elementText.status === 0 && !shouldBeEqual
                        && elementText.value.toLowerCase().includes(text.toLowerCase())){
                        elementToClick = elements.value[keyElement]
                    }
                })
        })
    }).perform(function() {
        if (elementToClick === null) {
            throw new TypeError(`Element was not found with text: ${text}`)
        }
        return this.api.clickElementById(elementToClick.ELEMENT)
    })
    return this
}

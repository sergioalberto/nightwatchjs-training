/**
 * Click on an element by your id
 *
 * Example: browser.clickElementById(idElement);
 *
 * @param selector - Selector of element (ie. '0.923310455682312-3')
 */

exports.command = function (idElement) {
    return this.elementIdClick(idElement)
}

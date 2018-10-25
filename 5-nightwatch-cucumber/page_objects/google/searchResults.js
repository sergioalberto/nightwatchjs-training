const util = require('util');
const menuXpath = '//div[contains(@class, "hdtb-mitem")][contains(., %s)]';

const menuCommands = {
    productIsSelected: function (product, callback) {
        var self = this;
        return this.getAttribute(product, 'class', function (result) {
            let isSelected = result.value.indexOf('hdtb-msel') > -1;
            callback.call(self, isSelected);
        });
    }
};

module.exports = {
    elements: {
        results: {selector: '#ires'},
        titleResults: ".r h3"
    },
    commands: [{
        lookingForResults(textToLookingFor){
            this.expect.element('@results').to.be.present.after(5000);
            this.expect.element('@results').to.contain.text(textToLookingFor);
            this.waitForElementVisible("@titleResults", 10000)
            this.clickElementWithText("@titleResults", textToLookingFor);
        }
    }],
    sections: {
        menu: {
            selector: '#hdtb-msb',
            commands: [menuCommands],
            elements: {
                web: {
                    selector: util.format(menuXpath, 'Web'),
                    locateStrategy: 'xpath',
                    index: 0
                },
                video: {
                    selector: util.format(menuXpath, 'Video'),
                    locateStrategy: 'xpath',
                    index: 0
                },
                images: {
                    selector: util.format(menuXpath, 'Images'),
                    locateStrategy: 'xpath',
                    index: 0
                },
                shopping: {
                    selector: util.format(menuXpath, 'Shopping'),
                    locateStrategy: 'xpath',
                    index: 0
                }
            }
        }
    }
};

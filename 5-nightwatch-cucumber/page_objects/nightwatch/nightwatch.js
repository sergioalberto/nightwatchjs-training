var actions = {
    async lookingTextsOnPage(dataTable){
        let textsToValidate = []
        dataTable.rows().forEach(row => {
            textsToValidate.push(row[0])
        })
        await this.assert.containsTexts('@intro', textsToValidate)
    }
};

module.exports = {
    url: "http://nightwatchjs.org/",
    commands : [actions],
    elements : {
        intro : '.container.download .intro'
    }
};

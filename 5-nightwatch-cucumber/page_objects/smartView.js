const actions = {
    async performSmartViewSearch(){
        await this.waitForElementVisible("@searchInput")
    }
}
const relatedEntitiesActions = {
    async lookingForRelatedEntities(){
        console.log("Looking for ...")
    }
}

module.exports = {
    url: function() {
        return this.api.launchUrl + '/#/smartviewz';
    },
    commands: [actions],
    elements: {
        searchInput: "input[placeholder='Try typing a device or component name']"
    },
    sections: {
        relatedEntities: {
            selector: ".z-smartviewz-card-list",
            commands: [relatedEntitiesActions],
            elements: {
                relatedEntityTypes: {
                    selector: "//*[@title='vmnic3']//../..//*[contains(@title, 'VMWareEntity')]",
                    locateStrategy: 'xpath',
                }
            }
        },
        anchorCard: {
            selector: ".z-smartviewz-anchor",
            elements: {},
            sections: {}
        }
    }
}


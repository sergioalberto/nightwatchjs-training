module.exports = {
    tags: ['git'],
    'Demo test GitHub' : function (client) {
        var githubPage = client.page.github.github();
        githubPage.navigate();
        githubPage.verifyTittle("nightwatch");
        client.end();
    }
};

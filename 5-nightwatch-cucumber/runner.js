const nightwatch = require('nightwatch')

nightwatch.runner({
    _: [], // Run single feature file
    config: 'nightwatch.conf.js',
    env: 'default',
    filter: '',
    tag: '',
    retries: 3,
}, () => {
    console.log('done');
})

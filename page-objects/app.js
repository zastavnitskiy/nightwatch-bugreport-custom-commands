

/**
 * This test will attempt to call a command from custom-commands, but will fail.
 */
module.exports = {
    url: 'http://nightwatchjs.org/gettingstarted#settings-file',
    elements: {},
    commands: [{
        metaSayHello() {
            // this.client is an instance of NightwatchClient, and there is no sayHello custom command defined
            this.client.sayHello();
                        
            return this;
        }
    }]
}
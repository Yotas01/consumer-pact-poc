const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;

global.port = 9090;
global.provider = new Pact({
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    loglevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 3,
    pactfileWriteMode: 'update',
    consumer: 'blog-consumer',
    provider: 'blog-provider'
});
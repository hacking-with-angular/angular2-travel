let loggerValue = {
    logs: ['Hello', 'World'],
    log: (msg) => {
        console.warn('From values: ' + msg);
    },
    hello: () => {
        console.log('Just say hello!');
    }
};

export {loggerValue};


let loggerValue1 = 'Hello, World!';

export {loggerValue1}
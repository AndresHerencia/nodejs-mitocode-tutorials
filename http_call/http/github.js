const https = require('https');

let username = 'AndresHerencia';

let IE_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';

let options = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: {'user-agent': IE_USER_AGENT}
};

let request = https.request(options, (response) => {
    let body = '';

    response.on('data', (out) => {
        body += out;
    });

    response.on('end', (out) => {
        let json = JSON.parse(body);
        console.log(json);
        console.log(json.login);
    });
});

request.on('error', (e )=> {
    console.log(e);
});

request.end();
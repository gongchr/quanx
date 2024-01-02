var body = $response.body;
var url = $request.url;

if (url.includes("/v2/publication.member.info")) {
    body = body.replace(/"status"\s*:\s*"(\w+)"/g, '"status": "normal"');
    body = body.replace(/"isExpired"\s*:\s*(true|false)/g, '"isExpired": false');
    body = body.replace(/"expiredTimestamp"\s*:\s*\d+/g, '"expiredTimestamp": 4102545599000');
    body = body.replace(/"vipExpiredTime"\s*:\s*\d+/g, '"vipExpiredTime": 4102545599000');
    body = body.replace(/"isVip"\s*:\s*(true|false)/g, '"isVip": true');

    body = body.replace(/"type"\s*:\s*"stranger"/g, '"type": "normal"');

    let jsonObj = JSON.parse(body);

    if (!jsonObj.profile.hasOwnProperty('isVip')) {
      jsonObj.profile.isVip = true;
    }
    if (!jsonObj.profile.role.hasOwnProperty('expiredTimestamp')) {
      jsonObj.profile.role.expiredTimestamp = 4102545599000;
    }
    if (!jsonObj.profile.hasOwnProperty('vipExpiredTime')) {
      jsonObj.profile.vipExpiredTime = 4102545599000;
    }
    body = JSON.stringify(jsonObj);
}

$done({ body });

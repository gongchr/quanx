var body = $response.body;
var url = $request.url;

if (url.includes("/v2/publication.member.info")) {
    body = body.replace(/"status"\s*:\s*"(\w+)"/g, '"status": "normal"');
    body = body.replace(/"isExpired"\s*:\s*(true|false)/g, '"isExpired": false');
    body = body.replace(/"expiredTimestamp"\s*:\s*\d+/g, '"expiredTimestamp": 4102545599000');
    body = body.replace(/"vipExpiredTime"\s*:\s*\d+/g, '"vipExpiredTime": 4102545599000');
    body = body.replace(/"isVip"\s*:\s*(true|false)/g, '"isVip": true');
}

$done({ body });

/*******************************************************************************
 *
 *    Copyright 2018 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

'use strict';

module.exports = {
    "name": "StatusCodeError",
    "statusCode": 404,
    "message": "404 - {\"message\":\"The \\\"%1\\\" Cart doesn't contain products.\",\"parameters\":[\"140\"]}",
    "error": {
        "message": "The \"%1\" Cart doesn't contain products.",
        "parameters": [
            "140"
        ]
    },
    "options": {
        "uri": "http://graphqlce.test:1818/rest/V1/guest-carts/bbe45d9f1875fcb2348dac8ecc5931b3/coupons/c1",
        "method": "PUT",
        "headers": {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "authorization": "Bearer m7huejlgdsq9pskw4u4ceag58vyokwv5"
        },
        "json": true,
        "simple": true,
        "resolveWithFullResponse": false,
        "transform2xxOnly": false
    },
    "response": {
        "statusCode": 404,
        "body": {
            "message": "The \"%1\" Cart doesn't contain products.",
            "parameters": [
                "140"
            ]
        },
        "headers": {
            "server": "nginx/1.14.0 (Ubuntu)",
            "date": "Fri, 06 Jul 2018 09:35:04 GMT",
            "content-type": "application/json; charset=utf-8",
            "transfer-encoding": "chunked",
            "connection": "close",
            "vary": "Accept-Encoding",
            "set-cookie": [
                "PHPSESSID=9bv27i64n71cta0pvg29do5m4c; expires=Fri, 06-Jul-2018 10:35:04 GMT; Max-Age=3600; path=/; domain=graphqlce.test; HttpOnly"
            ],
            "expires": "Thu, 19 Nov 1981 08:52:00 GMT",
            "cache-control": "no-store, no-cache, must-revalidate",
            "pragma": "no-cache"
        },
        "request": {
            "uri": {
                "protocol": "http:",
                "slashes": true,
                "auth": null,
                "host": "graphqlce.test:1818",
                "port": "1818",
                "hostname": "graphqlce.test",
                "hash": null,
                "search": null,
                "query": null,
                "pathname": "/rest/V1/guest-carts/bbe45d9f1875fcb2348dac8ecc5931b3/coupons/c1",
                "path": "/rest/V1/guest-carts/bbe45d9f1875fcb2348dac8ecc5931b3/coupons/c1",
                "href": "http://graphqlce.test:1818/rest/V1/guest-carts/bbe45d9f1875fcb2348dac8ecc5931b3/coupons/c1"
            },
            "method": "PUT",
            "headers": {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "pragma": "no-cache",
                "cache-control": "no-cache",
                "authorization": "Bearer m7huejlgdsq9pskw4u4ceag58vyokwv5",
                "content-length": 0
            }
        }
    }
};
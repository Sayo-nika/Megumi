# Project Megumi : The official API Wrapper for Sayonika for Node.js

Megumi is our public API wrapper for Sayonika.

Unlike most official API wrappers, Megumi is a zero-dependency, Promise-based API wrapper, so that means we get the benefit of lesser maintenance while keeping up with Node.js versions as seamless as possible.

## Installation

`yarn install sayonika` or `npm i -S sayonika`.

## API Documentation


### class Sayonika

The main API class that handles Sayonika requests.

#### Constructor Parameters

| Paramater | Type | Description |
|----| ---- | --- |
| `token` | `String` | Your API key for Sayonika. This can be get via checking your request headers in browser. Look for the parameter `Authorization`. |
| `api_base_url` | `String` | The base URL that API calls are made to, with a trailing slash. Default is `https://sayonika.maidcafe.cf/api/v1/` |

#### Methods

##### getAllUsers()

**Returns: `Promise<Object>`**

Gets users listed in the database.

| Paramater | Type | Description |
|----| ---- | --- |
| `page` | `Number` | The page of the list you plan to check. |

##### getAllMods()

**Returns: `Promise<Object>`**

Gets mods listed in the database.

| Paramater | Type | Description |
|----| ---- | --- |
| `page` | `Number` | The page of the list you plan to check. |

##### getUser()

**Returns: `Promise<Object>`**

Gets user registered in the database via ID.

| Paramater | Type | Description |
|----| ---- | --- |
| `id` | `String` | The id of the specific user to get query to. |

##### getMod()

**Returns: `Promise<Object>`**

Gets mod listed in the database via ID.

| Paramater | Type | Description |
|----| ---- | --- |
| `id` | `String` | The id of the specific mod to get query to. |

## Copyright

Copyright 2019 &copy; Clarity Operations LLC. Licensed under Apache 2.0.
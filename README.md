# tg-user-api-shcema-methods

The library helps to type all methods for the Telegram User API (https://core.telegram.org/methods)

- **Actual** 139 layer in the API scheme (https://core.telegram.org/schema)

## Install
```
yarn add tg-user-api-shcema-methods
# or
npm i tg-user-api-shcema-methods
```

## Example

Example using the @mtproto/core library, which is optional (https://github.com/alik0211/mtproto-core)

```ts
import { helpGetNearestDc, makeTgUserApiMethods } from 'tg-user-api-shcema-methods';
import MTProto from '@mtproto/core/envs/node';
import path from 'path';

// 1. Create instance
const mtproto = new MTProto({
    api_id: YOU_API_ID,
    api_hash: YOU_API_HASH,
    storageOptions: {
        path: path.resolve(__dirname, './1.json'),
    },
});

// 2. Create telegram user api methods (automatic typing of parameters and the result of methods)
const tgUserApiMethods = makeTgUserApiMethods({
    request: (...args: any[]) => mtproto.call(...args),
});

// 3. Print the user country code
tgUserApiMethods.helpGetNearestDc({}).then(({ success, data, error }) => {
    if (success) {
        // auto typing result for typescript
        console.log('country:', data.country);
    } else {
        console.error(error);
    }
});
```

## License
MIT

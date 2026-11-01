# nuxt-5-env-casting

Reproduction for env variable overrides of `runtimeConfig` no longer being cast to their type on Nuxt 5.

Created with `pnpm create nuxt@latest --template v5-nightly`, only `nuxt.config.ts` and `app/app.vue` were changed. `nuxt.config.ts` defines the runtime config (`title: ''`, `age: 30`, `male: true`, `obj: { a: 1, b: 'x' }`, `list: []` and `public.trial: false`) and `app/app.vue` renders each value from `useRuntimeConfig()` along with its `typeof`.

1. Run `pnpm install` and `pnpm build`
2. Start the production server with the following env

```bash
PORT=3110 NUXT_PUBLIC_TRIAL=false NUXT_MALE=false NUXT_AGE=45 NUXT_TITLE=hello NUXT_OBJ='{"a":2}' NUXT_LIST='[1,2]' node .output/server/index.mjs
```

3. Open `http://127.0.0.1:3110/`

The values rendered by the same files on Nuxt 4.6.3 (project created with `pnpm create nuxt@latest`) and on Nuxt 5.

| env | config default | Nuxt 4.6.3 | Nuxt 5.0.0-2611010234-c709ec8 |
| --- | --- | --- | --- |
| `NUXT_PUBLIC_TRIAL=false` | `false` | `false` | `"false"` |
| `NUXT_MALE=false` | `true` | `false` | `"false"` |
| `NUXT_AGE=45` | `30` | `45` | `"45"` |
| `NUXT_OBJ='{"a":2}'` | `{ a: 1, b: 'x' }` | `{ a: 2, b: 'x' }` | `"{\"a\":2}"` |
| `NUXT_LIST='[1,2]'` | `[]` | `[1, 2]` | `"[1,2]"` |

The runtime config docs still state that the values are cast using `destr`. This was changed in Nitro 3 by nitrojs/nitro#3634, which removed `destr` from the runtime config env handling.

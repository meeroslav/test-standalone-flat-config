# TestStandaloneFlat

Error when using custom base config extends:
```
Linting "mylib"...

 >  NX   Unexpected array.


TypeError: Unexpected array.
    at flatTraverse (/Users/miro/Dev/Testbox/test-standalone-flat/node_modules/@humanwhocodes/config-array/api.js:191:12)
    at flatTraverse.next (<anonymous>)
    at normalize (/Users/miro/Dev/Testbox/test-standalone-flat/node_modules/@humanwhocodes/config-array/api.js:209:19)
    at async FlatConfigArray.normalize (/Users/miro/Dev/Testbox/test-standalone-flat/node_modules/@humanwhocodes/config-array/api.js:658:30)
    at async calculateConfigArray (/Users/miro/Dev/Testbox/test-standalone-flat/node_modules/eslint/lib/eslint/flat-eslint.js:433:5)
    at async FlatESLint.lintFiles (/Users/miro/Dev/Testbox/test-standalone-flat/node_modules/eslint/lib/eslint/flat-eslint.js:743:25)
```


Run:

```shell
npx nx affected:lint --verbose 
```
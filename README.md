# rearrange-arr

```shell
$ npm install rearrange-arr
```

```javascript
const {rearrangeArr} = require('rearrange-arr')

//ES2015 modules
import {rearrangeArr} from 'rearrange-arr'

var inputArr = ["abc", "def", "ghi", "jkl", "mno", "pqr"]
var inTemplate1 = [{key: "chunk1", len: 3}, {key: "chunk2", len: 2}, {key: "chunk3", len: 1}]
var inTemplate2 = [{key: "chunk1", len: 2}, {key: "chunk1", len: 2}, {key: "chunk4", len: 2}]
var outTemplate = [{key: "chunk3", len: 1}, {key: "chunk1", len: 3}, {key: "chunk2", len: 2}, {key: "chunk4", len: 2}]

function mergeFn(arr1, arr2){
  return arr1.map((e, pos) => ([e, arr2[pos]].join(" | ")))
}

rearrangeArr(inputArr, inTemplate1, outTemplate)
// ['pqr', 'abc', 'def', 'ghi', 'jkl', 'mno', '', '']

rearrangeArr(inputArr, inTemplate2, outTemplate, mergeFn)
// [ '', 'abc | ghi', 'def | jkl', '', '', 'mno', 'pqr' ]

```
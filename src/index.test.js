const {rearrangeArr} = require('./index.js')

var inputArr = ["abc", "def", "ghi", "jkl", "mno", "pqr"]
var inTemplate1 = [{key: "chunk1", len: 3}, {key: "chunk2", len: 2}, {key: "chunk3", len: 1}]
var inTemplate2 = [{key: "chunk1", len: 2}, {key: "chunk1", len: 2}, {key: "chunk4", len: 2}]
var outTemplate = [{key: "chunk3", len: 1}, {key: "chunk1", len: 3}, {key: "chunk2", len: 2}, {key: "chunk4", len: 2}]

function mergeFn(arr1, arr2){
  return arr1.map((e, pos) => ([e, arr2[pos]].join(" | ")))
}

var testData = [
	{
	  name: "Simple rearrange",
	  parameters: [inputArr, inTemplate1, outTemplate],
	  result: ['pqr', 'abc', 'def', 'ghi', 'jkl', 'mno', '', '']
	},
	{
	  name: "Merge rearrange",
	  parameters: [inputArr, inTemplate2, outTemplate, mergeFn],
	  result: [ '', 'abc | ghi', 'def | jkl', '', '', 'mno', 'pqr' ]
	},
]

testData.forEach((testCase, i) => {
	test("Test case " + (i+1) + ": Name: " + testCase.name, () => (
		expect(
			rearrangeArr(...testCase.parameters)
			).toEqual(testCase.result)
		)
	)
})
/* Rearranges an array in chunks. Enables merging of chunks if required. */
function rearrangeArr(arr, inTemplate, outTemplate, mergeFn=(arr1, arr2)=>arr2){
  let resultObj = Object.create(null)
  let resultArr = []
  
  for(let i = 0; i < inTemplate.length; i++){
    let key = inTemplate[i].key
    let len = inTemplate[i].len
    let chunk = arr.slice(0, len)
    resultObj[key] = resultObj[key] ? mergeFn(resultObj[key], chunk) : chunk
    arr = arr.slice(len)
  }

  return outTemplate.reduce((resultArr, {key, len}) => (resultArr.concat(resultObj[key] || Array.from({length: len}, () => ""))), [])
}

module.exports = {rearrangeArr};
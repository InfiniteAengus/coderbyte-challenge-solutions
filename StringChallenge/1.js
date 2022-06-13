// get ascii code of char 'a' => 0, 'b' => 1 ...
const getAsciiCode = (ch) => (ch.charCodeAt(0) - 97)

// main function
function StringChallenge(strArr) { 
  let count = Array(26).fill(0);
  let cur = Array(26).fill(0);

  let total = 0;

  for (let c of strArr[1]) {
    count[getAsciiCode(c)]++;
  }
  
  total = count.filter(s => s !== 0).length;

  let str = strArr[0], ed = 0, st = 0;
  let matchCount = 0;

  while (matchCount < total && ed < str.length) {
    let c = getAsciiCode(str[ed++])
    cur[c]++;
    if (cur[c] === count[c]) {
      matchCount++;
    }
  }

  let ans = str.length, fst, fed;

  for (let st in str) {
    if (ans > ed - st - 1) {
      ans = ed - st - 1;
      fst = st;
      fed = ed;
    }

    let c = getAsciiCode(str[st]);
    cur[c]--;

    while (cur[c] < count[c] && ed < str.length) {
      cur[getAsciiCode(str[ed++])]++;
    
    }
    if (ed == str.length) break;
  }

  return str.slice(fst, fed);
}
   
// keep this function call here 
console.log(StringChallenge(["ahffaksfajeeubsne", "jefaa"]));
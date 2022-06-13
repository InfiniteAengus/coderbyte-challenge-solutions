function ArrayChallenge(arr) {
  let dp = []

  for (let i in arr) {
    if (i == 0) {
      dp[i] = [1, arr[i]]
    } else {
      if (arr[i] > dp[i - 1][1]) {
        dp[i] = [dp[i - 1][0] + 1, arr[i]]
      } else {
        dp[i] = dp[i - 1]
      }
    }
  }

  return dp[arr.length - 1][0]
}

// keep this function call here
console.log(ArrayChallenge(readline()))

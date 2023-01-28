function longestSubstringWithoutRepeat(s) {
  // use a hashmap to keep track of the last seen index of each character
  // keep track of the current left and current right
  // walk through using a sliding window of sorts
  const lastSeen = {};
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    // if its in our string, we must change the index
    if (lastSeen[s[right]] && lastSeen[s[right]] > left) {
      left = lastSeen[s[right]] + 1;
      lastSeen[s[right]] = right;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function productOfArray(nums: number[]) {
  // walk through nums forwards, multiplying the num and previous num once
  // walk through backwards, finishing the process for all numbers

  const result = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let prod = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * prod;
    prod *= nums[i];
  }
}

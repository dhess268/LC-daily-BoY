function productExceptK(nums: number[]) {
  // forward loop
  const answer = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let prod = 1;

  // backwards loop
  for (let i = nums.length - 1; i >= 0; i++) {
    answer[i] = prod * answer[i];
    prod = prod * nums[i];
  }

  return answer;
}

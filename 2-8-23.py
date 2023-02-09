# set up a queue
# continuously loop over while queue is not empty
# check if node is null, if null continue
# check if node is needle, if needle return true
# add node.left, node.right to queue
# repeat until queue empty
# return false if none found

def BFSBinaryTree(root, needle):
  q = [root]

  while(len(q) > 0):
    curr = q.pop(0)
    if(not curr):
      continue
    
    if(curr.val == needle):
      return true
    
    q.append(curr.left)
    q.append(curr.right)

  return false


def prodExceptSelf(nums):
  # create a new array of length len(nums) to hold answer and fill with 1
  # loop forward through the nums arr and set ans[i] = ans[i - 1] * nums[i - 1]
  # create new variable to hold the total product while walking backwards thru array
  # walk backwards thru array, ans[i] = ans[i] * prod
  # at the end of each loop, do prod = prod * nums[i]
  # return ans

  ans = [1] * len(nums)

  for i in range(1, len(nums)):
    ans[i] = ans[i - 1] * nums[i - 1]
  
  prod = 1

  for i in reversed(range(len(nums))):
    ans[i] = ans[i] * prod
    prod = prod * nums[i]


  return ans


def topKFrequentElements(nums, k):
  # create a hash map and loop over nums
  # frequency is the value and key is the integer

  # loop over the hash map keys and values
  # the key should now be frequency and value should be a list of integers with that frequency
  
  # loop over the second hash map 
  # while each index still has integers in the array, add the integer to the answer array
  # when K elements are in answer, return answer

  hm = {}
  ls = [[] for i in range(len(nums) + 1  )]

  for num in nums:
    hm[num] = hm.get(num, 0) + 1

  for num, freq in hm.items():
    ls[freq].append(num)

  ans = []

  for i in reversed(range(len(ls))):
    for n in ls[i]:
      ans.append(n)
      if(len(ans) == k):
        return ans

function maxDepth(node) {
  if (!node) {
    return;
  }

  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sHash = new Array(26).fill(0);
  const tHash = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sIndex = s[i].charCodeAt(0) - "a".charCodeAt(0);
    const tIndex = t[i].charCodeAt(0) - "a".charCodeAt(0);
    sHash[sIndex] += 1;
    tHash[tIndex] += 1;
  }

  const sFreq = sHash.join("");
  const tFreq = tHash.join("");

  return sFreq === tFreq;
}

function topFreq(arr: number[], k: number) {
  const freq = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }

  const bucket = [];

  for (let [num, frequency] of freq) {
    bucket[frequency] = (bucket[frequency] || new Set()).add(num);
  }

  for (let i = k - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
    if (result.length >= k) {
      return result;
    }
  }
}

// group anagrams
// 1. create a hash table for each of length 26 with the index at the charCode and value as freq
// 2. join the has tables with #
// 3. append each hash table to a hash map where the key is the frequency, value is an array of the words

function groupAnagrams(strs) {
  const wordFreq = {};

  strs.forEach((string) => {
    const freq = new Array(26).fill(0);

    for (let i = 0; i < string.length; i++) {
      // step 1.
      const charCode = string[i].charCodeAt(0) - "a".charCodeAt(0);

      freq[charCode] += 1;
    }

    // step 2.
    const frequencyCode = freq.join("#");

    wordFreq[frequencyCode] = (wordFreq[frequencyCode] || []).push(
      frequencyCode
    );
  });

  return Object.values(wordFreq);
}

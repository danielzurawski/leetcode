

const validateInput = (chars, allowedCharacters)/*: boolean */ => {
  const allowedMap = allowedCharacters.reduce((acc, char) => {
    acc[char] = true;
    return acc;
  }, {});

  return chars.every((char) => !!allowedMap[char]);
};

const sumOfDeletions = (word /*: string*/, allowedCharacters) /*: number*/ => {
  const chars = word.split('');
  const allowedChars = allowedCharacters.split('');

  if (!validateInput(chars, allowedChars)) throw new Error('Invalid characters');

  let left = 0;
  let right = 1;
  let sumOfAdjDeletions = 0;
  while (right < chars.length) {
    if (chars[left] === chars[right]) {
      sumOfAdjDeletions++;
      right++;
    } else {
      right++;
      left++;
    }
  }
  return sumOfAdjDeletions;
};


console.log('sumOfDeletions("ababa") === true', sumOfDeletions('ababa', 'ab') === 0);
// console.log('sumOfDeletions("ababa") === true', sumOfDeletions('acaba', 'ab') === 0);
console.log('sumOfDeletions("aaaa") === true', sumOfDeletions('aaaa', 'ab') === 3);
const sortJoin = (s: string): string => s.split('').sort().join('');

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s: string, t: string): boolean => {
  return sortJoin(s) === sortJoin(t);
};

console.log('isAnagram("tak", "kat")', isAnagram('tak', 'kat'))
"use strict";
const sortJoin = (s) => s.split('').sort().join('');
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    return sortJoin(s) === sortJoin(t);
};
console.log('isAnagram("tak", "kat")', isAnagram('tak', 'kat'));

"use strict";
/*


Tax Loss Harvesting Combinations
================================

Context:
-------
Each account at Wealthsimple is assigned a Target Portfolio to model the desired mix of assets for that account. A Target Portfolio contains a collection of assets and their percent allocation, the sum of these percentages should always equal 100.

An example Target Portfolio might look like:
[
   {
       symbol:     "PDF",
       allocation: 10,
   },
   {
       symbol:     "PHR",
       allocation: 20,
   },
   {
       symbol:     "XIC",
       allocation: 20,
   },
   {
       symbol:     "ZCS",
       allocation: 30,
   },
   {
       symbol:     "ZFM",
       allocation: 20,
   }
]

An account may at one point undergo Tax Loss Harvesting (TLH). This is one of those tricky concepts that seems insane at first. The idea is to purposely sell an asset that has gone down in value so that you lose money. The reason? To save money on taxes! The first step is to sell losing assets. The second step is to buy an asset that is pretty similar. We call this similar asset a Secondary Asset.

With TLH, the example above may look something like this:

[
   {
       symbol:     "PDF",
       allocation: 10,
       secondary:  "ZUD"
   },
   {
       symbol:     "PHR",
       allocation: 20,
       secondary:  "ZRE"
   },
   {
       symbol:     "XIC",
       allocation: 20,
       secondary:  "VCN"
   },
   {
       symbol: "ZCS",
       allocation: 30,
   },
   {
       symbol: "ZFM",
       allocation: 20,
   }
]

Note that not all assets can be tax loss harvested.

Exercise:
---------

In this exercise, we will be taking a raw collection of asset allocations for a given Target Portfolio and generating a new collection containing all possible combinations of assets that the Target Portfolio could be in.

Example Output:
Given the example above, output would look something like:
[
   {PDF: 10, PHR: 20, XIC: 20, ZCS: 30, ZFM: 20},
   {ZUD: 10, PHR: 20, XIC: 20, ZCS: 30, ZFM: 20},
   {PDF: 10, ZRE: 20, XIC: 20, ZCS: 30, ZFM: 20},
   {ZUD: 10, ZRE: 20, XIC: 20, ZCS: 30, ZFM: 20},
   {PDF: 10, PHR: 20, VCN: 20, ZCS: 30, ZFM: 20},
   {ZUD: 10, PHR: 20, VCN: 20, ZCS: 30, ZFM: 20},
   {PDF: 10, ZRE: 20, VCN: 20, ZCS: 30, ZFM: 20},
   {ZUD: 10, ZRE: 20, VCN: 20, ZCS: 30, ZFM: 20},
]
*/
// portfolios
// portfolio
// for alloc in allocations
//   portfolio[alloc]
//
const allocations = [
    {
        symbol: "PDF",
        allocation: 10,
        secondary: "ZUD"
    },
    {
        symbol: "PHR",
        allocation: 20,
        secondary: "ZRE"
    },
    {
        symbol: "XIC",
        allocation: 20,
        secondary: "VCN"
    },
    {
        symbol: "ZCS",
        allocation: 30,
    },
    {
        symbol: "ZFM",
        allocation: 20,
    }
];
// first {PDF: 10}, rest: [{PHR: 20}]
const permutationsRecurse = (tickers, isSecondary) => {
    // base case
    // console.log('tickers', tickers);
    if (!tickers.length)
        return [];
    const portfolio = {};
    tickers.forEach((ticker) => {
        const tickerSymbol = isSecondary ? ticker.secondary : ticker.symbol;
        portfolio[tickerSymbol] = ticker.allocation;
    });
    const newPortfolio = [
        ...permutationsRecurse(tickers.slice(1), true),
        portfolio,
        ...permutationsRecurse(tickers.slice(1), false),
        ...permutationsRecurse(tickers.slice(1), true)
    ];
    // console.log('newPortfolio', newPortfolio);
    return newPortfolio;
};
const permutations = (allocations) => {
    if (!allocations.length)
        return [];
    return permutationsRecurse(allocations, false);
};
const testA = [{
        symbol: "PDF",
        allocation: 10,
        secondary: "ZUD"
    },
    {
        symbol: "PHR",
        allocation: 20,
        secondary: "ZRE"
    }];
console.log(`permutations(${JSON.stringify(testA)}):`, permutations(testA), ' === [{PDF: 10, PHR: 20}, {PDF: 10, ZRE:20}, {ZUD: 10, PHR: 20}, {ZUD: 10, ZRE: 20}]');
// console.log(`permutations(${JSON.stringify(allocations)}):`, permutations(allocations),
//   ' === example output');
/*

*/
// Input: [{symbol: PDF, secondary: ZUD, allocation: 50}, { symbol: PHR, seconadry: ZRE, allocation: 50}]
// Output
/*
expected output:
[
 { PDF: 50, PHR: 50 },  orig, orig
 { ZUD: 50, PHR: 50 },  alt, orig
 { PDF: 50, ZRE: 50 },  orig, alt
 { ZUD: 50, ZRE: 50},   alt, alt
]
*/

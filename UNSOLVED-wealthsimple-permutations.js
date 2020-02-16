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
const justMessing = (allocations) => {
    const allPortfolios = [];
    let currentPorfolio = {};
    allocations.forEach((allo) => {
        currentPorfolio = Object.assign(Object.assign({}, currentPorfolio), { [allo.symbol]: allo.allocation });
        allocations.forEach((allo2) => {
            if (allo.symbol == allo2.symbol)
                return;
            currentPorfolio = Object.assign(Object.assign({}, currentPorfolio), {
                [allo.symbol === allo2.symbol ? allo2.secondary : allo2.symbol]: allo2.allocation
            });
        });
        allPortfolios.push(currentPorfolio);
    });
    return allPortfolios;
};
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
const permutationsRecurse = (tickers, usedTickers, currentPortfolio, allCombinations, maxPortfolioLength) => {
    if (Object.keys(currentPortfolio).length === maxPortfolioLength) {
        allCombinations.push(currentPortfolio);
        return;
    }
    const singlePortfolio = {};
    for (let i = 0; i < tickers.length; ++i) {
        const ticker = tickers[i];
        let tickerSymbol;
        if (usedTickers[ticker.symbol] && usedTickers[ticker.secondary]) {
            console.log('both used');
            // continue;
        }
        else if (usedTickers[ticker.symbol]) {
            tickerSymbol = ticker.secondary;
        }
        else {
            tickerSymbol = ticker.symbol;
        }
        console.log('ticker', ticker, 'index', i, 'setting tickerSymbol to used', tickerSymbol, 'usedTickers', usedTickers);
        // eslint-disable-next-line no-param-reassign
        // usedTickers[ticker.symbol] = true;
        // eslint-disable-next-line no-param-reassign
        // usedTickers[ticker.secondary] = true;
        // eslint-disable-next-line no-param-reassign
        usedTickers[tickerSymbol] = true;
        singlePortfolio[tickerSymbol] = ticker.allocation;
        // const removed = tickers.splice(i, i+1)
        permutationsRecurse(tickers, Object.assign(Object.assign({}, usedTickers), { [ticker.secondary]: true }), Object.assign(Object.assign({}, currentPortfolio), singlePortfolio), 
        // eslint-disable-next-line no-param-reassign
        allCombinations, maxPortfolioLength);
        // eslint-disable-next-line no-param-reassign
        // usedTickers[ticker.symbol] = false;
        // eslint-disable-next-line no-param-reassign
        // usedTickers[ticker.secondary] = false;
        // eslint-disable-next-line no-param-reassign
        // usedTickers[ticker.secondary] = false;
        usedTickers[tickerSymbol] = false;
        // usedTickers= {};
    }
};
const permutations = (allocations) => {
    const maxLength = allocations.length;
    if (!maxLength)
        return [];
    const allCombinations = [];
    permutationsRecurse(allocations, {}, {}, allCombinations, maxLength);
    return allCombinations;
};
// [
//   { PDF: 50, PHR: 50 },  orig, orig
//   { ZUD: 50, PHR: 50 },  alt, orig
//   { PDF: 50, ZRE: 50 },  orig, alt
//   { ZUD: 50, ZRE: 50},   alt, alt
//  ]
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
console.log('justMessing', justMessing(testA));
const testB = [
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
/*
create portfolio
iterate from i to n
    add i and another candidate to the current porfolio
    remove current candidate
    remove the other candidate
*/
// currentPorfolio  |   index  | allCombinations   | isSecondary
// {}                   0        []                  false
// {PDF: 10}            1        []                  true
// {PDF: 10, ZRE:20}    2        [{PDF: 10,ZRE:20]   false
// keys(currentPoftiolo).length == maxPortfolioLength 
// {PDF:}
// first solve for first / non-secondary
// PDF + PHR
// PDF + ZRE
// ZUD + PHR
// ZUD + ZRE
// console.log(`permutations(${JSON.stringify(testA)}):`, permutations(testA),
//   ' === [{PDF: 10, PHR: 20}, {PDF: 10, ZRE:20}, {ZUD: 10, PHR: 20}, {ZUD: 10, ZRE: 20}]');
/*

*/
// Input: [{symbol: PDF, secondary: ZUD, allocation: 50}, { symbol: PHR, secondary: ZRE, allocation: 50}]
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

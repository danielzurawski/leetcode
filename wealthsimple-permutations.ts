/* eslint-disable no-param-reassign */
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

interface Ticker {
  symbol: string;
  allocation: number;
  secondary?: string;
}

type TickerPair = {[key: string]: number};

const permutationsRecurse = (
  tickers: Ticker[],
  first: number,
  currentPortfolio: TickerPair,
  allCombinations: TickerPair[],
  maxPortfolioLength: number,
): TickerPair[] => {
  if (Object.keys(currentPortfolio).length === maxPortfolioLength) {
    allCombinations.push(Object.assign({}, currentPortfolio));
    return [];
  }

  const ticker = tickers[first];
  for (let i = 0; i < 2; i++) {
    let tickerSymbol;
    if (i == 0) {
      tickerSymbol = ticker.symbol;
    } else if (ticker.secondary){
      tickerSymbol = ticker.secondary;
    } else {
      continue;
    }

    currentPortfolio[tickerSymbol] = ticker.allocation;

    permutationsRecurse(
      tickers,
      first + 1,
      currentPortfolio,
      allCombinations, 
      maxPortfolioLength,
    );
    
    delete currentPortfolio[tickerSymbol];
  }

  return allCombinations;
};


const permutations = (allocations: Ticker[]): TickerPair[] => {
  const maxLength = allocations.length;

  if (!maxLength) return [];
  const allCombinations: TickerPair[] = [];

  return permutationsRecurse(allocations, 0, {}, allCombinations, maxLength);
}



/*
create portfolio
iterate from i to 2
    add tickers[tickerIndex] to the current porfolio
    recurse (tickerIndex + 1 ,currentPorfolio)
    remove ticker from current portfolio
*/

// currentPorfolio  |   index  | allCombinations   | isSecondary
// {}                   0        []                  false
// {PDF: 10}            1        []                  true
// {PDF: 10, ZRE:20}    2        [{PDF: 10,ZRE:20]   false
// keys(currentPoftiolo).length == maxPortfolioLength push

// first solve for first / non-secondary
// PDF + PHR
// PDF + ZRE
// ZUD + PHR
// ZUD + ZRE

const testA: Ticker[] = [{
  symbol:     "PDF",
  allocation: 10,
  secondary:  "ZUD"
},
{
  symbol:     "PHR",
  allocation: 20,
  secondary:  "ZRE"
}];
console.log(
  `permutations(${JSON.stringify(testA)}):`, 
  permutations(testA),
  ` === [
    {PDF: 10, PHR: 20}, 
    {PDF: 10, ZRE:20}, 
    {ZUD: 10, PHR: 20}, 
    {ZUD: 10, ZRE: 20}
  ]`
);


const testB: Ticker[] = [
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
console.log(
  `permutations(${JSON.stringify(testB)}):`, 
  permutations(testB),
  ` === [
    {PDF: 10, PHR: 20, XIC: 20, ZCS: 30, ZFM: 20},
    {ZUD: 10, PHR: 20, XIC: 20, ZCS: 30, ZFM: 20},
    {PDF: 10, ZRE: 20, XIC: 20, ZCS: 30, ZFM: 20},
    {ZUD: 10, ZRE: 20, XIC: 20, ZCS: 30, ZFM: 20},
    {PDF: 10, PHR: 20, VCN: 20, ZCS: 30, ZFM: 20},
    {ZUD: 10, PHR: 20, VCN: 20, ZCS: 30, ZFM: 20},
    {PDF: 10, ZRE: 20, VCN: 20, ZCS: 30, ZFM: 20},
    {ZUD: 10, ZRE: 20, VCN: 20, ZCS: 30, ZFM: 20},
  ]`
);
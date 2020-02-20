/*
Tax Loss Harvesting Combinations
================================

Context:
-------
Each account at Wealthsimple is assigned a Target Portfolio to model the desired mix of assets for that account. A Target Portfolio contains a collection of assets and their percent allocation, the sum of these percentages should always equal 100.

An example Target Portfolio might look like:
[
  {
    symbol: "PDF",
    allocation: 10,
  },
  {
    symbol: "PHR",
    allocation: 20,
  },
  {
    symbol: "XIC",
    allocation: 20,
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

An account may at one point undergo Tax Loss Harvesting (TLH). This is one of those tricky concepts that seems insane at first. The idea is to purposely sell an asset that has gone down in value so that you lose money. The reason? To save money on taxes! The first step is to sell losing assets. The second step is to buy an asset that is pretty similar. We call this similar asset a Secondary Asset.

With TLH, the example above may look something like this:

[
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
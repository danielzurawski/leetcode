// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products = []
    
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        console.log('i', i, 'products', products, 'product', product);
        products[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (let i = nums.length-1;i >= 0; i--) {
        console.log('2 i', i, 'products', products, 'product', product);
        products[i] *= product;
        product *= nums[i];
    }
    return products;
};
console.log(productExceptSelf([1, 2, 3, 4]))
// Travel Left->Right and keep saving product. Call it Past. -> O(n)
// Travel Right -> left keep the product. Call it Future. -> O(n)
// Result[i] = Past[i-1] * future[i+1] -> O(n)
// Past[-1] = 1; and Future[n+1]=1;

// int a[N] // This is the input
// int products[N];

// // Get the products below the current index
// p=1;
// for(int i=0;i<N;++i) {
//   products[i]=p;
//   p*=a[i];
// }

// // Get the products above the curent index
// p=1;
// for(int i=N-1;i>=0;--i) {
//   products[i]*=p;
//   p*=a[i];
// }

// [1,2,3,4]

// [1,2,6,24] -> past
// [24,24,12,4] -> future

// 24,

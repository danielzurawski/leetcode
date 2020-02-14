"use strict";
/*
https://leetcode.com/problems/lru-cache/

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?
*/
class ListNode {
    constructor(key, val) {
        this.key = key;
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }
    insertAtStart(key, val) {
        const newNode = new ListNode(key, val);
        if (!this.firstNode) {
            this.firstNode = newNode;
        }
        else {
            const oldNode = this.firstNode;
            oldNode.previous = newNode;
            newNode.next = oldNode;
            this.firstNode = newNode;
        }
        if (!this.lastNode) {
            this.lastNode = newNode;
        }
        return this.firstNode;
    }
    delete(node) {
        if (node == this.firstNode) {
            if (this.firstNode === this.lastNode) {
                this.lastNode = null;
                this.firstNode = null;
            }
            else {
                const next = this.firstNode.next;
                this.firstNode = next;
            }
        }
        else if (node == this.lastNode) {
            this.deleteAtEnd();
        }
        else {
            this.deleteMiddle(node);
        }
    }
    deleteMiddle(node) {
        const previous = node.previous;
        const newNode = node.next;
        if (previous) {
            previous.next = newNode;
        }
        else {
            console.log('previous. doesnt exist');
        }
        if (newNode) {
            newNode.previous = previous;
        }
        else {
            console.log('newNode.previous doesnt exist');
        }
    }
    deleteAtEnd() {
        if (!this.lastNode)
            return -1;
        const prev = this.lastNode.previous;
        const key = this.lastNode.key;
        if (prev) {
            prev.next = null;
            this.lastNode = prev;
        }
        return key;
    }
    moveNodeUp(node) {
        this.delete(node);
        this.insertAtStart(node.key, node.value);
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.values = {};
        this.size = 0;
        this.dLinkedList = new DoublyLinkedList();
    }
    get(key) {
        const node = this.values[key];
        if (!node)
            return -1;
        this.dLinkedList.moveNodeUp(node);
        return node.value;
    }
    put(key, value) {
        if (this.values[key]) {
            this.dLinkedList.delete(this.values[key]);
            this.size = this.size - 1;
        }
        const node = this.dLinkedList.insertAtStart(key, value);
        this.size += 1;
        if (this.size > this.capacity) {
            const keyToDelete = this.dLinkedList.deleteAtEnd();
            if (keyToDelete != -1) {
                delete this.values[keyToDelete];
                this.size = this.size - 1;
            }
        }
        this.values[key] = node;
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// const cache = new LRUCache( 2 /* capacity */ );
// cache.put(1, 1);
// cache.put(2, 2);
// console.log('after inserting 2 (expect 2,1)', cache);
// console.log('get 1, expect 1', cache.get(1));
// console.log('after get 1, expect (1,2)', cache);
// cache.put(3, 3);  // evicts key 2
// console.log('after inserting 3 (expect 1,3)', cache);
// console.log('get 2 (expect -1)', cache.get(2));
// cache.put(4, 4); // evicts key 1
// console.log('after inserting 4 (expect 4,3)', cache);
// console.log('get 1 (expect -1)', cache.get(1));
// console.log('get 3 (expect 3)', cache.get(3));
// console.log('get 4 (expect 4)', cache.get(4));
// const cache = new LRUCache(3);
// cache.put(5, 5)
// cache.put(5, 4)
// cache.put(4, 4)
// cache.put(3, 3)
// cache.put(6, 6)
// console.log('cache.get(6)', cache.get(6));
// console.log('all cache', cache)
// console.log('\n------ 1st failing test case')
// // ["LRUCache","put","put","put","put","get","get"]
// // [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
// const cache2 = new LRUCache( 2 /* capacity */ );
// cache2.put(2, 1)
// cache2.put(1, 1)
// cache2.put(2, 3)
// cache2.put(4, 1)
// console.log('get(1), expect -1', cache2.get(1))
// console.log('get(2), expect 3', cache2.get(2)) // expect 3
// console.log('\n------ 2nd failing test case')
// // ["LRUCache","get","put","get","put","put","get","get"]
// // [[2],       [2],  [2,6],[1],  [1,5],[1,2],[1],  [2]]
// const cache3 = new LRUCache( 2 /* capacity */ );
// cache3.get(2)
// cache3.put(2, 6)
// cache3.get(1)
// cache3.put(1, 5)
// cache3.put(1, 2)
// cache3.get(1)
// console.log('get(2), expect 6', cache3.get(2))
// console.log('\n------ 3rd failing test case')
// // ["LRUCache","put","put","get","put","put","get"]
// // [[2],       [2,1],[2,2],[2],  [1,1],[4,1],[2]]
// const cache4 = new LRUCache( 2 /* capacity */ );
// cache4.put(2, 1)
// cache4.put(2, 2)
// cache4.get(2)
// cache4.put(1, 1)
// cache4.put(4, 1)
// cache4.get(2)
// console.log('expected (4, 2)', cache4)
console.log('\n------ 4th failing test case');
// ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
// [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]
const cache5 = new LRUCache(3 /* capacity */);
cache5.put(1, 1);
cache5.put(2, 2);
cache5.put(3, 3); // (3, 2, 1)
// console.log('3 should be first', cache5)
cache5.put(4, 4); // (4, 3, 2)
// console.log('3 should be second', cache5)
cache5.get(4); // (4, 3, 2)
cache5.get(3); // (3, 4, 2)
// console.log('3 should be first, 2 should be last', cache5)
cache5.get(2); // (3, 2, 4)
// console.log('4 should be last', cache5)
cache5.get(1); // (3, 2, 4)
cache5.put(5, 5); // (5, 3, 2)
// console.log('5 should be in and 4 should be evicted', cache5)
cache5.get(1); // (5, 3, 2)
cache5.get(2); // (5, 2, 3)
console.log('get(3), expect 3', cache5.get(3)); // wrong case // (5, 3, 2)
console.log('get(4), expect -1', cache5.get(4)); // wrong case // (5, 3, 2)
cache5.get(5); // (5, 3, 2)
// ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
// [[10], [10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
const debug = (size, commands, data) => {
    const cache = new LRUCache(size);
    commands.forEach((command, i) => {
        switch (command) {
            case 'put':
                console.log(`put(${data[i][0]}, ${data[i][1]})`, cache.put(data[i][0], data[i][1]) + '');
                break;
            case 'get':
                console.log(`get(${data[i][0]}) = ${cache.get(data[i][0])}`);
                break;
            default:
                console.log('Unrecognised command');
        }
    });
};
// debug(2, ["put","put","put","put","put","get"], [[10,13],[3,17],[6,11],[10,5],[9,10],[3]])
// debug(10,
//   ["put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"],
//   [[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]])
// debug(10,
//   ["put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get"],
//   [[10,13],[3,17],[6,11],[9,3],[9],[10],[10],[6,14],[6],[6,30],[6],[3,4],[1],[10],[5],[1],[12,17],[9,1],[6,19]])
// debug(2,
//   ["put", "put", "get"],
// [[6,13],[6,17],[6,11],[6,13],[6],[6]]);
// ["LRUCache", "put","put","put","put","get","get"]
// [[10],[10,13],[3,17],[6,11],[9,3],[9],[10]]
/*
  Old move node up
  const prev = node.previous;
      if (prev) {
        if (node.next) {
          node.next.previous = prev;
        }

        node.next = prev;
        prev.previous = node;

        if (prev === this.firstNode) {
          this.firstNode = node;
          if (node.previous) node.previous = null;
        }

      if (node === this.lastNode) {
        this.lastNode = prev;
        prev.next = null;
      }
    }
  }
*/

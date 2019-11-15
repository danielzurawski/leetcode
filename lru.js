var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.values = {};
    this.size = 0;
    this.dLinkedList = new DoublyLinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.values[key];
    if (!node) return -1;
    
    this.dLinkedList.moveNodeUp(node);
    
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // key already exists, update
    if (this.values[key]) {
        this.dLinkedList.delete(this.values[key]);
        this.size -= 1;
    }
    const node = this.dLinkedList.insertAtStart(key, value);
    this.size += 1;
    
    if (this.size > this.capacity) {
        const keyToDelete = this.dLinkedList.deleteAtEnd()
        delete this.values[keyToDelete];
        this.size -= 1;
    }
    this.values[key] = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
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
        this.firstNode = undefined;
        this.lastNode = undefined;
    }
    
    insertAtStart(key, val) {
        // console.log('insertAtStart',
        //             '\nkey', key,
        //             '\nfirstNode', this.firstNode,
        //             '\nlastNode', this.lastNode);
        const newNode = new ListNode(key, val);
        if (!this.firstNode) {
            this.firstNode = newNode;
        } else {
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
            const next = this.firstNode.next
            this.firstNode = next;
        } else if (node == this.lastNode) {
            this.deleteAtEnd();
        } else {
            node.previous.next = node.next;
            node.next = null;
        }
    }

    deleteAtEnd() {
        // console.log('deleteAtEnd',
        //             '\nfirstNode', this.firstNode,
        //             '\nlastNode', this.lastNode);
        if (!this.lastNode) return;
        const prev = this.lastNode.previous;
        const key = this.lastNode.key;
        if (prev) {
            prev.next = null;
            this.lastNode = prev;
        }

        return key;
    }
    
    moveNodeUp(node) {
        // console.log('moveNodeUp',
        //             '\nnode', node,
        //             '\nfirstNode', this.firstNode,
        //             '\nlastNode', this.lastNode);
        const prev = node.previous;
        if (prev) {
            if (node.next) {
                node.next.previous = prev;
            }
            
            node.next = prev;
            prev.previous = node;
            // console.log('should set 2.prev to 4')
            
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
}

const cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
console.log('after inserting 2 (expect 2,1)', cache);
console.log('get 1, expect 1', cache.get(1));    
console.log('after get 1, expect (1,2)', cache); 
cache.put(3, 3);  // evicts key 2
console.log('after inserting 3 (expect 1,3)', cache);
console.log('get 2 (expect -1)', cache.get(2));  
cache.put(4, 4); // evicts key 1
console.log('after inserting 4 (expect 4,3)', cache);
console.log('get 1 (expect -1)', cache.get(1));
console.log('get 3 (expect 3)', cache.get(3));
console.log('get 4 (expect 4)', cache.get(4));

console.log('\n------ 1st failing test case')
// ["LRUCache","put","put","put","put","get","get"]
// [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]

const cache2 = new LRUCache( 2 /* capacity */ );
cache2.put(2, 1)
cache2.put(1, 1)
cache2.put(2, 3)
console.log('after putting 2 again', cache2)
cache2.put(4, 1)
console.log('get(1), expect -1', cache2.get(1))
console.log('get(2), expect 3', cache2.get(2)) // expect 3

console.log('\n------ 2nd failing test case')
// ["LRUCache","get","put","get","put","put","get","get"]
// [[2],       [2],  [2,6],[1],  [1,5],[1,2],[1],  [2]]

const cache3 = new LRUCache( 2 /* capacity */ );
cache3.get(2)
cache3.put(2, 6)
console.log('after inserting 2->6', cache3)
cache3.get(1)
cache3.put(1, 5)
console.log('after inserting 1->5', cache3)
cache3.put(1, 2)
console.log('after inserting 1->2', cache3)
cache3.get(1)
console.log('get(2), expect 6', cache3.get(2))

console.log('\n------ 3rd failing test case')
// ["LRUCache","put","put","get","put","put","get"]
// [[2],       [2,1],[2,2],[2],  [1,1],[4,1],[2]]

const cache4 = new LRUCache( 2 /* capacity */ );
cache4.put(2, 1)
cache4.put(2, 2)
cache4.get(2)
cache4.put(1, 1)
cache4.put(4, 1)
cache4.get(2)
console.log('expected (4, 2)', cache4)


console.log('\n------ 4th failing test case')
// ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
// [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]

const cache5 = new LRUCache( 3 /* capacity */ );
cache5.put(1, 1)  
cache5.put(2, 2)
cache5.put(3, 3) // (3, 2, 1)
// console.log('3 should be first', cache5)
cache5.put(4, 4) // (4, 3, 2)
// console.log('3 should be second', cache5)
cache5.get(4) // (4, 3, 2)
cache5.get(3) // (3, 4, 2)
console.log('3 should be first, 2 should be last', cache5)
cache5.get(2) // (3, 2, 4)
console.log('4 should be last', cache5)
cache5.get(1) // (3, 2, 4)
cache5.put(5, 5) // (5, 3, 2)
// console.log('5 should be in and 4 should be evicted', cache5)
cache5.get(1) // (5, 3, 2)
cache5.get(2) // (5, 2, 3)
console.log('get(3), expect 3', cache5.get(3)) // wrong case // (5, 3, 2)
console.log('get(4), expect -1', cache5.get(4)) // wrong case // (5, 3, 2)
cache5.get(5) // (5, 3, 2)

console.log('\n ------- 5th failing test case')
// ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
// [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]

// TOOOO LONG
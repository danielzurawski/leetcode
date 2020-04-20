"use strict";
/* eslint-disable no-param-reassign */
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
    }
}
class DoublyLinkedList {
    constructor() {
        this.firstNode = new ListNode(-1, -1);
        this.lastNode = new ListNode(-1, -1);
        this.firstNode.next = this.lastNode;
        this.lastNode.previous = this.firstNode;
    }
    insert(newNode) {
        newNode.previous = this.firstNode;
        newNode.next = this.firstNode.next;
        this.firstNode.next.previous = newNode;
        this.firstNode.next = newNode;
    }
    deleteLast() {
        const key = this.lastNode.previous.key;
        this.delete(this.lastNode.previous);
        return key;
    }
    delete(node) {
        const prev = node.previous;
        const next = node.next;
        prev.next = next;
        next.previous = prev;
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
        this.dLinkedList.delete(node);
        this.dLinkedList.insert(node);
        return node.value;
    }
    put(key, value) {
        const existing = this.values[key];
        if (existing) {
            existing.value = value;
            this.dLinkedList.delete(existing);
            this.dLinkedList.insert(existing);
        }
        else {
            const newNode = new ListNode(key, value);
            this.dLinkedList.insert(newNode);
            this.size++;
            this.values[key] = newNode;
            if (this.size > this.capacity) {
                const deletedKey = this.dLinkedList.deleteLast();
                delete this.values[deletedKey];
                this.size--;
            }
        }
    }
}
const cache = new LRUCache(5);
cache.put(10, 13);
cache.put(3, 17);
cache.put(6, 11);
cache.put(7, 10);
cache.put(4, 14);
cache.put(8, 5);
console.log('cache.get(10)', cache.get(10));
console.log('cache.get(3)', cache.get(3));

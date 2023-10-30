//https://leetcode.com/problems/lru-cache/

import { DataI, TaskTypes } from "../../models"

// MED
class LRUCache {
    private _cache: Map<number, number> = new Map();
    private _lastKey: number = 0;
    private _capacity: number;
    constructor(capacity: number) {
      this._capacity = capacity;
    }
  
    get(key: number): number {
      const value = this._cache.get(key);
      if (!value) return -1;
      return value;
    }
  
    put(key: number, value: number): void {
      const isKeyAlreadyInCache = this._cache.has(key);
      this._cache.set(key, value);
      //  если ключ уже был в кэше - перезаписываем и не чистим
      if (isKeyAlreadyInCache) {
        this._lastKey = key;
        return;
      }
      this.clearHistory();
      this._lastKey = key;
    }
    clearHistory() {
    //   очистить элементы, к которым дольше всего не обращались
    //   оставить кэш размером с this._capacity
      if (this._cache.size <= this._capacity) return;
      if (!this._lastKey) return;
      this._cache.delete(this._lastKey);
    }
  }
export const data: DataI<LRUCache> = {
    funcs: [],
    description:
    `
    Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
    `,
    date: '19.10.2023',
    type: TaskTypes.MEDIUM,
    learnThemes: [],
    url: 'https://leetcode.com/problems/lru-cache/',
}
import { LinkedList } from "./LinkedList";
import { Node } from "./Node";
class HashMap {
    constructor () {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
    }   

    checkIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }
        
        return hashCode;
    }

    set(key, value) {
        let hashedKey = this.hash(key);
        let bucket = this.buckets[hashedKey];
        
        // If the bucket exists
        if (bucket) {
            /*
            If the bucket's head does not have  a key, make a node.
            Else, change the value of the key.
            */
            if (!bucket.head.key) {
                bucket = new Node(key, value);
            } else if (bucket.head.key !== key) {
                bucket.append(key, value);
            } else {
                bucket.head.value = value;
            }

        } else {
            bucket = new LinkedList(key);
            bucket.prepend(key, value);
            this.buckets[hashedKey] = bucket;
        }
        
        console.log(key + " " + hashedKey + " " +  value);
    }

    get(key) {
        let hashedKey = this.hash(key);
        if (!this.buckets[hashedKey]) {
            return null;
        }

        for (let bucket in this.buckets) {
            if (this.buckets[bucket].head.key === key) {
                return this.buckets[bucket].head.value;
            } else {
                let current = this.buckets[bucket].head;
                while (current.nextNode) {
                    if (current.nextNode.key === key) {
                        return current.nextNode.value;
                    }
                    current = current.nextNode;
                }
            }
        }

        return null;
    }

    has(key) {
        for (let bucket in this.buckets) {
            if (this.buckets[bucket].head.key === key) {
                return true;
            } else {
                let current = this.buckets[bucket].head;
                while (current.nextNode) {
                    if (current.nextNode.key === key) {
                        return true;
                    }
                    current = current.nextNode;
                }
            }
        }

        return false;
    }

    remove(key) {
        for (let bucket in this.buckets) {
            if (this.buckets[bucket].head.key === key) {
                return true;
            }
        }
    }

    length() {
        let counter = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== -1) {
                counter++;
            }
        }
        
        return counter;
    }

    keys() {
        let keyArray = [];

        for (let key in this.buckets) {
            keyArray.push(key);
        }

        return keyArray;
    }
}

export {HashMap};
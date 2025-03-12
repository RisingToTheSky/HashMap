import { LinkedList } from "./LinkedList";
import { Node } from "./Node";
class HashMap {
    constructor () {
        this.capacity = 16;
        this.loadFactor = this.capacity * 0.75;
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
        if (this.keys().includes(key)) {
            this.checkCollision(key, value, this.hash(key));
            return;
        } else if (this.length() === this.loadFactor) {
            if (this.length() === this.loadFactor) {
                this.capacity *= 2;
                this.loadFactor = 0.75 * this.capacity;
                let entries = this.entries();
                this.clear();
                this.buckets = new Array(this.capacity);
                for (let entry in entries) {
                    let hashedKey = this.hash(entries[entry][0]);
                    this.checkCollision(entries[entry][0],entries[entry][1], hashedKey)
                }
            }

            this.checkCollision(key, value, this.hash(key));
        } else {
            this.checkCollision(key, value, this.hash(key));
        }
    }

    checkCollision(key, value, hashedKey) {
        let bucket = this.buckets[hashedKey];
        // If the bucket exists
        if (bucket) {
            /*
            If the bucket's head does not have a key, make a node.
            Else, change the value of the key.
            */
            if (!bucket.head.key) {
                bucket = new Node(key, value);
            } else {
                let current = bucket.head;
                if (current.key === key) {
                    current.value = value;
                }

                while (current.nextNode) {
                    if (current.nextNode.key === key) {
                        current.nextNode.value = value;
                    }
                    current = current.nextNode;
                }

                if (current.key !== key) {
                    bucket.append(key, value);
                }
            }

        } else {
            bucket = new LinkedList(key);
            bucket.prepend(key, value);
            this.buckets[hashedKey] = bucket;
        }
    }

    get(key) {
        this.checkIndex(this.hash(key));

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
        this.checkIndex(this.hash(key));

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
        let hashedKey = this.hash(key);
        this.checkIndex(hashedKey);

        if (!this.keys().includes(key)) {
            return false;
        }

        for (let bucket in this.buckets) {
            let linkedList = this.buckets[bucket];;
            let prevNode;

            if (this.buckets[bucket].head.key === key && linkedList.getSize() === 1) {
                linkedList.pop();
                return true;
            }

            if (this.buckets[bucket].head.key === key) {
                prevNode = this.buckets[bucket].head;

                this.buckets[bucket].head = this.buckets[bucket].head.nextNode;

                prevNode = null;
                linkedList.size--;
                return true;
            } else {
                let current = this.buckets[bucket].head;

                while (current.nextNode) {
                    if (current.nextNode.key === key) {
                        current.nextNode = current.nextNode.nextNode;
                        linkedList.size--;
                        return true;
                    }

                    current = current.nextNode;
                }
            }
        }

        return true;
    }

    length() {
        return this.keys().length;
    }

    clear() {
       this.buckets.length = 0;
    }

    keys() {
        let keyArray = [];

        for (let bucket in this.buckets) {
            if (this.buckets[bucket]) {
                let current = this.buckets[bucket].head;
                if (current.key !== null) {
                    keyArray.push(current.key);
                }
                while (current.nextNode) {
                    if (current.nextNode) {
                        keyArray.push(current.nextNode.key);
                    }
                    current = current.nextNode;
                }
            }
        }

        return keyArray;
    }

    values() {
        let valueArray = [];

        for (let bucket in this.buckets) {
            if (this.buckets[bucket]) {
                let current = this.buckets[bucket].head;
                if (current.value !== null) {
                    valueArray.push(current.value);
                }
                while (current.nextNode) {
                    if (current.nextNode) {
                        valueArray.push(current.nextNode.value);
                    }
                    current = current.nextNode;
                }
            }
        }

        return valueArray;
    }

    entries() {
        let entryArray = [];

        for (let bucket in this.buckets) {
            if (this.buckets[bucket]) {
                let current = this.buckets[bucket].head;
                if (current.key !== null && current.value !== null) {
                    entryArray.push([current.key, current.value]);
                }
                while (current.nextNode) {
                    if (current.nextNode) {
                        entryArray.push([current.nextNode.key, current.nextNode.value]);
                    }
                    current = current.nextNode;
                }
            }
        }

        return entryArray;
    }
}

export {HashMap};
class HashMap {
    constructor (loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.array = [];
        for (let i = 0; i < capacity * loadFactor; i++) {
            this.array[i] = -1;
        }
    }

    hash(key) {
        let hashCode = 19;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }
        
        return hashCode;
    }

    set(key, value) {
        let hashedKey = this.hash(key);
        this.array[hashedKey] = value;
        console.log(this.array);
        console.log(hashedKey + " " +  value);
    }

    get(key) {
        let hashedKey = this.hash(key);
        if (hashedKey < 0 || hashedKey >= this.array.length) {
            throw new Error("Trying to access index out of bounds");
        } else if (this.array[hashedKey] === -1) {
            return null;
        }
        return this.array[hashedKey];
    }

    has(key) {
        let hashedKey = this.hash(key);
        if (hashedKey < 0 || hashedKey >= this.array.length) {
            throw new Error("Trying to access index out of bounds");
        } else if (this.array[hashedKey] === -1) {
            return false;
        }
        return true;
    }

    remove(key) {
        let hashedKey = this.hash(key);
        if (hashedKey < 0 || hashedKey >= this.array.length) {
            throw new Error("Trying to access index out of bounds");
        } else if (this.array[hashedKey] === -1) {
            return false;
        }
        console.log(this.array[hashedKey]);
        this.array[hashedKey] = -1;
        return true;
    }

    length() {
        let counter = 0;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== -1) {
                counter++;
            }
        }
        
        return counter;
    }
}

export {HashMap};
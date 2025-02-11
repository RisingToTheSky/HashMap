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
}

export {HashMap};
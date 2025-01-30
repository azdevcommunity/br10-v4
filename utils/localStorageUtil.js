export class LocalStorageUtil {
    /**
     * Saves data to localStorage with an expiration time
     * @param {string} key - The key under which the data is stored
     * @param {*} value - The data to store
     * @param {number} ttl - Time-to-live in milliseconds (e.g., 1 hour = 3600000 ms)
     */
    static setItem(key, value, ttl = 3600000) {
        const now = new Date().getTime();
        const item = {
            value: value,
            expiry: now + ttl
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    /**
     * Retrieves data from localStorage, checking if it has expired
     * @param {string} key - The key of the stored data
     * @returns {*} - The stored data or null if expired or not found
     */
    static getItem(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) {
            return null;
        }

        const item = JSON.parse(itemStr);
        const now = new Date().getTime();

        if (item.expiry && now > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    }

    /**
     * Removes an item from localStorage
     * @param {string} key - The key of the item to remove
     */
    static removeItem(key) {
        localStorage.removeItem(key);
    }

    /**
     * Clears all localStorage data
     */
    static clear() {
        localStorage.clear();
    }
}

// Example usage:
// LocalStorageUtil.setItem("user", { name: "Alice" }, 3600000); // 1 hour
// console.log(LocalStorageUtil.getItem("user")); // Get item before expiry
// LocalStorageUtil.removeItem("user"); // Remove manually
// LocalStorageUtil.clear(); // Clear all local storage

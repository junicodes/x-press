

export const Storage = {

    setItem: (itemKey, itemValue) => {
      if (typeof itemValue === "object") {
        itemValue = JSON.stringify(itemValue);
      }
      localStorage.setItem(itemKey, itemValue);
    },
  
    appendItem: (itemKey, itemValue) => {
      let initialItemValue = localStorage.getItem(itemKey);
      if (!initialItemValue) {
        initialItemValue = JSON.stringify([]);
        localStorage.setItem(itemKey, initialItemValue);
      }
  
      try {
        initialItemValue = JSON.parse(initialItemValue);

        let finalItemValue;

        if (Array.isArray(initialItemValue)) {

          initialItemValue.push(itemValue);

          finalItemValue = JSON.stringify(initialItemValue);
        
        } else return initialItemValue;

        localStorage.setItem(itemKey, finalItemValue);

      } catch (err) {
        return initialItemValue;
      }
    },
  
    subtractItem: (itemKey, itemValue) => {
      let initialItemValue = localStorage.getItem(itemKey);
      if (!initialItemValue) return;
  
      try {
        initialItemValue = JSON.parse(initialItemValue);
        let finalItemValue;
        if (Array.isArray(initialItemValue)) {
          // Filter out the item to subtract from array and return the remaining values
          const filteredValues = initialItemValue.filter((val) => val.tab !== itemValue.tab);
  
          if (!filteredValues) filteredValues = [];
  
          finalItemValue = JSON.stringify(filteredValues);
        } else return initialItemValue;
        localStorage.setItem(itemKey, finalItemValue);
      } catch (err) {
        return initialItemValue;
      }
    },
  
    getItem: (itemKey) => {
      const itemValue = localStorage.getItem(itemKey);
      if (!itemValue) return;
  
      try {
        return JSON.parse(itemValue);
      } catch (err) {
        return itemValue;
      }
    },
  
    removeItem: (itemKey) => {
      localStorage.removeItem(itemKey);
    },

    clearItem: () => {
      localStorage.clear();
    },
    
  };
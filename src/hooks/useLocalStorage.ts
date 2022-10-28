const useLocalStorage = () => {
  const getStorageItem = (itemName: string) => {
    localStorage.getItem(itemName);
  };

  const setStorageItem = (itemName: string, value: string) => {
    localStorage.setItem(itemName, value);
  };

  return { getStorageItem, setStorageItem };
};

export default useLocalStorage;

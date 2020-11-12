const LocalStorageKey = "YalantisTestTaskStore";

type StorageState = {
    selected: string[];
};

export const accessStorage = (): StorageState | undefined => {
    try {
        const serializedState = localStorage.getItem(LocalStorageKey);

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.log("Could not load local storage state", err);

        return undefined;
    }
};

export const writeToStorage = (data: { [key: string]: any }) => {
    try {
        localStorage.setItem(LocalStorageKey, JSON.stringify(data));
    } catch (err) {
        console.log("Could not write to storage", err);
    }
};

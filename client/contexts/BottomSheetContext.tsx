// BottomSheetContext.tsx
import React, { createContext, useContext, useState } from "react";

type BottomSheetContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
type BottomSheetProviderProps = {
    children: React.ReactNode;
};

const BottomSheetContext = createContext<BottomSheetContextType>({
    isOpen: false,
    setIsOpen: () => {},
});

export const useBottomSheetContext = () => useContext(BottomSheetContext);

export const BottomSheetProvider: React.FC<BottomSheetProviderProps> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BottomSheetContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </BottomSheetContext.Provider>
    );
};

export default BottomSheetContext;

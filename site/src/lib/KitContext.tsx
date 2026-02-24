'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ArsenalItem } from '@/data/arsenal';

interface KitItem extends ArsenalItem {
    quantity: number;
}

interface KitContextType {
    items: KitItem[];
    addItem: (item: ArsenalItem) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearKit: () => void;
    totalItems: number;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const KitContext = createContext<KitContextType | undefined>(undefined);

export function KitProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<KitItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((item: ArsenalItem) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });

        // Flash the sidebar open briefly
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 2000);
    }, []);

    const removeItem = useCallback((itemId: string) => {
        setItems((prev) => prev.filter((i) => i.id !== itemId));
    }, []);

    const updateQuantity = useCallback((itemId: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(itemId);
            return;
        }
        setItems((prev) =>
            prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
        );
    }, [removeItem]);

    const clearKit = useCallback(() => {
        setItems([]);
    }, []);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <KitContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearKit,
                totalItems,
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </KitContext.Provider>
    );
}

export function useKit() {
    const context = useContext(KitContext);
    if (context === undefined) {
        throw new Error('useKit must be used within a KitProvider');
    }
    return context;
}

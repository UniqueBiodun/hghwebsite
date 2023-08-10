import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

interface SidebarProviderProps {
	children: ReactNode; // Specify the type for 'children'
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const contextValue: SidebarContextProps = {
		isOpen,
		toggleSidebar,
	};

	return (
		<SidebarContext.Provider value={contextValue}>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebar = (): SidebarContextProps => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};

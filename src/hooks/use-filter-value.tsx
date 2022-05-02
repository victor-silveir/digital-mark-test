import React, {
	createContext,
	ReactNode,
	useContext,
	useMemo,
	useState,
} from 'react';

export type FilterContextData = {
	filterValue: string;
	setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};
export type FilterValueProviderParams = {
	children: ReactNode;
};

const FilterValueContext = createContext<FilterContextData>(
	{} as FilterContextData
);
function FilterValueProvider({
	children,
}: FilterValueProviderParams): JSX.Element {
	const [filterValue, setFilterValue] = useState('');
	const value = useMemo(
		() => ({
			filterValue,
			setFilterValue,
		}),
		[filterValue]
	);
	return (
		<FilterValueContext.Provider value={value}>
			{children}
		</FilterValueContext.Provider>
	);
}

const useFilterValue = (): FilterContextData => useContext(FilterValueContext);

export { FilterValueProvider, useFilterValue };

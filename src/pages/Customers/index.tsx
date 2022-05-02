import { useEffect, useState } from 'react';
import Table, { ColumnProps } from '../../components/Table';
import { useFilterValue } from '../../hooks/use-filter-value';
import { Customers } from '../../models/Customer';
import customersDB from '../../services/api';

function CustomersPage(): JSX.Element {
	const [customersData, setCustomersData] = useState([]);
	const { filterValue } = useFilterValue();

	const cols: ColumnProps[] = [
		{ title: 'id', fieldName: 'id', width: '5rem' },
		{ title: 'Nome de usuário', fieldName: 'username', width: '20rem' },
		{ title: 'E-mail', fieldName: 'email', width: '20rem' },
		{ title: 'Telefone', fieldName: 'phone', width: '20rem' },
		{ title: 'Categoria da Empresa', fieldName: 'company.bs', width: '30rem' },
	];

	const fetchData = async (filter: string): Promise<void> => {
		const customers: Customers[] = [];
		const response = await customersDB.get('customers');

		response.data.forEach((data: Customers) => {
			if (data.username.includes(filter) || data.company.bs.includes(filter)) {
				customers.push(data);
			}
		});
		setCustomersData(customers.length > 0 ? customers : response.data);
	};

	useEffect(() => {
		fetchData(filterValue);
	}, [filterValue]);
	return <Table cols={cols} items={customersData} />;
}

export default CustomersPage;

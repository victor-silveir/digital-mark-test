import * as S from './styles';

export interface TableItem {
	id: string | number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type ColumnProps = {
	title: string;
	fieldName: string;
	width?: string;
};

export type TableProps<T> = {
	cols: ColumnProps[];
	items: T[];
};

function Table<T extends TableItem>({
	cols,
	items,
	...props
}: TableProps<T>): JSX.Element {
	const renderRow = (item: T): JSX.Element => (
		<tr role="row" key={item.id}>
			{cols.map((col) => (
				<td role="gridcell" key={col.fieldName}>
					{col.fieldName.indexOf('.') !== -1
						? col.fieldName.split('.').reduce((x, y) => item[x][y])
						: item[col.fieldName]}
				</td>
			))}
		</tr>
	);

	return (
		<S.Wrapper>
			<S.Table role="grid" {...props}>
				<thead>
					<tr>
						{cols.map((col) => (
							<S.Th key={col.fieldName} role="columnheader" width={col.width}>
								{col.title}
							</S.Th>
						))}
					</tr>
				</thead>
				<tbody>{items.map((item) => renderRow(item))}</tbody>
			</S.Table>
		</S.Wrapper>
	);
}

export default Table;

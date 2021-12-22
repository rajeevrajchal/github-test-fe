import DataTable from "react-data-table-component";
import { Link, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface TableProps {
	data: any;
	loading: boolean;
	onChangeRowsPerPage: any;
	onChangePage: any;
}
const Table = (props: TableProps) => {
	const { data, loading } = props;

	const columns: any = [
		{
			name: "Name",
			cell: (row: any) => {
				return (
					<Link href={row.repo_url} isExternal>
						{row.full_name} <ExternalLinkIcon mx="2px" />
					</Link>
				);
			},
			maxWidth: 200,
		},
		{
			name: "Owner",
			maxWidth: 200,
			cell: (row: any) => {
				return (
					<Link href={row.owner_url} isExternal>
						{row.owner} <ExternalLinkIcon mx="2px" />
					</Link>
				);
			},
		},
		{
			name: "Issues",
			cell: (row: any) => {
				return (
					<Badge variant="subtle" colorScheme="red">
						Has Issue
					</Badge>
				);
			},
		},
		{
			name: "Issues Count",
			selector: "issues",
		},
		{
			name: "Branch",
			cell: (row: any) => {
				return (
					<Badge variant="subtle" colorScheme="purple">
						{row.default_branch}
					</Badge>
				);
			},
		},
	];
	return (
		<DataTable
			columns={columns}
			data={data}
			responsive
			striped
			pointerOnHover
			highlightOnHover
			persistTableHead
			pagination
			progressPending={loading}
			paginationTotalRows={1000}
			paginationPerPage={25}
			onChangeRowsPerPage={props.onChangeRowsPerPage}
			onChangePage={props.onChangePage}
		/>
	);
};

export default Table;

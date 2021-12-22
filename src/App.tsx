import { Stack, Button, Container, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Search from "./components/search";
import Table from "./components/table";
import { useAppData } from "./context/useAppData";

const App = () => {
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const {
		repos: { getRepos, repos },
	} = useAppData();
	const handleChange = (value: string) => {
		setSearch(value);
	};
	const handleFind = (newPerPage?: number, page?: number) => {
		setLoading(true);
		getRepos(search, newPerPage || 25, page || 1)
			.then(() => setLoading(false))
			.catch(() => setLoading(false));
	};

	const handlePageChange = (page: number) => {
		handleFind(25, page);
	};

	const handlePerRowsChange = async (newPerPage: number, page: number) => {
		handleFind(newPerPage, page);
	};

	console.log("the repo", {
		repos,
	});

	useEffect(() => {
		handleFind();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container maxW="container.lg">
			<Stack direction="row">
				<Search search={search} onChange={handleChange} />
				<Button colorScheme="blue" onClick={() => handleFind()}>
					Find
				</Button>
			</Stack>
			<Box>
				<Table
					data={repos || []}
					loading={loading}
					onChangeRowsPerPage={handlePerRowsChange}
					onChangePage={handlePageChange}
				/>
			</Box>
		</Container>
	);
};

export default App;

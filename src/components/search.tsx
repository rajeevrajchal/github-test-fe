import { Input } from "@chakra-ui/react";

interface SearchProps {
	search: string;
	onChange: (val: string) => void;
}
const Search = (props: SearchProps) => {
	const { onChange, search } = props;
	return (
		<Input
			placeholder="Search"
			size="md"
			name="search"
			value={search}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				onChange(e.target.value)
			}
		/>
	);
};

export default Search;

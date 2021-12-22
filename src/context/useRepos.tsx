import { useState } from "react";
import { toast } from "react-toastify";
import { callAxios } from "../plugins/axios.plugin";

const useRepo = () => {
	// states
	const [repos, setRepos] = useState<any>([]);

	// functions
	const getRepos = async (search: string, perPage: number, page: number) => {
		const response = await callAxios({
			url: `repositories?q=${search}&per_page=${perPage || 25}&page=${
				page || 1
			}`,
			method: "GET",
		});
		if (response && response.status === "success") {
			setRepos([...response.repositories]);
		} else {
			toast.error("Fetching repos failed");
		}
	};

	return {
		repos,
		getRepos,
	};
};

export default useRepo;

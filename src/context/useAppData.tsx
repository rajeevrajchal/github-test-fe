import { useContext, createContext } from "react";
import useRepo from "./useRepos";

const appDataContext = createContext<any>({});
const { Provider } = appDataContext;

// setting up the state (reducers)
const useAppDataProvider = () => {
	const repos = useRepo();
	return {
		repos,
	};
};

// setup provider
export const AppDataProvider = ({ children }: any) => {
	const data = useAppDataProvider();
	return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);

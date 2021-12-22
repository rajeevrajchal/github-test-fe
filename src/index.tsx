import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { AppDataProvider } from "./context/useAppData";

const app = (
	<React.StrictMode>
		<AppDataProvider>
			<ChakraProvider resetCSS={true}>
				<App />
			</ChakraProvider>
		</AppDataProvider>
	</React.StrictMode>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

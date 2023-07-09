import { useState } from "react";
import "./App.css";
import { roleList, championList } from "./constants";

function App() {
	const [roles, setRoles] = useState<string[]>(roleList);
	const [champions, setChampions] = useState<string[]>(championList);

	const getRandomChamp = (): string => {
		const randomChampion =
			champions[Math.floor(Math.random() * champions.length)];

		setChampions(champions.filter((x) => x !== randomChampion));
		console.log("Random champion", randomChampion);
		return randomChampion;
	};

	return (
		<>
			<button onClick={getRandomChamp}>Random Champion</button>
		</>
	);
}

export default App;

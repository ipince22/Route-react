const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "A New Hope",
					background: "white",
					initial: "white"
				},
				{
					title: "The Empire Strikes Back",
					background: "white",
					initial: "white"
				},
				{
					title: " Return of the Jedi",
					background: "white",
					initial: "white"
				},
				{
					title: "The Phantom Menace",
					background: "white",
					initial: "white"
				},
				{
					title: "Attack of the Clones",
					background: "white",
					initial: "white"
				},
				{
					title: "Revenge of the Sith",
					background: "white",
					initial: "white"
				},
				{
					title: "The Force Awakens",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

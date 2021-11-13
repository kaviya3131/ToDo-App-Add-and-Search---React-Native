import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
//default list data
const DATA = [
	"Milk", "Coffee", "Oranges", "Bread"
];

const Item = ({ title }) => {
	return (
		<View style={styles.item}>
			<Text>{title}</Text>
		</View>
	);
};

const renderItem = ({ item }) => <Item title={item} />;

class Search extends Component {
	//initializing the state using constructor
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: DATA,
			error: null,
			searchValue: "",
			Holder: '',
		};
		this.arrayholder = DATA;

	}
	//search function to search items in the list
	searchFunction = (text) => {
		this.setState({ Holder: text })
		const updatedData = this.arrayholder.filter((item) => {
			const item_data = `${item.toUpperCase()})`;
			const text_data = text.toUpperCase();
			return item_data.indexOf(text_data) > -1;
		});
		this.setState({ data: updatedData, searchValue: text });

	};
	//Add function to add items to array 
	AddFunction = () => {

		//Adding Items To Array.
		DATA.push(this.state.Holder.toString());
		this.setState({ data: DATA });
		console.log(DATA)
		this.setState({ searchValue: '' })

	}
	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<TextInput
						style={styles.TextInput}
						placeholder="Search "
						lightTheme
						round
						value={this.state.searchValue}
						onChangeText={(Text) => this.searchFunction(Text)}
						autoCorrect={false}
					/>
					<TouchableOpacity onPress={this.AddFunction}>
						<View style={styles.Wrapper}>
							<Text style={styles.aText}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
				<FlatList
					data={this.state.data}
					renderItem={renderItem}
					keyExtractor={(item) => item}
				/>
			</View>
		);
	}
}
//styling the components
const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 2,
	},
	item: {
		marginTop: 2,
		backgroundColor: '#FFF',
		padding: 20,
		width: 400,
	},
	Wrapper: {
		width: 50,
		height: 60,
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'black',
		borderWidth: 1,
	},
	TextInput: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#FFF',
		borderColor: 'black',
		borderWidth: 1,
		width: 330,
		marginBottom: 30,
	},
	aText: {
		fontSize: 23,
	}
});
export default Search;



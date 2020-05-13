import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Card, Button, Avatar, ListItem } from 'react-native-elements';

class Tutor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { url, name, price } = this.props
		return (
			// <TouchableOpacity>
			<Card containerStyle={styles.cardContainer} >
				<View style={styles.veiwContainer}>
					<View style={styles.avatarContainer}>
						<Avatar
							rounded
							source={{ uri: url }}
							avatarStyle={styles.avatar}
							containerStyle={styles.avatarImageContainer}
						/>
					</View>
					<View style={styles.textContainer}>
						<View style={styles.name}>
							<Text>{name}</Text>
						</View>
						<View style={styles.details}>
							<View>
								<Text style={styles.pricing}>Rate/Hr</Text>
								<Text style={styles.numbers}>{price}</Text>
							</View>
							<View style={styles.sessions}>
								<Text style={styles.pricing}>Sessions</Text>
								<Text style={styles.numbers}>0</Text>
							</View>
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							buttonStyle={styles.button}
							titleStyle={styles.buttonTitle}
							// containerStyle={styles.buttonContainer}
							title="Chat"
						/>
					</View>
				</View>
			</Card>
			// {/* </TouchableOpacity> */ }
		)
	}
}

const styles = {
	veiwContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'center',
		flexWrap: 'wrap'
	},
	button: {
		backgroundColor: '#7DDC72',
		borderRadius: 15,
		height: 25,
		width: 70,
		marginTop: 10
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	buttonTitle: {
		fontSize: 13,
		marginBottom: 0,
		position: 'absolute'
		// paddingBottom: 4
	},
	buttonContainer: {
		flex: 2,
		// flexDirection: 'column',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	avatar: {
		height: 50,
		width: 50,
	},
	avatarContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
		marginLeft: 10,
		justifyContent: 'center',
	},
	avatarImageContainer: {
		marginTop: 10
	},
	textContainer: {
		flex: 4,
		height: 50,
		marginLeft: 5,
		flexWrap: 'wrap'
	},
	name: {
		flex: 1,
		height: 50,
		// alignItems: 'center',
		justifyContent: 'center',
	},
	details: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
		// flexWrap: 'wrap',
		// marginLeft: 10
	},
	pricing: {
		color: '#E47C41'
	},
	numbers: {
		color: '#C4C4C4'
	},
	sessions: {
		marginLeft: 20
	},
	cardContainer: {
		flex: 1,
		borderRadius: 15,
		width: 300,
		marginLeft: 38,
		height: 80,
		// width: 200,
		// flexDirection: 'row',
		// flexWrap: 'wrap',
		// justifyContent: 'space-around',
		padding: 0
	}
}

export default Tutor;
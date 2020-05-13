import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Tutor from './Tutor';

export default function Landing() {
	return (
		<View style={styles.page}>
			<View style={styles.header}>
				<Image
					style={styles.image}
					source={require('../../Resources/Finder.jpg')}
				/>
				< Text style={styles.text} > Find tutors or students who have</Text>
				<Text style={styles.text2}>taken your exact class</Text>
			</View>
			<View style={styles.body}>
				<SafeAreaView style={styles.safeArea}>
					<ScrollView>
						<Tutor
							url={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
							price={'$25.00'}
							name={'Steven'}
						/>
						<Tutor
							url={'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2455583/910/1364/m2/fpnw/wm0/curlyhair-headshot-.jpg?1490464361&s=47cd09d7370a3687249ebc3dbffe3a99'}
							price={'$50.00'}
							name={'Vanessa'}
						/>
						<Tutor
							url={'https://www.leisureopportunities.co.uk/images/995586_746594.jpg'}
							price={'$60.00'}
							name={'Vincent'}
						/>
						<Tutor
							url={'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'}
							price={'$40.00'}
							name={'Karen'}
						/>
					</ScrollView>
				</SafeAreaView>
			</View>
			<View style={styles.footer}>
				<Button
					buttonStyle={styles.button}
					title="Sign Up"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	header: {
		flex: 3,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'flex-start',
		top: 50
	},
	body: {
		flex: 2.5,
	},
	footer: {
		flex: 1,
		marginTop: 20
	},
	text: {
		color: '#FFFFFF',
		fontSize: 16,
	},
	text2: {
		color: '#FFFFFF',
		fontSize: 16,
		marginTop: 10
	},
	safeArea: {
		flex: 1
	},
	image: {
		width: 140,
		height: 140,
	},
	button: {
		backgroundColor: '#7DDC72',
		borderRadius: 30,
		width: 300,
		marginLeft: 38,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

import React from 'react';
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import Landing from '../Onboarding/Landing';
import Profile from '../Onboarding/Profile';
import SignUp from '../Onboarding/Sign Up';

class AppNavigator extends React.Component {

	render() {
		return (
			<Swiper
				style={styles.wrapper}
				showsButtons={true}
				loop={false}
				activeDot={<View style={styles.activeDot} />}
			>
				<View showsPagination={false} testID="Landing" style={styles.slide1}>
					<Landing />
				</View>
				<View testID="Sign Up" style={styles.slide2}>
					<SignUp />
				</View>
				<View testID="Profile" style={styles.slide3}>
					<Profile />
				</View>
			</Swiper>
		)
	}
}

const styles = {
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3EF09F'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6AA1F8',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#B070F1'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 12,
		fontWeight: 'regular'
	},
	activeDot: {
		backgroundColor: '#FFFFFF',
		width: 8,
		height: 8,
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	}
}

export default AppNavigator
import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/scaling';
import {getFontFamily} from '../../../../assets/fonts/helper';

const style = StyleSheet.create({
  loginContainer: {
    paddingTop: 10,
  },
  keyboardContainer: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  topNavigatorContainer: {
    flex: 0.65,
  },
  buttonLoginContainer: {
    marginTop: 20,
  },
  buttonRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  emailTabContainer: {
    borderRadius: 25,
    paddingVertical: 8,
    justifyContent: 'center',
    marginLeft: 25,
  },
  emailTabText: {
    textAlign: 'center',
  },
  phoneTabContainer: {
    borderRadius: 25,
    paddingVertical: 8,
    justifyContent: 'center',
    marginRight: 25,
  },
  phoneTabText: {
    textAlign: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    color: '#FF0000',
    marginLeft: horizontalScale(30),
    marginBottom: verticalScale(20),
  },
});

export default style;

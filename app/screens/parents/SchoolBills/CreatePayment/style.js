import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../../assets/styles/scaling';
import {getFontFamily} from '../../../../../assets/fonts/helper';

const style = StyleSheet.create({
  cardContainer: {
    marginTop: verticalScale(10),
  },
  buttonContainer: {
    marginVertical: verticalScale(10),
  },
  error: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    color: '#FF0000',
    marginLeft: horizontalScale(5),
    marginBottom: verticalScale(20),
  },
});

export default style;

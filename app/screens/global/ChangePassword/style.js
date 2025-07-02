import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/scaling';
import {getFontFamily} from '../../../../assets/fonts/helper';

const style = StyleSheet.create({
  error: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    color: '#FF0000',
    marginLeft: horizontalScale(20),
    marginVertical: verticalScale(10),
  },
});

export default style;

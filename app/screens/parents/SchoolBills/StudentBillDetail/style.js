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
});

export default style;

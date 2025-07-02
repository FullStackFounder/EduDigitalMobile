import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../../../assets/styles/scaling';

const style = StyleSheet.create({
  cardContainer: {
    marginVertical: verticalScale(20),
  },
  title: {
    marginLeft: horizontalScale(10),
  },
  subtitle: {
    marginLeft: horizontalScale(10),
  },
});

export default style;

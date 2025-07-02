import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  studentRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: verticalScale(8),
    borderRadius: horizontalScale(10),
  },
  studentNameContainer: {
    flex: 1,
    marginLeft: horizontalScale(10),
  },
});

export default style;

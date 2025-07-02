import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../../../assets/styles/scaling';

const style = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(10),
    borderRadius: 10,
    backgroundColor: '#F6F5F5',
    padding: 10,
  },
  rowContainerSelected: {
    backgroundColor: '#96C9F4',
  },
  bgImage: {
    backgroundColor: '#F6F5F5',
  },
  bgImageSelected: {
    backgroundColor: '#96C9F4',
  },
  bankNameContainer: {
    flex: 1,
    marginLeft: horizontalScale(2),
  },
});

export default style;

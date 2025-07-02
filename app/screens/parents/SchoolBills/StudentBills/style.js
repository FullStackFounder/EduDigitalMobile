import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../../assets/styles/scaling';
import {getFontFamily} from '../../../../../assets/fonts/helper';

const style = StyleSheet.create({
  scrollViewContainer: {
    marginTop: verticalScale(10),
  },
  studentBillContainer: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: horizontalScale(15),
    borderTopLeftRadius: horizontalScale(15),
    borderBottomLeftRadius: horizontalScale(5),
    borderBottomRightRadius: horizontalScale(5),
    marginTop: verticalScale(20),
  },
  academicYearText: {
    flex: 1,
    marginLeft: horizontalScale(10),
  },
  academicYearContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  academicYearAppBar: {
    marginTop: 10,
  },
  academicYearSearchContainer: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputSearch: {
    flex: 1,
    marginLeft: 10,
  },
  studentBillItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    marginTop: 8,
    borderRadius: 10,
  },
  studentBillInformation: {
    flex: 1,
    marginLeft: 10,
  },
  studentBillNominal: {
    marginTop: 5,
  },
  studentBillButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  studentBillIcon: {
    marginLeft: 8,
  },
  filterButtonContainer: {
    marginTop: verticalScale(20),
    position: 'absolute',
    bottom: verticalScale(20),
    alignSelf: 'center',
  },
  filterButton: {
    position: 'absolute',
    bottom: 0,
  },
  error: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    color: '#FF0000',
    marginLeft: horizontalScale(30),
    marginBottom: verticalScale(20),
  },
  loadingIndicatorContainer: {},
});

export default style;

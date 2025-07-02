import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from './color';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  area: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: Colors.active,
    fontFamily: 'GoogleSans-Bold',
  },
  apptitle: {
    fontSize: 24,
    color: Colors.active,
    fontFamily: 'GoogleSans-Bold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'GoogleSans-Bold',
    color: Colors.active,
  },
  r12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Regular',
  },
  m12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Medium',
  },
  b12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Bold',
  },
  r14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Regular',
  },
  m14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Medium',
  },
  b14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Bold',
  },
  r16: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Regular',
  },
  m16: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Medium',
  },
  b16: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Bold',
  },
  r18: {
    fontSize: 18,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Regular',
  },
  m18: {
    fontSize: 18,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Medium',
  },
  b18: {
    fontSize: 18,
    color: Colors.disable,
    fontFamily: 'GoogleSans-Bold',
  },
  btn: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    width: width / 1.8,
    alignSelf: 'center',
  },
  btntxt: {
    fontSize: 16,
    color: Colors.secondary,
    fontFamily: 'GoogleSans-Bold',
  },
  indicator: {
    borderColor: '#777E90',
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    // backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },

  shadow: {
    shadowColor: Colors.active,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: Colors.secondary,
  },

  txtinput: {
    paddingHorizontal: 20,
    color: Colors.disable,
    height: 90,
    borderRadius: 15,
    // borderWidth:1,
  },

  radio: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    borderColor: Colors.bord,
    color: Colors.disable,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },

  divider1: {
    height: 1.5,
    backgroundColor: Colors.border,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },

  dividertxt: {
    color: Colors.disable,
    fontFamily: 'GoogleSans-Regular',
  },

  btn1: {
    alignItems: 'center',
    // paddingVertical:15,
    borderRadius: 27,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
  },
  btntxt1: {
    fontSize: 16,
    color: Colors.active,
    paddingLeft: 15,
    fontFamily: 'GoogleSans-Regular',
  },

  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 50,
    // flex: 1
  },

  verticaldivider: {
    height: '60%',
    width: 1,
  },

  modalcontainer: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 140,
    paddingTop: 20,
    marginHorizontal: -10,
    alignSelf: 'center',
  },
  btnoutline: {
    borderColor: Colors.bord,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 55,
    width: width / 4.5,
  },

  b3: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  follow: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  following: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  categoryTextSelected: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: Colors.disable,
    borderColor: Colors.primary,
    color: Colors.active,
    fontFamily: 'GoogleSans-Regular',
  },
  categoryText: {
    fontSize: 14,
    color: Colors.active,
    borderWidth: 2,
    borderColor: Colors.active,
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 7,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    fontFamily: 'GoogleSans-Regular',
  },
  categorycontainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  ctext: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.active,
  },
  cts: {
    // backgroundColor:Colors.secondary,
    borderColor: Colors.active,
    color: Colors.active,
  },
  r: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 5,
    marginRight: 5,
  },
  rt: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: Colors.disable,
  },
  disableButton: {
    opacity: 0.7,
  },
});

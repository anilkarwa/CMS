import {StyleSheet} from 'react-native';
import {Size, Spacing, Typography} from '../../../utility/responsiveUi';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: Size.SIZE_60,
    backgroundColor: '#196d87',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: 'Zen Kurenaido, sans-serif',
    fontWeight: '500',
  },
  body: {
    paddingVertical: Spacing.SCALE_10,
  },
  bodyHeaderText: {
    fontSize: Typography.FONT_SIZE_30,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Zen Kurenaido, sans-serif',
  },
  input: {
    paddingTop: Spacing.SCALE_30,
  },
  btnWrapper: {
    alignItems: 'center',
    height: Spacing.SCALE_36,
    marginTop: Spacing.SCALE_30,
  },
  btn: {
    backgroundColor: '#196d87',
  },
  bodyHeader: {
    backgroundColor: '#b2dcea',
    width: '100%',
  },
  txtWrapper: {
    marginTop: Spacing.SCALE_18,
    paddingHorizontal: Spacing.SCALE_25,
  },
  txt: {
    color: 'black',
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: '500',
    marginBottom: 15,
  },
  txt1: {
    color: '#196d87',
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: '500',
    marginLeft: Spacing.SCALE_20,
  },
  inputWrapper: {
    paddingHorizontal: Spacing.SCALE_25,
  },
  detailsStyle: {
    paddingHorizontal: Spacing.SCALE_25,
    marginTop: Spacing.SCALE_40,
    justifyContent: 'center',
  },
  touchableStyle: {
    height: Size.SIZE_40,
    backgroundColor: '#196d87',
    paddingHorizontal: Spacing.SCALE_25,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txt2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: Typography.FONT_SIZE_25,
  },
  txt3: {
    color: 'black',
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: '500',
    paddingHorizontal: Spacing.SCALE_25,
    marginTop: Spacing.SCALE_30,
    marginBottom: Spacing.SCALE_20,
  },
});

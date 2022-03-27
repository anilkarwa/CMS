import {StyleSheet} from 'react-native';
import {Size, Spacing, Typography} from '../../utility/responsiveUi';

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
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: 'Zen Kurenaido, sans-serif',
    fontWeight: '500',
  },
  syncBtn: {
    alignSelf: 'flex-end',
    padding: 10,
    marginHorizontal: 50,
    backgroundColor: '#2c7993',
    width: 170,
    marginTop: 30,
    borderRadius: 100,
  },
  syncBtnText: {
    fontSize: Typography.FONT_SIZE_16,
    color: 'white',
  },
  btns: {
    flex: 1,
    marginTop: 120,
  },
  btn: {
    padding: 10,
    marginHorizontal: 50,
    backgroundColor: '#2c7993',
    minWidth: 200,
    marginVertical: 20,
    borderRadius: 100,
  },
});

import {StyleSheet} from 'react-native';
import {mainColor, white} from '../../constants/Colors';
import {LatoBold, LatoRegular} from '../../constants/Fonts';
import {Height, Width} from '../../constants/FontSizes';

const appStyles = StyleSheet.create({
  flex1: {flex: 1},
  text_warning: {color: mainColor},
  es_image: {
    position: 'absolute',
    bottom: Height / 4.5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  es_bg_image: {
    flex: 1,
    justifyContent: 'center',
  },
  es_title: {
    position: 'absolute',
    bottom: Height / 5.5,
    justifyContent: 'center',
    alignSelf: 'center',
    color: white,
    fontFamily: LatoRegular,
  },
  es_button: {
    backgroundColor: mainColor,
    height: 60,
    borderRadius: 7,
    justifyContent: 'center',
    position: 'absolute',
    bottom: Height / 12,
    width: Width,
    alignSelf: 'center',
  },
  es_button_text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: LatoBold,
    color: white,
  },
  es_bottom_text: {
    position: 'absolute',
    bottom: Height / 20,
    alignSelf: 'center',
    color: white,
  },
});

export default appStyles;

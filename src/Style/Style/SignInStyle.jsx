import {StyleSheet} from 'react-native';
import {black} from '../../constants/Colors';
import {LatoBold} from '../../constants/Fonts';

const SignInStyle = StyleSheet.create({
  icon_header: {
    color: black,
    fontFamily: LatoBold,
    marginTop: 10,
  },
  header: {
    color: black,
    fontFamily: LatoBold,
    fontSize: 30,
    marginTop: 10,
  },
  mt_15: {
    marginTop: 15,
  },
  rememberme_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberme_ccheckbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rememberme_text: {
    fontSize: 16,
    fontFamily: LatoBold,
    fontWeight: 'bold',
    marginLeft: 5,
    color: black,
  },
  forgetPassword: {
    textAlign: 'right',
    fontSize: 16,
    marginTop: 10,
    fontFamily: LatoBold,
    fontWeight: 'bold',
    color: black,
  },
  btnview: {
    marginTop: 20,
    justifyContent: 'center',
  },
  socialText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '500',
  },
  fbSocialLogin: {
    width: 'auto',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    backgroundColor: '#3B599C',
  },
  ggSocialLogin: {
    width: 'auto',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    backgroundColor: '#DE422F',
  },
  button: {
    width: 'auto',
    height: 60,
    backgroundColor: '#FDAE00',
    justifyContent: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: 7,
  },
  signUpText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  logInBox: {
    position: 'relative',
    top: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  loginText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  login: {
    color: '#FDAE00',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
    fontFamily: 'Lato-Bold',
  },
});
export default SignInStyle;

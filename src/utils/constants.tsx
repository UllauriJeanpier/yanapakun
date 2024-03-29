import { Dimensions } from 'react-native'

export enum COLORS {
  PRIMARY='#216D3F',
  SECONDARY= '#0C4724',
  BG_GRAY= '#8F9290',
  TEXT_COLOR='#3A413D',
  TEXT_EMERGENCY= '#E30027'
}

export const FONTS_TO_LOAD = {
  ProximaNovaRegular: require('../../assets/fonts/ProximaNovaRegular.otf'),
  ProximaNovaThin: require('../../assets/fonts/ProximaNovaThin.otf'),
  ProximaNovaExtrabold: require('../../assets/fonts/ProximaNovaExtrabold.otf'),
  ProximaNovaBold: require('../../assets/fonts/ProximaNovaBold.otf'),
  ProximaNovaBlack: require('../../assets/fonts/ProximaNovaBlack.otf'),
  ProximaNovaAltThin: require('../../assets/fonts/ProximaNovaAltThin.otf'),
  ProximaNovaAltLight: require('../../assets/fonts/ProximaNovaAltLight.otf'),
  ProximaNovaAltBold: require('../../assets/fonts/ProximaNovaAltBold.otf')
}

export enum FONTS {
  ProximaNovaRegular= 'ProximaNovaRegular',
  ProximaNovaThin= 'ProximaNovaThin',
  ProximaNovaExtrabold= 'ProximaNovaExtrabold',
  ProximaNovaBold= 'ProximaNovaBold',
  ProximaNovaBlack= 'ProximaNovaBlack',
  ProximaNovaAltThin= 'ProximaNovaAltThin',
  ProximaNovaAltLight='ProximaNovaAltLight',
  ProximaNovaAltBold= 'ProximaNovaAltBold'
}

export enum SCREEN {
  width= Dimensions.get('window').width,
  height=Dimensions.get('window').height
}

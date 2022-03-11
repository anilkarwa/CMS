import {Dimensions, Platform, StatusBar} from 'react-native';
import {scaleSize} from './mixins'

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export const HEADER_HEIGHT = Platform.OS === 'android' ? 50 : 40;

export const IS_BIG = HEIGHT > 812;

export const TOP = 
Platform.OS === 'android' 
        ? StatusBar.currentHeight || 0
        : HEIGHT >= 812
        ? 44
        : 20;

export {scaleSize};

export const SIZE_1 = scaleSize(1);
export const SIZE_2 = scaleSize(2);
export const SIZE_5 = scaleSize(5);
export const SIZE_8 = scaleSize(8);
export const SIZE_9 = scaleSize(9);
export const SIZE_10 = scaleSize(10);
export const SIZE_11 = scaleSize(11);
export const SIZE_13 = scaleSize(13);
export const SIZE_14 = scaleSize(14);
export const SIZE_15 = scaleSize(15);
export const SIZE_16 = scaleSize(16);
export const SIZE_17 = scaleSize(17);
export const SIZE_18 = scaleSize(18);
export const SIZE_19 = scaleSize(19);
export const SIZE_20 = scaleSize(20);
export const SIZE_21 = scaleSize(21);
export const SIZE_22 = scaleSize(22);
export const SIZE_23 = scaleSize(23);
export const SIZE_24 = scaleSize(24);
export const SIZE_25 = scaleSize(25);
export const SIZE_26 = scaleSize(26);
export const SIZE_27 = scaleSize(27);
export const SIZE_30 = scaleSize(30);
export const SIZE_35 = scaleSize(35);
export const SIZE_37 = scaleSize(37);
export const SIZE_38 = scaleSize(38);
export const SIZE_39 = scaleSize(39);
export const SIZE_40 = scaleSize(40);
export const SIZE_45 = scaleSize(45);
export const SIZE_50 = scaleSize(50);
export const SIZE_54 = scaleSize(54);
export const SIZE_58 = scaleSize(58);
export const SIZE_60 = scaleSize(60);
export const SIZE_64 = scaleSize(64);
export const SIZE_66 = scaleSize(66);
export const SIZE_74 = scaleSize(74);
export const SIZE_75 = scaleSize(75);
export const SIZE_80 = scaleSize(80);
export const SIZE_84 = scaleSize(84);
export const SIZE_88 = scaleSize(88);
export const SIZE_92 = scaleSize(92);
export const SIZE_94 = scaleSize(94);
export const SIZE_100 = scaleSize(100);
export const SIZE_120 = scaleSize(120);
export const SIZE_130 = scaleSize(130);
export const SIZE_134 = scaleSize(134);
export const SIZE_150 = scaleSize(150);
export const SIZE_153 = scaleSize(153);
export const SIZE_159 = scaleSize(159);
export const SIZE_162 = scaleSize(162);
export const SIZE_172 = scaleSize(172);
export const SIZE_200 = scaleSize(200);
export const SIZE_210 = scaleSize(210);
export const SIZE_225 = scaleSize(225);
export const SIZE_271 = scaleSize(271);
export const SIZE_325 = scaleSize(325);
export const SIZE_330 = scaleSize(330);
export const SIZE_335 = scaleSize(335);
export const SIZE_240 = scaleSize(240);
export const SIZE_345 = scaleSize(345);
export const SIZE_357 = scaleSize(357);
export const SIZE_361 = scaleSize(361);
export const SIZE_365 = scaleSize(365);
export const SIZE_375 = scaleSize(375);

import React, {useEffect, useState, forwardRef} from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {FontStyles, Sizes, Colors} from '~theme';
import TurboImage from 'react-native-turbo-image';
import {AvoidSoftInputView} from 'react-native-avoid-softinput';

var _ = require('lodash');


export const MyAvoidView = forwardRef(({children}, ref) => {
  const [keyboardVisible, setKeyboardVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(false);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(true);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <AvoidSoftInputView
      avoidOffset={keyboardVisible ? 40 : 0} // Không tránh bàn phím khi bàn phím đang hiển thị
      easing="easeIn" // Loại hiệu ứng khi bàn phím xuất hiện hoặc ẩn
      enabled={keyboardVisible} // Bật hoặc tắt tính năng tránh bàn phím
      hideAnimationDelay={0} // Thời gian trễ trước khi bắt đầu ẩn bàn phím
      hideAnimationDuration={0} // Thời gian hiệu ứng ẩn bàn phím
      showAnimationDelay={0} // Thời gian trễ trước khi bắt đầu hiển thị bàn phím
      showAnimationDuration={0} // Thời gian hiệu ứng hiển thị bàn phím
      style={{flex: 1}}>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ref={ref}>
        {children}
      </ScrollView>
    </AvoidSoftInputView>
  );
});

export const MyText = forwardRef((props, ref) => (
  <Text
    ref={ref}
    allowFontScaling={false}
    numberOfLines={props.numberOfLines}
    ellipsizeMode={props.ellipsizeMode}
    style={[
      {
        textAlign: 'left',
        fontFamily: FontStyles.InterRegular,
        fontSize: Sizes.text_subtitle2,
        color: Colors.neutrals_900 || '#000',
        fontWeight: '500',
      },
      props.style,
    ]}>
    {props.children}
  </Text>
));

export const MyTextInput = forwardRef((props, ref) => (
  <TextInput
    ref={ref}
    allowFontScaling={false}
    placeholder={typeof props.placeholder === 'string' ? props.placeholder : ''}
    value={props.value}
    placeholderTextColor={props.placeholderTextColor}
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    returnKeyType={props.returnKeyType}
    maxLength={props.maxLength}
    onSubmitEditing={props.onSubmitEditing}
    onEndEditing={props.onEndEditing}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onChangeText={props.onChangeText}
    editable={props.editable}
    multiline={props.multiline}
    onPressIn={props.onPressIn}
    numberOfLines={props.numberOfLines}
    blurOnSubmit={props.blurOnSubmit}
    style={[
      {
        textAlign: 'left',
        fontFamily: FontStyles.InterRegular,
        fontSize: Sizes.text_subtitle2,
        color: Colors.semantics_Black,
      },
      props.style,
    ]}>
    {props.children}
  </TextInput>
));


export const MyImage = forwardRef((props, ref) => {
  const {
    style,
    source,
    resizeMode = 'cover',
    onLoad,
    onError,
    ...rest
  } = props;
  return (
    <TurboImage
      ref={ref}
      style={style}
      source={source}
      resizeMode={resizeMode}
      onLoad={onLoad}
      onError={onError}
      {...rest}
    />
  );
});

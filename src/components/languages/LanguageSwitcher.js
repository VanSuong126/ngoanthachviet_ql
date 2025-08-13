import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {  useSelector } from 'react-redux';

import {Pressable, StyleSheet, View} from 'react-native';
import {
  Sizes,
  Colors,
  parseSizeHeight,
  parseSizeWidth,
} from '~theme';
import {MyText} from '~components/MyCustom';
import Icon from '~components/icons/IconSVG';
import ModalLanguage from './LanguagePopUp';
import {Languages} from './DataLanguages';
import { commonSelectors} from '~redux/reducer';

/**
 * Screen for user login
 */
export default function Index(props) {
  const {type = 'light'} = props;
  const {t} = useTranslation();
  const [visibleModalLanguage, setVisibleModalLanguage] = useState(false);

  const language = useSelector(state=>commonSelectors.selectLanguage(state));
  const [dataLanguage, setDataLanguage] = useState();
  useEffect(() => {
    const data = Languages.find(x => x.locale === language);
    setDataLanguage(data);
  }, [language]);

  return (
    <View
      style={[
        styles.container,
        type === 'dark' ? styles.containerDark : styles.containerLight,
      ]}>
      <Pressable
        style={styles.wrapLanguage}
        onPress={() => setVisibleModalLanguage(true)}>
        {dataLanguage?.country_ISO && (
          <Icon
            name={`flag${dataLanguage?.country_ISO}`}
            width={24}
            height={24}
          />
        )}
        <MyText
          style={
            type === 'dark' ? styles.textLanguageDark : styles.textLanguageLight
          }>
          {dataLanguage?.country_ISO}
        </MyText>
      </Pressable>
      <ModalLanguage
        language={language}
        isVisible={visibleModalLanguage}
        onClose={() => setVisibleModalLanguage(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    backgroundColor: Sizes.background,
  },
  containerLight: {
    marginTop: Sizes.marginHeight,
    marginRight: Sizes.marginWidth,
  },
  wrapLanguage: {
    height: parseSizeHeight(22.5),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textLanguageLight: {
    marginLeft: parseSizeWidth(5),
    fontSize: Sizes.textDefault,
    fontWeight: '600',
    color: Colors.neutrals_50,
  },
  textLanguageDark: {
    marginLeft: parseSizeWidth(5),
    fontSize: Sizes.textDefault,
    fontWeight: '600',
    color: Colors.neutrals_400,
  },
});

import React, { useContext } from 'react';
import { LanguageSwitchContainer, LanguageSwitchIcon } from './Styles';
import IntlContext from '../../intl/intl-context';

export default function LanguageSwitch(props) {
  const { language, setLanguage } = useContext(IntlContext);

  const toggleLanguage = () => {
    if (language === 'pt-BR') {
      setLanguage('en-US');
    } else {
      setLanguage('pt-BR');
    }
  };

  return (
    <LanguageSwitchContainer onClick={toggleLanguage} {...props}>
      <LanguageSwitchIcon className={'fa fa-globe-americas'} {...props} />
      {language === 'pt-BR' ? 'English' : 'Português'}
    </LanguageSwitchContainer>
  );
}

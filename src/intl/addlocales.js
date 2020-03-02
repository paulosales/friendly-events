import { addLocaleData } from "react-intl";

import enLocaleData from "react-intl/locale-data/en";
import ptBRLocaleData from "react-intl/locale-data/pt";

export const localeData = [
  enLocaleData,
  ptBRLocaleData
];

export const addAppLocaleData = () => localeData.forEach(locale => addLocaleData(locale));

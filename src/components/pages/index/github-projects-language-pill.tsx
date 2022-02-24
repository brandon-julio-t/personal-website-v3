import * as React from 'react';
import ILanguage from '../../../interfaces/language';

const GithubProjectsLanguagePill: React.FunctionComponent<
  React.ComponentProps<'div'> & { language: ILanguage }
> = ({ className, language, ...rest }) => {
  return (
    <div
      {...rest}
      className={`rounded-full bg-gray-300 bg-opacity-40 px-3 py-1 text-center ${className}`}
    >
      {language.name}
    </div>
  );
};

export default GithubProjectsLanguagePill;

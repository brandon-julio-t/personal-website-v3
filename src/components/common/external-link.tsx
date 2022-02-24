import * as React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

interface ExternalLinkProps {
  underline?: boolean;
}

const ExternalLink: React.FunctionComponent<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & ExternalLinkProps
> = ({ className, underline, ...rest }) => {
  return (
    <OutboundLink
      {...rest}
      className={`${underline ? 'underline' : ''} ${className}`}
      target='_blank'
      rel='noopener noreferrer'
    />
  );
};

export default ExternalLink;

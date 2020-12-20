import * as React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: any;
  title?: string;
}

export default function ExternalLink(props: ExternalLinkProps) {
  return <OutboundLink {...props} target="_blank" rel="noopener noreferrer" />;
}

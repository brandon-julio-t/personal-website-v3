import * as React from "react";

export default function GithubProjectsLanguagePill(props) {
  const { language } = props;

  return (
    <div className="rounded-full bg-gray-300 bg-opacity-40 text-center px-2 py-1">
      {language.name}
    </div>
  );
}

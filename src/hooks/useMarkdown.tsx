import React, { useState, useEffect } from "react";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";

import Typography from "@mui/material/Typography";

const useMarkdown = (theTextFile: string): any => {
  const [ markdown, setMarkdown ] = useState("");

  useEffect(() => {
    fetch(theTextFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  });

  const MdOverrideTypography = ({
                                  children,
                                }: // ...props
                                  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>,
                                    HTMLParagraphElement>): JSX.Element => (
    <Typography paragraph>
      {children}
    </Typography>
  );

  const mdOverrides: MarkdownToJSX.Overrides = {
    p: MdOverrideTypography,
  };

  return (
    <Markdown options={{ overrides: mdOverrides }}>
      {markdown}
    </Markdown>
  )
};

export default useMarkdown;

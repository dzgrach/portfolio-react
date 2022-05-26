import React, { useState, useEffect } from "react";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
    <Typography paragraph sx={{ width: "100%" }}>
      {children}
    </Typography>
  );

  const MdOverrideTypographyHeader2 = ({
                                         children,
                                       }: // ...props
                                         React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>,
                                           HTMLHeadingElement>): JSX.Element => (
    <Typography component="h2"
                variant="h5"
                color="inherit" sx={{ width: "100%" }}>
      {children}
    </Typography>
  );

  const MdOverrideTypographyHeader3 = ({
                                  children,
                                }: // ...props
                                  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>,
                                    HTMLHeadingElement>): JSX.Element => (
    <Typography component="h3"
                variant="h6"
                color="inherit" sx={{ width: "100%" }}>
      {children}
    </Typography>
  );

  const mdOverrides: MarkdownToJSX.Overrides = {
    p: MdOverrideTypography,
    h2: MdOverrideTypographyHeader2,
    h3: MdOverrideTypographyHeader3
  };

  const options = {
    overrides: mdOverrides,
    wrapper: ((props: any) => <Grid component="section" container xs={10} {...props} item style={{margin: "0 auto"}}/>)
  };

  return (
    <Markdown options={options}>
      {markdown}
    </Markdown>
  )
};

export default useMarkdown;

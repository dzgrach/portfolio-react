import React from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import useMarkdown from "../hooks/useMarkdown";

import summary_en from "../assets/content/summary_en.md";
import { render } from "react-dom";

const SectionTitle = (props: any) => (
  <Typography
    component="h3"
    variant="h5"
    color="inherit"
  >
    {props.title}
  </Typography>
);

const PageTitle = (props: any) => (
  <Typography
    component="h1"
    variant="h4"
    color="inherit"
  >
    {props.title}
  </Typography>
);

const About = () => {
  const { i18n } = useTranslation();
  const Summary = useMarkdown(summary_en);

  return (
    <>
      <PageTitle title={i18n.t("nav-menu.about")}/>

      <Grid component="section">
        {Summary}
      </Grid>

      <Divider/>

      <Grid component="section">
        <SectionTitle title="Education"/>
      </Grid>
    </>
  );
};

export default About;
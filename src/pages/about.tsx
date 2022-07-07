import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMarkdown from "../hooks/useMarkdown";

import summary_en from "../assets/content/summary_en.md";
import education_en from "../assets/content/education_en.md";

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
    align="center">
    {props.title}
  </Typography>
);

const About = () => {
  const { i18n } = useTranslation();
  const Summary = useMarkdown(summary_en);
  const Education = useMarkdown(education_en);

  return (
    <>
      <PageTitle title={i18n.t("nav-menu.about")}/>

      {Summary}

      <Divider/>

      {Education}
    </>
  );
};

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(About);

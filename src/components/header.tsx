import React from "react";
import { useTranslation } from "react-i18next";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const Title = (props: any) => (
  <Typography
    component="h3"
    variant="h6"
    color="inherit"
    align="center"
    noWrap
  >
    {props.title}
  </Typography>
);

const Header = (props: any) => {
  const { i18n } = useTranslation();
  const sections: any = [ {
    title: i18n.t("nav-menu.about"),
    href: "/about",
  }, {
    title: i18n.t("nav-menu.former-experience"),
    href: "/former-experience",
  }, {
    title: i18n.t("nav-menu.contacts"),
    href: "/contacts",
  } ];

  return (
    <Grid component="header">
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/*****/}
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: "auto" }}
      >
        <Title title="Dzmitry Hrachou"/>

        <div style={{marginLeft: "auto"}}/>

        {sections.map((section: any) => (
          <Link
            color="inherit"
            key={section.title}
            noWrap
            variant="body2"
            href={section.href}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Grid>
  );
};

export default Header;
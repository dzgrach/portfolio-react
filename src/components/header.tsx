import React from "react";
import { useTranslation } from "react-i18next";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Title = (props: any) => (
  <Typography
    component="h3"
    variant="h5"
    color="inherit"
    align="center"
    noWrap
    sx={{ flex: 1 }}
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
    <header>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Title title="Dzmitry Hrachou"/>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "end", overflowX: "auto" }}
      >
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
    </header>
  );
};

export default Header;
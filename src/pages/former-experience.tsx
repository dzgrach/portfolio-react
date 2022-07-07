import React from "react";
import { connect } from "react-redux";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const FormerExperience = () => (
  <>
    <Grid component="section" container xs={10}>
      3
    </Grid>

    <Divider/>

    <Grid component="section" container xs={10}>
      4
    </Grid>
  </>
);

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(FormerExperience);
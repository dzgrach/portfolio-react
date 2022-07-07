import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from '@mui/material/Typography';

import { articlesFetched } from "../reducers/articles.slice";
import { PropaneSharp } from "@mui/icons-material";

const Article = ({ title, description }: any) => (
  <>
    <Grid component="article" container>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <p>{description}</p>
    </Grid>

    <Divider />
  </>
);

const WorldNews = (props: any) => {
  useEffect(() => {
    props.fetchArticles();
  }, []);

  return (
    <>
      <Grid component="section" container>
        {props.articles?.map((article: any) => (<Article key={article.title} title={article.title} description={article.description} />))}
      </Grid>

      <Divider />

      <Grid component="section" container>
        4
      </Grid>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  articles: state.articles
});
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  fetchArticles: () => {
    axios
    .get("https://newsapi.org/v2/top-headlines", { params: { country: "us", apiKey: "2a5cf0de663c43b3a06bfe2eddc6be58" } })
    .then(({data: {articles}}: any) => {
      dispatch(articlesFetched({articles}));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldNews);
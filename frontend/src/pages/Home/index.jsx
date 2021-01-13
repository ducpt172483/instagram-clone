import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import PostFeature from "../../features/Post";


HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <PostFeature />
      </Container>
    </div>
  );
}

export default HomePage;

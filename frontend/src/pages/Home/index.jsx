import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import PostFeature from "../../features/Post";


Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <PostFeature />
      </Container>
    </div>
  );
}

export default Home;

import React from "react";
import "./socials.css";

import { Container } from "react-bootstrap";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@mui/material";

const Socials = () => {
  return (
    <div className="Socials_container">
      <Container>
        <div className="single_col social_media_icons_white">
          <a href="https://www.linkedin.com/in/latiila/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://t.me/latiila/">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://github.com/latiiLA">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/latiilab/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://Youtube.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          &copy; 2023 Lata, All rights reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Socials;

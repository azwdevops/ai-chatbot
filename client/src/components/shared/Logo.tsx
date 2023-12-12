import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img
        src="openai.png"
        alt="openai"
        width="30px"
        height="30px"
        className="image-inverted"
      />
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "20px" }}>Chat</span>-GPT
      </Typography>
    </Link>
  );
};

export default Logo;

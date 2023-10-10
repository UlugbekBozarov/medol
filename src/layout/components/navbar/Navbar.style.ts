import { styled } from "@mui/material";

export const Nav = styled("nav")(({ theme }) => ({
  height: "100px",
  color: "red",
  background: theme?.palette?.primary?.main,
}));

import {
  Button,
  styled,
  Input,
  Select,
  IconButton,
  Drawer,
  Badge,
} from "@mui/material";

export const Nav = styled("nav")`
  position: sticky;
  top: 10px;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    top: -70px;
  }
`;

export const BrandBlock = styled("div")`
  max-width: 144px;
  display: ${({ size }: { size?: "small" | "large" }) =>
    size === "small" ? "flex" : "none"};
  align-items: center;
  padding-right: 10px;
  & img {
    max-width: 134px;
    max-height: 38px;
  }
  margin-left: 0;
  margin-right: auto;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 20px;
    display: ${({ size }: { size?: "small" | "large" }) =>
      size === "small" ? "none" : "flex"};
    & img {
      max-width: 200px;
      max-height: 58px;
    }
  }
`;

export const NavbarTopItemContent = styled("div", {
  shouldForwardProp: (prop) => prop !== "isSmall",
})`
  display: ${({ isSmall }: { isSmall?: boolean }) =>
    isSmall ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    display: flex;
    margin-right: 20px;
  }
`;

export const IconBlock = styled("div")`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme?.palette?.background?.default};
  border-radius: 50%;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    width: 50px;
    height: 50px;
  }
`;

export const TextBlock = styled("div", {
  shouldForwardProp: (prop: string) => !["maxWidth", "minWidth"].includes(prop),
})`
  display: none;
  max-width: ${({ maxWidth }: { minWidth?: number; maxWidth?: number }) =>
    `${maxWidth}px`};
  min-width: ${({ minWidth }) => `${minWidth}px`};
  margin-left: 20px;
  & p {
    color: #5a5a5a;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    display: block;
  }
`;

export const StyledInput = styled(Input)`
  position: relative;
  overflow: hidden;
  width: 40px;
  height: 40px;
  display: none;
  background: ${({ theme }) => theme?.palette?.background?.default};
  border-radius: 30px;
  transition: 0.5s;
  margin-right: 20px;
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
  & input {
    height: 100%;
    position: relative;
    padding-left: 40px;
    z-index: 2;
    &::placeholder {
      color: ${({ theme }) => theme?.palette?.common?.black};
      opacity: 1;
    }
  }
  &.Mui-focused {
    width: 100%;
    max-width: 250px;
    & input {
      padding-left: 50px;
    }
    & .search-input-icon-block {
      background: ${({ theme }) => theme?.palette?.primary?.main};
      & svg path {
        fill: ${({ theme }) => theme?.palette?.background?.default};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    width: 50px;
    height: 50px;
    display: block;
    & input {
      padding-left: 50px;
    }
    &.Mui-focused {
      width: 100%;
      max-width: 446px;
      & input {
        padding-left: 60px;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.xl}px) {
    &.Mui-focused {
      width: 100%;
      max-width: 446px;
    }
  }
`;

export const InputIconBlock = styled("div")`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme?.palette?.background?.default};
  border-radius: 50%;
  z-index: 1;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    width: 50px;
    height: 50px;
  }
`;

export const FacebookBlock = styled("div")`
  width: 153px;
  height: 40px;
  display: none;
  align-items: center;
  background: ${({ theme }) => theme?.palette?.background?.default};
  border-radius: 30px;
  margin-right: 10px;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    margin-right: 20px;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    display: flex;
    height: 50px;
  }
`;

export const StyledLanguage = styled(Select)`
  width: 68px;
  height: 40px;
  border-radius: 30px;
  background: ${({ theme }) => theme?.palette?.background?.default};
  margin-right: 5px;
  & > div {
    padding: 16.5px 6px;
    & > div > div {
      margin-right: 0;
    }
  }
  & p {
    display: none;
  }
  & fieldset: {
    display: none !important;
    background: red;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    width: 90px;
    height: 50px;
    margin-right: 20px;
    & > div {
      padding: 16.5px 14px;
      & > div > div {
        margin-right: 0;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.md}px) {
    width: 145px;
    height: 50px;
    margin-right: 20px;
    & > div > div > div {
      margin-right: 10px;
    }
    & p {
      display: block;
    }
  }
`;

export const FlagBlock = styled("div")`
  overflow: hidden;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const StyledLanguageIcon = styled("svg")`
  position: absolute;
  right: 15px;
`;

export const StyledIconButton = styled(IconButton)`
  width: 47px;
  height: 40px;
  background: ${({ theme }) => theme?.palette?.background?.default};
  border-radius: 30px;
  & img {
    max-width: 16px;
    max-height: 15px;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    width: 50px;
    height: 50px;
    & img {
      max-width: 20px;
      max-height: 20px;
    }
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    display: none;
  }
`;

export const StyledDrawer = styled(Drawer)`
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    display: none;
  }
`;

export const StyledDrawerBox = styled("div")`
  width: 100vw;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.sm}px) {
    width: 350px;
  }
`;

export const StyledNavListBlock = styled("div")`
  display: none;
  margin-top: 30px;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.values?.lg}px) {
    display: block;
  }
`;

export const StyledButtons = styled(Button)({});

export const StyledBadge = styled(Badge)({
  width: "100%",
  display: "block",
  "& .MuiBadge-badge": {
    minWidth: "12px",
    minHeight: "12px",
    borderRadius: "7px",
    top: "-4px",
    right: "13px",
  },
});

import { Fragment, useState } from "react";
import {
  Box,
  ButtonGroup,
  MenuItem,
  Container,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  IconButton,
  SelectChangeEvent,
  Badge,
} from "@mui/material";
import Image from "next/image";

import {
  BrandBlock,
  FacebookBlock,
  FlagBlock,
  IconBlock,
  InputIconBlock,
  Nav,
  NavbarTopItemContent,
  StyledBadge,
  StyledButtons,
  StyledDrawer,
  StyledDrawerBox,
  StyledIconButton,
  StyledInput,
  StyledLanguage,
  StyledLanguageIcon,
  StyledNavListBlock,
  TextBlock,
} from "./Navbar.style";

const navLinks = [
  {
    id: "shop",
    label: "МАГАЗИН",
  },
  {
    id: "about-company",
    label: "О КОМПАНИИ",
  },
  {
    id: "products",
    label: "ПРОДУКЦИЯ",
  },
  {
    id: "services",
    label: "УСЛУГИ",
  },
  {
    id: "promotions-and-news",
    label: "АКЦИИ И НОВОСТИ",
  },
  {
    id: "feedback",
    label: "ОБРАТНАЯ СВЯЗЬ",
  },
];

type language = "uz" | "ru" | "en";

const Navbar = () => {
  const [language, setLanguage] = useState<language>("ru");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeLanguage = (event: SelectChangeEvent<unknown>) => {
    setLanguage(event?.target?.value as language);
  };

  return (
    <Fragment>
      <Nav>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            mt="20px"
            sx={{
              justifyContent: "flex-end",
              lg: {
                justifyContent: "space-between",
              },
            }}
          >
            <BrandBlock size="small">
              <Image
                src="/png/logo.png"
                alt="Next.js Logo"
                width={200}
                height={58}
                priority
              />
            </BrandBlock>
            <NavbarTopItemContent>
              <IconBlock>
                <Image
                  width={25}
                  height={25}
                  src="/svg/location.svg"
                  alt="location"
                />
              </IconBlock>
              <TextBlock minWidth={163} maxWidth={163}>
                <Typography>г.Ташкент, Чиланзар 10 квартал, дом 3/1</Typography>
              </TextBlock>
            </NavbarTopItemContent>
            <NavbarTopItemContent isSmall>
              <IconBlock>
                <Image
                  width={22}
                  height={22}
                  src="/svg/phone.svg"
                  alt="location"
                />
              </IconBlock>
              <TextBlock minWidth={140} maxWidth={163}>
                <Typography>+998 71 276-62-53</Typography>
                <Typography>+998 71 276-62-54</Typography>
              </TextBlock>
            </NavbarTopItemContent>
            <BrandBlock>
              <Image
                src="/png/logo.png"
                alt="Next.js Logo"
                width={200}
                height={58}
                priority
              />
            </BrandBlock>
            <StyledInput
              startAdornment={
                <InputIconBlock className="search-input-icon-block">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z"
                      fill="#0D4C93"
                    />
                    <path
                      d="M15.6087 10.7745C15.7339 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54816 6.2145C8.05834 6.42181 7.82917 6.98699 8.03648 7.47689C8.24387 7.96679 8.80889 8.19581 9.29894 7.98857C11.3998 7.09961 13.8324 8.08556 14.7212 10.1864C14.8768 10.5538 15.2334 10.7745 15.6087 10.7745Z"
                      fill="#0D4C93"
                    />
                  </svg>
                </InputIconBlock>
              }
              placeholder="Поиск по сайту"
            />
            <FacebookBlock>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "40px",
                  height: "40px",
                  sm: {
                    width: "40px",
                    height: "40px",
                  },
                }}
              >
                <Image
                  width={22}
                  height={22}
                  src="/svg/facebook.svg"
                  alt="facebook"
                />
              </Box>
              <Typography fontSize="12px" color="primary">
                Мы на Facebook
              </Typography>
            </FacebookBlock>
            <StyledLanguage
              value={language}
              onChange={handleChangeLanguage}
              IconComponent={() => (
                <StyledLanguageIcon
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_607_352)">
                    <path
                      d="M5.49997 8.63518C5.30283 8.63518 5.10571 8.55991 4.95541 8.40968L0.225655 3.67987C-0.0752185 3.379 -0.0752185 2.89118 0.225655 2.59043C0.526408 2.28968 1.01413 2.28968 1.31502 2.59043L5.49997 6.77562L9.68494 2.59058C9.98581 2.28983 10.4735 2.28983 10.7742 2.59058C11.0752 2.89133 11.0752 3.37915 10.7742 3.68002L6.04453 8.40982C5.89416 8.56008 5.69704 8.63518 5.49997 8.63518Z"
                      fill="#0D4C93"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_607_352">
                      <rect width="11" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </StyledLanguageIcon>
              )}
            >
              <MenuItem value="ru">
                <Box display="flex" alignItems="center">
                  <FlagBlock>
                    <Image
                      width={30}
                      height={30}
                      src="/svg/ru.svg"
                      alt="uz-flag"
                    />
                  </FlagBlock>
                  <Typography fontSize="12px" color="primary">
                    Русский
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value="en">
                <Box display="flex" alignItems="center">
                  <FlagBlock>
                    <Image
                      width={30}
                      height={30}
                      src="/png/en.png"
                      alt="uz-flag"
                    />
                  </FlagBlock>
                  <Typography fontSize="12px" color="primary">
                    English
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value="uz">
                <Box display="flex" alignItems="center">
                  <FlagBlock>
                    <Image
                      width={30}
                      height={30}
                      src="/png/uz.png"
                      alt="uz-flag"
                    />
                  </FlagBlock>
                  <Typography fontSize="12px" color="primary">
                    O’zbekcha
                  </Typography>
                </Box>
              </MenuItem>
            </StyledLanguage>
            <StyledIconButton onClick={() => setIsOpen(true)}>
              <Image width={19} height={18} src="/svg/menu.svg" alt="menu" />
            </StyledIconButton>
          </Box>
          <StyledNavListBlock>
            <ButtonGroup
              fullWidth
              variant="text"
              sx={{
                height: "60px",
                background: "#fff",
                borderRadius: "40px",
              }}
            >
              <StyledButtons
                sx={{
                  borderTopLeftRadius: "40px",
                  borderBottomLeftRadius: "40px",
                }}
              >
                <StyledBadge color="secondary" variant="dot" invisible={false}>
                  МАГАЗИН
                </StyledBadge>
              </StyledButtons>
              <StyledButtons>
                <StyledBadge color="secondary" variant="dot" invisible={false}>
                  О КОМПАНИИ
                </StyledBadge>
              </StyledButtons>
              <StyledButtons>
                <StyledBadge color="secondary" variant="dot" invisible={false}>
                  ПРОДУКЦИЯ
                </StyledBadge>
              </StyledButtons>
              <StyledButtons>
                <StyledBadge color="secondary" variant="dot" invisible={false}>
                  УСЛУГИ
                </StyledBadge>
              </StyledButtons>
              <StyledButtons>
                <StyledBadge color="secondary" variant="dot" invisible={false}>
                  АКЦИИ И НОВОСТИ
                </StyledBadge>
              </StyledButtons>
              <StyledButtons
                sx={{
                  borderTopRightRadius: "40px",
                  borderBottomRightRadius: "40px",
                }}
              >
                <StyledBadge color="secondary" variant="dot" invisible={false}>
                  ОБРАТНАЯ СВЯЗЬ
                </StyledBadge>
              </StyledButtons>
            </ButtonGroup>
          </StyledNavListBlock>
          {/* <Box mt="30px"></Box> */}
          <StyledDrawer
            anchor="right"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <StyledDrawerBox>
              <Toolbar
                sx={{
                  background: "#F1F1F1",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                <Image
                  src="/png/logo.png"
                  alt="Logo"
                  width={200}
                  height={58}
                  priority
                />
                <IconButton
                  onClick={() => setIsOpen(false)}
                  sx={{
                    width: "40px",
                    height: "40px",
                    marginRight: 0,
                    marginLeft: "auto",
                  }}
                >
                  <Image
                    src="/svg/close.svg"
                    alt="close"
                    width={24}
                    height={24}
                    priority
                  />
                </IconButton>
              </Toolbar>
              <Divider />
              <List>
                {navLinks.map((link, index) => (
                  <ListItem key={link?.id} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={link?.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </StyledDrawerBox>
          </StyledDrawer>
        </Container>
      </Nav>
    </Fragment>
  );
};

export default Navbar;

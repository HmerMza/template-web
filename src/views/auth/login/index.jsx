import {
  Avatar,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../../assets/Logo.png";
import InputwhitLabel from "../../../components/inputs/InputwhitLabel";
import LogoFacebook from "../../../assets/FacebookLogo.svg";
import LogoGoogle from "../../../assets/GoogleLogo.svg";
import LogoApple from "../../../assets/AppleLogo.svg";

const Login = () => {
  return (
    <>
      <Stack>
        <Stack
          maxWidth={555}
          display="flex"
          padding={1}
          sx={{ marginTop: "64px" }}
          marginLeft={{ md: "170px" }}
        >
          <Stack display="flex" alignItems="center">
            <Avatar src={Logo} sx={{ width: "120.6px", height: "120.6px" }} />
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: "64px" }}
              fontWeight={700}
              lineHeight={"92.48px"}
            >
              Ingresa
            </Typography>
          </Stack>

          <Stack variant="form">
            <InputwhitLabel
              label={"Usuario"}
              placeholder={"example@gmail.com"}
            />
            <InputwhitLabel
              label={"Contraseña"}
              placeholder={"*****"}
              type="password"
            />
            <Stack display="flex" alignItems={"end"}>
              <Link href="#">
                <Typography fontWeight={500} fontSize={24}>
                  Recuperar contraseña
                </Typography>
              </Link>
            </Stack>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                height: "72px",
                fontWeight: "600",
                fontSize: "36px",
                marginTop: "20px",
              }}
            >
              <Typography fontWeight={700} fontSize={36}>
                Entrar
              </Typography>
            </Button>
          </Stack>
          <Stack>
            <Divider sx={{ marginTop: "49px" }}>
              <Typography
                fontWeight={400}
                fontSize={24}
                sx={{ marginX: "10px" }}
              >
                O Entra con
              </Typography>
            </Divider>
          </Stack>
          <Stack
            display="flex"
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "49px",
            }}
          >
            <Button
              variant="outlined"
              sx={{ width: "164px", height: "56px", borderRadius: "10px" }}
            >
              <img src={LogoFacebook} alt="" />
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "164px", height: "56px", borderRadius: "10px" }}
            >
              <img src={LogoGoogle} alt="" />
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "164px", height: "56px", borderRadius: "10px" }}
            >
              <img src={LogoApple} alt="" />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;

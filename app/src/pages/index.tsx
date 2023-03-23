import Head from "next/head";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import {
  DeviceThermostat,
  Flood,
  LocalFireDepartment,
  Storm,
  WbSunny,
} from "@mui/icons-material";
import { countriesWithData } from "@app/model/model";
import { IconAndText } from "@app/components/IconAndText";

export default function Home() {
  return (
    <>
      <Head>
        <title>How fucked are we</title>
        <meta name="description" content="The world is on fire" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{ textAlign: "center", backgroundColor: "background" }}>
          <Typography variant={"h1"}>
            Climate change is here there and everywhere
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              paddingTop: "1vh",
            }}
          >
            <IconAndText text={"Fires"} sx={{ color: "primary.main" }}>
              <LocalFireDepartment />
            </IconAndText>
            <IconAndText text={"Floods"} sx={{ color: "secondary.main" }}>
              <Flood />
            </IconAndText>
            <IconAndText text={"Droughts"} sx={{ color: "warning.main" }}>
              <WbSunny />
            </IconAndText>
            <IconAndText text={"Heatwaves"} sx={{ color: "info.main" }}>
              <DeviceThermostat />
            </IconAndText>
            <IconAndText text={"Storms"} sx={{ color: "success.main" }}>
              <Storm />
            </IconAndText>
          </Box>

          <Typography variant={"h2"} sx={{ paddingTop: "3vh" }}>
            How fucked are you?
          </Typography>
          <Autocomplete
            id="country-combo-box"
            options={countriesWithData}
            autoHighlight
            sx={{
              width: 300,
              margin: "auto",
              paddingTop: "1vh",
              borderColor: "primary",
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                color="secondary"
                focused
              />
            )}
          />
        </Box>
      </main>
    </>
  );
}

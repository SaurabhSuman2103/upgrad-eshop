import { Box, Stack, Tab, Typography } from "@mui/material";
import { useState } from "react";
import AppTabBar from "../Components/AppTabBar";
import SortByComponent from "../Components/SortByComponent";
import ShoppingCardComponent from "../Components/ShooppingCardComponent";

const HomePage = () => {
  return (
    <Stack direction="column" sx={{width:'100%'}}>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          justifyItems: "center",
          height: "100%",
        }}
      >
        <AppTabBar
          onChangeTab={(e) => {
            console.log("element is" + e);
          }}
        />
        <Typography sx={{marginTop:'24px'}}>Sort By:</Typography>
        <SortByComponent />
        <ShoppingCardComponent name={"test"} description={"kumar"}/>
    

      </Box>
    </Stack>
  );
};

export default HomePage;

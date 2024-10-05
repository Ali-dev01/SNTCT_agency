import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const NewCustomTabs = ({ tabsArray, children }) => {
  const [value, setValue] = useState(0);

  const tabChildren = React.Children.toArray(children);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        variant="scrollable"
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={styles.tabsStyles}
        classes={{ scroller: "_scroller" }}
      >
        {tabsArray.map((tab, index) => (
          <Tab
            disableRipple
            key={tab}
            icon={<Box mr={1}>{tab.icon}</Box>}
            iconPosition="start"
            label={tab.title}
            value={index}
          />
        ))}
      </Tabs>

      {tabChildren?.map(
        (child, index) => value === index && <Box key={`child${value}`}>{child}</Box>
      )}
    </Box>
  );
};

export default NewCustomTabs;

const styles = {
  tabsStyles: () => ({
    "&.MuiTabs-root": {
      background: "#D6E2F5",
      display: "flex",
      alignItems: "center",
      borderRadius: "35px",
      padding: "5px 7px",
      "& ._scroller ": {
        "& .MuiTabs-flexContainer": {
          "& .MuiButtonBase-root": {
            minHeight: "0",
            textTransform: "none",
            textWrap: "nowrap",
            width: "188px",
            color: "#3E5F82",
            padding: "14px 18px",
          },
          "& .Mui-selected": {
            color: "#3E5F82",
            zIndex: "1",
          },
        },
        "& .MuiTabs-indicator": {
          background: "#fff",
          height: "100%",
          borderRadius: "35px",
        },
      },
    },
  }),
};

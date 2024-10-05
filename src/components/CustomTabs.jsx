import { Box, Tab, Tabs } from "@mui/material";
import { Children, Fragment, useState } from "react";

const CustomTabs = (props) => {
  const {
    tabsArray = [], // Array containing both icons and labels
    children,
    tabsProps,
    tabProps,
  } = props;

  const [value, setValue] = useState(0);

  const arrayChildren = Children.toArray(children);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "#D6E2F5", // Light blue background
          borderRadius: "30px", // Rounded corners
          padding: "4px", // Padding for the tab container
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="standard"
          TabIndicatorProps={{ style: { display: "none" } }} // Hide the indicator
          sx={{ "& .MuiTabs-flexContainer": { justifyContent: "space-between" } }}
          {...tabsProps}
        >
          {tabsArray.map((tab, index) => (
            <Tab
              onClick={() => setActiveTab(tab.label)} // Updated to reflect the label
              sx={{
                ...styles.tabStyle,
                // borderRadius: value === index ? "30px" : "8px", // Rounded for selected tab
                // backgroundColor: value === index ? "#ffffff" : "transparent", // White for selected tab
                // boxShadow: value === index ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none", // Shadow for selected tab
                padding: "16px 20px", // Padding inside the tab
                gap: "8px",
              }}
              disableRipple
              key={tab.label} // Use label as key
              icon={tab.icon} // Icon for the tab
              label={tab.label} // Label for the tab
              iconPosition="start" // Position the icon to the left of the label
              {...tabProps}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ width: "100%", pt: "20px" }}>
        {arrayChildren.map((child, index) => (
          <Box key={index}>{value === index && child}</Box>
        ))}
      </Box>
    </Fragment>
  );
};

export default CustomTabs;

// Example Usage

/* <CustomTabs
  tabsArray={[
    { icon: <DecisionIcon />, label: "Decision Making" },
    { icon: <ContentIcon />, label: "Content Creation" },
    { icon: <CommunityIcon />, label: "Community Cultivation" },
    { icon: <MarketingIcon />, label: "Marketing Campaigns" },
    { icon: <IntegrationIcon />, label: "Integration" }
  ]}
>
  custom tabs children here
</CustomTabs> */

const styles = {
  tabStyle: {
    textTransform: "initial",
    fontSize: "16px",
    fontWeight: 600,
    minHeight: "44px",
    color: "#3E5F82",
    borderRadius: "30px",
    "&.Mui-selected": {
      color: "#3E5F82", // Primary color for selected text
      backgroundColor: "#fff",
    },
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3E5F82", // Primary color for selected text
    },
  },
};

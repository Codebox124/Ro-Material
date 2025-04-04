import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent, useState } from "react";

interface Props {
  tabs: string[];
  onChange: any;
}

export default function TabComp({ tabs, onChange }: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tabsTitle) => {
            return <Tab key={tabsTitle} label={tabsTitle} {...a11yProps(0)} />;
          })}
        </Tabs>
      </Box>
      <br />
    </div>
  );
}

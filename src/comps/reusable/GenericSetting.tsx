import Box from "@mui/material/Box";
import ColorPickerListItem from "../list/ColorPickerListItem.tsx";
import SectionHeaders from "../list/SectionHeaders.tsx";
import SliderListItem from "../list/SliderListItem.tsx";
import SwitchListItem from "../list/SwitchListItem.tsx";
import { Stack } from "@mui/material";
import { useState } from "react";

interface GenericSettingProps {
  sectionTitle: string;
  value: boolean;
  setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  switchTitle?: string;
  colorPickerTitle?: string;
  sliderTitle?: string;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
  width: string;
  setWidth: (value: string | ((prevVar: string) => string)) => void;
}

export default function GenericSetting({
  sectionTitle,
  value,
  setValue,
  switchTitle,
  colorPickerTitle,
  sliderTitle,
  color,
  setColor,
  width,
  setWidth,
}: GenericSettingProps) {
  const [isEnabled, setIsEnabled] = useState(true);
  return (

    <Box
      marginLeft={{ xs: 0, sm: "10px" }}
      marginRight={{ xs: 0, sm: "10px" }}
      paddingLeft={{ xs: 0, sm: "10px" }}
      paddingRight={{ xs: 0, sm: "10px" }}
      paddingBottom={{ xs: 0, sm: "10px" }}
      borderRadius={"12px"}
    >
      <Stack direction={"column"} gap={2}>
        <SectionHeaders
         title={sectionTitle}
          isChecked={isEnabled}
          onToggle={() => setIsEnabled(!isEnabled)}
        />
        
        <ColorPickerListItem
          title={colorPickerTitle ? colorPickerTitle : "Color"}
          value={color}
          setValue={setColor}
        />
        <SliderListItem
          title={sliderTitle ? sliderTitle : "Width"}
          value={width}
          setValue={setWidth}
        />
      </Stack>
    </Box>
  );
}


import Box from "@mui/material/Box";
import FontListItem from "../list/FontListItem.tsx";
import SwitchListItem from "../list/SwitchListItem.tsx";
import SwitchWithColorPickerListItem from "../list/SwitchWithColorPickerListItem.tsx";
import { Stack } from "@mui/material";
import CityListItem from "../list/CityListItem.tsx";

interface CitiesSettingsProps {
  enabled: boolean;
  setEnabled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  title: string;
  colorEnabled: boolean;
  setColorEnabled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  color: string;
  setColor: (value: string | ((prevVar: string) => string)) => void;
  haloColorEnabled: boolean;
  setHaloColorEnabled: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  haloColor: string;
  setHaloColor: (value: string | ((prevVar: string) => string)) => void;
  font: string;
  setFont: (value: string | ((prevVar: string) => string)) => void;
  isBold: boolean;
  setIsBold: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  fontSize: number;
  setFontSize: (value: number | ((prevVar: number) => number)) => void;
}

export default function CitiesSettings({
  enabled,
  setEnabled,
  title,
  colorEnabled,
  setColorEnabled,
  color,
  setColor,
  haloColorEnabled,
  setHaloColorEnabled,
  haloColor,
  setHaloColor,
  font,
  setFont,
  isBold,
  setIsBold,
  fontSize,
  setFontSize,
}: CitiesSettingsProps) {
  return (
    <Box borderRadius={"12px"}>
      <Stack gap={2} direction={"column"}>
        <CityListItem title={title} value={enabled} setValue={setEnabled} />
        <SwitchListItem title={"Bold Font"} value={isBold} setValue={setIsBold} />

        <SwitchWithColorPickerListItem
          title={"Color"}
          value={colorEnabled}
          setValue={setColorEnabled}
          color={color}
          setColor={setColor}
        />
        <SwitchWithColorPickerListItem
          title={"Halo"}
          value={haloColorEnabled}
          setValue={setHaloColorEnabled}
          color={haloColor}
          setColor={setHaloColor}
        />
        <FontListItem
          fontSize={fontSize}
          setFontSize={setFontSize}
          font={font}
          setFont={setFont}
        />
      </Stack>
    </Box>
  );
}

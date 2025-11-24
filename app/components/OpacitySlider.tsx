import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export interface OpacitySliderProps {
  layerId: string;
  disabled: boolean;
  layerOpacityChangedValue: number;
  onChange: (layerId: string, value: number) => void;
}

export default function OpacitySlider({
  layerId,
  disabled,
  layerOpacityChangedValue,
  onChange,
}: OpacitySliderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Opacity: {(layerOpacityChangedValue * 100).toFixed(0)}%
      </Text>

      <Slider
        style={{ width: "100%" }}
        value={layerOpacityChangedValue}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        disabled={disabled}
        onValueChange={(val) => onChange(layerId, val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  label: {
    color: "white",
    fontSize: 12,
    marginBottom: 6,
  },
});

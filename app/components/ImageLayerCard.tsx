import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import OpacitySlider from "./OpacitySlider";

export interface ImageLayerCardProps {
  layerId: string;
  name: string;
  source: ImageSourcePropType;
  initialOpacity?: number;
  onOpacityChange?: (layerId: string, value: number) => void;
}

export default function ImageLayerCard({
  layerId,
  name,
  source,
  initialOpacity = 1,
  onOpacityChange,
}: ImageLayerCardProps) {
  const [enabled, setEnabled] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [opacity, setOpacity] = useState(initialOpacity);

  const handleSliderChange = (id: string, val: number) => {
    setOpacity(val);
    onOpacityChange?.(id, val);
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.rightControls}>
          <Checkbox
            value={enabled}
            onValueChange={(val) => {
              setEnabled(val);
              if (!val) setShowSlider(false);
            }}
          />

          <TouchableOpacity
            disabled={!enabled}
            onPress={() => setShowSlider((s) => !s)}
            style={{ opacity: enabled ? 1 : 0.4, marginLeft: 10 }}
          >
            <Ionicons name="settings-sharp" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image source={source} style={[styles.image, { opacity }]} />
      </View>

      {/* Slider below the image */}
      {showSlider && enabled && (
        <View style={styles.sliderWrapper}>
          <OpacitySlider
            layerId={layerId}
            disabled={!enabled}
            layerOpacityChangedValue={opacity}
            onChange={handleSliderChange}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    marginVertical: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginBottom: 6,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  rightControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 440,
    borderRadius: 18,
  },
  sliderWrapper: {
    marginTop: 6, // spacing between image and slider
    width: "100%",
  },
});

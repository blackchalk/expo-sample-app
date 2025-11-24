import { View, StyleSheet } from "react-native";
import ImageLayerCard from "../components/ImageLayerCard";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageLayerCard
        layerId="bg-1"
        name="Background Image"
        source={PlaceholderImage}
        initialOpacity={1}
        onOpacityChange={(id, val) => {
          console.log("Opacity changed:", id, val);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    paddingTop: 50,
  },
});

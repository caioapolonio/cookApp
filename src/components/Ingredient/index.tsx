import { Image, Pressable, Text } from "react-native";

import { styles } from "./styles";

export function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image source={require("@/assets/tomato.png")} />
      <Text>Maçã</Text>
    </Pressable>
  );
}

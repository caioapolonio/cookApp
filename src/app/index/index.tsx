import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import { useState } from "react";
import { Selected } from "@/components/Selected";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const handleToggleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }
    setSelected((state) => [...state, value]);

    console.log(selected);
  };

  const handleClearSelected = () => {
    setSelected([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha{"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas no seus ingredientes.
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ingredients}
      >
        {Array.from({ length: 100 }).map((item, index) => (
          <Ingredient
            key={index}
            name="Tomate"
            image=""
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>
      <Selected
        quantity={selected.length}
        onClear={handleClearSelected}
        onSearch={() => {}}
      />
    </View>
  );
}

import { useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import appConfig from "./app.json";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <View style={styles.card}>
        <Text style={styles.eyebrow}>ANDROID BUILD TEST</Text>
        <Text style={styles.title}>{appConfig.expo.name}</Text>
        <Text style={styles.description}>
          Tap the button to check that the installed app responds.
        </Text>
        <Text style={styles.count} accessibilityLiveRegion="polite">
          {count}
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Increment counter"
          onPress={() => setCount((value) => value + 1)}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Add one</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Reset counter"
          onPress={() => setCount(0)}
          style={({ pressed }) => [styles.reset, pressed && styles.pressed]}
        >
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
        <Text style={styles.metadata}>
          Version {appConfig.expo.version}{"\n"}
          {appConfig.expo.android.package}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#0f172a",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#1e293b",
  },
  eyebrow: { color: "#93c5fd", fontSize: 12, fontWeight: "700", letterSpacing: 2 },
  title: { color: "#f8fafc", fontSize: 30, fontWeight: "700", marginTop: 12 },
  description: { color: "#cbd5e1", fontSize: 16, lineHeight: 24, marginTop: 12 },
  count: { color: "#f8fafc", fontSize: 72, fontWeight: "700", textAlign: "center", marginVertical: 24 },
  button: { minHeight: 52, alignItems: "center", justifyContent: "center", borderRadius: 12, backgroundColor: "#93c5fd" },
  buttonText: { color: "#0f172a", fontSize: 18, fontWeight: "700" },
  reset: { minHeight: 48, alignItems: "center", justifyContent: "center", marginTop: 8 },
  resetText: { color: "#cbd5e1", fontSize: 16 },
  pressed: { opacity: 0.7 },
  metadata: { color: "#94a3b8", fontSize: 12, lineHeight: 20, textAlign: "center", marginTop: 16 },
});

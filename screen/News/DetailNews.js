import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function DetailNews() {
  const route = useRoute();
  const { src, title, content } = route.params.item;
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={src} style={styles.image} />
        <View style={styles.ctnText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.conent}>{content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailNews;
const styles = StyleSheet.create({
  image: { resizeMode: "stretch", width: "100%", height: 150 },
  ctnText: { paddingHorizontal: "1.5%" },
  title: { fontWeight: "bold", fontSize: 17, paddingTop: "1.5%" },
  conent: { fontSize: 15, paddingVertical: "1.5%" },
});

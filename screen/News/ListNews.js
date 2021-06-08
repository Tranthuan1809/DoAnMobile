import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ListNews() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Chi tiết tin tức", { item })}
          >
            <Image style={styles.image} source={item.src} />
            <View style={styles.ctnText}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.summary}>
                {item.summary}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

export default ListNews;
const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    maxHeight: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    width: "96%",
    marginHorizontal: "2%",
    marginBottom: "5%",
    borderColor: "white",
    borderRadius: 5,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: { resizeMode: "stretch", width: "100%", height: 150, borderRadius: 5 },
  title: { fontWeight: "bold", fontSize: 17 },
  ctnText: { paddingHorizontal: "1.5%", paddingTop: "1.5%" },
  summary: { fontSize: 15, paddingVertical: "1.5%" },
});
const Data = [
  {
    key: "1",
    src: require("../../assets/news1.jpg"),
    title: "Giải cứu nông sản Hải Dương",
    summary:
      "Trong suốt năm 2020, cả nước rộ lên phong trào giải cứu nông sản cho các địa phương nằm trong vùng dịch như Hải Dương, Vĩnh Phúc, Hưng Yên",
    content:
      "Nông sản là những sản phẩm hoặc bán thành phẩm của ngành sản xuất hàng hóa thông qua gây trồng và phát triển của cây trồng. Sản phẩm nông nghiệp bao gồm nhiều nhóm hàng thực phẩm, tơ sợi, nhiên liệu, nguyên vật liệu, dược phẩm và ma túy bất hợp pháp (thuốc lá, cần sa), các sản phẩm độc đáo đặc thù. Ngày nay, nông sản còn hàm nghĩa những sản phẩm từ hoạt động làm vườn và thực tế nông sản thường được hiểu là những sản phẩm hàng hóa được làm ra từ tư liệu sản xuất là đất. \n Nông sản hàng hoá làNông sản hàng hóa (cash crops) là khái niệm dùng để chỉ các loại nông sản mà người nông dân sản xuất ra với mục đích bán ra thị trường. Ngược với nông sản hàng hóa là nông sản phục vụ cho mục đích tự sản, tự tiêu. \n Hàng nông sản bao gồm một vi phạm khá rộng các loại hàng hoá có nguồn gốc từ hoạt động nông nghiệp như: \n -Các sản phẩm nông nghiệp cơ bản:lúa gạo, lúa mì, bột mì, sữa, động vật tươi sống (trừ cá và các sản phẩm từ cá), cà phê, hồ tiêu, hạt điều, chè, rau quả tươi,….) \n -Các sản phẩm phái sinh: bánh mì, bơ, dầu ăn, thịt,….. \n -Các sản phẩm được chế biến từ sản phẩm nông nghiệp: bánh kẹo, sản phẩm từ sữa, xúc xích, nước ngọt, rượu, bia, thuốc lá, bông xơ, da động vật thô, DDSG và nhiều sản phầm khác.....",
  },
  {
    key: "2",
    src: require("../../assets/news2.jpg"),
    title: "Điểm bán nông sản sạch, tích quỷ ủng hộ bà con vùng dịch",
    summary:
      "Trong suốt năm 2020, cả nước rộ lên phong trào giải cứu nông sản cho các địa phương nằm trong vùng dịch như Hải Dương, Vĩnh Phúc, Hưng Yên",
    content:
      "Nông sản là những sản phẩm hoặc bán thành phẩm của ngành sản xuất hàng hóa thông qua gây trồng và phát triển của cây trồng. Sản phẩm nông nghiệp bao gồm nhiều nhóm hàng thực phẩm, tơ sợi, nhiên liệu, nguyên vật liệu, dược phẩm và ma túy bất hợp pháp (thuốc lá, cần sa), các sản phẩm độc đáo đặc thù. Ngày nay, nông sản còn hàm nghĩa những sản phẩm từ hoạt động làm vườn và thực tế nông sản thường được hiểu là những sản phẩm hàng hóa được làm ra từ tư liệu sản xuất là đất. \n Nông sản hàng hoá làNông sản hàng hóa (cash crops) là khái niệm dùng để chỉ các loại nông sản mà người nông dân sản xuất ra với mục đích bán ra thị trường. Ngược với nông sản hàng hóa là nông sản phục vụ cho mục đích tự sản, tự tiêu. \n Hàng nông sản bao gồm một vi phạm khá rộng các loại hàng hoá có nguồn gốc từ hoạt động nông nghiệp như: \n -Các sản phẩm nông nghiệp cơ bản:lúa gạo, lúa mì, bột mì, sữa, động vật tươi sống (trừ cá và các sản phẩm từ cá), cà phê, hồ tiêu, hạt điều, chè, rau quả tươi,….) \n -Các sản phẩm phái sinh: bánh mì, bơ, dầu ăn, thịt,….. \n -Các sản phẩm được chế biến từ sản phẩm nông nghiệp: bánh kẹo, sản phẩm từ sữa, xúc xích, nước ngọt, rượu, bia, thuốc lá, bông xơ, da động vật thô, DDSG và nhiều sản phầm khác.....",
  },
  {
    key: "3",
    src: require("../../assets/news3.jpg"),
    title: "Giả cứu nông sản ở Hà Giang",
    summary:
      "Trong suốt năm 2020, cả nước rộ lên phong trào giải cứu nông sản cho các địa phương nằm trong vùng dịch như Hải Dương, Vĩnh Phúc, Hưng Yên",
    content:
      "Nông sản là những sản phẩm hoặc bán thành phẩm của ngành sản xuất hàng hóa thông qua gây trồng và phát triển của cây trồng. Sản phẩm nông nghiệp bao gồm nhiều nhóm hàng thực phẩm, tơ sợi, nhiên liệu, nguyên vật liệu, dược phẩm và ma túy bất hợp pháp (thuốc lá, cần sa), các sản phẩm độc đáo đặc thù. Ngày nay, nông sản còn hàm nghĩa những sản phẩm từ hoạt động làm vườn và thực tế nông sản thường được hiểu là những sản phẩm hàng hóa được làm ra từ tư liệu sản xuất là đất. \n Nông sản hàng hoá làNông sản hàng hóa (cash crops) là khái niệm dùng để chỉ các loại nông sản mà người nông dân sản xuất ra với mục đích bán ra thị trường. Ngược với nông sản hàng hóa là nông sản phục vụ cho mục đích tự sản, tự tiêu. \n Hàng nông sản bao gồm một vi phạm khá rộng các loại hàng hoá có nguồn gốc từ hoạt động nông nghiệp như: \n -Các sản phẩm nông nghiệp cơ bản:lúa gạo, lúa mì, bột mì, sữa, động vật tươi sống (trừ cá và các sản phẩm từ cá), cà phê, hồ tiêu, hạt điều, chè, rau quả tươi,….) \n -Các sản phẩm phái sinh: bánh mì, bơ, dầu ăn, thịt,….. \n -Các sản phẩm được chế biến từ sản phẩm nông nghiệp: bánh kẹo, sản phẩm từ sữa, xúc xích, nước ngọt, rượu, bia, thuốc lá, bông xơ, da động vật thô, DDSG và nhiều sản phầm khác.....",
  },
  {
    key: "4",
    src: require("../../assets/news4.jpg"),
    title: "Vải được mùa, 100.00 VNĐ  Kg",
    summary:
      "Trong suốt năm 2020, cả nước rộ lên phong trào giải cứu nông sản cho các địa phương nằm trong vùng dịch như Hải Dương, Vĩnh Phúc, Hưng Yên",
    content:
      "Nông sản là những sản phẩm hoặc bán thành phẩm của ngành sản xuất hàng hóa thông qua gây trồng và phát triển của cây trồng. Sản phẩm nông nghiệp bao gồm nhiều nhóm hàng thực phẩm, tơ sợi, nhiên liệu, nguyên vật liệu, dược phẩm và ma túy bất hợp pháp (thuốc lá, cần sa), các sản phẩm độc đáo đặc thù. Ngày nay, nông sản còn hàm nghĩa những sản phẩm từ hoạt động làm vườn và thực tế nông sản thường được hiểu là những sản phẩm hàng hóa được làm ra từ tư liệu sản xuất là đất. \n Nông sản hàng hoá làNông sản hàng hóa (cash crops) là khái niệm dùng để chỉ các loại nông sản mà người nông dân sản xuất ra với mục đích bán ra thị trường. Ngược với nông sản hàng hóa là nông sản phục vụ cho mục đích tự sản, tự tiêu. \n Hàng nông sản bao gồm một vi phạm khá rộng các loại hàng hoá có nguồn gốc từ hoạt động nông nghiệp như: \n -Các sản phẩm nông nghiệp cơ bản:lúa gạo, lúa mì, bột mì, sữa, động vật tươi sống (trừ cá và các sản phẩm từ cá), cà phê, hồ tiêu, hạt điều, chè, rau quả tươi,….) \n -Các sản phẩm phái sinh: bánh mì, bơ, dầu ăn, thịt,….. \n -Các sản phẩm được chế biến từ sản phẩm nông nghiệp: bánh kẹo, sản phẩm từ sữa, xúc xích, nước ngọt, rượu, bia, thuốc lá, bông xơ, da động vật thô, DDSG và nhiều sản phầm khác.....",
  },
];

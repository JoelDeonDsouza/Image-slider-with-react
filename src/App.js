import * as React from "react";
import {
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet
} from "react-native";
const { width, height } = Dimensions.get("window"); //rember to change window to screen//
const ITEM_WIDTH = width * 0.5;
const ITEM_HEIGHT = ITEM_WIDTH * 1.6;

const images = [
  "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image
}));

export default function App() {
  return (
    <div className="App">
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <View
              style={{ width, alignItems: "center", justifyContent: "center" }}
            >
              <View
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  marginTop: 20,
                  overFlow: "hidden",
                  alignItems: "center"
                }}
              >
                <Image
                  source={{ uri: item.photo }}
                  style={{
                    width: ITEM_WIDTH * 1.2,
                    height: ITEM_HEIGHT,
                    resizeMode: "cover",
                    borderRadius: 18,
                    shadowColor: "#000",
                    shadowOpacity: 1,
                    shadowRadius: 20,
                    shadowOffset: {
                      width: 0,
                      height: 0
                    }
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </div>
  );
}

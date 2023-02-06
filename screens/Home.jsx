import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components/index";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (val) => {
    if (!val.length) return setNftData(NFTData);

    const filterData = nftData.filter((item) =>
      item.name.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );

    if (filterData.length) {
      setNftData(filterData);
    } else {
      setNftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard item={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

import { View, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { CircleButton, RectButton } from "./Button";
import { ETHPRice, NFTTitle, SubInfo } from "./SubInfo";

const NFTCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View
        style={{
          width: "100%",
          padding: SIZES.font,
        }}
      >
        <NFTTitle
          title={item.name}
          subTitle={item.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ETHPRice price={item.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { item })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;

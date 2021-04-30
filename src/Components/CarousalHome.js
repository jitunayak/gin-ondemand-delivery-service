import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";
import { Colours } from "../Constants/Colours";
import { Layout } from "../Constants/Layout";

function CarousalHome() {
  const [activeSlide, setactiveSlide] = useState(0);
  const [data, setData] = useState([
    {
      url: "https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png",
    },
    {
      url: "https://cdn.grabon.in/gograbon/images/merchant/1583822192166.png",
    },
    {
      url:
        "https://i.pinimg.com/originals/16/4a/ac/164aaceff1ba461e6c5f2085c0eeaafe.png",
    },
  ]);

  const PaginationView = () => {
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: Colours.white,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colours.blacklight,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  const _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View
        style={{
          backgroundColor: Colours.offwhite,
          height: 200,
          width: Layout.width - 20,
          margin: 10,
        }}
      >
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.6}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        layout={"default"}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Layout.width - 20}
        itemWidth={Layout.width - 50}
        hasParallaxImages={true}
        onSnapToItem={(index) => setactiveSlide(index)}
      />
      <PaginationView />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
});

export default CarousalHome;

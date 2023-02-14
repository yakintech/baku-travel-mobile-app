import * as React from "react";
import { Text, View, SafeAreaView, Dimensions, Image } from "react-native";

import Carousel from "react-native-snap-carousel";

const windowWidth = Dimensions.get("window").width;

export class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          mainImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/540px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
        },
        {
          mainImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Baku_Museum_of_Modern_Art_entrance.jpg/500px-Baku_Museum_of_Modern_Art_entrance.jpg",
        },
        {
          mainImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Heydar_Aliyev_Cultural_Center.jpg/375px-Heydar_Aliyev_Cultural_Center.jpg",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          height: 272,
          marginHorizontal: 8,
          marginVertical: 8,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Image
          source={{ uri: item.mainImage }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: 16,
            backgroundColor: "clear",
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "clear",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Carousel
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={100}
            itemWidth={windowWidth - 40}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

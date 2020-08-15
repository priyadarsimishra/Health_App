import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import Text from "../styles/Text";
import colors from "../styles/colors";
class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <PostImage
          source={require("../assets/landing-img.png")}
          style={{ borderTopRightRadius: 8, borderTopLeftRadius: 5 }}
        />
        <PostTitle heavy large>
          Post Title
        </PostTitle>
        <Username right medium>
          @pmishra
        </Username>
        <PostDesc light>
          This is the post description PostDesc PostDesc PostDesc PostDesc
          PostDesc PostDesc PostDesc PostDesc PostDesc fdg PostDesc PostDesc
          PostDesc PostDesc fdg
        </PostDesc>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 18,
    marginRight: 18,
    height: 420,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowOffset: { width: 8, height: 8 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 1,
    marginBottom: 20,
  },
});

const PostImage = styled.Image`
  width: 380px;
  height: 300px;
`;
const Username = styled(Text)`
  letter-spacing: 0.5px;
  position: absolute;
  top: 74%;
  right: 10px;
`;
const PostTitle = styled(Text)`
  padding: 10px;
  padding-top: 5px;
  letter-spacing: 2px;
  padding-bottom: 3px;
`;
const PostDesc = styled(Text)`
  padding-left: 10px;
`;
export default PostCard;

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import googleLogo from "../../assets/images/search.png";
import facebookLogo from "../../assets/images/facebook.png";
import appleLogo from "../../assets/images/apple-black-logo.png";
import emailLogo from "../../assets/images/email.png";

import { theme } from "../../theme";

const SignInOptionsPage = () => {
      return (
            <View style={styles.container}>
                  {/* Google */}
                  <TouchableOpacity style={styles.btn}>
                        <Image style={styles.logo} source={googleLogo} />
                        <Text style={styles.text}>Sign in with Google</Text>
                  </TouchableOpacity>
                  {/* Facebook */}
                  <TouchableOpacity style={styles.btn}>
                        <Image style={styles.logo} source={facebookLogo} />
                        <Text style={styles.text}>Sign in with Facebook</Text>
                  </TouchableOpacity>
                  {/* Normal email password login */}
                  <TouchableOpacity style={styles.btn}>
                        <Image style={styles.logo} source={emailLogo} />
                        <Text style={styles.text}>Sign in with Email</Text>
                  </TouchableOpacity>
                  {/* Apple login */}
                  <TouchableOpacity style={styles.btn}>
                        <Image style={styles.logo} source={appleLogo} />
                        <Text style={styles.text}>Sign in with Apple</Text>
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: theme.colors.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
      },
      btn: {
            flexDirection: "row",
            backgroundColor: theme.colors.backgroundColor,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            width: 300,
            alignItems: "center",
            justifyContent: "flex-start",
            elevation: 5,
      },
      logo: {
            width: 30,
            height: 30,
            marginRight: 10,
      },
      text: {
            color: "#222",
            fontSize: theme.text.small.fontSize,
            fontFamily: theme.fonts.secondary,
            paddingLeft: 20,
      },
});

export default SignInOptionsPage;

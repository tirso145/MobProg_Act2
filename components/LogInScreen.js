const LoginScreen = ({ navigation: { navigate } }) => {
    const handleForgotPassword = () => {
      navigate("AccountRecovery");
    };
  
    const handleSignIn = () => {
      // Implement your sign-in logic here
      // For now, let's just navigate to the "Home" screen
      navigate("Home");
    };
  
    
  
    return (
      <SafeAreaView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                marginVertical: Spacing * 3,
              }}
            >
              LOGIN
            </Text>
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.large,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              WELCOME!
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput placeholder="Email" />
            <AppTextInput placeholder="Password" />
          </View>
  
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.small,
                color: Colors.primary,
                alignSelf: "flex-end",
                textDecorationLine: "underline",
              }}
            >
              Forgot your password?
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={handleSignIn}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigate("SIGN UP")}
            style={{
              padding: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Create a new account
            </Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({});
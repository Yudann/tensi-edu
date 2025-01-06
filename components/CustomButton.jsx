import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        isLoading && styles.disabledButton,
        containerStyles,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.indicator}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#1F7A8C', // Ganti dengan warna Anda
    borderRadius: 16, // Untuk rounded-xl
    minHeight: 62,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white', // Ganti dengan warna Anda
    fontFamily: 'Poppins-SemiBold', // Ganti dengan font Anda
    fontSize: 18, // Untuk text-lg
  },
  indicator: {
    marginLeft: 8, // Untuk ml-2
  },
});

export default CustomButton;

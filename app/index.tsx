import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewsApp() {
  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Français', value: 'fr' },
    { label: 'Español', value: 'es' },
  ];

  const [language, setLanguage] = useState('en'); // Default language
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const translations = {
    en: {
      title: 'Giant wolf returns: scientists succeed in de-extinction!',
      description:
        'For the first time in history, scientists have revived the legendary giant wolf! Now roaming nature once again, these colossal canines are set to disrupt ecosystems and captivate the world. Warning: hide your snacks!',
    },
    fr: {
      title: 'Le loup géant revient : les scientifiques réussissent la dé-extinction !',
      description:
        'Pour la première fois au monde, des scientifiques ont ressuscité le légendaire loup géant ! Arpentant à nouveau la nature, ces canidés colossaux vont bouleverser les écosystèmes et captiver le monde entier. Attention : cachez vos goûters !',
    },
    es: {
      title: '¡El lobo gigante regresa: los científicos logran la des-extinción!',
      description:
        'Por primera vez en el mundo, los científicos han resucitado al legendario lobo gigante. De nuevo recorriendo la naturaleza, estos colosales caninos están a punto de alterar los ecosistemas y cautivar al mundo. ¡Cuidado con tus bocadillos!',
    },
  };

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      {/* Language Picker and Theme Toggle */}
      <View style={styles.header}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={language}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={(itemValue) => setLanguage(itemValue)}
            dropdownIconColor={isDarkMode ? '#fff' : '#000'}
          >
            {languages.map((lang) => (
              <Picker.Item key={lang.value} label={lang.label} value={lang.value} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity
          style={[
            styles.themeToggle,
            isDarkMode ? styles.themeToggleDark : styles.themeToggleLight,
          ]}
          onPress={toggleTheme}
          activeOpacity={0.7}
        >
          {isDarkMode ? (
            <MaterialCommunityIcons name="moon-waning-crescent" size={28} color="#FFD700" />
          ) : (
            <MaterialCommunityIcons name="white-balance-sunny" size={28} color="#FFA500" />
          )}
        </TouchableOpacity>
      </View>

      {/* News Image */}
      <Image
        source={require('../assets/images/dire-wolf.png')}
        style={styles.image}
        resizeMode="cover"
      />

      {/* News Text */}
      <Text style={[styles.title, themeStyles.text]}>
        {/* @ts-ignore */}
        {translations[language].title}
      </Text>
      <Text style={[styles.description, themeStyles.text]}>
        {/* @ts-ignore */}
        {translations[language].description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pickerWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  picker: {
    height: 60,
    width: 170,
    fontSize: 18,
  },
  pickerItem: {
    fontSize: 18,
    height: 60,
  },
  themeToggle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginLeft: 10,
  },
  themeToggleLight: {
    backgroundColor: '#fffbe6',
    borderWidth: 1,
    borderColor: '#ffe58f',
  },
  themeToggleDark: {
    backgroundColor: '#232323',
    borderWidth: 1,
    borderColor: '#444',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#FFFFFF',
  },
});

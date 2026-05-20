import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from '../constants/Loginstyle';
import colors from '../constants/colors';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [presionado, setPresionado] = useState(false);

  const handleLogin = () => {
  setPresionado(true);
  setTimeout(() => {
    setPresionado(false);
    navigation.replace('Dashboard'); // 👈 tiene que estar DENTRO del timeout
    }, 200);
  }; // ACA VA LA PUTA LOGICA DE FIREBASE

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.hero}>
        <View style={styles.logoRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoInitials}>ND</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.logoNuevo}>NUEVO </Text>
            <Text style={styles.logoDestino}>DESTINO</Text>
          </View>
        </View>
        <Text style={styles.heroTitle}>
          CADA VIAJE{'\n'}ES UN{'\n'}
          <Text style={styles.heroAmarillo}>NUEVO{'\n'}</Text>
          DESTINO
        </Text>
      </View>

      <ScrollView
        style={styles.form}
        contentContainerStyle={styles.formContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.welcomeSub}>Bienvenido de vuelta</Text>
        <Text style={styles.welcomeTitle}>Iniciá sesión</Text>
        <Text style={styles.welcomeDesc}>Accedé al sistema de nuestra agencia</Text>

        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          placeholderTextColor={colors.grisMedio}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor={colors.grisMedio}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.forgot}>Olvidé mi contraseña</Text>

        <TouchableOpacity
          style={[styles.btn, presionado && styles.btnPressed]}
          onPress={handleLogin}
          activeOpacity={1}
        >
          <Text style={[styles.btnText, presionado && styles.btnTextPressed]}>
            INGRESAR AL SISTEMA
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
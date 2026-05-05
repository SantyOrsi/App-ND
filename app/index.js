import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../constants/LoginStyles';
import Colors from '../constants/Colors';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [presionado, setPresionado] = useState(false);

  const handleLogin = () => {
    setPresionado(true);
    setTimeout(() => setPresionado(false), 200);
  }; //ACA VA LA PUTA LOGICA DE FIRESTONE PERO PAJA HACERLO AHORA CAPAZ CON IA PASA PERO NO AHORA

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.panelIzquierdo}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCirculo}>
            <Text style={styles.logoTexto}>ND</Text>
          </View>
          <Text style={styles.logoNombre}>
            <Text style={styles.logoNuevo}>NUEVO </Text>
            <Text style={styles.logoDestino}>DESTINO</Text>
          </Text>
        </View>

        <Text style={styles.bienvenida}>Bienvenido de vuelta</Text>
        <Text style={styles.subBienvenida}>Iniciá sesión</Text>
        <Text style={styles.descripcion}>Accedé al sistema de nuestra agencia</Text>

        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          placeholderTextColor={Colors.grisMedio}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor={Colors.grisMedio}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.olvide}>Olvidé mi contraseña</Text>

        <TouchableOpacity
          style={[styles.boton, presionado && styles.botonPresionado]}
          onPress={handleLogin}
          activeOpacity={1}
        >
          <Text style={[styles.botonTexto, presionado && styles.botonTextoPresionado]}>
            INGRESAR AL SISTEMA
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.panelDerecho}>
        <Text style={styles.frase}>
          CADA VIAJE{'\n'}ES UN{'\n'}
          <Text style={styles.fraseAmarillo}>NUEVO{'\n'}</Text>
          DESTINO
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
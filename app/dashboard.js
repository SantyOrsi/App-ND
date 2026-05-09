import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../constants/DashboardStyles';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {/* PARTE NEGRA (HERO) - Igual al Login */}
        <View style={styles.hero}>
          <View style={styles.logoRow}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoInitials}>ND</Text>
            </View>
            <Text style={styles.logoName}>
              <Text style={styles.logoNuevo}>NUEVO</Text>
              <Text style={styles.logoDestino}> DESTINO</Text>
            </Text>
          </View>
        </View>

        {/* PARTE BLANCA (CONTENIDO) */}
        <View style={styles.content}>
          <Text style={styles.welcomeTitle}>Panel de Control</Text>
          <Text style={styles.welcomeDesc}>Selecciona una sección para gestionar</Text>

          <View style={styles.grid}>
            {/* Botón Torneos */}
            <TouchableOpacity style={[styles.card, styles.cardAmarillo]}>
              <Ionicons name="trophy" size={32} color="black" />
              <Text style={styles.cardText}>Torneos</Text>
            </TouchableOpacity>

            {/* Botón Equipos */}
            <TouchableOpacity style={styles.card}>
              <Ionicons name="people" size={32} color="black" />
              <Text style={styles.cardText}>Equipos</Text>
            </TouchableOpacity>

            {/* Botón Jugadores */}
            <TouchableOpacity style={styles.card}>
              <Ionicons name="shirt" size={32} color="black" />
              <Text style={styles.cardText}>Jugadores</Text>
            </TouchableOpacity>

            {/* Botón Partidos */}
            <TouchableOpacity style={styles.card}>
              <Ionicons name="calendar" size={32} color="black" />
              <Text style={styles.cardText}>Partidos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
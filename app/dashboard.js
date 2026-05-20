import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../constants/DashboardStyles';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {/* HERO NEGRO */}
        <View style={styles.hero}>
          <View style={styles.logoRow}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoInitials}>ND</Text>
            </View>
            <View>
              <Text style={styles.logoName}>
                <Text style={styles.logoNuevo}>NUEVO </Text>
                <Text style={styles.logoDestino}>DESTINO</Text>
              </Text>
            </View>
          </View>
          <Text style={styles.heroBienvenida}>Bienvenido de vuelta</Text>
          <Text style={styles.heroTitle}>
            Dashboard <Text style={styles.heroAmarillo}>General</Text>
          </Text>
        </View>

        {/* CONTENIDO */}
        <View style={styles.content}>
          <Text style={styles.sectionLabel}>SELECCIONA UN AREA</Text>

          {/* Grid 2 columnas */}
          <View style={styles.grid}>
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconCircle}>
                <Ionicons name="car" size={22} color={styles.iconCircle.color} />
              </View>
              <Text style={styles.cardTitle}>Traslado</Text>
              <Text style={styles.cardDesc}>servicio y presupuesto de traslado</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.cardDisabled]}>
              <View style={styles.iconCircle}>
                <Ionicons name="airplane" size={22} color={styles.iconCircle.color} />
              </View>
              <Text style={styles.cardTitle}>Agencia</Text>
              <Text style={styles.cardDesc}>proximamente</Text>
            </TouchableOpacity>
          </View>

          {/* Taller */}
          <TouchableOpacity style={[styles.cardWide, styles.cardDisabled]}>
            <View style={styles.iconCircle}>
              <Ionicons name="construct" size={22} color={styles.iconCircle.color} />
            </View>
            <View>
              <Text style={styles.cardTitle}>Taller</Text>
              <Text style={styles.cardDesc}>proximamente</Text>
            </View>
          </TouchableOpacity>

          {/* Agenda */}
          <TouchableOpacity style={[styles.cardWide, styles.cardDisabled]}>
            <View style={styles.iconCircle}>
              <Ionicons name="calendar" size={22} color={styles.iconCircle.color} />
            </View>
            <View>
              <Text style={styles.cardTitle}>Agenda</Text>
              <Text style={styles.cardDesc}>turnos, eventos y recordatorios</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerAvatar}>
          <Text style={styles.footerAvatarText}>MT</Text>
        </View>
        <View>
          <Text style={styles.footerNombre}>Manuel Toscano</Text>
          <Text style={styles.footerRol}>Administrador</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
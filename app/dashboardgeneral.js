import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, SafeAreaView,
} from 'react-native';
import styles from '../constants/dashboard';
import AREAS from '../constants/areas';

export default function DashboardGeneral({ navigation }) {

  const handleArea = (area) => {
    if (!area.active || !area.screen) return;
    navigation.navigate(area.screen);
  };

  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.topbar}>
        <View style={styles.logoRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoInitials}>ND</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.logoNuevo}>NUEVO </Text>
            <Text style={styles.logoDestino}>DESTINO</Text>
          </View>
        </View>
        <Text style={styles.greeting}>Bienvenido de vuelta</Text>
        <Text style={styles.title}>
          Dashboard <Text style={styles.titleAmarillo}>General</Text>
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Seleccioná un área</Text>

        <View style={styles.grid}>
          {AREAS.filter(a => !a.full).map(area => (
            <TouchableOpacity
              key={area.id}
              style={[styles.card, area.active && styles.cardActive]}
              onPress={() => handleArea(area)}
              activeOpacity={area.active ? 0.75 : 1}
            >
              <View style={[styles.icon, !area.active && styles.iconGrey]}>
                <Text style={styles.iconEmoji}>{area.emoji}</Text>
              </View>
              <Text style={[styles.cardName, !area.active && styles.cardNameGrey]}>
                {area.label}
              </Text>
              <Text style={styles.cardDesc}>{area.desc}</Text>
              <View style={[styles.badge, !area.active && styles.badgeGrey]}>
                <Text style={[styles.badgeText, !area.active && styles.badgeTextGrey]}>
                  {area.badge}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {AREAS.filter(a => a.full).map(area => (
          <TouchableOpacity
            key={area.id}
            style={[styles.card, styles.cardFull]}
            activeOpacity={1}
          >
            <View style={[styles.icon, styles.iconGrey]}>
              <Text style={styles.iconEmoji}>{area.emoji}</Text>
            </View>
            <View style={styles.cardFullText}>
              <Text style={[styles.cardName, styles.cardNameGrey]}>{area.label}</Text>
              <Text style={styles.cardDesc}>{area.desc}</Text>
            </View>
            <View style={[styles.badge, styles.badgeGrey]}>
              <Text style={[styles.badgeText, styles.badgeTextGrey]}>{area.badge}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.userRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MT</Text>
          </View>
          <View>
            <Text style={styles.userName}>Manuel Toscano</Text>
            <Text style={styles.userRole}>Administrador</Text>
          </View>
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
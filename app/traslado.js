import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  ScrollView, SafeAreaView, FlatList,
} from 'react-native';
import styles from '../constants/trasladostyle';
import { METRICAS, SERVICIOS, PRESUPUESTOS, ESTADO_CONFIG } from '../constants/trasladoData';

export default function Traslado({ navigation }) {
  const [tabActiva, setTabActiva] = useState('servicio');

  const datos = tabActiva === 'servicio' ? SERVICIOS : PRESUPUESTOS;

  const renderItem = ({ item }) => {
    const config = ESTADO_CONFIG[item.estado];
    return (
      <TouchableOpacity style={styles.item} activeOpacity={0.75}>
        <View style={styles.itemCliente}>
          <Text style={styles.itemNombre}>{item.cliente}</Text>
          <Text style={styles.itemChofer}>{item.chofer}</Text>
        </View>
        <Text style={styles.itemRuta}>{item.ruta}</Text>
        <View style={styles.itemEstadoWrap}>
          <View style={[styles.badge, styles[config.estiloWrap]]}>
            <Text style={[styles.badgeTexto, styles[config.estiloTxt]]}>
              {config.label}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>

      {/* ── el top bar (= ) ── */}
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
        <TouchableOpacity style={styles.backRow} onPress={() => navigation.goBack()}>
          <Text style={styles.backTexto}>← Dashboard</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>
          Sección <Text style={styles.tituloAmarillo}>Traslado</Text>
        </Text>
      </View>

      {/* ── MÉTRICAS ── */}
      <View style={styles.metricas}>
        {METRICAS.map((m, i) => (
          <View key={i} style={styles.metricaCard}>
            <Text style={styles.metricaValor}>{m.valor}</Text>
            <Text style={styles.metricaLabel}>{m.label}</Text>
            <Text style={styles.metricaSub}>{m.sub}</Text>
          </View>
        ))}
      </View>

      {/* ── TABS ── */}
      <View style={styles.tabsWrap}>
        <View style={styles.tabs}>
          {['servicio', 'presupuesto'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, tabActiva === tab && styles.tabActivo]}
              onPress={() => setTabActiva(tab)}
            >
              <Text style={[styles.tabTexto, tabActiva === tab && styles.tabTextoActivo]}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ── Buttom para cargar ── */}
      <TouchableOpacity
        style={styles.btnCargar}
        onPress={() => navigation.navigate(
          tabActiva === 'servicio' ? 'NuevoServicio' : 'NuevoPresupuesto'
        )}
      >
        <Text style={styles.btnCargarTexto}>
          + CARGAR {tabActiva === 'servicio' ? 'SERVICIO' : 'PRESUPUESTO'}
        </Text>
      </TouchableOpacity>

      {/* ── Tablita de  datos ── */}
      <View style={styles.listaHeader}>
        <Text style={[styles.headerCol, styles.colCliente]}>Cliente</Text>
        <Text style={[styles.headerCol, styles.colRuta]}>Origen → Destino</Text>
        <Text style={[styles.headerCol, styles.colEstado]}>Estado</Text>
      </View>

      <FlatList
        data={datos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 24 }}
      />

    </SafeAreaView>
  );
}
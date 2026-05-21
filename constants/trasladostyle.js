import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  // Topbar
  topbar: {
    backgroundColor: colors.negro,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  backTexto: {
    color: '#888',
    fontSize: 13,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.amarillo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInitials: {
    color: colors.negro,
    fontWeight: '700',
    fontSize: 11,
  },
  logoNuevo: { color: colors.blanco, fontSize: 14, fontWeight: '700' },
  logoDestino: { color: colors.amarillo, fontSize: 14, fontWeight: '700' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.blanco,
  },
  tituloAmarillo: {
    color: colors.amarillo,
  },

  // Métricas
  metricas: {
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  metricaCard: {
    flex: 1,
    backgroundColor: colors.blanco,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    padding: 12,
    alignItems: 'center',
  },
  metricaValor: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.negro,
    lineHeight: 32,
  },
  metricaLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#555',
    textAlign: 'center',
    marginTop: 2,
  },
  metricaSub: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
  },

  // Tabs
  tabsWrap: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.blanco,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabActivo: {
    backgroundColor: colors.negro,
  },
  tabTexto: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
  },
  tabTextoActivo: {
    color: colors.amarillo,
  },

  // Botón cargar
  btnCargar: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: colors.amarillo,
    borderRadius: 10,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  btnCargarTexto: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.negro,
    letterSpacing: 0.5,
  },

  // Lista
  listaHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 6,
  },
  headerCol: {
    fontSize: 10,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  colCliente: { flex: 2 },
  colRuta: { flex: 2 },
  colEstado: { flex: 1.2, textAlign: 'right' },

  item: {
    backgroundColor: colors.blanco,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCliente: {
    flex: 2,
  },
  itemNombre: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.negro,
  },
  itemChofer: {
    fontSize: 11,
    color: '#888',
    marginTop: 1,
  },
  itemRuta: {
    flex: 2,
    fontSize: 11,
    color: '#555',
  },
  itemEstadoWrap: {
    flex: 1.2,
    alignItems: 'flex-end',
  },
  badge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeTexto: {
    fontSize: 10,
    fontWeight: '600',
  },
  enRuta:     { backgroundColor: '#E3F2FD' },
  enRutaTxt:  { color: '#1565C0' },
  pendiente:  { backgroundColor: '#FFF8E1' },
  pendienteTxt: { color: '#F57F17' },
  completo:   { backgroundColor: '#E8F5E9' },
  completoTxt: { color: '#2E7D32' },
});

export default styles;
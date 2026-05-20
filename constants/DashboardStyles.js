import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.blanco,
  },

  // Hero
  hero: {
    backgroundColor: colors.negro,
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 32,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.amarillo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInitials: {
    color: colors.negro,
    fontWeight: '700',
    fontSize: 13,
  },
  logoNuevo: { color: colors.blanco, fontWeight: '700', fontSize: 15 },
  logoDestino: { color: colors.amarillo, fontWeight: '700', fontSize: 15 },
  heroBienvenida: {
    color: colors.grisTexto,
    fontSize: 12,
    marginBottom: 2,
  },
  heroTitle: {
    color: colors.blanco,
    fontSize: 24,
    fontWeight: '700',
  },
  heroAmarillo: {
    color: colors.amarillo,
  },

  // Contenido
  content: {
    padding: 24,
    paddingTop: 28,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.grisTexto,
    letterSpacing: 1.5,
    marginBottom: 20,
  },

  // Grid
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '47%',
    backgroundColor: colors.grisClaro,
    borderRadius: 16,
    padding: 18,
    justifyContent: 'flex-start',
    minHeight: 160,
  },
  cardWide: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grisClaro,
    borderRadius: 16,
    padding: 18,
    gap: 14,
    marginBottom: 16,
  },
  cardDisabled: {
    opacity: 0.6,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.amarillo,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    color: colors.negro, // usado para el ícono
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.negro,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 11,
    color: colors.grisTexto,
    lineHeight: 16,
  },

  // Footer
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: colors.grisMedio,
    backgroundColor: colors.blanco,
  },
  footerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.amarillo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerAvatarText: {
    fontWeight: '700',
    fontSize: 13,
    color: colors.negro,
  },
  footerNombre: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.negro,
  },
  footerRol: {
    fontSize: 11,
    color: colors.grisTexto,
  },
});

export default styles;
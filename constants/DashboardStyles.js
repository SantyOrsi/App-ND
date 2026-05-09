import { StyleSheet } from 'react-native';
import colors from './colors'; // Usamos tus mismos colores

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.blanco,
  },
  hero: {
    backgroundColor: colors.negro,
    paddingHorizontal: 32,
    paddingTop: 56,
    paddingBottom: 40,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.amarillo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInitials: {
    color: colors.negro,
    fontWeight: '700',
    fontSize: 14,
  },
  logoName: {
    fontSize: 16,
    fontWeight: '700',
  },
  logoNuevo: { color: colors.blanco },
  logoDestino: { color: colors.amarillo },

  // Contenido del Dashboard (Parte Blanca)
  content: {
    flex: 1,
    padding: 32,
    paddingTop: 36,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.negro,
    marginBottom: 4,
  },
  welcomeDesc: {
    fontSize: 12,
    color: colors.grisTexto,
    marginBottom: 28,
  },

  // El Grid de botones
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: colors.blanco,
    borderWidth: 1.5,
    borderColor: colors.negro,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardAmarillo: {
    backgroundColor: colors.amarillo,
    borderColor: colors.amarillo,
  },
  cardText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
    color: colors.negro,
    textTransform: 'uppercase',
  }
});

export default styles;
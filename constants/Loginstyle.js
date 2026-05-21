import { StyleSheet } from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
   root: {
    flex: 1,
    backgroundColor:colors.blanco,
  },

  // Hero
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
    marginBottom: 28,
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
  logoNuevo: {
    color: colors.blanco,
  },
  logoDestino: {
    color: colors.amarillo,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.blanco,
    lineHeight: 42,
  },
  heroAmarillo: {
    color: colors.amarillo,
  },

  // Formulario
  form: {
    flex: 1,
    backgroundColor: colors.blanco,
  },
  formContent: {
    padding: 32,
    paddingTop: 36,
  },
  welcomeSub: {
    fontSize: 12,
    color: colors.grisTexto,
    marginBottom: 2,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.amarillo,
    marginBottom: 4,
  },
  welcomeDesc: {
    fontSize: 12,
    color: colors.grisTexto,
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.negro,
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.grisMedio,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.negro,
    marginBottom: 22,
  },
  forgot: {
    fontSize: 12,
    color: colors.amarillo,
    textAlign: 'right',
    marginBottom: 32,
  },
  btn: {
    borderWidth: 2,
    borderColor: colors.negro,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 2,
  },
  btnPressed: {
    backgroundColor: colors.amarillo,
    borderColor: colors.amarillo,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.negro,
    letterSpacing: 1.5,
  },
  btnTextPressed: {
    color: colors.negro,
  },
});

export default styles;



    
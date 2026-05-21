import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  topbar: {
    backgroundColor: colors.negro,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
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
  greeting: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.blanco,
  },
  titleAmarillo: {
    color: colors.amarillo,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#888',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  grid: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: colors.blanco,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    padding: 16,
    gap: 8,
  },
  cardActive: {
    borderWidth: 2,
    borderColor: colors.amarillo,
    backgroundColor: '#FFFBEB',
  },
  cardFull: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  cardFullText: {
    flex: 1,
    gap: 2,
  },
  cardName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.negro,
  },
  cardNameGrey: {
    color: '#888',
  },
  cardDesc: {
    fontSize: 12,
    color: '#888',
    lineHeight: 16,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.amarillo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconGrey: {
    backgroundColor: '#F2F2F2',
  },
  iconEmoji: {
    fontSize: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.amarillo,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeGrey: {
    backgroundColor: '#F2F2F2',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.negro,
  },
  badgeTextGrey: {
    color: '#888',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.blanco,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    padding: 14,
    marginTop: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.negro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.amarillo,
    fontWeight: '700',
    fontSize: 12,
  },
  userName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.negro,
  },
  userRole: {
    fontSize: 11,
    color: '#888',
  },
  settingsBtn: {
    marginLeft: 'auto',
    padding: 4,
  },
  settingsIcon: {
    fontSize: 18,
  },
});

export default styles;
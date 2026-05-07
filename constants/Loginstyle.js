import{ StyleSheet } from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.blanco,
        flexDirection:'row',
    },
    panelIzquierdo:{
        flex:1,
        padding:40,
        justifyContent:'center',
    },
    logoContainer:{
        flexDirection:'row',    
        alignItems:'center',
        marginBottom:30,
    },
    logoCirculo:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:colors.amarillo,
        justifyContent:'center',
        alignItems:'center',
        marginRight:15,
    },
    logoTexto:{
        color:colors.negro,
        fontWeight : 'bold',
        fontSize : 16,
    },
    logoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoNuevo: {
    color: colors.negro,
  },
  logoDestino: {
    color: colors.amarillo,
  },
  bienvenida: {
    fontSize: 13,
    color: colors.grisTexto,
    marginBottom: 2,
  },
  subBienvenida: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.amarillo,
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 13,
    color: colors.grisTexto,
    marginBottom: 28,
  },
  label: {
    fontSize: 13,
    color: colors.negro,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grisMedio,
    paddingVertical: 8,
    fontSize: 14,
    color: colors.negro,
    marginBottom: 20,
  },
  olvide: {
    fontSize: 12,
    color: colors.amarillo,
    textAlign: 'right',
    marginBottom: 28,
  },
  boton: {
    borderWidth: 2,
    borderColor: colors.negro,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botonPresionado: {
    backgroundColor: colors.amarillo,
    borderColor: colors.amarillo,
  },
  botonTexto: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.negro,
    letterSpacing: 1,
  },
  botonTextoPresionado: {
    color: colors.negro,
  },
  panelDerecho: {
    flex: 1,
    backgroundColor: colors.negro,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  frase: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.blanco,
    textAlign: 'center',
    lineHeight: 48,
  },
  fraseAmarillo: {
    color: colors.amarillo,
  },
});

export default styles;



    
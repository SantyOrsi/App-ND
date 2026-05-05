import{stylesheet} from 'react-native';
import Colors from './Colors';
const styles = stylesheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.blanco,
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
        backgroundColor:Colors.primario,
        justifyContent:'center',
        alignItems:'center',
        marginRight:15,
    },
    logoTexto:{
        color:Colors.negro,
        fontweight : 'bold',
        fontsize : '16',
    },
    logoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoNuevo: {
    color: Colors.negro,
  },
  logoDestino: {
    color: Colors.amarillo,
  },
  bienvenida: {
    fontSize: 13,
    color: Colors.grisTexto,
    marginBottom: 2,
  },
  subBienvenida: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.amarillo,
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 13,
    color: Colors.grisTexto,
    marginBottom: 28,
  },
  label: {
    fontSize: 13,
    color: Colors.negro,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grisMedio,
    paddingVertical: 8,
    fontSize: 14,
    color: Colors.negro,
    marginBottom: 20,
  },
  olvide: {
    fontSize: 12,
    color: Colors.amarillo,
    textAlign: 'right',
    marginBottom: 28,
  },
  boton: {
    borderWidth: 2,
    borderColor: Colors.negro,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botonPresionado: {
    backgroundColor: Colors.amarillo,
    borderColor: Colors.amarillo,
  },
  botonTexto: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.negro,
    letterSpacing: 1,
  },
  botonTextoPresionado: {
    color: Colors.negro,
  },
  panelDerecho: {
    flex: 1,
    backgroundColor: Colors.negro,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  frase: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.blanco,
    textAlign: 'center',
    lineHeight: 48,
  },
  fraseAmarillo: {
    color: Colors.amarillo,
  },
});

export default styles;



    
export const METRICAS = [
  { valor: '5',  label: 'Servicios',  sub: 'hoy' },
  { valor: '20', label: 'Choferes',   sub: 'activos' },
  { valor: '3',  label: 'Vehículos',  sub: 'en ruta' },
];

export const SERVICIOS = [
  { id: '1', cliente: 'García, Juan',   chofer: 'Pérez',  ruta: 'Rosario → Bs As',    estado: 'enRuta' },
  { id: '2', cliente: 'López, María',   chofer: 'Gómez',  ruta: 'Rosario → Córdoba',  estado: 'pendiente' },
  { id: '3', cliente: 'Torres, Pablo',  chofer: 'Díaz',   ruta: 'Bs As → Mendoza',    estado: 'completo' },
  { id: '4', cliente: 'Sánchez, Ana',   chofer: 'Sin asignar', ruta: 'Rosario → SF',  estado: 'pendiente' },
];

export const PRESUPUESTOS = [
  { id: '1', cliente: 'Rodríguez, Luis', chofer: '-',      ruta: 'Rosario → Córdoba',  estado: 'pendiente' },
  { id: '2', cliente: 'Martínez, Eva',   chofer: '-',      ruta: 'Bs As → Rosario',    estado: 'pendiente' },
];

export const ESTADO_CONFIG = {
  enRuta:    { label: 'En ruta',   estiloWrap: 'enRuta',    estiloTxt: 'enRutaTxt' },
  pendiente: { label: 'Pendiente', estiloWrap: 'pendiente', estiloTxt: 'pendienteTxt' },
  completo:  { label: 'Completo',  estiloWrap: 'completo',  estiloTxt: 'completoTxt' },
};
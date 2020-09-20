import { EntornoDeEjecucion } from 'src/app/interfaces/entorno-de-ejecucion';

/**
 * Objeto correspondiente al entorno de ejecución local.
 */
export const environment: EntornoDeEjecucion = {
	nombre: 'local',
	endpoints: {
		autenticar: '/autenticar',
	},
};
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Device, Workstation, StationAppointments } = initSchema(schema);

export {
  Device,
  Workstation,
  StationAppointments
};
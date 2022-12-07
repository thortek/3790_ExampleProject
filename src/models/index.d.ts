import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type DeviceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkstationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StationAppointmentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDevice = {
  readonly id: string;
  readonly sku?: string | null;
  readonly uvuNum?: string | null;
  readonly model?: string | null;
  readonly source?: string | null;
  readonly category?: string | null;
  readonly batterypack?: boolean | null;
  readonly checkedout?: boolean | null;
  readonly checkOutDate?: string | null;
  readonly type?: string | null;
  readonly uv_id?: string | null;
  readonly name?: string | null;
  readonly purpose?: string | null;
  readonly deviceData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevice = {
  readonly id: string;
  readonly sku?: string | null;
  readonly uvuNum?: string | null;
  readonly model?: string | null;
  readonly source?: string | null;
  readonly category?: string | null;
  readonly batterypack?: boolean | null;
  readonly checkedout?: boolean | null;
  readonly checkOutDate?: string | null;
  readonly type?: string | null;
  readonly uv_id?: string | null;
  readonly name?: string | null;
  readonly purpose?: string | null;
  readonly deviceData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Device = LazyLoading extends LazyLoadingDisabled ? EagerDevice : LazyDevice

export declare const Device: (new (init: ModelInit<Device, DeviceMetaData>) => Device) & {
  copyOf(source: Device, mutator: (draft: MutableModel<Device, DeviceMetaData>) => MutableModel<Device, DeviceMetaData> | void): Device;
}

type EagerWorkstation = {
  readonly id: string;
  readonly stationID: string;
  readonly occupied: boolean;
  readonly currentRent?: string | null;
  readonly workstationItems?: string | null;
  readonly StationAppointments?: (StationAppointments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkstation = {
  readonly id: string;
  readonly stationID: string;
  readonly occupied: boolean;
  readonly currentRent?: string | null;
  readonly workstationItems?: string | null;
  readonly StationAppointments: AsyncCollection<StationAppointments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workstation = LazyLoading extends LazyLoadingDisabled ? EagerWorkstation : LazyWorkstation

export declare const Workstation: (new (init: ModelInit<Workstation, WorkstationMetaData>) => Workstation) & {
  copyOf(source: Workstation, mutator: (draft: MutableModel<Workstation, WorkstationMetaData>) => MutableModel<Workstation, WorkstationMetaData> | void): Workstation;
}

type EagerStationAppointments = {
  readonly id: string;
  readonly stationID: string;
  readonly uvuID: string;
  readonly name: string;
  readonly email: string;
  readonly date: string;
  readonly start: string;
  readonly end: string;
  readonly arrived: string;
  readonly workstationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStationAppointments = {
  readonly id: string;
  readonly stationID: string;
  readonly uvuID: string;
  readonly name: string;
  readonly email: string;
  readonly date: string;
  readonly start: string;
  readonly end: string;
  readonly arrived: string;
  readonly workstationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StationAppointments = LazyLoading extends LazyLoadingDisabled ? EagerStationAppointments : LazyStationAppointments

export declare const StationAppointments: (new (init: ModelInit<StationAppointments, StationAppointmentsMetaData>) => StationAppointments) & {
  copyOf(source: StationAppointments, mutator: (draft: MutableModel<StationAppointments, StationAppointmentsMetaData>) => MutableModel<StationAppointments, StationAppointmentsMetaData> | void): StationAppointments;
}
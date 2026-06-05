import dgram from 'dgram';
import type { CharacteristicValue } from 'homebridge';
import type { GreeACPlatform, MyPlatformAccessory } from './platform.js';
import { DeviceConfig } from './settings.js';
import type { CommandValueMap, Commands } from './commands.js';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class GreeAirConditioner {
    private readonly platform;
    readonly accessory: MyPlatformAccessory;
    readonly deviceConfig: DeviceConfig;
    private readonly tsAccessoryMac;
    private readonly socket;
    private HeaterCooler?;
    private TemperatureSensor?;
    private Fan?;
    key?: string;
    private cols?;
    private status;
    private tsAccessory;
    private powerPending;
    private modePending;
    private silentTimeRanges?;
    private antiFrostService?;
    private lastHeatSetpoint?;
    constructor(platform: GreeACPlatform, accessory: MyPlatformAccessory, deviceConfig: DeviceConfig, tsAccessoryMac: string, socket: dgram.Socket);
    initCharacteristics(): void;
    initAccessory(): void;
    /**
     * Handle "SET" requests from HomeKit
     * These are sent when the user changes the state of an accessory, for example, turning on a Light bulb.
     */
    setActive(value: CharacteristicValue): Promise<void>;
    setFanActive(value: CharacteristicValue): Promise<void>;
    setTargetHeaterCoolerState(value: CharacteristicValue): Promise<void>;
    setTargetTemperature(value: CharacteristicValue): Promise<void>;
    setTemperatureDisplayUnits(value: CharacteristicValue): Promise<void>;
    setSwingMode(value: CharacteristicValue): Promise<void>;
    setFanSwingMode(value: CharacteristicValue): Promise<void>;
    setRotationSpeed(value: CharacteristicValue): Promise<void>;
    setFanRotationSpeed(value: CharacteristicValue): Promise<void>;
    /**
     * Handle the "GET" requests from HomeKit
     * These are sent when HomeKit wants to know the current state of the accessory, for example, checking if a Light bulb is on.
     *
     * GET requests should return as fast as possible. A long delay here will result in
     * HomeKit being unresponsive and a bad user experience in general.
     *
     * If your device takes time to respond you should update the status of your device
     * asynchronously instead using the `updateCharacteristic` method instead.
     * In this case, you may decide not to implement `onGet` handlers, which may speed up
     * the responsiveness of your device in the Home app.
  
     * @example
     * this.service.updateCharacteristic(this.platform.Characteristic.On, true)
     */
    private ensureAntiFrostService;
    getAntiFrostState(): Promise<CharacteristicValue>;
    setAntiFrostState(value: CharacteristicValue): Promise<void>;
    getActive(): Promise<CharacteristicValue>;
    getFanActive(): Promise<CharacteristicValue>;
    getCurrentHeaterCoolerState(): Promise<CharacteristicValue>;
    getCurrentFanState(): Promise<CharacteristicValue>;
    getTargetHeaterCoolerState(): Promise<CharacteristicValue>;
    getCurrentTemperature(service: string): Promise<CharacteristicValue>;
    getTargetTemperature(target: string): Promise<CharacteristicValue>;
    getTemperatureDisplayUnits(): Promise<CharacteristicValue>;
    getSwingMode(): Promise<CharacteristicValue>;
    getRotationSpeed(): Promise<CharacteristicValue>;
    getFanRotationSpeed(): Promise<CharacteristicValue>;
    getName(): Promise<CharacteristicValue>;
    isSilentTime(): boolean;
    getDeviceLabel(): string;
    getCols(): string[];
    getKeyName(obj: CommandValueMap, value: number): string;
    getValueName(obj: Commands, code: string, value: number): string | undefined;
    getCommandName(obj: Commands, code: string): string | undefined;
    calcDeviceTargetTemp(temp: number, unit?: number): number;
    calcDeviceTargetOffset(temp: number, unit?: number): number;
    getTargetTempFromDevice(temp: number, offset: number, unit: number): number;
    get power(): boolean;
    set power(value: boolean);
    set fanpower(value: boolean);
    get mode(): number;
    set mode(value: number);
    get currentTemperature(): number;
    get targetTemperature(): number;
    set targetTemperature(value: number);
    get units(): number;
    set units(value: number);
    get swingMode(): number;
    set swingMode(value: number);
    get speed(): number;
    set speed(value: number);
    get quietMode(): number;
    set quietMode(value: number);
    get powerfulMode(): number;
    set powerfulMode(value: number);
    updateStatus(props: string[]): void;
    handleMessage: (msg: Buffer, rinfo: {
        address: string;
        family: string;
        port: number;
        size: number;
    }) => void;
    sendMessage(message: unknown): void;
    sendCommand(cmd: Record<string, unknown>): void;
    requestDeviceStatus(): void;
}

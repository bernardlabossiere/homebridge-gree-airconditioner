import { Socket } from 'dgram';
import type { API, Characteristic, DynamicPlatformPlugin, Logging, PlatformAccessory, PlatformConfig, Service } from 'homebridge';
import { GreeAirConditioner } from './platformAccessory.js';
export interface MyPlatformAccessory extends PlatformAccessory {
    bound?: boolean;
    registered?: boolean;
}
/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export declare class GreeACPlatform implements DynamicPlatformPlugin {
    readonly log: Logging;
    readonly config: PlatformConfig;
    readonly api: API;
    readonly Service: typeof Service;
    readonly Characteristic: typeof Characteristic;
    private devices;
    private processedDevices;
    private skippedDevices;
    private warningShown;
    private bridges;
    private socket;
    private pluginAddresses;
    ports: number[];
    private tempUnit;
    constructor(log: Logging, config: PlatformConfig, api: API);
    /**
     * This function is invoked when homebridge restores cached accessories from disk at startup.
     * It should be used to set up event handlers for characteristics and update respective values.
     */
    configureAccessory(accessory: MyPlatformAccessory): void;
    /**
     * Accessories must only be registered once, previously created accessories
     * must not be registered again to prevent "duplicate UUID" errors.
     */
    bindCallback(): void;
    discoverDevices(): void;
    handleMessage: (msg: Buffer, rinfo: {
        address: string;
        family: string;
        port: number;
        size: number;
    }) => void;
    checkBindingStatus(bindNo: number, address: string, port: number, encryptionVersion: number, mac: string): void;
    registerDevice: (deviceInfo: any) => void;
    sendScan(): void;
    sendEncryptedMessage(message: unknown, mac: string, address: string, port: number, encryptionVersion: number, key?: string): void;
    getNetworkAddresses(bindInterfaces: any): Record<string, string>;
    getAccessory(mac: string): MyPlatformAccessory;
    sendACBindRequest(ac: GreeAirConditioner): void;
    checkACBindingStatus(bindNo: number, ac: GreeAirConditioner): void;
    handleACMessage: (ac: GreeAirConditioner, socket: Socket, msg: Buffer, rinfo: {
        address: string;
        family: string;
        port: number;
        size: number;
    }) => void;
}

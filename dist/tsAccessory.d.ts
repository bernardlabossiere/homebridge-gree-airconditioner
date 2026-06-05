import type { CharacteristicValue, Service } from 'homebridge';
import type { GreeACPlatform, MyPlatformAccessory } from './platform.js';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class GreeAirConditionerTS {
    private readonly platform;
    private readonly accessory;
    TemperatureSensor: Service;
    private currentTemperature;
    constructor(platform: GreeACPlatform, accessory: MyPlatformAccessory);
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
    getCurrentTemperature(): Promise<CharacteristicValue>;
    setCurrentTemperature(value: number): void;
    getDeviceLabel(): string;
}

/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export declare const PLATFORM_NAME = "GREEAirConditioner";
/**
 * This must match the name of your plugin as defined the package.json `name` property
 */
export declare const PLUGIN_NAME = "homebridge-gree-ac";
export declare const MODIFY_VERTICAL_SWING_POSITION: {
    never: number;
    overrideDefPowerOn: number;
    overrideDefPowerOnOscDisable: number;
    setPowerOn: number;
    setPowerOnOscDisable: number;
};
export declare const ENCRYPTION_VERSION: {
    auto: number;
    v1: number;
    v2: number;
};
export declare const TS_TYPE: {
    disabled: string;
    separate: string;
    child: string;
};
export declare const TEMPERATURE_STEPS: {
    celsius: number;
    fahrenheit: number;
};
export interface DeviceConfig {
    name?: string;
    model?: string;
    speedSteps: number;
    statusUpdateInterval: number;
    sensorOffset: number;
    minimumTargetTemperature: number;
    maximumTargetTemperature: number;
    xFanEnabled: boolean;
    temperatureSensor: string;
    temperatureStepSize?: number;
    disabled?: boolean;
    defaultVerticalSwing?: number;
    defaultFanVerticalSwing?: number;
    overrideDefaultVerticalSwing?: number;
    modifyVerticalSwingPosition?: number;
    encryptionVersion?: number;
    port?: number;
    ip?: string;
    fanControlEnabled?: boolean;
    silentTimeRange?: string;
}
interface DefaultDeviceConfig extends DeviceConfig {
    temperatureStepSize: number;
    defaultVerticalSwing: number;
    defaultFanVerticalSwing: number;
    modifyVerticalSwingPosition: number;
    encryptionVersion: number;
}
export declare const DEFAULT_DEVICE_CONFIG: DefaultDeviceConfig;
export declare const TEMPERATURE_LIMITS: {
    coolingMinimum: number;
    coolingMaximum: number;
    heatingMinimum: number;
    heatingMaximum: number;
};
export declare const UDP_SCAN_PORT = 7000;
export declare const TEMPERATURE_TABLE: {
    [key: string]: number;
};
export declare const DEF_SCAN_INTERVAL = 60;
export declare const BINDING_TIMEOUT = 29000;
export {};

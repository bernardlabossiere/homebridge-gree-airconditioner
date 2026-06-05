type CommandValueMap = Record<string, number>;
interface CommandWithValue {
    code: string;
    value: CommandValueMap;
}
interface CommandWithoutValue {
    code: string;
}
interface Commands {
    power: CommandWithValue;
    mode: CommandWithValue;
    targetTemperature: CommandWithoutValue;
    temperature: CommandWithoutValue;
    units: CommandWithValue;
    temperatureOffset: CommandWithoutValue;
    speed: CommandWithValue;
    swingHorizontal: CommandWithValue;
    swingVertical: CommandWithValue;
    xFan: CommandWithValue;
    light: CommandWithValue;
    quietMode: CommandWithValue;
    powerfulMode: CommandWithValue;
    HeatCoolType: CommandWithoutValue;
    energySaving: CommandWithValue;
    sleepMode: CommandWithValue;
    sleep: CommandWithValue;
    time: CommandWithoutValue;
    air: CommandWithValue;
    health: CommandWithValue;
    nofrost: CommandWithValue;
    buzzer: CommandWithValue;
}
export type { CommandValueMap, Commands };
declare const commands: Commands;
export default commands;

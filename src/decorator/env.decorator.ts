import 'dotenv/config';

export function EnvString(property: string, defaultValue: string) {
  return (target, key?: string) => {
    target[key] = () => process.env[property] ? process.env[property] : defaultValue;
  };
}

export function EnvNumber(property: string, defaultValue: number) {
  return (target, key?: string) => {
    target[key] = () => process.env[property] ? parseFloat(process.env[property]) : defaultValue;
  };
}

export function EnvBoolean(property: string, defaultValue: number , trueValues: string[] = ['true']) {
  trueValues = trueValues || [];
  return (target, key?: string) => {
    target[key] = () => process.env[property] ? trueValues.includes(process.env[property]) : defaultValue;
  };
}

export function EnvExists(property: string) {
  return (target, key?: string) => {
    target[key] = () => !!process.env[property];
  };
}

export function EnvTransform<T>(property: string, transform: (value: string) => T, defaultValue: T) {
  return (target, key?: string) => {
    target[key] = () => process.env[property] ? transform(process.env[property]) : defaultValue;
  };
}

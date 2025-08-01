import { networkInterfaces } from 'os';
import _ from 'lodash'

export function getWifiIPv4() {
  const interfaces = networkInterfaces();
  for (const interfaceName in interfaces) {
    const networkInterface = interfaces[interfaceName];
    if(!_.isNil(networkInterface)) {
        for (const network of networkInterface) {
          if (
            network.family === 'IPv4' &&
            !network.internal &&
            interfaceName.includes('Wi-Fi')
          ) {
            return network.address;
          }
        }
    }
  }
  return null;
}
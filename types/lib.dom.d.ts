// import { EventHandler } from 'react';

interface Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

interface BatteryManager extends EventTarget {
  /**
   * This internal slot represents the charging state of the system's battery.
   * It MUST be set to false if the battery is discharging, and set to true
   * if the battery is charging, the implementation is unable to report the
   * state, or there is no battery attached to the system, or otherwise.
   */
  readonly charging: boolean;

  /**
   * This internal slot represents the remaining time in seconds until the system's
   * battery is fully charged. It MUST be set to 0 if the battery is full or
   * there is no battery attached to the system, and to the value positive Infinity
   * if the battery is discharging, the implementation is unable to report the
   * remaining charging time, or otherwise.
   */
  readonly chargingTime: number;

  /**
   * This attribute represents the remaining time in seconds until the system's
   * battery is completely discharged and the system is about to be suspended.
   * It MUST be set to the value positive Infinity if the battery is charging,
   * the implementation is unable to report the remaining discharging time,
   * there is no battery attached to the system, or otherwise.
   */
  readonly dischargingTime: number;

  /**
   * This internal slot represents the system's battery's level. It MUST be set
   * to 0 if the system's battery is depleted and the system is about to be
   * suspended, and to 1.0 if the battery is full, the implementation is unable
   * to report the battery's level, or there is no battery attached to the system.
   */
  readonly level: number;

  onchargingchange: (event: Event) => void;
  onchargingtimechange: (event: Event) => void;
  ondischargingtimechange: (event: Event) => void;
  onlevelchange: (event: Event) => void;
}

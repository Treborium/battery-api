import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [battery, setBattery] = useState<BatteryManager | undefined>(undefined);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator
        .getBattery()
        .then(setBattery)
        .catch((err: any) => console.error(err));
    }
  }, []);

  const displayBatteryChargingStatus = () =>
    battery!.charging ? 'charging' : 'discharging';

  return (
    <div>
      {battery ? (
        <>
          <h1>Battery percentage: {battery.level}</h1>
          <h1>Battery charging: {displayBatteryChargingStatus()}</h1>
          <h1>Battery chargingTime: {battery.chargingTime}</h1>
          <h1>
            Battery dischargingTime:{' '}
            {`${secondsToHours(battery.dischargingTime)} hours`}
          </h1>
        </>
      ) : (
        <h1>Battery API not available. Please try on Google Chrome</h1>
      )}
    </div>
  );
};

export default Home;

const secondsToHours = (seconds: number): string => {
  return (seconds / 60 / 60).toPrecision(2);
};

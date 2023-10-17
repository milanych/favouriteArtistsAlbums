import React, {useState, useEffect} from "react";

const colors = ["#92c952", "#771796", "#24f355", "#d32776", "#f66b97"];

export default function TextColorSwitcher() {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setvalue((v) => {
        return v;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
console.log(value)
  );
}

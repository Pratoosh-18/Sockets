import { useState,useEffect } from "react";

function App() {

  const [calculationValue, setCalculationValue] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000');

    ws.onmessage = (event) => {
      console.log(event.data)
      const data = JSON.parse(event.data);
      setCalculationValue(data.value);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        {/* Hello */}
        {calculationValue}
      </div>
    </>
  )
}

export default App
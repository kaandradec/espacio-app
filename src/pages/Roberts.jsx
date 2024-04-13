import useGamepad from "../hooks/useGamepad";

export default function Roberts() {
  const {
    axisLeftX,
    axisLeftY,
    axisRightX,
    axisRightY,
    lsPressed,
    rsPressed,
    lPressed,
    rPressed,
    ltPressed,
    rtPressed,
    aPressed,
    bPressed,
    xPressed,
    yPressed,
    dPad,
    selectPressed,
    startPressed,
  } = useGamepad();

  const handleDPad = (value) => {
    if (value > 2) return "";
    if (value > 0 && value < 0.65) return "DOWN";
    if (value < 0 && value > -0.9) return "RIGHT";
    if (value > 0.65) return "LEFT";

    if (value < 0.9) return "UP";
  };

  return (
    <div>
      <div>
        <h1 className="text-6xl text-blue-500 font-bold">ROBERS</h1>
        <h1>LEFT JOYSTICK</h1>
        <h2>X: {axisLeftX}</h2>
        <h2>Y: {axisLeftY}</h2>
        <h2>LS: {lsPressed ? "Pressed" : ""}</h2>
        <h1>RIGHT JOYSTICK</h1>
        <h2>X: {axisRightX}</h2>
        <h2>Y: {axisRightY}</h2>
        <h2>RS: {rsPressed ? "Pressed" : ""}</h2>
        <h1>BUMPERS</h1>
        <h2>L: {lPressed ? "Pressed" : ""}</h2>
        <h2>R: {rPressed ? "Pressed" : ""}</h2>
        <h1>TRIGGERS</h1>
        <h2>LT: {ltPressed ? "Pressed" : ""}</h2>
        <h2>RT: {rtPressed ? "Pressed" : ""}</h2>
        <h1>BUTTONS</h1>
        <h1>Botón A: {aPressed ? "Pressed" : ""}</h1>
        <h1>Botón B: {bPressed ? "Pressed" : ""}</h1>
        <h1>Botón X: {xPressed ? "Pressed" : ""}</h1>
        <h1>Botón Y: {yPressed ? "Pressed" : ""}</h1>
        <h1>DPad: {handleDPad(dPad)}</h1>
        <h1>SELECT: {selectPressed ? "Pressed" : ""}</h1>
        <h1>START: {startPressed ? "Pressed" : ""}</h1>
      </div>
    </div>
  );
}

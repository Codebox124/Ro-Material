import { ThemeProvider } from "@mui/material/styles";
import "mapbox-gl/dist/mapbox-gl.css";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import MainAppScreen from "./MainAppScreen";
import { DarkTheme } from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <ErrorBoundary fallback={<div>Failed to load the Cams App</div>}>
          <MainAppScreen />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;

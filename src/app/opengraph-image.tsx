import { ImageResponse } from "next/og";

export const alt = "Marea PXM — El Pacífico, a tu manera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 72px",
          color: "#f5f1e7",
          background: "#082b2a",
          fontFamily: "Arial",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 999,
            right: -180,
            top: -180,
            background: "#ff6b4a",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            right: -120,
            top: -120,
            border: "2px solid rgba(245,241,231,.3)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, fontWeight: 800, letterSpacing: 4 }}>
          <span style={{ color: "#ff6b4a", fontSize: 44 }}>M</span>
          <span>MAREA PXM</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ color: "#d9ed67", fontSize: 18, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 18 }}>
            Puerto Escondido · Oaxaca
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1, fontWeight: 700, letterSpacing: -3 }}>
            <span>El Pacífico,</span>
            <span style={{ color: "#ff6b4a" }}>a tu manera.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 17, color: "rgba(245,241,231,.68)" }}>
          <span>Guía editorial · Rutas · Planificador</span>
          <span style={{ color: "#f5f1e7" }}>mareapxm</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

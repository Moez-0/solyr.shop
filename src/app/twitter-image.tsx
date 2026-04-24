import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#003153",
          color: "#f7f7f2",
          fontFamily: "Inter, Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(247, 247, 242, 0.24)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -140,
            bottom: -170,
            width: 520,
            height: 520,
            borderRadius: "999px",
            border: "2px solid rgba(247, 247, 242, 0.16)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "76px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 8,
                textTransform: "uppercase",
                fontWeight: 700,
                opacity: 0.9,
              }}
            >
              Solyr
            </div>
            <div
              style={{
                fontSize: 152,
                letterSpacing: -4,
                lineHeight: 0.92,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              Sun Printed
            </div>
            <div
              style={{
                fontSize: 76,
                letterSpacing: -2,
                lineHeight: 0.95,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Artwear
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderTop: "2px solid rgba(247, 247, 242, 0.22)",
              paddingTop: 24,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <span>Crop Tops</span>
            <span>solyr.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
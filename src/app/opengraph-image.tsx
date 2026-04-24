import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f7f7f2",
          color: "#003153",
          fontFamily: "Inter, Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(0, 49, 83, 0.24)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 460,
            height: 460,
            borderRadius: "999px",
            border: "2px solid rgba(0, 49, 83, 0.14)",
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
                opacity: 0.85,
              }}
            >
              Sun Printed Artwear
            </div>
            <div
              style={{
                fontSize: 178,
                letterSpacing: -6,
                lineHeight: 0.9,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              SOLYR
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderTop: "2px solid rgba(0, 49, 83, 0.2)",
              paddingTop: 24,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <span>Batch 01</span>
            <span>Join the Archive</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "株式会社エバンティア - 採用コンサルティング・RPO・スカウト代行";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #1a3a2a 0%, #0d1f17 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #4ade80 0%, transparent 50%), radial-gradient(circle at 75% 75%, #22c55e 0%, transparent 50%)",
          }}
        />

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #22c55e, #4ade80)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          {/* Company name */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.3em",
              marginBottom: 24,
              color: "#4ade80",
            }}
          >
            EVANTIA
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: 24,
              maxWidth: "900px",
            }}
          >
            挑戦の価値と面白さを
            <br />
            最大化する
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.8)",
              marginTop: 20,
            }}
          >
            採用コンサルティング・RPO・スカウト代行
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>株式会社エバンティア</span>
          <span style={{ color: "#4ade80" }}>|</span>
          <span>evantia-co.jp</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

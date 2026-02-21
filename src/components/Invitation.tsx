import React from 'react';
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from 'lucide-react';

const sparkleData = [
  {
    top: '2%',
    left: '8%',
    delay: '0s',
    dur: '1.8s',
    size: 5,
    color: '#ffffff'
  },
  {
    top: '4%',
    left: '22%',
    delay: '0.4s',
    dur: '2.2s',
    size: 4,
    color: '#fde68a'
  },
  {
    top: '3%',
    left: '55%',
    delay: '0.9s',
    dur: '1.6s',
    size: 5,
    color: '#ffffff'
  },
  {
    top: '2%',
    left: '72%',
    delay: '0.2s',
    dur: '2.4s',
    size: 4,
    color: '#a5f3fc'
  },
  {
    top: '5%',
    left: '88%',
    delay: '1.1s',
    dur: '1.9s',
    size: 5,
    color: '#ffffff'
  },
  {
    top: '9%',
    left: '3%',
    delay: '0.6s',
    dur: '2.1s',
    size: 4,
    color: '#fde68a'
  },
  {
    top: '11%',
    left: '40%',
    delay: '1.4s',
    dur: '1.7s',
    size: 3,
    color: '#ffffff'
  },
  {
    top: '10%',
    left: '78%',
    delay: '0.3s',
    dur: '2.3s',
    size: 4,
    color: '#c4b5fd'
  },
  {
    top: '15%',
    left: '15%',
    delay: '0.8s',
    dur: '1.5s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '18%',
    left: '62%',
    delay: '1.6s',
    dur: '2.0s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '20%',
    left: '92%',
    delay: '0.1s',
    dur: '1.8s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '22%',
    left: '5%',
    delay: '1.2s',
    dur: '2.2s',
    size: 3,
    color: '#a5f3fc'
  },
  {
    top: '25%',
    left: '30%',
    delay: '0.5s',
    dur: '1.6s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '28%',
    left: '80%',
    delay: '1.8s',
    dur: '2.4s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '32%',
    left: '12%',
    delay: '0.7s',
    dur: '1.9s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '35%',
    left: '50%',
    delay: '1.3s',
    dur: '2.1s',
    size: 3,
    color: '#c4b5fd'
  },
  {
    top: '38%',
    left: '88%',
    delay: '0.4s',
    dur: '1.7s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '40%',
    left: '3%',
    delay: '1.0s',
    dur: '2.3s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '43%',
    left: '68%',
    delay: '0.2s',
    dur: '1.5s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '46%',
    left: '25%',
    delay: '1.5s',
    dur: '2.0s',
    size: 3,
    color: '#a5f3fc'
  },
  {
    top: '50%',
    left: '92%',
    delay: '0.8s',
    dur: '1.8s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '52%',
    left: '8%',
    delay: '1.7s',
    dur: '2.2s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '55%',
    left: '45%',
    delay: '0.3s',
    dur: '1.6s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '58%',
    left: '75%',
    delay: '1.1s',
    dur: '2.4s',
    size: 3,
    color: '#c4b5fd'
  },
  {
    top: '62%',
    left: '18%',
    delay: '0.6s',
    dur: '1.9s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '65%',
    left: '58%',
    delay: '1.4s',
    dur: '2.1s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '68%',
    left: '90%',
    delay: '0.1s',
    dur: '1.7s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '70%',
    left: '5%',
    delay: '1.9s',
    dur: '2.3s',
    size: 3,
    color: '#a5f3fc'
  },
  {
    top: '73%',
    left: '35%',
    delay: '0.5s',
    dur: '1.5s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '76%',
    left: '70%',
    delay: '1.2s',
    dur: '2.0s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '80%',
    left: '15%',
    delay: '0.9s',
    dur: '1.8s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '83%',
    left: '52%',
    delay: '1.6s',
    dur: '2.2s',
    size: 3,
    color: '#c4b5fd'
  },
  {
    top: '86%',
    left: '85%',
    delay: '0.4s',
    dur: '1.6s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '89%',
    left: '28%',
    delay: '1.0s',
    dur: '2.4s',
    size: 3,
    color: '#fde68a'
  },
  {
    top: '92%',
    left: '65%',
    delay: '0.7s',
    dur: '1.9s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '95%',
    left: '10%',
    delay: '1.3s',
    dur: '2.1s',
    size: 3,
    color: '#a5f3fc'
  },
  {
    top: '97%',
    left: '42%',
    delay: '0.2s',
    dur: '1.7s',
    size: 4,
    color: '#ffffff'
  },
  {
    top: '96%',
    left: '80%',
    delay: '1.8s',
    dur: '2.3s',
    size: 3,
    color: '#fde68a'
  }];

const heartData = [
  {
    top: '4%',
    left: '16%',
    delay: '0s',
    color: 'rgba(196,181,253,0.7)',
    size: 14
  },
  {
    top: '6%',
    left: '68%',
    delay: '0.8s',
    color: 'rgba(167,243,208,0.7)',
    size: 11
  },
  {
    top: '14%',
    left: '90%',
    delay: '1.5s',
    color: 'rgba(196,181,253,0.6)',
    size: 12
  },
  {
    top: '28%',
    left: '2%',
    delay: '0.4s',
    color: 'rgba(167,243,208,0.6)',
    size: 11
  },
  {
    top: '45%',
    left: '94%',
    delay: '1.2s',
    color: 'rgba(196,181,253,0.7)',
    size: 14
  },
  {
    top: '58%',
    left: '1%',
    delay: '0.6s',
    color: 'rgba(167,243,208,0.7)',
    size: 11
  },
  {
    top: '72%',
    left: '92%',
    delay: '1.8s',
    color: 'rgba(196,181,253,0.6)',
    size: 12
  },
  {
    top: '85%',
    left: '5%',
    delay: '0.3s',
    color: 'rgba(167,243,208,0.6)',
    size: 11
  },
  {
    top: '91%',
    left: '75%',
    delay: '1.0s',
    color: 'rgba(196,181,253,0.7)',
    size: 14
  },
  // Extra hearts
  {
    top: '10%',
    left: '48%',
    delay: '0.5s',
    color: 'rgba(216,180,254,0.6)',
    size: 10
  },
  {
    top: '20%',
    left: '32%',
    delay: '1.3s',
    color: 'rgba(153,246,228,0.6)',
    size: 9
  },
  {
    top: '33%',
    left: '82%',
    delay: '0.9s',
    color: 'rgba(196,181,253,0.5)',
    size: 11
  },
  {
    top: '38%',
    left: '12%',
    delay: '1.7s',
    color: 'rgba(167,243,208,0.5)',
    size: 10
  },
  {
    top: '50%',
    left: '55%',
    delay: '0.2s',
    color: 'rgba(216,180,254,0.6)',
    size: 9
  },
  {
    top: '63%',
    left: '30%',
    delay: '1.4s',
    color: 'rgba(153,246,228,0.6)',
    size: 11
  },
  {
    top: '68%',
    left: '70%',
    delay: '0.7s',
    color: 'rgba(196,181,253,0.5)',
    size: 10
  },
  {
    top: '78%',
    left: '45%',
    delay: '1.1s',
    color: 'rgba(167,243,208,0.6)',
    size: 9
  },
  {
    top: '88%',
    left: '22%',
    delay: '0.4s',
    color: 'rgba(216,180,254,0.6)',
    size: 11
  },
  {
    top: '94%',
    left: '58%',
    delay: '1.6s',
    color: 'rgba(153,246,228,0.5)',
    size: 10
  }];

// SVG 4-pointed star sparkle
function StarSparkle({
  x,
  y,
  size,
  color,
  delay,
  dur
}: { x: number; y: number; size: number; color: string; delay: string; dur: string; }) {
  const s = size / 2;
  return (
    <g
      style={{
        animationDelay: delay
      }}>

      <path
        d={`M${x},${y - s} L${x + s * 0.2},${y - s * 0.2} L${x + s},${y} L${x + s * 0.2},${y + s * 0.2} L${x},${y + s} L${x - s * 0.2},${y + s * 0.2} L${x - s},${y} L${x - s * 0.2},${y - s * 0.2} Z`}
        fill={color}
        className="sparkle-svg"
        style={{
          animationDelay: delay,
          animationDuration: dur
        }} />

    </g>);

}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-2 my-3">
      <div
        style={{
          height: 1,
          width: 40,
          background:
            'linear-gradient(to right, transparent, rgba(167,139,250,0.6))'
        }} />

      <span
        style={{
          color: '#a78bfa',
          fontSize: 12
        }}>

        ✦
      </span>
      <span
        style={{
          color: '#d4af37',
          fontSize: 14
        }}>

        ♥
      </span>
      <span
        style={{
          color: '#5eead4',
          fontSize: 12
        }}>

        ✦
      </span>
      <div
        style={{
          height: 1,
          width: 40,
          background:
            'linear-gradient(to left, transparent, rgba(94,234,212,0.6))'
        }} />

    </div>);
}

export function Invitation() {
  return (
    <div
      className="relative w-full"
      style={{
        maxWidth: 420,
        margin: '0 auto'
      }}>

      {/* Outer glow wrapper */}
      <div
        style={{
          borderRadius: 20,
          padding: 3,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.8) 100%)',
          boxShadow:
            '0 8px 40px rgba(139,92,246,0.4), 0 4px 20px rgba(20,184,166,0.3)'
        }}>

        {/* Main card */}
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: 18,
            background:
              'linear-gradient(135deg, #c084fc 0%, #d8b4fe 20%, #ede9fe 40%, #f0fdf4 60%, #99f6e4 80%, #5eeaaa99 100%)',
            minHeight: 680
          }}>

          {/* Glitter overlay - dense dots */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
              `,
              backgroundSize:
                '37px 37px, 53px 53px, 29px 29px, 67px 67px, 43px 43px, 61px 61px, 31px 31px, 71px 71px',
              backgroundPosition:
                '0 0, 18px 18px, 9px 9px, 27px 27px, 5px 22px, 33px 11px, 15px 35px, 44px 6px'
            }} />


          {/* SVG sparkles layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              zIndex: 1
            }}
            preserveAspectRatio="none"
            viewBox="0 0 100 100">

            {sparkleData.map((s, i) =>
              <StarSparkle
                key={i}
                x={parseFloat(s.left)}
                y={parseFloat(s.top)}
                size={s.size * 0.6}
                color={s.color}
                delay={s.delay}
                dur={s.dur} />

            )}
          </svg>

          {/* Floating hearts */}
          {heartData.map((h, i) =>
            <span
              key={i}
              className="absolute float-heart pointer-events-none select-none"
              style={{
                top: h.top,
                left: h.left,
                fontSize: h.size,
                color: h.color,
                animationDelay: h.delay,
                zIndex: 1,
                lineHeight: 1
              }}>

              ♥
            </span>
          )}

          {/* ── ORNATE FRAME ── */}
          {/* Outer border */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 10,
              border: '2px solid rgba(255,255,255,0.85)',
              borderRadius: 12,
              zIndex: 2
            }} />

          {/* Inner border */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 14,
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: 9,
              zIndex: 2
            }} />


          {/* Top scallop notch */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: 4,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3
            }}>

            <div
              style={{
                width: 44,
                height: 22,
                background:
                  'linear-gradient(135deg, #c084fc 0%, #d8b4fe 50%, #99f6e4 100%)',
                borderRadius: '0 0 50% 50%',
                border: '2px solid rgba(255,255,255,0.85)',
                borderTop: 'none'
              }} />

          </div>
          {/* Bottom scallop notch */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 4,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3
            }}>

            <div
              style={{
                width: 44,
                height: 22,
                background:
                  'linear-gradient(135deg, #99f6e4 0%, #d8b4fe 50%, #c084fc 100%)',
                borderRadius: '50% 50% 0 0',
                border: '2px solid rgba(255,255,255,0.85)',
                borderBottom: 'none'
              }} />

          </div>
          {/* Left scallop notch */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 4,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3
            }}>

            <div
              style={{
                width: 22,
                height: 44,
                background: 'linear-gradient(135deg, #c084fc 0%, #d8b4fe 100%)',
                borderRadius: '0 50% 50% 0',
                border: '2px solid rgba(255,255,255,0.85)',
                borderLeft: 'none'
              }} />

          </div>
          {/* Right scallop notch */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: 4,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3
            }}>

            <div
              style={{
                width: 22,
                height: 44,
                background: 'linear-gradient(135deg, #99f6e4 0%, #d8b4fe 100%)',
                borderRadius: '50% 0 0 50%',
                border: '2px solid rgba(255,255,255,0.85)',
                borderRight: 'none'
              }} />

          </div>

          {/* Gold heart on top of frame */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: -14,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}>

            <div
              style={{
                width: 36,
                height: 36,
                background:
                  'linear-gradient(135deg, #a78bfa 0%, #d4af37 50%, #5eead4 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(167,139,250,0.5)',
                fontSize: 18,
                border: '2px solid rgba(255,255,255,0.8)'
              }}>

              <span
                style={{
                  lineHeight: 1
                }}>

                💜
              </span>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div
            className="relative text-center"
            style={{
              zIndex: 5,
              padding: '44px 28px 28px'
            }}>

            {/* Title */}
            <h1
              className="font-great-vibes"
              style={{
                fontSize: 52,
                lineHeight: 1.1,
                color: '#4c1d95',
                textShadow: '0 1px 3px rgba(255,255,255,0.6)',
                marginBottom: 4
              }}>

              Chá Revelação
            </h1>
            <span
              style={{
                fontSize: 18,
                marginLeft: 4
              }}>

              ✨
            </span>

            {/* Subtitle */}
            <p
              className="font-nunito"
              style={{
                color: '#374151',
                fontSize: 14,
                lineHeight: 1.6,
                marginTop: 12
              }}>

              Nosso coração está cheio de amor...
            </p>
            <p
              className="font-nunito"
              style={{
                color: '#374151',
                fontSize: 14,
                lineHeight: 1.6
              }}>

              E chegou a hora de descobrir:
            </p>

            <Divider />

            {/* Guria ou Guri */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                gap: 12,
                margin: '8px 0 16px'
              }}>

              <span
                className="font-dancing"
                style={{
                  fontSize: 46,
                  fontWeight: 700,
                  color: '#7c3aed',
                  fontStyle: 'italic'
                }}>

                Guria
              </span>
              <span
                className="font-nunito"
                style={{
                  fontSize: 18,
                  color: '#6b7280'
                }}>

                ou
              </span>
              <span
                className="font-dancing"
                style={{
                  fontSize: 46,
                  fontWeight: 700,
                  color: '#0d9488',
                  fontStyle: 'italic'
                }}>

                Guri?
              </span>
            </div>

            {/* Event details */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                margin: '16px 0'
              }}>

              {[
                {
                  Icon: CalendarDaysIcon,
                  text: '28 de fevereiro de 2026'
                },
                {
                  Icon: ClockIcon,
                  text: 'A partir das 15:30'
                },
                {
                  Icon: MapPinIcon,
                  text: 'Rua José do Patrocinio, 529'
                }].
                map(({ Icon, text }) =>
                  <div
                    key={text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8
                    }}>

                    <Icon
                      style={{
                        width: 16,
                        height: 16,
                        color: '#7c3aed',
                        flexShrink: 0
                      }} />

                    <span
                      className="font-nunito"
                      style={{
                        fontSize: 14,
                        color: '#374151',
                        fontWeight: 600
                      }}>

                      {text}
                    </span>
                  </div>
                )}
            </div>

            {/* Body message */}
            <p
              className="font-nunito"
              style={{
                color: '#374151',
                fontSize: 14,
                lineHeight: 1.7,
                margin: '12px 0'
              }}>

              Será um dia inesquecível, e queremos
              <br />
              você com a gente para viver essa{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: '#6d28d9',
                  fontWeight: 600
                }}>

                emoção
              </em>
              !
            </p>

            <Divider />

            {/* Signature */}
            <p
              className="font-dancing"
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 4
              }}>

              Com carinho,
            </p>
            <p
              className="font-nunito"
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#6d28d9'
              }}>

              Leo S. & Julia M. 💚
            </p>

            <Divider />

            {/* RSVP Box */}
            <div
              style={{
                margin: '8px auto 8px',
                maxWidth: 260,
                padding: '12px 20px',
                borderRadius: 14,
                background:
                  'linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fefce8 100%)',
                border: '1.5px solid rgba(212,197,169,0.8)',
                boxShadow:
                  '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
              }}>

              <p
                className="font-nunito"
                style={{
                  color: '#374151',
                  fontSize: 13,
                  lineHeight: 1.6
                }}>

                Por favor, confirme sua presença
                <br />
                até o dia <strong>26 de fevereiro</strong>.
              </p>
            </div>

            <div
              style={{
                marginTop: 8
              }}>

              <span
                style={{
                  color: '#a78bfa',
                  fontSize: 12
                }}>

                ♥ ♥
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
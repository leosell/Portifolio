import React from 'react';
import { Gift } from 'lucide-react';
import { Convite, ConviteEnquete } from '../pages/convite-cha-revelacao';

const decorations = [
  {
    symbol: '✦',
    top: '6%',
    left: '8%',
    color: '#a78bfa',
    size: '1.4rem',
    opacity: 0.7
  },
  {
    symbol: '✧',
    top: '10%',
    right: '10%',
    color: '#6ee7b7',
    size: '1rem',
    opacity: 0.6
  },
  {
    symbol: '+',
    top: '18%',
    left: '18%',
    color: '#c4b5fd',
    size: '1.1rem',
    opacity: 0.5
  },
  {
    symbol: '✦',
    top: '25%',
    right: '6%',
    color: '#a78bfa',
    size: '0.9rem',
    opacity: 0.5
  },
  {
    symbol: '✧',
    top: '40%',
    left: '4%',
    color: '#6ee7b7',
    size: '1.2rem',
    opacity: 0.4
  },
  {
    symbol: '+',
    top: '55%',
    right: '8%',
    color: '#c4b5fd',
    size: '1rem',
    opacity: 0.5
  },
  {
    symbol: '✦',
    top: '65%',
    left: '10%',
    color: '#a78bfa',
    size: '1.3rem',
    opacity: 0.6
  },
  {
    symbol: '✧',
    top: '75%',
    right: '15%',
    color: '#6ee7b7',
    size: '0.9rem',
    opacity: 0.5
  },
  {
    symbol: '+',
    top: '82%',
    left: '20%',
    color: '#c4b5fd',
    size: '1.1rem',
    opacity: 0.4
  },
  {
    symbol: '✦',
    top: '90%',
    right: '8%',
    color: '#a78bfa',
    size: '1rem',
    opacity: 0.5
  },
  {
    symbol: '✧',
    top: '3%',
    left: '45%',
    color: '#6ee7b7',
    size: '0.8rem',
    opacity: 0.4
  },
  {
    symbol: '+',
    top: '95%',
    left: '50%',
    color: '#c4b5fd',
    size: '0.9rem',
    opacity: 0.4
  }
];

const giftItems = [
  'Shampoo e Condicionador',
  'Sabonete líquido',
  'Colônia',
  'Pomada',
  'Fralda de boca',
  'Lenço Umidecido',
];

export function ConfirmationPage({ convite, conviteEnquete }: { convite: Convite, conviteEnquete: ConviteEnquete }) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #ede9f8 0%, #ddd8f5 40%, #d4eef0 100%)',
        fontFamily: "'Nunito', sans-serif"
      }}>

      {/* Scattered decorations */}
      {decorations.map((d, i) =>
        <span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            color: d.color,
            fontSize: d.size,
            opacity: d.opacity
          }}>

          {d.symbol}
        </span>
      )}

      {/* Soft gradient orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Main Card — double border like the invite */}
      <div
        className="relative w-full max-w-sm shadow-2xl"
        style={{
          background: 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(12px)',
          borderRadius: '2rem',
          border: '2px solid rgba(167,139,250,0.35)',
          padding: '4px'
        }}>

        <div
          style={{
            borderRadius: '1.75rem',
            border: '1.5px solid rgba(167,139,250,0.25)',
            padding: '2rem 1.75rem'
          }}
          className="flex flex-col items-center text-center">

          {/* Top sparkle row */}
          <div className="flex items-center gap-2 mb-5 text-purple-300">
            <span
              style={{
                fontSize: '0.85rem'
              }}>

              ✦
            </span>
            <span
              style={{
                fontSize: '1rem',
                color: '#f59e0b'
              }}>

              💛
            </span>
            <span
              style={{
                fontSize: '0.85rem'
              }}>

              ✦
            </span>
          </div>

          {/* Confirmation heading */}
          <div
            className="mb-1 animate-fade-up"
            style={{
              animationDelay: '0s',
              opacity: 0
            }}>

            <div className="text-4xl mb-2">🎉</div>
            <h1
              className="font-script text-purple-700 leading-tight"
              style={{
                fontSize: '2.6rem',
                fontWeight: 700
              }}>

              Presença confirmada,
            </h1>
            <h2
              className="font-nunito text-purple-500"
              style={{
                fontSize: '2rem',
                fontWeight: 600
              }}
            >
              {convite?.nome}!
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 my-5 text-purple-300">
            <div
              className="h-px bg-purple-200"
              style={{
                width: '3rem'
              }} />

            <span
              style={{
                fontSize: '0.8rem'
              }}>

              ✦
            </span>
            <span
              style={{
                fontSize: '0.9rem',
                color: '#f59e0b'
              }}>

              💛
            </span>
            <span
              style={{
                fontSize: '0.8rem'
              }}>

              ✦
            </span>
            <div
              className="h-px bg-purple-200"
              style={{
                width: '3rem'
              }} />

          </div>

          {/* Vote badge */}
          <div
            className="w-full mb-6 animate-fade-up"
            style={{
              animationDelay: '0.15s',
              opacity: 0
            }}>

            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{
                color: '#9ca3af',
                fontWeight: 700
              }}>

              Seu palpite
            </p>
            <div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
                border: '1.5px solid #d8b4fe'
              }}>

              <span
                className="font-great-vibes"
                style={{
                  fontSize: '1.8rem',
                  color: '#7c3aed',
                  fontWeight: 700
                }}>

                {convite?.sexo == 'GURI' ? 'Gurí' : convite?.sexo === 'GURIA' ? 'Guria' : ''}
              </span>
              <span
                style={{
                  fontSize: '1.1rem'
                }}
              >
                {convite?.sexo === 'GURI' ? '💚' : convite?.sexo === 'GURIA' ? '💜' : ''}

              </span>
            </div>
          </div>

          {/* Poll results */}
          <div
            className="w-full mb-6 animate-fade-up"
            style={{
              animationDelay: '0.3s',
              opacity: 0
            }}>

            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{
                color: '#9ca3af',
                fontWeight: 700
              }}>

              Placar geral
            </p>

            <div className="grid grid-cols-2 gap-3">
              {/* Guri */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                  border: '1.5px solid #6ee7b7'
                }}>

                <p
                  className="font-great-vibes mb-1"
                  style={{
                    fontSize: '1.5rem',
                    color: '#065f46',
                    fontWeight: 700
                  }}>

                  Gurí
                </p>
                <p
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#047857',
                    lineHeight: 1
                  }}>

                  {conviteEnquete?.guri || 0}
                </p>
              </div>

              {/* Guria */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
                  border: '1.5px solid #c4b5fd'
                }}>

                <p
                  className="font-great-vibes mb-1"
                  style={{
                    fontSize: '1.5rem',
                    color: '#4c1d95',
                    fontWeight: 700
                  }}>

                  Guria
                </p>
                <p
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#6d28d9',
                    lineHeight: 1
                  }}>

                  {conviteEnquete?.guria || 0}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-5 text-purple-300">
            <div
              className="h-px bg-purple-200"
              style={{
                width: '3rem'
              }} />

            <span
              style={{
                fontSize: '0.8rem'
              }}>

              ✦
            </span>
            <span
              style={{
                fontSize: '0.9rem',
                color: '#f59e0b'
              }}>

              💛
            </span>
            <span
              style={{
                fontSize: '0.8rem'
              }}>

              ✦
            </span>
            <div
              className="h-px bg-purple-200"
              style={{
                width: '3rem'
              }} />

          </div>

          {/* Gift list */}
          <div
            className="w-full animate-fade-up"
            style={{
              animationDelay: '0.45s',
              opacity: 0
            }}>

            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift
                className="w-4 h-4"
                style={{
                  color: '#a78bfa'
                }} />

              <h3
                className="font-nunito"
                style={{
                  fontSize: '1.5rem',
                  color: '#6d28d9',
                  fontWeight: 700
                }}>

                Lista de Presentes
              </h3>
            </div>
            <p
              className="text-xs mb-4"
              style={{
                color: '#9ca3af'
              }}>

              apenas sugestões 💛
            </p>

            <div
              className="rounded-2xl p-4"
              style={{
                background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                border: '1.5px solid #a7f3d0'
              }}>

              <ul className="space-y-2 text-left">
                {giftItems.map((item, i) =>
                  <li key={i} className="flex items-center gap-2">
                    <span
                      style={{
                        fontSize: '0.85rem'
                      }}>

                      🎁
                    </span>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: '#065f46',
                        fontWeight: 600
                      }}>

                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <p
                className="text-xs mt-4"
                style={{
                  color: '#9ca3af'
                }}
              >
                Preferência pelas marca abaixo:
              </p>

              <ul
                className='text-md mt-1'
                style={{
                  color: '#9ca3af'
                }}
              >
                <li>Huggies</li>
                <li>Mustela</li>
                <li>Mamae e Bebe</li>
                <li>Baby Dove</li>
              </ul>
            </div>
          </div>

          {/* Footer signature */}
          <div className="mt-7">
            <div className="flex items-center gap-2 justify-center mb-2 text-purple-300">
              <span
                style={{
                  fontSize: '0.8rem'
                }}>

                ✦
              </span>
              <span
                style={{
                  fontSize: '0.9rem',
                  color: '#f59e0b'
                }}>

                💛
              </span>
              <span
                style={{
                  fontSize: '0.8rem'
                }}>

                ✦
              </span>
            </div>
            <div className='p-2'>
              <h2 className='text-black text-lg'>Endereço Atualizado:</h2>
              <p className='text-[#9ca3af] text-sm'>Rua José do Patrocinio, 529 - Estreito</p>
              <p className='text-[#9ca3af] text-sm'>28/02 à partir das 14h</p>
            </div>
            <p
              className="font-nunito"
              style={{
                fontSize: '1.6rem',
                color: '#7c3aed',
                fontWeight: 600
              }}>

              Leo &amp; Julia 🤍
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <span
                style={{
                  fontSize: '0.9rem'
                }}>

                💜
              </span>
              <span
                style={{
                  fontSize: '0.9rem'
                }}>

                💜
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
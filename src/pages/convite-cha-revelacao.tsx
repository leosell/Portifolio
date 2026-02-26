"use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { InvitationV2 } from "../components/InvitationV2";
// import apiIn100 from "../api/api-in100";

// export default function ConviteChaRevelacaoPage() {
//     return (
//         <div
//             className="min-h-screen w-full flex items-center justify-center"
//             style={{
//                 background: '#f0ebff',
//                 backgroundImage: `
//                     radial-gradient(ellipse 60% 80% at 0% 50%, rgba(167,139,250,0.45) 0%, transparent 70%),
//                     radial-gradient(ellipse 60% 80% at 100% 50%, rgba(167,139,250,0.45) 0%, transparent 70%),
//                     radial-gradient(ellipse 80% 40% at 50% 0%, rgba(196,181,253,0.3) 0%, transparent 60%),
//                     radial-gradient(ellipse 80% 40% at 50% 100%, rgba(196,181,253,0.3) 0%, transparent 60%)
//                 `,
//                 padding: '24px 12px'
//             }}
//         >
//             <InvitationV2 />
//         </div>
//     );
// }


import React, { use, useEffect, useState } from 'react';
import { CalendarDaysIcon, ClockIcon, Gift, MapPinIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import apiIn100 from '../api/api-in100';
import { ConfirmationPage } from '../components/ConfirmationPage';
import { on } from 'events';

const sparkleData = [
    {
        top: '2%',
        left: '8%',
        delay: '0s',
        dur: '1.8s',
        size: 5,
        color: '#c4b5fd'
    },
    {
        top: '4%',
        left: '22%',
        delay: '0.4s',
        dur: '2.2s',
        size: 4,
        color: '#a78bfa'
    },
    {
        top: '3%',
        left: '55%',
        delay: '0.9s',
        dur: '1.6s',
        size: 5,
        color: '#d8b4fe'
    },
    {
        top: '2%',
        left: '72%',
        delay: '0.2s',
        dur: '2.4s',
        size: 4,
        color: '#86efac'
    },
    {
        top: '5%',
        left: '88%',
        delay: '1.1s',
        dur: '1.9s',
        size: 5,
        color: '#c4b5fd'
    },
    {
        top: '9%',
        left: '3%',
        delay: '0.6s',
        dur: '2.1s',
        size: 4,
        color: '#a78bfa'
    },
    {
        top: '11%',
        left: '40%',
        delay: '1.4s',
        dur: '1.7s',
        size: 3,
        color: '#d8b4fe'
    },
    {
        top: '10%',
        left: '78%',
        delay: '0.3s',
        dur: '2.3s',
        size: 4,
        color: '#6ee7b7'
    },
    {
        top: '15%',
        left: '15%',
        delay: '0.8s',
        dur: '1.5s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '18%',
        left: '62%',
        delay: '1.6s',
        dur: '2.0s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '20%',
        left: '92%',
        delay: '0.1s',
        dur: '1.8s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '22%',
        left: '5%',
        delay: '1.2s',
        dur: '2.2s',
        size: 3,
        color: '#86efac'
    },
    {
        top: '25%',
        left: '30%',
        delay: '0.5s',
        dur: '1.6s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '28%',
        left: '80%',
        delay: '1.8s',
        dur: '2.4s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '32%',
        left: '12%',
        delay: '0.7s',
        dur: '1.9s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '35%',
        left: '50%',
        delay: '1.3s',
        dur: '2.1s',
        size: 3,
        color: '#6ee7b7'
    },
    {
        top: '38%',
        left: '88%',
        delay: '0.4s',
        dur: '1.7s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '40%',
        left: '3%',
        delay: '1.0s',
        dur: '2.3s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '43%',
        left: '68%',
        delay: '0.2s',
        dur: '1.5s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '46%',
        left: '25%',
        delay: '1.5s',
        dur: '2.0s',
        size: 3,
        color: '#86efac'
    },
    {
        top: '50%',
        left: '92%',
        delay: '0.8s',
        dur: '1.8s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '52%',
        left: '8%',
        delay: '1.7s',
        dur: '2.2s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '55%',
        left: '45%',
        delay: '0.3s',
        dur: '1.6s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '58%',
        left: '75%',
        delay: '1.1s',
        dur: '2.4s',
        size: 3,
        color: '#6ee7b7'
    },
    {
        top: '62%',
        left: '18%',
        delay: '0.6s',
        dur: '1.9s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '65%',
        left: '58%',
        delay: '1.4s',
        dur: '2.1s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '68%',
        left: '90%',
        delay: '0.1s',
        dur: '1.7s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '70%',
        left: '5%',
        delay: '1.9s',
        dur: '2.3s',
        size: 3,
        color: '#86efac'
    },
    {
        top: '73%',
        left: '35%',
        delay: '0.5s',
        dur: '1.5s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '76%',
        left: '70%',
        delay: '1.2s',
        dur: '2.0s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '80%',
        left: '15%',
        delay: '0.9s',
        dur: '1.8s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '83%',
        left: '52%',
        delay: '1.6s',
        dur: '2.2s',
        size: 3,
        color: '#6ee7b7'
    },
    {
        top: '86%',
        left: '85%',
        delay: '0.4s',
        dur: '1.6s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '89%',
        left: '28%',
        delay: '1.0s',
        dur: '2.4s',
        size: 3,
        color: '#a78bfa'
    },
    {
        top: '92%',
        left: '65%',
        delay: '0.7s',
        dur: '1.9s',
        size: 4,
        color: '#d8b4fe'
    },
    {
        top: '95%',
        left: '10%',
        delay: '1.3s',
        dur: '2.1s',
        size: 3,
        color: '#86efac'
    },
    {
        top: '97%',
        left: '42%',
        delay: '0.2s',
        dur: '1.7s',
        size: 4,
        color: '#c4b5fd'
    },
    {
        top: '96%',
        left: '80%',
        delay: '1.8s',
        dur: '2.3s',
        size: 3,
        color: '#a78bfa'
    }
];

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
    }
];

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
    'Lenço Umidecido',
    'Pomada',
    'Fraldas',
    'Body de algodão',
    'Manta'
];

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
            }}
        >

            <path
                d={`M${x},${y - s} L${x + s * 0.2},${y - s * 0.2} L${x + s},${y} L${x + s * 0.2},${y + s * 0.2} L${x},${y + s} L${x - s * 0.2},${y + s * 0.2} L${x - s},${y} L${x - s * 0.2},${y - s * 0.2} Z`}
                fill={color}
                className="sparkle-svg"
                style={{
                    animationDelay: delay,
                    animationDuration: dur
                }}
            />
        </g>
    );

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
                }}
            />

            <span
                style={{
                    color: '#a78bfa',
                    fontSize: 12
                }}
            >

                ✦
            </span>
            <span
                style={{
                    color: '#d4af37',
                    fontSize: 14
                }}
            >

                ♥
            </span>
            <span
                style={{
                    color: '#5eead4',
                    fontSize: 12
                }}
            >

                ✦
            </span>
            <div
                style={{
                    height: 1,
                    width: 40,
                    background:
                        'linear-gradient(to left, transparent, rgba(94,234,212,0.6))'
                }}
            />

        </div>);

}

type Sexo = "GURI" | "GURIA";

export interface Convite {
    id: number;
    nome: string;
    token: string;
    sexo: Sexo;
}

export interface ConviteEnquete {
    guri: number;
    guria: number;
}

const ConviteChaRevelacaoPage = () => {
    const router = useRouter();
    const [convite, setConvite] = useState<Convite>();
    const [conviteEnquete, setConviteEnquete] = useState<ConviteEnquete>();
    let isModalEnquete = false;
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState<Sexo>();
    const [token, setToken] = useState("");

    const onOpen = () => {
        setIsOpen(true);
    }

    const isClose = () => {
        setNome("");
        setSexo(undefined);
        setIsOpen(false);
    }

    const getTokenUser = async (token: string) => {
        try {
            const { data } = await apiIn100.get(`/convite/token?token=${token}`);
            setToken(data.token);
            if (data.sexo !== null && ["GURI", "GURIA"].includes(data.sexo)) {
                setConvite(data);
                isModalEnquete = true;
                await getEnquete();
            }
        } catch (e: any) {
            console.log("erro ao buscar token ", e);
            isModalEnquete = false;
            router.replace("/");
        }
    }

    const getEnquete = async () => {
        try {
            const { data } = await apiIn100.get(`/convite/sexos`);
            setConviteEnquete(data);
            console.log("respostas enquete ", data);
        } catch (e: any) {
            console.log("erro ao buscar enquete ", e);
            isModalEnquete = false;
        }
    }

    const confirmarPresenca = async () => {
        console.log("confirmar presença ", nome, sexo);
        console.log("token", convite?.token);

        try {
            const { data } = await apiIn100.post(`/convite`, {
                token,
                nome,
                sexo
            });
            await getTokenUser(data.token);
            await getEnquete();
        } catch (e: any) {
            console.log("erro ao confirmar presença ", e);
        }
    }

    useEffect(() => {
        const currentHash = window.location.href.split("#")[1];
        getTokenUser(currentHash);
    }, []);

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center"
            style={{
                background: '#f0ebff',
                backgroundImage: `
                    radial-gradient(ellipse 60% 80% at 0% 50%, rgba(167,139,250,0.45) 0%, transparent 70%),
                    radial-gradient(ellipse 60% 80% at 100% 50%, rgba(167,139,250,0.45) 0%, transparent 70%),
                    radial-gradient(ellipse 80% 40% at 50% 0%, rgba(196,181,253,0.3) 0%, transparent 60%),
                    radial-gradient(ellipse 80% 40% at 50% 100%, rgba(196,181,253,0.3) 0%, transparent 60%)
                `,
                padding: '24px 12px'
            }}
        >
            {!convite && convite?.sexo !== null ? (
                <div
                    className="relative w-full"
                    style={{
                        maxWidth: 420,
                        margin: '0 auto'
                    }}
                >
                    <div
                        style={{
                            borderRadius: 20,
                            padding: 2,
                            background: 'rgba(196,181,253,0.5)',
                            boxShadow:
                                '0 8px 40px rgba(139,92,246,0.15), 0 2px 12px rgba(139,92,246,0.1)'
                        }}
                    >
                        <div
                            className="relative overflow-hidden"
                            style={{
                                borderRadius: 18,
                                background:
                                    'linear-gradient(160deg, #fdfbff 0%, #f8f4ff 40%, #f3f9ff 70%, #f0fdf8 100%)',
                                minHeight: 680
                            }}
                        >
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                style={{
                                    zIndex: 1
                                }}
                                preserveAspectRatio="none"
                                viewBox="0 0 100 100"
                            >

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
                                    }}
                                >

                                    ♥
                                </span>
                            )}

                            <div
                                className="absolute pointer-events-none"
                                style={{
                                    inset: 10,
                                    border: '1.5px solid rgba(196,181,253,0.7)',
                                    borderRadius: 12,
                                    zIndex: 2
                                }}
                            />

                            <div
                                className="absolute pointer-events-none"
                                style={{
                                    inset: 14,
                                    border: '1px solid rgba(196,181,253,0.4)',
                                    borderRadius: 9,
                                    zIndex: 2
                                }}
                            />

                            <div
                                className="absolute pointer-events-none"
                                style={{
                                    top: 4,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 3
                                }}
                            >

                                <div
                                    style={{
                                        width: 44,
                                        height: 22,
                                        background: 'linear-gradient(160deg, #fdfbff 0%, #f8f4ff 100%)',
                                        borderRadius: '0 0 50% 50%',
                                        border: '1.5px solid rgba(196,181,253,0.7)',
                                        borderTop: 'none'
                                    }}
                                />

                            </div>

                            <div
                                className="absolute pointer-events-none"
                                style={{
                                    bottom: 4,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 3
                                }}
                            >

                                <div
                                    style={{
                                        width: 44,
                                        height: 22,
                                        background: 'linear-gradient(160deg, #f0fdf8 0%, #f8f4ff 100%)',
                                        borderRadius: '50% 50% 0 0',
                                        border: '1.5px solid rgba(196,181,253,0.7)',
                                        borderBottom: 'none'
                                    }}
                                />

                            </div>

                            <div
                                className="absolute pointer-events-none"
                                style={{
                                    left: 4,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 3
                                }}
                            >

                                <div
                                    style={{
                                        width: 22,
                                        height: 44,
                                        background: 'linear-gradient(160deg, #fdfbff 0%, #f8f4ff 100%)',
                                        borderRadius: '0 50% 50% 0',
                                        border: '1.5px solid rgba(196,181,253,0.7)',
                                        borderLeft: 'none'
                                    }}
                                />

                            </div>

                            <div
                                className="absolute pointer-events-none"
                                style={{
                                    right: 4,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 3
                                }}
                            >

                                <div
                                    style={{
                                        width: 22,
                                        height: 44,
                                        background: 'linear-gradient(160deg, #f3f9ff 0%, #f8f4ff 100%)',
                                        borderRadius: '50% 0 0 50%',
                                        border: '1.5px solid rgba(196,181,253,0.7)',
                                        borderRight: 'none'
                                    }}
                                />

                            </div>

                            <div
                                className="relative text-center"
                                style={{
                                    zIndex: 5,
                                    padding: '36px 28px 28px'
                                }}
                            >

                                <h1
                                    className="font-great-vibes"
                                    style={{
                                        fontSize: 52,
                                        lineHeight: 1.1,
                                        color: '#4c1d95',
                                        marginBottom: 4
                                    }}
                                >

                                    Chá Revelação
                                </h1>

                                <p
                                    className="font-nunito"
                                    style={{
                                        color: '#4b5563',
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        marginTop: 12
                                    }}
                                >

                                    Nosso coração está cheio de amor...
                                </p>
                                <p
                                    className="font-nunito"
                                    style={{
                                        color: '#4b5563',
                                        fontSize: 14,
                                        lineHeight: 1.6
                                    }}
                                >

                                    E chegou a hora de descobrir:
                                </p>

                                <Divider />

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        justifyContent: 'center',
                                        gap: 12,
                                        margin: '8px 0 16px'
                                    }}
                                >

                                    <span
                                        className="font-great-vibes"
                                        style={{
                                            fontSize: 46,
                                            fontWeight: 700,
                                            color: '#7c3aed',
                                        }}
                                    >

                                        Guria
                                    </span>
                                    <span
                                        className="font-nunito"
                                        style={{
                                            fontSize: 18,
                                            color: '#6b7280'
                                        }}
                                    >

                                        ou
                                    </span>
                                    <span
                                        className="font-great-vibes"
                                        style={{
                                            fontSize: 46,
                                            fontWeight: 700,
                                            color: '#0d9488',
                                        }}
                                    >

                                        Guri?
                                    </span>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 8,
                                        margin: '16px 0'
                                    }}
                                >

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
                                            text: 'Rua José do Patrocinio, 529 - Estreito'
                                        },].
                                        map(({ Icon, text }) =>
                                            <div
                                                key={text}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 8
                                                }}
                                            >

                                                <Icon
                                                    style={{
                                                        width: 16,
                                                        height: 16,
                                                        color: '#7c3aed',
                                                        flexShrink: 0
                                                    }}
                                                />

                                                <span
                                                    className="font-nunito"
                                                    style={{
                                                        fontSize: 14,
                                                        color: '#374151',
                                                        fontWeight: 600
                                                    }}
                                                >

                                                    {text}
                                                </span>
                                            </div>
                                        )}
                                </div>

                                <p
                                    className="font-nunito"
                                    style={{
                                        color: '#4b5563',
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                        margin: '12px 0'
                                    }}
                                >

                                    Será um dia inesquecível, e queremos
                                    <br />
                                    você com a gente para viver essa{' '}
                                    <em
                                        style={{
                                            fontStyle: 'italic',
                                            color: '#6d28d9',
                                            fontWeight: 600
                                        }}
                                    >

                                        emoção
                                    </em>
                                    !
                                </p>

                                <p
                                    className="font-nunito"
                                    style={{
                                        color: '#6d28d9',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        lineHeight: 1.7,
                                        marginBottom: 4
                                    }}
                                >

                                    Esperamos vocês
                                </p>

                                <Divider />

                                <p
                                    className="font-nunito"
                                    style={{
                                        fontSize: 20,
                                        color: '#6d28d9'
                                    }}
                                >

                                    Leo & Julia 🤍
                                </p>

                                <Divider />

                                <div
                                    style={{
                                        margin: '8px auto 8px',
                                        maxWidth: 260,
                                        padding: '12px 20px',
                                        borderRadius: 14,
                                        background: 'rgba(220,252,231,0.6)',
                                        border: '1.5px solid rgba(134,239,172,0.6)',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                                    }}
                                >

                                    <p
                                        className="font-nunito"
                                        style={{
                                            color: '#374151',
                                            fontSize: 13,
                                            lineHeight: 1.6
                                        }}
                                    >

                                        Por favor, confirme sua presença
                                        <br />
                                        até o dia <strong>26 de fevereiro</strong>.
                                    </p>
                                    <button
                                        className='p-1.5 rounded-md text-sm font-semibold text-blue-800 hover:bg-blue-300 transition-colors'
                                        onClick={() => { onOpen() }}
                                    >
                                        Confirmar
                                    </button>
                                </div>

                                <div
                                    style={{
                                        marginTop: 8
                                    }}
                                >

                                    <span
                                        style={{
                                            color: '#a78bfa',
                                            fontSize: 12
                                        }}
                                    >

                                        ♥ ♥
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded shadow-lg w-80 relative">
                                <button
                                    onClick={() => isClose()}
                                    className="absolute top-2 right-2 text-gray-500"
                                >
                                    ✖
                                </button>
                                <div className='w-full'>
                                    <label htmlFor="nomeInput" className='text-black'>Seu nome</label>
                                    <input
                                        id="nomeInput"
                                        type="text"
                                        placeholder='Leo'
                                        value={nome || ''}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        className="border rounded w-full py-2 px-3 mb-4 mt-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>

                                <div>
                                    <p className='text-black mb-2'>O que você acha que vai ser?</p>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <label className='flex items-center gap-2'>
                                            <input
                                                type="radio"
                                                name="sexo"
                                                value="GURI"
                                                checked={sexo === "GURI"}
                                                onChange={() => setSexo("GURI")}
                                                className="form-radio text-purple-600"
                                            />
                                            <span className='text-[#0d9488]'>Guri</span>
                                        </label>
                                        <label className='flex items-center gap-2'>
                                            <input
                                                type="radio"
                                                name="sexo"
                                                value="GURIA"
                                                checked={sexo === "GURIA"}
                                                onChange={() => setSexo("GURIA")}
                                                className="form-radio text-pink-600"
                                            />
                                            <span className='text-[#7c3aed]'>Guria</span>
                                        </label>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <button
                                        onClick={() => confirmarPresenca()}
                                        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors w-full"
                                    >
                                        Confirmar presença
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            ) : (
                <ConfirmationPage convite={convite} conviteEnquete={conviteEnquete} />
            )}
        </div>
    );
}

export default ConviteChaRevelacaoPage;
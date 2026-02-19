"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Crown, Heart, MapPin, Sparkles } from "lucide-react";
import { Nunito, Dancing_Script } from "next/font/google";

// Importando fontes via next/font
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-nunito",
});

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-dancing",
});

export default function ConviteChaRevelacaoPage() {
    const router = useRouter();
    const uniqueHash = "#charevelacao123";

    useEffect(() => {
        const currentHash = window.location.hash;
        if (currentHash !== uniqueHash) {
            router.replace("/"); // redireciona para Home se o hash não for válido
        }
    }, [router]);

    return (
        // <div className="relative w-full h-screen sm:h-auto sm:max-w-[420px] aspect-[9/16] bg-reveal-gradient rounded-none sm:rounded-[2rem] overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center">
        //     <div
        //         className={`min-h-screen w-full flex items-center justify-center bg-gray-100 p-2 sm:p-4 ${nunito.variable} ${dancing.variable}`}
        //     >
        //         {/* Card Container */}
        //         <div className="relative w-full h-screen sm:h-auto sm:max-w-[420px] aspect-[9/16] bg-reveal-gradient rounded-none sm:rounded-[2rem] overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center">

        //             {/* Sparkles */}
        //             <div className="absolute inset-0 pointer-events-none opacity-30">
        //                 <div className="absolute top-10 left-10 text-white animate-pulse">
        //                     <Sparkles size={16} />
        //                 </div>
        //                 <div className="absolute top-20 right-12 text-white animate-pulse delay-75">
        //                     <Sparkles size={20} />
        //                 </div>
        //             </div>

        //             {/* Inner Frame */}
        //             <div className="relative w-full h-full ornate-border rounded-none sm:rounded-[1.5rem] bg-white/10 backdrop-blur-[2px] flex flex-col items-center py-6 sm:py-8 px-3 sm:px-4 z-10">

        //                 {/* Title */}
        //                 <h1 className="font-cursive text-4xl sm:text-5xl text-[#5d7290] mb-4 drop-shadow-sm leading-tight">
        //                     Chá Revelação
        //                 </h1>

        //                 {/* Intro */}
        //                 <p className="font-body text-[#666] text-sm sm:text-base mb-6 leading-relaxed max-w-[280px]">
        //                     Nosso coração está cheio de amor...
        //                     <br />E chegou a hora de descobrir:
        //                 </p>

        //                 {/* Pergunta */}
        //                 <div className="font-cursive text-3xl sm:text-4xl mb-8 flex flex-col items-center gap-1">
        //                     <span className="text-[#ea8aa6] drop-shadow-sm">
        //                         Menina{" "}
        //                         <span className="text-[#b0b0b0] text-xl sm:text-2xl font-body mx-1">ou</span>{" "}
        //                         <span className="text-[#5fa4e6] drop-shadow-sm">Menino?</span>
        //                     </span>
        //                 </div>

        //                 {/* Detalhes */}
        //                 <div className="font-body text-[#6b7c93] space-y-2 sm:space-y-3 text-sm sm:text-base mb-8 w-full pl-2 sm:pl-4">
        //                     <div className="flex items-center gap-2 sm:gap-3 justify-center">
        //                         <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ea8aa6]" />
        //                         <span>26 de outubro de 2025</span>
        //                     </div>
        //                     <div className="flex items-center gap-2 sm:gap-3 justify-center">
        //                         <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#5fa4e6]" />
        //                         <span>A partir das 15h</span>
        //                     </div>
        //                     <div className="flex items-center gap-2 sm:gap-3 justify-center">
        //                         <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#5fa4e6]" />
        //                         <span>Endereço da festa, 123</span>
        //                     </div>
        //                 </div>

        //                 {/* Mensagem */}
        //                 <p className="font-body text-[#666] text-xs sm:text-sm mb-8 px-2 leading-relaxed">
        //                     Será um dia inesquecível, e queremos você com a gente para viver essa{" "}
        //                     <span className="font-bold italic">emoção!</span>
        //                 </p>

        //                 {/* Assinatura */}
        //                 <div className="mb-auto">
        //                     <p className="font-cursive text-xl sm:text-2xl text-[#6b5c5c] mb-1">
        //                         Com carinho,
        //                     </p>
        //                     <p className="font-body text-[#5fa4e6] font-semibold text-base sm:text-lg flex items-center gap-2 justify-center">
        //                         Leo S. & Julia M. <Heart size={14} className="text-white fill-white drop-shadow-md" />
        //                     </p>
        //                 </div>

        //                 {/* RSVP */}
        //                 <div className="mt-4 w-full bg-white/60 rounded-xl border border-white/50 p-2 sm:p-3 text-center shadow-sm">
        //                     <p className="font-body text-[#555] text-xs sm:text-sm leading-tight">
        //                         Por favor, confirme sua presença até o dia 25 de agosto.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div
            className={`min-h-screen w-full flex items-center justify-center bg-gray-100 p-2 sm:p-6 ${nunito.variable} ${dancing.variable}`}
        >
            {/* Card Container */}
            <div className="relative w-full h-screen sm:h-auto sm:max-w-[420px] aspect-[9/16] bg-reveal-gradient rounded-none sm:rounded-[2rem] overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center">

                {/* Conteúdo interno */}
                <div className="relative w-full h-full ornate-border rounded-none sm:rounded-[1.5rem] bg-white/10 backdrop-blur-[2px] flex flex-col items-center py-6 sm:py-8 px-3 sm:px-4 z-10">
                    <h1 className="font-cursive text-4xl sm:text-5xl text-[#5d7290] mb-4 drop-shadow-sm leading-tight">
                        Chá Revelação
                    </h1>

                    <p className="font-body text-[#666] text-sm sm:text-base mb-6 leading-relaxed max-w-[280px]">
                        Nosso coração está cheio de amor...
                        <br />E chegou a hora de descobrir:
                    </p>

                    <div className="font-cursive text-3xl sm:text-4xl mb-8 flex flex-col items-center gap-1">
                        <span className="text-[#ea8aa6] drop-shadow-sm">
                            Menina{" "}
                            <span className="text-[#b0b0b0] text-xl sm:text-2xl font-body mx-1">ou</span>{" "}
                            <span className="text-[#5fa4e6] drop-shadow-sm">Menino?</span>
                        </span>
                    </div>

                    <div className="font-body text-[#6b7c93] space-y-2 sm:space-y-3 text-sm sm:text-base mb-8 w-full pl-2 sm:pl-4">
                        <div className="flex items-center gap-2 sm:gap-3 justify-center">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ea8aa6]" />
                            <span>28 de fevereiro de 2026</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 justify-center">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#5fa4e6]" />
                            <span>A partir das 15:30</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 justify-center">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#5fa4e6]" />
                            <span>Rua José do Patrocinio, 529</span>
                        </div>
                    </div>

                    <p className="font-body text-[#666] text-xs sm:text-sm mb-8 px-2 leading-relaxed">
                        Será um dia inesquecível, e queremos você com a gente para viver essa{" "}
                        <span className="font-bold italic">emoção!</span>
                    </p>

                    <div className="mb-auto">
                        <p className="font-cursive text-xl sm:text-2xl text-[#6b5c5c] mb-1">
                            Com carinho,
                        </p>
                        <p className="font-body text-[#5fa4e6] font-semibold text-base sm:text-lg flex items-center gap-2 justify-center">
                            Leo S. & Julia M. <Heart size={14} className="text-white fill-white drop-shadow-md" />
                        </p>
                    </div>

                    <div className="mt-4 w-full bg-white/60 rounded-xl border border-white/50 p-2 sm:p-3 text-center shadow-sm">
                        <p className="font-body text-[#555] text-xs sm:text-sm leading-tight">
                            Por favor, confirme sua presença até o dia 26 de Fevereiro no WhatsApp dos papais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

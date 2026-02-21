"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { InvitationV2 } from "../components/InvitationV2";

export default function ConviteChaRevelacaoPage() {
    const router = useRouter();
    const uniqueHash = "#charevelacao123";

    useEffect(() => {
        const currentHash = window.location.hash;
        if (currentHash !== uniqueHash) {
            router.replace("/");
        }
    }, [router]);

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
            <InvitationV2 />
        </div>
    );
}

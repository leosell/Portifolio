import Image from "next/image";
import React from "react";

export const ProfileCard: React.FC = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-10">
            <div className="flex items-start gap-8">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold leading-tight">Leonardo Sell</h1>
                    <p className="text-2xl text-gray-200 mt-2">Backend Developer</p>
                    <p className="mt-3 text-gray-400">Java &middot; Spring Boot &middot; MySQL &middot; Node.js</p>

                    <p className="mt-6 text-gray-300 max-w-2xl leading-relaxed">
                        Ajudando empresas a construir sistemas escaláveis, seguros e de alto desempenho.
                        Forte foco em código limpo e observabilidade.
                    </p>
                </div>

                <div className="w-26 h-26 rounded-full bg-gray-700 flex items-center justify-center card">
                    <Image src="/picture_sell.jpg" alt="sell_picture.jpg" width="250" height="250" className="rounded-full" />
                </div>
            </div>
        </section>
    )
}
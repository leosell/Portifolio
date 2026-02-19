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
                    {/* avatar placeholder */}
                    <Image src="/picture_sell.jpg" alt="sell_picture.jpg" width="250" height="250" className="rounded-full" />
                    {/* <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" />
                    </svg> */}
                </div>
            </div>
        </section>
    )
}
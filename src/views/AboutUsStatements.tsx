import hexes from "../assets/Hex_Example.png";

export default function AboutUsStatements() {
    return(
        <section className="bg-black text-white px-10 sm:px-20 py-20 space-y-32 relative overflow-hidden">
            
            {/* Background */}
            <div className="absolute inset-0 opacity-10 bg-center bg-[length:700px] pointer-events-none"style={{ backgroundImage: `url(${hexes})`, backgroundPosition: "50% 20%"}} />

            <div className="relative z-10">
                {/* Text Statement */}
                <div className="md:w-1/2 space-y-6 flex flex-col justify-center align-middle">
                    <h2 className="font-bold text-3xl md:text-5xl translate-x-2">
                        THE 585FIGHTERZ
                    </h2>
                    <div className="flex flex-row items-center text-center justify-center">
                        <div>
                            <p className="tracking-widest text-sm [writing-mode:vertical-rl] rotate-180 text-gray-400 md:mb-4">
                                @585Z
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-300 max-w-lg w-full text-center">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan efficitur sem, et consectetur est venenatis a. In vel lorem felis. Suspendisse lobortis nec ex sit amet lobortis. Nunc id vehicula felis. Sed semper est ac odio varius, nec fermentum tellus semper. Proin imperdiet ullamcorper ullamcorper. Sed quam tortor, placerat ut convallis nec, aliquet vel nisi. Sed id tellus sit amet elit aliquam ullamcorper. Vestibulum nunc erat, maximus a risus sit amet, egestas dictum risus. Nunc consectetur fermentum augue, a pretium ante dictum non. Morbi feugiat erat tellus, sit amet vestibulum sapien fringilla eget. Etiam consectetur urna id turpis iaculis vulputate. Fusce accumsan nisi at leo aliquam tincidunt."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
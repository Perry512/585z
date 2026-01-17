import { useRef, useState } from "react"
import Layout from "../components/Layout"
import hexes from "../assets/Hex_Example.png"

type Status = "idle" | "loading" | "success" | "error";

export default function ContactFormPage() {
    const [status, setStatus] = useState<Status>("idle");
    const formRef= useRef<HTMLFormElement | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        company: "",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (formData.company) return;

        if(!formRef.current) return;

        setStatus("loading");

        const payload = new FormData(formRef.current);
    
        try {
            const res = await fetch(
                "https://usebasin.com/f/d4c864440428",
                {
                    method: "POST",
                    body: payload,
                }
            );

            if (!res.ok) throw new Error("Failed");

            setStatus("success");
            setFormData({ name: "", email: "", message: "",  company: ""});
        } catch {
            setStatus("error");
        }
    }

    return(
        <Layout>
            <section
                className="relative min-h-screen bg-black flex items-center justify-center px-4"
                style={{
                    backgroundImage: `url(${hexes})`,
                    backgroundPosition: "50% 20%",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80" />
                
                <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
                        Contact Us
                    </h1>

                    {status === "success" && (
                        <p className="mb-4 text-green-600 text-center">
                            Message Sent Successfully!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="mb-4 text-red-600 text-center">
                            Something went wrong, please try again
                        </p>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        {/* Hidden */}
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <input type="hidden" name="_subject" value="New Contact Form Submission" />
                        <input type="hidden" name="_captcha" value="true" />

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2 resize-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md transition disabled:opacity-50"
                        >
                            {status === "loading" ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}
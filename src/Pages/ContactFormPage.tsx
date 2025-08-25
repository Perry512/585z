import Layout from "../components/Layout"

export default function ContactFormPage () {
    return(
        <Layout>
            <div className='h-full w-full bg-amber-800'>

                {/* Contact form header */}
                <div className="p-5"> Contact Us!</div> 

                { /* Contact form */}
                <div className="py-10 flex flex-row border justify-center items-center border-black max-w-md mx-auto">
                    <form>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 resize-none focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Send Message</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
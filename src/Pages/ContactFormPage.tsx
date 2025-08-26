import Layout from "../components/Layout"

export default function ContactFormPage () {
    return(
        <Layout>
            <div className='h-50vh w-100vh bg-red-700 p-1 flex flex-col items-center justify-around '>

                {/* Contact form header */}
                <div className="p-4 w-auto mb-10 flex flex-col items-center justify-center"> <h1 className="font-bold text-black"> Contact Us!</h1> </div> 

                { /* Contact form */}
                <div className="py-10 flex flex-row border-2 justify-center items-center border-black w-4/5 max-w-md mx-auto bg-white mb-10">
                    <form>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-10">
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
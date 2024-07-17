
export default async function  Page() {

    async function getTerms() {
        try {
            const response                                                                                                                               = await fetch("https://fintechportal-app.fintechcenterfsa.com/api/v2/terms", {
                headers: {
                    "Content-Type": "application/json",
                },
                // mode: "cors",
                // credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("status: " + response.status);
            console.log("is response ok: " + response.ok);
            return await response.json();
        } catch (error) {
            console.error(error);
        }


    }
    let terms = await getTerms();
    console.log(terms);
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Term in Khmer
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Term in English
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Term in French
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {
                                terms.data.map((term:any) => (
                                    <tr key={term.id}>
                                        <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                                            {term.attributes.termKh}
                                            <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100"/>
                                            <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"/>
                                        </td>
                                        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{term.attributes.termEn}</td>
                                        <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{term.attributes.termFr}</td>
                                        <td className="relative py-4 pl-3 text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {term.attributes.termKh}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
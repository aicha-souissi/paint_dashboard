import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDevisApi } from '../redux/actions/devis.action';
import moment from 'moment';
const Accueil = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDevisApi());
    }, [])
    const { loading, list } = useSelector((state) => state.devis);
    return (
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                >
                                    Clients
                                </th>
                                <th
                                    scope="col"
                                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                >
                                    Produits
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {!loading &&
                                list.map((elm) => (
                                    <tr key={elm._id}>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0">
                                                    {moment(elm.createdAt).format('DD/MM/YYYY')}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {elm.email}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <ul>
                                                {elm.products && elm.products.map(elm => (<li>
                                                    {elm.product ? `${elm.product.nameProduit}| ${elm.qty}` : 'Produit non Disponible'}
                                                </li>))}
                                            </ul>
                                        </td>

                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                        <div class="flex items-center">
                            <button
                                type="button"
                                class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                            >
                                <svg
                                    width="9"
                                    fill="currentColor"
                                    height="8"
                                    class=""
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                class="w-full px-4 py-2 border-t border-b text-base text-red-500 bg-white hover:bg-gray-100 "
                            >
                                1
                            </button>
                            <button
                                type="button"
                                class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                            >
                                2
                            </button>
                            <button
                                type="button"
                                class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                            >
                                3
                            </button>
                            <button
                                type="button"
                                class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                            >
                                4
                            </button>
                            <button
                                type="button"
                                class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                            >
                                <svg
                                    width="9"
                                    fill="currentColor"
                                    height="8"
                                    class=""
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil

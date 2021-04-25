import React, { useEffect, useState } from "react";
import AddProduitModal from "../components/AddProduitModal";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../redux/actions/produit.actions";
const Produit = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductsApi());
  }, []);
  return (
    <div>
      <h1 className="py-2 ml-2"> Liste des produits </h1>
      <AddProduitModal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      />
      <div className="flex  justify-end py-3">
        <div>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            type="button"
            class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Ajouter
          </button>
        </div>
      </div>

      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Image
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Nom
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Created at
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                list.map((elm) => {
                  let baseUrl = `http://localhost:3001`;
                  return (
                    <tr key={elm._id}>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#" class="block relative">
                              <img
                                alt="profil"
                                src={`${baseUrl}/${elm.imageUrl}`}
                                class="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {elm.nameProduit}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          12/09/2020
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">active</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
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
                class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Produit;

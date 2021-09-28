import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewMagasin } from "../redux/actions/magasin.action";

const Modal = ({ show, closeModal, lat, long }) => {
  useEffect(() => {
    setMagasinData({ ...magasinData, lat: lat, lng: long })
  }, [lat, long])
  const [magasinData, setMagasinData] = useState({
    nameMagasin: "",
    lat: lat,
    lng: long,
    adrFb: "",
    email: "",
    numTel: ""
  })
  const dispatch = useDispatch();

  return (
    <div
      class={`fixed z-10 inset-0 overflow-y-auto ${show ? "" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  class="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Ajouter un magasin
                </h3>
                <div class="mt-2">
                  <div className="flex flex-col">
                    <div class=" relative my-2 ">
                      <label for="name-with-label" class="text-gray-700">
                        Nom de magasin
                      </label>
                      <input
                        value={magasinData.nameMagasin}
                        type="text"
                        id="name-with-label"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        name="email"
                        placeholder="magasin"
                        onChange={(event) => {
                          setMagasinData({ ...magasinData, nameMagasin: event.target.value })
                        }}
                      />
                    </div>
                    <div class=" relative my-2 ">
                      <label for="name-with-label" class="text-gray-700">
                        Lat
                      </label>
                      <input
                        type="text"
                        id="name-with-label"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        name="email"
                        placeholder="Your name"
                        value={lat}
                        disabled
                      />
                    </div>

                    <div class=" relative my-2 ">
                      <label for="name-with-label" class="text-gray-700">
                        Long
                      </label>
                      <input
                        type="text"
                        id="name-with-label"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        name="email"
                        placeholder="Your name"
                        value={long}
                        disabled
                      />
                    </div>
                    <div class=" relative my-2 ">
                      <label for="name-with-label" class="text-gray-700">
                        Facebook
                      </label>
                      <input
                        type="text"
                        id="name-with-label"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        name="email"
                        placeholder="Facebook"
                        value={magasinData.adrFb}
                        onChange={(event) => {
                          setMagasinData(({ ...magasinData, adrFb: event.target.value }))
                        }}
                      />
                    </div>
                    <div class=" relative my-2 ">
                      <label for="name-with-label" class="text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        id="name-with-label"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        name="email"
                        placeholder="email"
                        value={magasinData.email}
                        onChange={(event) => {
                          setMagasinData(({ ...magasinData, email: event.target.value }))
                        }}
                      />
                    </div>
                    <div class=" relative my-2 ">
                      <label for="name-with-label" class="text-gray-700">
                        numéro tel
                      </label>
                      <input
                        type="text"
                        id="name-with-label"
                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        name="email"
                        placeholder="numéro tel"
                        value={magasinData.numTel}
                        onChange={(event) => {
                          setMagasinData(({ ...magasinData, numTel: event.target.value }))
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => {
                dispatch(addNewMagasin(magasinData))
                // un traitement d'ajout
                closeModal();
              }}
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Confirmer
            </button>
            <button
              onClick={() => {
                // un traitement d'annulation
                closeModal();
              }}
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

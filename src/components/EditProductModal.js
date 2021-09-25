import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProductApi } from "../redux/actions/produit.actions";
const EditProduitModal = ({ show, closeModal, name,symbl,val,supprt,aspct,infor,typeUt,natureP,imge,qte,id }) => {
  const [Name, setName] = useState(name);
  const [Symbl, setSymbl] = useState(symbl);
  const [Val, setVal] = useState(val);
  const [Supprt, setSupprt] = useState(supprt);
  const [Aspct, setAspct] = useState(aspct);
  const [Infor, setInfor] = useState(infor);
  const [TypeUt, setTypeUt] = useState(typeUt);
  const [NatureP, setNatureP] = useState(natureP);
  const [Imge, setImge] = useState(imge);
  const [Qte, setQte] = useState(qte);
  const dispatch = useDispatch();
  useEffect(() => {
    setName(name);
    setSymbl(symbl);
    setSupprt(supprt);
    setVal(val);
    setAspct(aspct);
    setInfor(infor);
    setTypeUt(typeUt);
    setNatureP(natureP);
    setImge(imge);
    setQte(qte);
  }, [show])

  return (
    <div>
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
                    Modifier un Produit
                  </h3>
                  <div class="mt-2">
                    <div className="flex flex-col">
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="name"
                          placeholder="Produit"
                          value={Name}
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>
                      
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Nature
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="nature"
                          placeholder="Nature"
                          value={NatureP}
                          onChange={(event) => {
                            setNatureP(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Symbol
                        </label>
                        <select
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="type"
                          placeholder="Formule"
                          value={Symbl}
                          onChange={(event) => {
                            setSymbl(event.target.value);
                          }}
                        >
                          <option value="*">X</option>
                          <option value="/">/</option>
                        </select>
                      </div>

                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Valeur
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="nature"
                          placeholder="Nature"
                          value={Val}
                          onChange={(event) => {
                            setVal(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Support
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="support"
                          placeholder="Support"
                          value={Supprt}
                          onChange={(event) => {
                            setSupprt(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Aspect
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="aspect"
                          placeholder="Aspect"
                          value={Aspct}
                          onChange={(event) => {
                            setAspct(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Info
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="info"
                          placeholder="info"
                          value={Infor}
                          onChange={(event) => {
                            setInfor(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Type Utilisation
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="type"
                          placeholder="Type"
                          value={TypeUt}
                          onChange={(event) => {
                            setTypeUt(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Qte Dispo ( Doit etre sépraré par "/")
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="type"
                          placeholder="Type"
                          value={Qte}
                          onChange={(event) => {
                            setQte(event.target.value);
                          }}
                        />
                      </div>
                      <div class=" relative my-2 ">
                        <label for="name-with-label" class="text-gray-700">
                          Image
                        </label>
                        <input
                          type="file"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          name="image"

                          onChange={(event) => {
                            setImge(event.target.files[0]);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {
                    // un traitement d'ajout
                    let data = {
                      name: Name,
                      symbl: Symbl,
                        supprt:Supprt,
                        val:Val,
                        aspct:Aspct,
                        infor:Infor,
                        typeUt:TypeUt,
                        natureP:NatureP,
                        imge:Imge,
                        qte:Qte,
                };
                    /*new FormData();
                    let qtyList = qteDispo.split('/');
                    data.append("nameProduit", nameProduit);
                    data.append("symbol", symbol);
                    data.append("valeur", valeur);
                    data.append("support", support);
                    data.append("aspect", aspect);
                    data.append("info", info);
                    data.append('typeUtilisation', typeUtilisation);
                    data.append('nature', natureProduit);
                    data.append('image', image);
                    data.append('qtyDispo', qteDispo)
                    
                    
                    */

                    dispatch(addProductApi(id,data));
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
      </div>
    </div>
  );
};

export default EditProduitModal;

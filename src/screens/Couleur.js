import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditColorModal from "../components/EditColorModal";
import AddColorModal from "../components/AddColorModal";
import { deleteColorApi, getAllColosApi } from "../redux/actions/color.actions";
import { SEARCH_COLOR } from "../redux/const/actionTypes";

const Couleur = () => {
  const [selectedColor, setSelectedColor] = useState({
    ref: "",
    id: "",
    name: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { editList, loading } = useSelector((state) => state.colors);
  const dispatch = useDispatch();
  const closeModal = () => {
    setShowModal(false);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };
  useEffect(() => {
    dispatch(getAllColosApi());
  }, []);
  return (
    <div>
      <AddColorModal closeModal={closeModal} show={showModal} />
      <EditColorModal
        show={showEditModal}
        closeModal={closeEditModal}
        color={selectedColor.ref}
        name={selectedColor.name}
        id={selectedColor.id}
      />
      <div className="flex   justify-between py-3 ">
        <div>
        <input
            type="text"
            id="text"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Recherche"
            onChange={(event) => {
              dispatch({
                type: SEARCH_COLOR,
                payload: event.target.value,
              });
            }}
          />
        </div>
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
                  Aper??u
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Ref
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                editList.map((elm) => (
                  <tr key={elm._id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <a href="#" class="block relative">
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                backgroundColor: elm.refColor,
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {elm.refColor}{" "}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {elm.nameColor}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                      <div className=" flex justify-between flex-row w-40">
                        <button
                          onClick={() => {
                            let newColor = {
                              ...selectedColor,
                              id: elm._id,
                              name: elm.nameColor,
                              ref: elm.refColor,
                            };
                            setSelectedColor(newColor);
                            console.log(selectedColor);
                            setShowEditModal(true);
                          }}
                          type="button"
                          class="py-2 px-4 mx-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          modifier
                        </button>
                        <button
                          onClick={() => {
                            dispatch(deleteColorApi(elm._id));
                          }}
                          type="button"
                          class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          supprimer
                        </button>
                      </div>
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
  );
};

export default Couleur;

import React, { useEffect, useState } from "react";
import AddProduitModal from "../components/AddProduitModal";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../redux/actions/produit.actions";
import AddTendanceModal from "../components/AddTendance";
import { deleteTendanceApi, getTendancesApi } from "../redux/actions/tendance.action";
import EditTendanceModal from "../components/EditTendanceModal";
import { getAllColosApi } from "../redux/actions/color.actions";
const Tendance = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const [selectedTendance, setSelectedTendance] = useState({});
  const { list, loading } = useSelector((state) => state.tendance);
  useEffect(() => {
    dispatch(getTendancesApi());
    dispatch(getAllColosApi()) ; 
  }, []);
  return (
    <div>
      <h1 className="py-2 ml-2"> Liste des Tendances </h1>
      <AddTendanceModal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      />
      <EditTendanceModal
        show={showEditModal}
        closeModal={() => {
          setShowEditModal(false);
        }}
        tendance={selectedTendance}
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
                  Description
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Couleur
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
                list.map((elm) => {
                  let baseUrl = `https://paint-backend.herokuapp.com`;
                  return (
                    <tr key={elm._id}>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <a href="#" class="block relative">
                              <img
                                alt="profil"
                                src={`${baseUrl}/${elm.tendanceImage}`}
                                class="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {elm.nameColor}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {elm.description}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm " style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span> {elm.refColor && elm.refColor.nameColor}</span>
                        <span> {elm.refColor && <div style={{
                          height: 30,
                          width: 30,
                          backgroundColor: elm.refColor.refColor
                        }}></div>}</span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className=" flex justify-between flex-row w-40">
                          <button
                            onClick={() => {
                              setSelectedTendance(elm);
                              setShowEditModal(true);
                            }}
                            type="button"
                            class="py-2 px-4 mx-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            modifier
                          </button>
                          <button
                            onClick={() => {
                              dispatch(deleteTendanceApi(elm._id));
                            }}
                            type="button"
                            class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Tendance;

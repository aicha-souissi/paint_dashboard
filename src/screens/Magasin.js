import React, { useState, useEffect } from "react";
import MapGL from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteMagasinApi, getAllMagasinApi } from "../redux/actions/magasin.action";
import { setRTLTextPlugin } from 'mapbox-gl';
setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js')
const Magasin = () => {
  const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiYWljaGExMjMiLCJhIjoiY2tuMzJreTJjMDNzYzMwcXJlc3BtYXdnZiJ9.INQaPo9c5BQa99dsA9b4rg";
  const [showModal, setShowModal] = useState(false);
  const { list } = useSelector(({ magasin }) => magasin)
  const dispatch = useDispatch();
  
  const closeModal = () => {
    setShowModal(false);
  };
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11,
  });
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  useEffect(() => {
    dispatch(getAllMagasinApi());
  }, [])
  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);

      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 11,
      });
    });
  }, []);
  return (
    <div className="w-full h-full  my-2 mx-5 flex flex-row justify-center">
      <Modal closeModal={closeModal} show={showModal} lat={lat} long={long} />
      <div className="w-6/12 h-full bg-white mx-2 mb-10 rounded rounded-xl shadow">
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class=" min-w-full min-h-full shadow rounded-lg overflow-x-auto">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      magasin
                    </th>

                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      telephone
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      latitude
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      longitude
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Facebook
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {list.map((elm) => {
                    return <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {elm.nameMagasin}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{elm.numTel}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{elm.lat}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{elm.lng}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{elm.email}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{elm.adrFb}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                        <div className=" flex justify-between flex-row w-40">

                          <button
                            onClick={() => {
                              dispatch(deleteMagasinApi(elm._id))
                            }}
                            type="button"
                            class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            supprimer
                          </button>
                        </div>

                      </td>
                    </tr>
                  })}

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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 mx-2 h-full bg-white mb-10 rounded-xl shadow">
        {/* <Map
          style="mapbox://styles/mapbox/streets-v8"
          className="h-full w-full"
          center={latLang}
          onDblClick={(event)=>{
            const { lngLat } = event;
             
              setShowModal(true); 
          }}
        /> */}
        <MapGL
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          accessToken={MAPBOX_ACCESS_TOKEN}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
          onClick={(event) => {
            const { lngLat } = event;
            let { lat, lng } = lngLat;
            console.log("LAT==>", lat);
            console.log("LNG==>", lng);
            setLat(lat);
            setLong(lng);
            setShowModal(true);
            //alert('hello')
          }}
        />
      </div>
    </div>
  );
};

export default Magasin;

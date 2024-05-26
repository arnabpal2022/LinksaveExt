import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const Table = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const querySnapshot = await getDocs(collection(db, "urls"));
      const urlsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
      }));
      setUrls(urlsList);
    };

    fetchUrls();

    const intervalId = setInterval(fetchUrls, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "urls", id));
      const updatedUrls = urls.filter((url) => url.id !== id);
      setUrls(updatedUrls);
    } catch (error) {
      console.error("Error deleting url:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            {urls.length == 0 ? (
              <div className="text-center text-gray-500 mt-10">
                Currently There are no Records. Please Use LinkSave Extension to
                get more records
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200 mt-10">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                    >
                      Website Link
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {urls.map((url, index) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-blue-500 hover:text-blue-700 transtion duration-300">
                        <a href={url.url}>{url.url}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold text-purple-700 hover:text-purple-900 transtion duration-300">
                        <button onClick={() => handleDelete(url.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

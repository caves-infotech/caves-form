import api from "@/services/axios";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/user/forms');
      setForms(response.data.forms);
    };

    fetchData();
  }, []);

  return (
    // <div className=" max-h-fit w-1/5 bg-gray-800 text-white p-4">
    <div className=" m-5 p-5 rounded-lg w-64 h-[700px] bg-[#1B7FBD] text-white fixed top-0 left-0 flex flex-col">

      <ul className="list-disc pl-5">
        {forms.map((form, index) => (
          <li key={index} className="text-lg font-medium">
            {form.location.village}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Sidebar;

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "@/services/axios";;
const ProfileForm = ({ user }) => {

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        avatar: user?.avatar || "",
        phone: user?.phone || null,
      });
      const [selectedFile, setSelectedFile] = useState(null);
    
      const handleProfileChange = async (e) => {
        e.preventDefault();
        console.log(selectedFile);
        
        const form = new FormData();
        form.append("avatar", selectedFile);
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("phone", formData.phone);

        const response = await api.patch("/user", {form});
        console.log(data);
        toast.info(response.data.message || "User Signout Successfully");
      };

  return (
    <main className="w-full py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <div className="flex flex-col items-center mt-4">
                <div className="relative w-36 h-36 rounded-full overflow-hidden">
                  <Image
                    src={formData.avatar || "/profile-container.jpeg"}
                    alt={formData.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800">
                  {formData.name}
                </h2>
              </div>
              <div className="flex flex-col space-y-5 sm:ml-8">
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="py-2.5 px-4 border rounded-md"
                />
                <button
                  type="button"
                  className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900"
                >
                  Change picture
                </button>
              </div>
            </div>
            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
              <form onSubmit={handleProfileChange} className="w-full">
                <div className="flex flex-col mb-6">
                  <label className="mb-2 text-sm font-medium text-indigo-900">
                    Your name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="mb-2 text-sm font-medium text-indigo-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="mb-2 text-sm font-medium text-indigo-900">
                    Phone
                  </label>
                  <input
                    type="number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                  />
                </div>
                {/* <div className="flex flex-col mb-6">
                  <label className="mb-2 text-sm font-medium text-indigo-900">
                    Bio
                  </label>
                  <textarea
                    rows="4"
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                    placeholder="Write your bio here..."
                  />
                </div> */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileForm;

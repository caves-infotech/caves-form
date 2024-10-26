// import Image from "next/image";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import api from "@/services/axios";
// import { useSession } from "next-auth/react";

// const ProfileForm = ({ user }) => {
//   const { data: session } = useSession();
//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     avatar: user?.avatar || null,
//     phone: user?.phone || null,
//   });

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
//   };

//   const handleProfileChange = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
//     form.append("avatar", formData.avatar);
//     form.append("name", formData.name);
//     form.append("email", formData.email);
//     form.append("phone", formData.phone);
//     try {
//       await api.patch(
//         "/user",
//         form,
//         { session },
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       toast.success("Profile Updated successfully");
//     } catch (error) {
//       toast.error("Failed to Updated Profile");
//     }
//   };

//   return (
//     // <main className="max-w-7xl py-1 ">
//     // <div className="p-2 md:p-4">
//     <div className="max-w-7xl my-16 mx-auto px-6 pb-8  sm:max-w-xl sm:rounded-lg">
//       <h2 className=" mb-4 font-extrabold tracking-tight text-gray-900 text-center text-3xl sm:text-5xl">
//         Profile
//       </h2>
//       <div className="grid max-w-2xl mx-auto">
//         <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
//           <div className="flex flex-col items-center mt-4">
//             <div className="relative w-36 h-36 rounded-full overflow-hidden">
//               <Image
//                 src={formData.avatar || "/profile-container.jpeg"}
//                 alt="profile image"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-full"
//               />
//             </div>
//             <h2 className="mt-2 text-xl font-semibold text-gray-800">
//               {formData.name}
//             </h2>
//           </div>
//         </div>
//         <div className="items-center mt-8 sm:mt-14 text-[#202142]">
//           <form onSubmit={handleProfileChange} className="w-full">
//             <div className="flex flex-col space-y-5 ">
//               {/* <input
//               type="file"
//               className="py-2.5 px-4 border rounded-md"
//             /> */}
//               <div className="flex flex-col mb-6">
//                 <label className="mb-2 text-sm font-medium text-indigo-900">
//                   Profile
//                 </label>
//                 <input
//                   type="file"
//                   name="avatar"
//                   onChange={handleFileChange}
//                   required
//                   className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
//                 />
//               </div>
//               {/* <button
//               onClick={(e) => setSelectedFile(e.target.files[0])}
//               className="py-3.5 px-7  text-white  bg-black rounded-lg hover:text-black  hover:bg-yellow-500"
//             >
//               Change picture
//             </button> */}
//             </div>
//             <div className="flex flex-col mb-6">
//               <label className="mb-2 text-sm font-medium text-indigo-900">
//                 Your name
//               </label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
//               />
//             </div>
//             <div className="flex flex-col mb-6">
//               <label className="mb-2 text-sm font-medium text-indigo-900">
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
//               />
//             </div>
//             <div className="flex flex-col mb-6">
//               <label className="mb-2 text-sm font-medium text-indigo-900">
//                 Phone
//               </label>
//               <input
//                 type="number"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
//               />
//             </div>
//             {/* <div className="flex flex-col mb-6">
//                   <label className="mb-2 text-sm font-medium text-indigo-900">
//                     Bio
//                   </label>
//                   <textarea
//                     rows="4"
//                     value={formData.bio}
//                     onChange={(e) =>
//                       setFormData({ ...formData, bio: e.target.value })
//                     }
//                     className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
//                     placeholder="Write your bio here..."
//                   />
//                 </div> */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     //  </div>
//     //  </main>
//   );
// };

// export default ProfileForm;

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "@/services/axios";
import { useSession } from "next-auth/react";

const ProfileForm = ({ user }) => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    phone: user?.phone || null,
  });
  const [preview, setPreview] = useState(user?.avatar || "/profile-container.jpeg");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatar: file }));
      setPreview(URL.createObjectURL(file)); // Set preview URL for the Image component
    }
  };

  const handleProfileChange = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("avatar", formData.avatar);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);

    try {
      await api.patch(
        "/user",
        form,
        { session },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Profile Updated successfully");
    } catch (error) {
      toast.error("Failed to Update Profile");
    }
  };
  useEffect(()=>{
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
      phone: user?.phone || null,
    })
    setPreview(user?.avatar || "/profile-container.jpeg")
  }, [user])

  return (
    <div className="max-w-7xl my-16 mx-auto px-6 pb-8 sm:max-w-xl sm:rounded-lg">
      <h2 className="mb-4 font-extrabold tracking-tight text-gray-900 text-center text-3xl sm:text-5xl">
        Profile
      </h2>
      <div className="grid max-w-2xl mx-auto">
        {/* <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0"> */}
          <div className="flex flex-col items-center mt-4">
            <div className="relative w-36 h-36 rounded-full overflow-hidden">
              <Image
                src={preview}
                alt="profile image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800">
              {formData.name}
            </h2>
          </div>
        {/* </div> */}
        <div className="items-center mt-8 sm:mt-14 text-[#202142]">
          <form onSubmit={handleProfileChange} className="w-full">
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col mb-6">
                <label className="mb-2 text-sm font-medium text-indigo-900">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                />
              </div>
            </div>
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
                required
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
                required
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-2 text-sm font-medium text-indigo-900">
                Phone
              </label>
              <input
              maxLength={10}
              
                type="number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                required
              />
            </div>
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
  );
};

export default ProfileForm;

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserAPI } from "../../api/user-api";
import { userDefault } from "../../assets";
import MainLayout from "../../components/layout/MainLayout";
import StoreCard from "../../components/stores/StoreCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/auth-context";

const ProfilePage = () => {
  const { profile, stores, token, userId: contextUserId } = useContext(
    AuthContext
  );
  const [isUser, setIsUser] = useState(profile?.userId === contextUserId);

  const { userId } = useParams();

  useEffect(() => {
    if (userId && userId !== "0") {
      const currentToken = token || localStorage.getItem("accessToken");
      getUserAPI(userId, currentToken)
        .then((res) => {
          setIsUser(res.data.profile?.userId === contextUserId);
        })
        .catch((err) => {
          setIsUser(false);
        });
    }
  }, [userId, contextUserId, token]);

  console.log("Profile:", profile);
  console.log("Email:", profile?.email);
  console.log("Address:", profile?.address);
  console.log("Phone Number:", profile?.phoneNumber);

  return (
    <MainLayout>
      <div className="flex w-full md:max-w-[700px] mt-8 py-4 px-5 rounded-lg bg-white shadow shadow-gray-300">
        <img
          src={profile?.imageUrl || userDefault}
          alt="profile_picture"
          className="rounded-full w-24 h-24 sm:w-40 sm:h-40 mr-5"
        />
        <div className="mt-2 font-inter font-medium text-gray-400 w-full">
          <h3 className="text-2xl md:text-3xl text-primary mb-1 pb-2 border-b">
            {profile?.name}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <p className="text-secondary">Email</p>
              <p>{profile?.email}</p>
            </div>
            <div>
              <p className="text-secondary">Address</p>
              <p>{profile?.address}</p>
            </div>
            <div>
              <p className="text-secondary">Phone Number</p>
              <p>{profile?.phoneNumber}</p>
            </div>
          </div>
        </div>
        {isUser && (
          <Link to="/profile/edit">
            <FontAwesomeIcon
              icon={faPenSquare}
              className="text-2xl hover:text-red-400 transition duration-100"
            />
          </Link>
        )}
      </div>
      <div className="mt-5 mb-10">
        <div className="flex justify-between border-b-2 border-gray-300 mb-3 pb-1">
          <h2 className="text-4xl font-bold drop-shadow">Stores</h2>
          {isUser && (
            <Link
              to="/stores/add"
              className="flex items-center space-x-2 font-medium text-red-400 text-lg"
            >
              <p>Add Store</p> <FontAwesomeIcon icon={faPlus} />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-1 gap-5">
          {stores && stores.length > 0 ? (
            stores.map((store) => (
              <StoreCard key={store.storeId} store={store} />
            ))
          ) : (
            <p className="text-gray-500">No store available</p>
          )}

        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;

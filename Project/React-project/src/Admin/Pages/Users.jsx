import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const [allusers, setAllUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loadingRole, setLoadingRole] = useState(null);

  // ================= GET USERS =================
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setAllUsers(res.data);
    } catch (err) {
      toast.error("Failed to load users");
    }
  };


  // ================= GET ORDERS =================
  const getOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/orders");
      setOrders(res.data);
    } catch (err) {
      toast.error("Failed to load orders");
    }
  };

  // ================= DELETE USER =================
  const deleteHandler = async (id) => {
    const check = confirm("Do you really want to delete this user?");
    if (!check) return;

    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      toast.success("User deleted successfully");
      getUsers();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  // ================= USER ORDER COUNT =================
  const getUserOrderCount = (userId) => {
    return orders.filter((order) => order.userId === userId).length;
  };

  // ================= CHANGE ROLE =================
  const changeRole = async (id, role) => {
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        role,
      });

      toast.success("Role updated");
      getUsers(); // refresh list
    } catch (error) {
      toast.error("Role update failed");
    }
  };


  useEffect(() => {
    getUsers();
    getOrders();
  }, []);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="md:text-3xl text-lg font-bold text-gray-800">
          Manage Users
        </h1>
      </div>

      {/* USERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allusers.map((item) => (
          <div key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2  transition-all duration-300 p-5" >
            {/* TOP */}
            <div className="flex items-center gap-4 mb-4">
              {/* IMAGE */}
              <img src={item.image}alt={item.name}
                className="w-14 h-14 rounded-full object-cover border"/>

              {/* NAME & EMAIL */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold capitalize">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {item.email}
                </p>
              </div>
            </div>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
              <div>
                <p className="text-xs text-gray-400">Joined</p>
                <p className="font-medium text-gray-800">
                  {new Date(item.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Orders</p>
                <p className="font-medium text-gray-800">
                  {item.role === "admin"
                    ? "-"
                    : getUserOrderCount(item.user_id)}
                </p>
              </div>
            </div>

            {/* ROLE RADIO */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2">Role</p>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio"
                    checked={item.role === "user"}
                    onChange={() => changeRole(item.id, "user")} />
                  User
                </label>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio"
                    checked={item.role === "admin"}
                    onChange={() => changeRole(item.id, "admin")} />
                  Admin
                </label>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-4 pt-3 border-t">
              <button className="text-blue-600 hover:text-blue-800">
                <Edit size={18} />
              </button>

              <button
                onClick={() => deleteHandler(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

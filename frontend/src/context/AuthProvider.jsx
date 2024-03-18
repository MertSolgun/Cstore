//AuthContext

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//veri alanini olusturduk..
export const AuthContext = createContext();

//veri saglayicinini olusturduk.///
export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [input, setInput] = useState();
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        login,
        user,
        setUser,
        input,
        setInput,
        open,
        setOpen,
        handleOpen,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

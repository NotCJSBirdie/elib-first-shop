import React, { useState } from "react";
import "./ProfileEdit.css";


import EditPL from "./EditPL";
import Prof from "./Prof";

const ProfileEdit = () => {
  
  const [editLogin, setEditLogin] = useState(false)
  const [editPassword, setEditPassword] = useState(false)

  function editL() {
    setEditLogin(prev => !prev)
  }

  function editP() {
    setEditPassword(prev => !prev)
  }

  return (
    <div>
    {
      editLogin ? <EditPL title='Изменение Логина' placeholder='логин' forgot={false} edit={editL} /> 
      : editPassword ? <EditPL edit={editP} /> 
      : <Prof editL={editL} editP={editP} />
    }
    </div>
  );
};

export default ProfileEdit;

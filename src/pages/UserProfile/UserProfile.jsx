import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsersDetailAction } from "../../store/action";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { otheruserdata } = useSelector((state) => state.login);
  useEffect(() => {
    if (id) {
      console.log(otheruserdata, id);
      dispatch(getUsersDetailAction(id));
    }
  }, [id]);
  return <div>UserProfile</div>;
};

export default UserProfile;

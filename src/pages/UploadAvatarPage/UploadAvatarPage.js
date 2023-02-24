// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { changeAvatar } from 'redux/auth/authOperations';

import css from './UploadAvatarPage.module.css';

//----------------------------------------------------------------------
export default function UploadAvatarPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event.target.image:", event.target.avatar); //!
    const avatar = event.target.avatar.files[0];
    console.log("avatar:", avatar); //!
    console.log("avatar.name:", avatar.name); //!

    const formData = new FormData();
    // data.append('avatar', avatar, avatar.name);
    formData.append('avatar', avatar);
    console.log("formData:", formData); //!

    dispatch(changeAvatar(formData));
    navigate("/home", { replace: true });
  };

  return (
    <div className={css.Сontainer}>
      <div className={css.UserProfileTitle}>User profile</div>
      <p className={css.Title}>Change avatar</p>
      <form onSubmit={handleSubmit}>
        <label className={css.FormLabel}>
          <input
            type="file"
            name="avatar"
          />
        </label>
        <button
          type="submit"
        >
          Отправить файл
        </button>
      </form>
    </div>
  );
}

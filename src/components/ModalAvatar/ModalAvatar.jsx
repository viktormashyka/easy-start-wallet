// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import { changeAvatar } from 'redux/auth/authOperations';

import {
  Backdrop,
  ModalWraper,
  ModalForm,
  ModalLabel,
  ModalInput,
  AvatarSpan,
  MadalButton,
  ButtonClose,
} from './ModalAvatar.styled';

import { selectUser } from '../../redux/auth/authSelectors';
const modalRoot = document.querySelector('#modal-root');
//----------------------------------------------------------------------
export function ModaldAvatarPage({ closeModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fileAvatar, setFileAvatar] = useState('Choose file');
  const [isChooseFile, setIsChooseFile] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log('event.target.image:', event.target.avatar); //!
    const avatar = event.target.avatar.files[0];
    // console.log('avatar:', avatar); //!
    // console.log('avatar.name:', avatar.name); //!

    const formData = new FormData();
    // data.append('avatar', avatar, avatar.name);
    formData.append('avatar', avatar);
    // console.log('formData:', formData); //!

    dispatch(changeAvatar(formData));
    navigate('/home', { replace: true });
  };

  const onClick = e => {
    const res = e.target.files[0]?.name ?? 'Choose file';
    // console.log('res', res);
    setFileAvatar(res);
    if (res !== 'Choose file') {
      return setIsChooseFile(true);
    }
    setIsChooseFile(false);
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWraper>
        <ButtonClose onClick={() => closeModal(false)}>&#10005;</ButtonClose>
        <p>Change avatar for {user.email}</p>
        <ModalForm onSubmit={handleSubmit}>
          <ModalLabel>
            <ModalInput type="file" name="avatar" onChange={onClick} />
            <AvatarSpan>{fileAvatar}</AvatarSpan>
          </ModalLabel>
          <MadalButton type="submit" isChoose={isChooseFile}>
            Send file
          </MadalButton>
        </ModalForm>
        {/* <NavLink to="/home">
          <span>Go to home page</span>
        </NavLink> */}
      </ModalWraper>
    </Backdrop>,
    modalRoot
  );
}

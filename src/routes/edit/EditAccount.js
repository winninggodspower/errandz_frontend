import React from 'react';
import './editAccount.css';
import plusIcon from './../../images/icons/plus-icon.svg';
import uploadImageIcon from './../../images/icons/upload-image-icon.svg';
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import BackNav from '../../components/BackNav/BackNav';
import { BASE_URL } from '../../globalVariable';
import { getToken } from '../../Utils/LoginUtils';
import { ThreeDots } from 'react-loader-spinner';
import { AlertContext } from '../../UserContext';

const defaultProfileImage =
  'https://errandzmedia.blob.core.windows.net/media/profile_images/default/profile_avatar.jpg';

function EditAccount() {
  let navigate = useNavigate();
  let { user, setUser } = useContext(UserContext);
  let { addAlert } = useContext(AlertContext);

  const [account, setAccount] = useState({
    first_name: '',
    last_name: '',
    account: { email: '', phone: '', state: '', city: '' },
  });
  const [profileImage, setProfileImage] = useState({ profile_image: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  let updateAccount = (newDetails) => {
    if (!newDetails) {
      return;
    }
    let updatedAccountDetails = {};

    for (const key in newDetails) {
      if (key in account) {
        if (key === 'account') {
          updatedAccountDetails['account'] = {};
          for (const accountKey in newDetails[key]) {
            if (accountKey in account[key]) {
              updatedAccountDetails[key][accountKey] =
                newDetails[key][accountKey];
            } else if (accountKey in profileImage) {
              setProfileImage({ [accountKey]: newDetails[key][accountKey] });
            }
          }
        } else {
          updatedAccountDetails[key] = newDetails[key];
        }
      }
    }

    setAccount(updatedAccountDetails);
  };

  const upload = (e) => {
    const image = e.target.files[0];
    setUploading(true);

    let formData = new FormData();

    formData.append('profile_image', image);

    let image_url = URL.createObjectURL(image);

    let account2 = { ...account };
    profileImage.profile_image = image_url;
    setAccount(account2);

    fetch(`${BASE_URL}/api/account/change_profile_image/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${getToken()}`,
      },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Invalid or currupt image');
        }
      })
      .then((image) => {
        setUploading(false);
        let updatedUserDetails = { ...user };
        updatedUserDetails.account.profile_image = image.profile_image;
        setUser(updatedUserDetails);
        addAlert('success', 'successfully updated profile picture');
      })
      .catch((error) => {
        setUploading(false);
        console.log(error);
        addAlert('danger', `${error}`);
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name in account.account) {
      let newAccount = { ...account };
      newAccount.account[name] = value;
      setAccount(newAccount);
    } else {
      setAccount({ ...account, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const path = '/api/account/';
    const url = BASE_URL + path;
    let accountToSubmit = { ...account };

    //remove email field if it's the same as account
    //because it'll return error
    if (accountToSubmit.account.email === user.account.email) {
      delete accountToSubmit.account.email;
    }

    console.log(accountToSubmit);
    await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${getToken()}`,
      },
      body: JSON.stringify(accountToSubmit),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setAccount(data);
            setError({});
          });
        } else {
          res.json().then((data) => {
            setError(data);
            console.log('error', data);
          });
        }
      })
      .catch((err) => {
        console.log('error: ', err);
      });

    setLoading(false);
  };

  useEffect(() => {
    if (!getToken()) {
      return navigate('/login');
    } else {
      updateAccount(user);
      // console.log(account);
    }
  }, [user]);

  return (
    <div className="h-100">
      <div className="h-100 container mx-auto">
        <form onSubmit={handleSubmit} className=" edit-form mx-auto mt-5">
          <div className="d-grid position-relative justify-content-center my-4 mb-5">
            <img
              id="account-profile-img"
              className="rounded-circle ratio-1x1 mx-auto"
              src={profileImage.profile_image || defaultProfileImage}
              alt="profile"
            />

            <div
              id="upload-image-icon-container"
              className="position-absolute bottom-0 start-50"
            >
              <label className="label w-100" htmlFor="upload-image">
                <img
                  id="upload-image-icon"
                  type="button"
                  src={uploadImageIcon}
                  alt="profile"
                />
              </label>

              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={upload}
              />
            </div>

            <div className="position-absolute d-flex justify-content-start align-self-center">
              <BackNav />
            </div>

            <div className="position-absolute start-50 translate-middle d-flex justify-content-start align-self-center">
              <ThreeDots
                height="90%"
                radius="9"
                color="#000000"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={uploading}
              />
            </div>
          </div>

          <div className="row row-cols-2 g-3 mx-auto mt-5">
            <div className="col mb-4 ">
              <label className="d-block mb-2">Surname</label>
              <input
                type="text"
                name="first_name"
                className="edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0"
                id="surname"
                value={account.first_name}
                onChange={handleChange}
              />
              {error && (
                <span className="text-danger">{error?.first_name || null}</span>
              )}
            </div>
            <div className="col mb-4 ">
              <label className="d-block mb-2">First Name</label>
              <input
                type="text"
                name="last_name"
                className="edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0"
                value={account.last_name}
                onChange={handleChange}
              />
              {error && (
                <span className="text-danger">{error?.last_name || null}</span>
              )}
            </div>
            <div className="col mb-4 ">
              <label className="d-block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0"
                value={account.account.email}
                onChange={handleChange}
              />
              {error && (
                <span className="text-danger">
                  {error?.account?.email || null}
                </span>
              )}
            </div>
            <div className="col mb-4 ">
              <label className="d-block mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0"
                value={account.account.phone}
                onChange={handleChange}
              />
              {error && (
                <span className="text-danger">
                  {error?.account?.phone || null}
                </span>
              )}
            </div>
            <div className="col mb-4 ">
              <label className="d-block mb-2">State</label>
              <input
                type="text"
                name="state"
                className="edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0"
                value={account.account.state}
                onChange={handleChange}
              />
              {error && (
                <span className="text-danger">
                  {error?.account?.state || null}
                </span>
              )}
            </div>
            <div className="col mb-4 ">
              <label className="d-block mb-2">City</label>
              <input
                type="text"
                name="city"
                className="edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0"
                value={account.account.city}
                onChange={handleChange}
              />
              {error && (
                <span className="text-danger">
                  {error?.account?.city || null}
                </span>
              )}
            </div>
          </div>

          <div className="col-12 mb-4">
            <div id="upload-id">
              <label className="d-block mb-2">Valid Id</label>
              <label className="label w-100" htmlFor="user-id-file">
                <div
                  id="id-box"
                  className="w-100 btn rounded-0 d-grid align-items-center justify-content-center"
                >
                  <img src={plusIcon} />
                </div>
              </label>

              <input type="file" id="user-id-file" />
            </div>
          </div>

          <div className="w-100 ">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-dark d-flex justify-content-center w-100 rounded-0"
            >
              {loading ? (
                <ThreeDots
                  height="90%"
                  radius="9"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                'submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccount;

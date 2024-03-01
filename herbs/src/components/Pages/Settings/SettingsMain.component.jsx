import React from "react";
import ProfileForm from "./ProfileForm.component";
import PasswordChangeForm from "./PasswordChangeForm.component";
import NotificationsForm from "./NotificationForm.component";
import DeleteAccountForm from "./DeleteAccountForm.component";
const SettingsMain = () => {
  return (
    <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
      <h1 className="h2 mb-4">Settings</h1>
      <ProfileForm />
      <PasswordChangeForm />
      <NotificationsForm />
      <DeleteAccountForm />
    </div>
  );
};

export default SettingsMain;

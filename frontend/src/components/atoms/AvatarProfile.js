import React from 'react';

const AvatarProfile = ({ src }) => {
  return (
    <img
      className="h-10 w-10 rounded-full border-2 border-red-950"
      src="/image/avatar.jpeg"
      alt=""
    />
  );
};

export default AvatarProfile;
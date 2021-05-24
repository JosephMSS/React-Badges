import React, { Fragment } from "react";
import md5 from "md5";
export default function Gravatar(props) {
  const { email, className } = props;
  const hash = md5(email);
  console.log(hash);
  return (
    <Fragment>
      <img
        className={className}
        src={`https://gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
    </Fragment>
  );
}

import React from "react";
export default function Success(props) {
let isSuccess = props.isSuccess;
  if (typeof props.isSuccess == 'undefined') isSuccess = false;
  return ( isSuccess &&
    <div className="modal--success">
      <div class="success--rounded">
        <svg
          width="64"
          height="48"
          viewBox="0 0 64 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2632 47.0018L1.74484 26.4835C0.512136 25.2508 0.512136 23.2521 1.74484 22.0192L6.20895 17.555C7.44166 16.3222 9.44047 16.3222 10.6732 17.555L24.4954 31.377L54.1009 1.77164C55.3336 0.53893 57.3324 0.53893 58.5651 1.77164L63.0292 6.23586C64.262 7.46857 64.262 9.46726 63.0292 10.7001L26.7275 47.002C25.4946 48.2347 23.4959 48.2347 22.2632 47.0018Z"
            fill="white"
          />
        </svg>
      </div>
      <p>{props.message}</p>
    </div>
  );
}

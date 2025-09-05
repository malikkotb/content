export default function InstaBold({strokeColor = 'black', className}) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.5816 23.0596C20.1603 23.0596 23.0616 20.1584 23.0616 16.5796C23.0616 13.0008 20.1603 10.0996 16.5816 10.0996C13.0028 10.0996 10.1016 13.0008 10.1016 16.5796C10.1016 20.1584 13.0028 23.0596 16.5816 23.0596Z"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 23.06V10.1C2 5.6265 5.6265 2 10.1 2H23.06C27.5335 2 31.16 5.6265 31.16 10.1V23.06C31.16 27.5335 27.5335 31.16 23.06 31.16H10.1C5.6265 31.16 2 27.5335 2 23.06Z"
        stroke={strokeColor}
        strokeWidth="3.5"
      />
      <path
        d="M25.4922 7.68725L25.5091 7.66797"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

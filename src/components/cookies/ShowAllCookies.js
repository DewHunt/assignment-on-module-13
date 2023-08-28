"use client";
export default function ShowAllCookies({ cookieData }) {
  return (
    <>
      {cookieData.length === 0 ? (
        <tr>
          <td colSpan="3" className="text-center">
            Cookies No Found
          </td>
        </tr>
      ) : (
        cookieData.map((cookie, index) => (
          <tr key={index}>
            <td>{cookie.name}</td>
            <td>{cookie.value}</td>
            <td>{cookie.path}</td>
          </tr>
        ))
      )}
    </>
  );
}

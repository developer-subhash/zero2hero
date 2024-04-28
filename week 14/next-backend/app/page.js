// server side component by default

import Welcome from "@subhash/Welcome";
import axios from "axios";

async function getUserDetails() {
  const url1 = "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details";
  const url2 = "http://localhost:3000/api/user"; // need to create api folder and subsequent folder corresponding to
  const response = await axios.get(
    url2
  );
  return response.data;
}

//async component supported in server component in nextjs
// just add file named as loading in app dir for showing while content being fetched
export default async function Home() {
  //fetching on the server, not on client side like in react
  const useDetails = await getUserDetails();

  return (
    <div>
      Next JS Backend app
      <br />
      {useDetails.email}
      <br />
      {useDetails.name}

      <Welcome />
    </div>
  );
}

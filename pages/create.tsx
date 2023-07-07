import {
  useContract,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";

const Create = () => {
  // Next JS Router hook to redirect to other pages
  const router = useRouter();

  // Connect to our marketplace contract via the useContract hook and pass the marketplace contract address
  const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "marketplace");
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  return <div></div>;
};

export default Create;

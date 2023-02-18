import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import Authenticate from "./index";
import useAuthContext from "hooks/useAuthContext";
import { useToast } from "@chakra-ui/react";
import useUserContext from "hooks/useUserContext";

function AuthCheck({ children }: any) {
  const router = useRouter();
  const toast = useToast();
  const { user: FbUser, loading } = useAuthContext();
  const { user: currentUser, accessToken } = useUserContext();
  console.log("accessToken", accessToken);

  // console.log(FbUser);
  // useEffect(() => {
  //   if (FbUser) {
  //     console.log("FbUser", FbUser);
  //   }
  // }, [FbUser]);

  useEffect(() => {
    if (FbUser) {
      return children;
    } else {
      return <Authenticate />;
    }
  }, [FbUser]);

  if (FbUser) {
    return children;
  } else if (!FbUser && !loading) {
    return <Authenticate />;
  } else {
    return <Loading />;
  }
}

export default AuthCheck;

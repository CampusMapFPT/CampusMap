import React, { Component, useEffect, useState } from "react";
import {
  Flex,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import useLocalStorage from "hooks/useLocalStorage";
import { signInWithGoogle, auth } from "../../firebase/authentication";
import { FcGoogle } from "react-icons/fc";
import Firebase from "../../firebase/firebase";
import firebase from "firebase/compat/app";
import useAuthContext from "hooks/useAuthContext";
import useUserContext from "hooks/useUserContext";
import logo from "../../public/assets/images/logo.png";

interface AuthenForm {
  phone: string;
  otp: string;
}

function Authenticate() {
  const router = useRouter();
  const toast = useToast();
  const { user: FbUser, loading } = useAuthContext();
  const { SetUser, SetAccessToken } = useUserContext();
  const [confirm, setConfirm] = useState<firebase.auth.ConfirmationResult>();

  // useEffect(() => {
  //   if (FbUser) {
  //     router.replace("/");
  //   }h
  // }, [FbUser]);

  const LoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          try {
            SetAccessToken(user.accessToken);
            toast({
              title: "Login successfully!",
              status: "success",
              position: "top-right",
              isClosable: true,
              duration: 1000,
            });

            router.push("/");
          } catch (error) {
            toast({
              title: "Error!",
              status: "error",
              position: "top-right",
              isClosable: true,
              duration: 1000,
            });
          }
        }
      })
      .catch((error) => {
        toast({
          title: "Login failed",
          status: "error",
          position: "top-right",
          isClosable: true,
          duration: 1000,
        });
      });
  };

  return (
    <>
      {FbUser ? (
        <></>
      ) : (
        <Flex
          flexDirection={"column"}
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"#3A88EC"}
        >
          <Image
            alt="logo"
            sx={{ width: "224px", height: "248px" }}
            src={logo.src}
          />
          <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
            <Stack align={"center"}>
              {/* <Heading fontSize={"1xl"}>Chào mừng bạn đến Campus-Map</Heading> */}
              <Flex flexDirection={"row"}>
                <Text fontSize={"xl"} color={"gray.600"}></Text>
              </Flex>
            </Stack>

            {/* <Flex sx={{ fontSize: "1em", justifyContent: "center" }}>
        Hoặc bạn có thể:
      </Flex> */}
            <Button
              bg={"gray.500"}
              color={"white"}
              _hover={{
                bg: "gray.400",
              }}
              onClick={LoginWithGoogle}
            >
              <Flex gap={2} sx={{ alignItems: "center" }}>
                <FcGoogle />
                <Text>Login with Google</Text>
              </Flex>
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
}

export default Authenticate;

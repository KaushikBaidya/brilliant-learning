"use client";
import React from "react";
import ErrorImage from "@/assets/errorpage.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./notfound.css";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="not-found-page">
      <Image
        src={ErrorImage}
        alt="404 - page not found"
        className="not-found-image"
      />
      <button className="go-home-button" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MindXLoading from "@/components/MindXLoading";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = (props: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      router.push("/mindx");
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <div
      className={`authLayout min-h-screen w-screen flex justify-center p-16`}
    >
      <div className="bannerLog flex-1 min-h-full"></div>
      <div className="contentAuth flex-[0.5]">
        <div className="login h-full rounded-[8px] bg-[white] p-[2rem] flex flex-col relative">
          <div className="flex flex-col">
            <h1 className="text-[3.8rem]">Chào mừng đến với</h1>
            <div className="logo absolute right-[1.2rem] top-[3rem]">
              <img src="/mindx.png" alt="" className="w-[8rem]" />
            </div>
            <span className="font-bold text-[var(--base)] text-[4rem] text-center">
              MindX Community
            </span>
          </div>
          <div className="form mt-[3.6rem] flex-1">
            {loading ? <MindXLoading centered /> : props.children}
          </div>
          <div className="copyright flex items-end items-center justify-between mt-auto ">
            <p className="flex items-center gap-2">
              <img src="/logo.png" alt="logo" className="w-[3rem]" />{" "}
              <span className="text-[12px] font-medium">
                MindX Technology School
              </span>
            </p>
            <p className="flex items-center text-[12px] font-medium">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;


"use client";


import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";
import homePic from "@/public/home-pic.svg";
import Container from "@/app/components/Container";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { MdEmail, MdPassword } from "react-icons/md";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import signIn from '@/firebase/auth/signIn'; // Fixing import
import Link from "next/link";
import AuthLayout from "../layout";

const Page = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const { result, error } = await signIn(email, password);

      if (error) {
        console.error('Error during user login:', error);
        toast.error('Invalid email/ password');
        return;
      }
      toast.success('Login successful');
      router.push("/");
    } catch (error) {
      console.error('An unexpected error occurred during login:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <AuthLayout>
    <section className="w-[100vw] h-[100vh] overflow-hidden fixed  body-bg">
      <Navbar />
      <Container>
        <div className="flex flex-row items-center mt-28 justify-center md:gap-10 lg:gap-[14rem]">
          <div className="home-pic relative w-[300px] lg:w-[400px] hidden md:flex ">
            <Image src={homePic} alt="homePic" priority={true} />
          </div>
          <div className="login-form md:w-[1/2]">
            <div className="text-white gap-5 flex flex-col">
              <h1 className="text-2xl leading-10 font-medium">
                Log in to your account
              </h1>
              <Input
                id="email"
                value={email}
                placeholder="john.smith@gmail.com"
                icon={<MdEmail />}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <Input
                id="password"
                type="password"
                value={password}
                placeholder="***********"
                icon={<MdPassword />}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex pb-5 items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <Button type="button" label="Submit" onClick={login} />
              <p className="text-sm font-light">
                New user?{" "}
                <Link href={'/signup'} className="underline text-blue-700">  
                  Create an account
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="ellipse hidden md:flex"></div>
    </section>
    </AuthLayout>
  );
};

export default Page;

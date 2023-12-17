"use client";


import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";
import homePic from "@/public/home-pic.svg";
import Container from "@/app/components/Container";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { MdEmail, MdPassword } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { useRouter } from "next/navigation"; // Fixing import
import toast from "react-hot-toast";
import signUp from "@/firebase/auth/signup";
import Link from "next/link";

const Page = () => {
  const [username, setUsername] = React.useState("");
  const [termsCkecked, setTermsChecked] = React.useState(false)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const isAnyFieldEmpty = !username || !email || !password || !termsCkecked


  const register = async () => {

    if (isAnyFieldEmpty) {
      toast.error('Please fill in all the required fields');
      return;
    }

  
    setIsLoading(true);
    try {
      const { result, error } = await signUp(email, password);
      if (result) {
        console.log(result);
        router.push('/login')
        toast.success('User created successfully');
      } else   if (password.length < 6) {
        toast.error('Password should be at least 6 characters ')
      } else if (isAnyFieldEmpty) {
        toast.error('Please fill in all the required fields');
       
      }  else  {
          ('Invalid credentials')
      }
    } catch (error) {

      console.error('Error during user registration:', error);
      toast.error('An unexpected error occurred');
    }
    setIsLoading(false);
  };

  return (
    <section className="w-[100vw] h-[100vh] overflow-hidden fixed  body-bg ">
      <Navbar />
      <Container>
        <div className="flex flex-row items-center mt-28 justify-center md:gap-10 lg:gap-[14rem]">
          <div className="home-pic relative w-[300px] lg:w-[400px] hidden md:flex ">
            <Image src={homePic} alt="homePic" priority={true} />
          </div>
          <div className="login-form flex items-center ">
            <div className="text-white gap-5 flex flex-col">
              <h1 className="text-2xl leading-10 font-medium">
                Create an account
              </h1>
              <Input
                id="name"
                value={username}
                placeholder="username"
                icon={<IoMdPerson />}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
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
                    onChange={(e) => setTermsChecked(true)}
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

              <Button type="button" label="Submit" onClick={register} />
              <p className="text-sm font-light">
                Already have an account?{" "}
                <Link href={'/login'} className="underline text-blue-700">
                  Login here
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="ellipse hidden md:flex"></div>
    </section>
  );
};

export default Page;

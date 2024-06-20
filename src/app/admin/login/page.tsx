"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store";
import { apiClient } from "@/lib";
import { ADMIN_API_ROUTES } from "@/utils/api-routes";

const Login = () => {
  const router = useRouter();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const response = await apiClient.post(ADMIN_API_ROUTES.LOGIN, {
      email,
      password,
    });
    if (response.data.userInfo) {
      setUserInfo(response.data.userInfo);
      router.push("/admin");
    }
  };

  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/home/home-bg.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl scale-x-100"></div>

      <Card className="w-[350px] scale-x-100">
        <CardHeader>
          <CardTitle>LOGO...</CardTitle>
          <CardDescription>TravelEase Admin Login</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="email"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleLogin} className="w-full capitalize" size="lg">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

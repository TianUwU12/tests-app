import { Button } from "antd";
import React, { useState } from "react";
import RegisterForm from "../Forms/RegisterForm";
import LoginForm from "../Forms/LoginForm";

export default function RegAuthSwitcher() {
  const [activeTab, setActiveTab] = useState("reg");

  return (
    <div>
      <div>{activeTab == "reg" ? <RegisterForm /> : <LoginForm />}</div>
      <Button onClick={() => setActiveTab("reg")}>registration</Button>
      <Button onClick={() => setActiveTab("auth")}>auth</Button>
    </div>
  );
}

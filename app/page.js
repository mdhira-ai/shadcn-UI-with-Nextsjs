'use client'

import ModeToggle from "./Home/page";
import { UserAuthForm } from "../components/ui/user-auth-form";
import * as React from "react";
import { Calendar } from "../components/ui/calendar";

const page = () => {

  const [date, setDate] = React.useState(new Date());
  return (
    <div
    >

     



      <div
        className="flex flex-col justify-center gap-4 items-center h-screen "
      >


        <div>
          <h1
            className="text-2xl font-bold"
          >
            Calendar
          </h1>


        </div>


        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        
              <div>
        
                <UserAuthForm />
              </div>

      </div>
    </div>
  );
}

export default page;
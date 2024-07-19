import { createContext, useContext, useEffect, useState } from "react";
import { supabaseClient } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";
import { getUserDataById } from "../api/getUserDataById";

type UserType = {
  name: string;
  surname: string;
  mail?: string;
  phonenumber?: string;
  role?: string;
}

type SessionContextProps = {
  session: Session | null;
  //TODO: dodaj typy
  userData: UserType | undefined
  //TODO: dodaj typy
  getUserData: (session: Session) => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined)

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  //TODO: dodac typy
  const [userData, setUserData] = useState<UserType | undefined>(undefined);

  const getUserData = async (session: Session) => {
    // TODO: dodaj typy
    const data: UserType = await getUserDataById(session)
    console.log(data)
    setUserData(data)
  }

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) {
        getUserData(session)
      }
    })

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return <SessionContext.Provider value={{ session, userData, getUserData }}>{children}</SessionContext.Provider>
};

export const useSessionContext = () => {
  const ctx = useContext(SessionContext)

  if (!ctx) {
    throw new Error("Missing SessionContext, it's not wrapped in with Provider")
  }
  return ctx
}

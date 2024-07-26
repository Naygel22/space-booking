import { createContext, useContext, useEffect, useState } from "react";
import { supabaseClient } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";
import { getUserDataByIdFromSession } from "../api/getUserDataByIdFromSession";

type UserType = {
  name: string;
  surname: string;
  mail?: string;
  phonenumber?: string;
  role?: string;
}

type SessionContextProps = {
  session: Session | null;
  userData: UserType | undefined;
  getUserData: (session: Session) => Promise<void>;
};

const SessionContext = createContext<SessionContextProps | undefined>(undefined)

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [userData, setUserData] = useState<UserType | undefined>(undefined);

  const getUserData = async (session: Session) => {
    // TODO: dodaj typy
    const data: any = await getUserDataByIdFromSession(session)

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

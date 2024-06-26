import { createContext, useContext, useEffect, useState } from "react";
import { supabaseClient } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";

type SessionContextProps = {
  session: Session | null;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined)

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  console.log('session', session)
  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return <SessionContext.Provider value={{ session }}>{children}</SessionContext.Provider>
};

export const useSessionContext = () => {
  const ctx = useContext(SessionContext)

  if (!ctx) {
    throw new Error("Missing SessionContext, it's not wrapped in with Provider")
  }
  return ctx
}

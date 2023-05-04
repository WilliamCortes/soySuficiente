import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import "@/styles/supabase.css";

const HomePage = () => {
  const session = useSession();
  console.log("🚀 ~ file: home.tsx:7 ~ HomePage ~ session:", session);
  const supabase = useSupabaseClient();
  console.log("🚀 ~ file: home.tsx:9 ~ HomePage ~ supabase:", supabase);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default HomePage;
